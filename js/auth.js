const SB_URL = (typeof CONFIG !== "undefined" && CONFIG.SUPABASE_URL)
  ? CONFIG.SUPABASE_URL
  : "https://hicjmlcdnrcjriuqhppb.supabase.co";

const SB_ANON_KEY = (typeof CONFIG !== "undefined" && CONFIG.SUPABASE_ANON_KEY)
  ? CONFIG.SUPABASE_ANON_KEY
  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpY2ptbGNkbnJjanJpdXFocHBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5NDYxOTMsImV4cCI6MjA5ODUyMjE5M30.GIJbvJXKv-QkKx13xrImrUCf-kbRyOapW4QNA83qYb8";

if (!window.supabaseClient && typeof supabase !== "undefined") {
  window.supabaseClient = supabase.createClient(SB_URL, SB_ANON_KEY, {
    auth: {
      storage: window.sessionStorage,
      autoRefreshToken: true,
      persistSession: true
    }
  });
}

async function crearUsuarioAuthSinCerrarAdmin(email, password) {
  const clienteTemporal = supabase.createClient(SB_URL, SB_ANON_KEY, {
    auth: {
      storage: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {}
      },
      autoRefreshToken: false,
      persistSession: false
    }
  });

  const { data, error } = await clienteTemporal.auth.signUp({ email, password });
  if (error) throw error;
  if (!data?.user?.id) {
    throw new Error("No se obtuvo el ID del usuario (verifica si Supabase exige confirmar correo).");
  }
  return data.user.id;
}

async function verificarVigenciaDocente(userId) {
  const { data: perfil, error } = await window.supabaseClient
    .from("perfiles")
    .select("nombre, rol, fecha_inicio, fecha_fin, activo")
    .eq("id", userId)
    .single();

  if (error || !perfil) {
    return { valido: false, mensaje: "No se encontró el perfil del usuario en la base de datos." };
  }

  const rolNorm = String(perfil.rol || "docente").toLowerCase();
  if (rolNorm === "admin" || rolNorm === "administrador") {
    return { valido: true, rol: rolNorm, nombre: perfil.nombre || "" };
  }

  if (perfil.activo === false) {
    return { valido: false, mensaje: "Tu cuenta docente está desactivada." };
  }

  const ahora = new Date();
  if (perfil.fecha_inicio && ahora < new Date(perfil.fecha_inicio)) {
    return {
      valido: false,
      mensaje: `Tu acceso inicia el ${new Date(perfil.fecha_inicio).toLocaleDateString()}.`
    };
  }

  if (perfil.fecha_fin && ahora > new Date(perfil.fecha_fin)) {
    return {
      valido: false,
      mensaje: `Tu periodo de acceso venció el ${new Date(perfil.fecha_fin).toLocaleDateString()}.`
    };
  }

  return { valido: true, rol: rolNorm, nombre: perfil.nombre || "" };
}

async function cerrarSesionDocente() {
  try {
    if (window.supabaseClient) {
      await window.supabaseClient.auth.signOut();
    }
  } catch (_) {}
  sessionStorage.clear();
  window.location.replace("login.html");
}

document.addEventListener("DOMContentLoaded", async () => {
  if (!window.supabaseClient) return;

  const ruta = window.location.pathname.toLowerCase();
  const esLogin = ruta.endsWith("login.html");
  const esRegistro = ruta.endsWith("registro_docentes.html");

  if (esLogin || esRegistro) return;

  const { data: { session }, error } = await window.supabaseClient.auth.getSession();
  if (!session || error) {
    window.location.replace("login.html");
    return;
  }

  const check = await verificarVigenciaDocente(session.user.id);
  if (!check.valido) {
    await cerrarSesionDocente();
  }
});
