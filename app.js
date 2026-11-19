const STORAGE_KEY = "prueba_inicial_coby_v4";

const REGLAS_SUBPRUEBA = {
  "Comprensión Lectora": { puntos: 2, minimo: 30 },
  "Razonamiento Lógico": { puntos: 2, minimo: 30 },
  "Conocimientos Curriculares y Pedagógicos de la Especialidad": { puntos: 2.5, minimo: 60 }
};

let estado = {
  bloqueId: null,
  modo: "examen",
  subprueba: "TODAS",
  indiceActual: 0,
  respuestas: {},
  segundosRestantes: 0
};

let preguntasActivas = [];
let intervaloReloj = null;

const dom = {
  bloqueSelect: document.getElementById("bloque-select"),
  modoSelect: document.getElementById("modo-select"),
  subpruebaSelect: document.getElementById("subprueba-select"),
  minutosInput: document.getElementById("minutos-input"),
  bloqueInfo: document.getElementById("bloque-info"),
  btnIniciar: document.getElementById("btn-iniciar"),
  btnLimpiar: document.getElementById("btn-limpiar-progreso"),
  setupPanel: document.getElementById("setup-panel"),
  quizPanel: document.getElementById("quiz-panel"),
  resultsPanel: document.getElementById("results-panel"),
  timerBox: document.getElementById("timer-box"),
  timerDisplay: document.getElementById("timer-display"),
  badgeBloque: document.getElementById("badge-bloque"),
  badgeSubprueba: document.getElementById("badge-subprueba"),
  contadorPregunta: document.getElementById("contador-pregunta"),
  progressFill: document.getElementById("progress-fill"),
  contextoBox: document.getElementById("contexto-box"),
  lecturaTitulo: document.getElementById("lectura-titulo"),
  lecturaCuerpo: document.getElementById("lectura-cuerpo"),
  enunciadoTexto: document.getElementById("enunciado-texto"),
  alternativasLista: document.getElementById("alternativas-lista"),
  feedbackBox: document.getElementById("feedback-box"),
  btnAnterior: document.getElementById("btn-anterior"),
  btnSiguiente: document.getElementById("btn-siguiente"),
  btnFinalizar: document.getElementById("btn-finalizar"),
  mapaPreguntas: document.getElementById("mapa-preguntas"),
  resultadoSubtitulo: document.getElementById("resultado-subtitulo"),
  resumenPuntaje: document.getElementById("resumen-puntaje"),
  detalleRevision: document.getElementById("detalle-revision"),
  btnFalladas: document.getElementById("btn-revisar-falladas"),
  btnTodas: document.getElementById("btn-ver-todas"),
  btnInicio: document.getElementById("btn-volver-inicio")
};

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function cargarEstado() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      estado = { ...estado, ...JSON.parse(raw) };
    }
  } catch (_) {}
}

function obtenerCuadernillos() {
  if (Array.isArray(window.CUADERNILLOS) && window.CUADERNILLOS.length) {
    return window.CUADERNILLOS;
  }
  return Array.isArray(window.BLOQUES_EXAMEN) ? window.BLOQUES_EXAMEN : [];
}

function obtenerCuadernilloSeleccionado() {
  const lista = obtenerCuadernillos();
  return lista.find((b) => b.id === dom.bloqueSelect.value) || lista[0] || null;
}

function obtenerClaveOficial(cuadernillo, pregunta) {
  if (pregunta.correcta) return pregunta.correcta;
  if (cuadernillo && cuadernillo.claves && cuadernillo.claves[pregunta.numero]) {
    return cuadernillo.claves[pregunta.numero];
  }
  return null;
}

function poblarCuadernillos() {
  const lista = obtenerCuadernillos();
  dom.bloqueSelect.innerHTML = "";

  if (!lista.length) {
    dom.bloqueSelect.innerHTML = `<option value="">Sin cuadernillos cargados</option>`;
    dom.bloqueInfo.textContent = "Agrega archivos en la carpeta data/ para iniciar.";
    return;
  }

  lista.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.nombre} (${b.preguntas.length} preguntas cargadas)`;
    dom.bloqueSelect.appendChild(opt);
  });

  if (estado.bloqueId && lista.some((b) => b.id === estado.bloqueId)) {
    dom.bloqueSelect.value = estado.bloqueId;
  }

  actualizarResumenCuadernillo();
}

function actualizarResumenCuadernillo() {
  const cuad = obtenerCuadernilloSeleccionado();
  if (!cuad) return;

  const porSubprueba = {};
  cuad.preguntas.forEach((p) => {
    porSubprueba[p.subprueba] = (porSubprueba[p.subprueba] || 0) + 1;
  });

  const items = Object.entries(porSubprueba)
    .map(([sub, cant]) => `<li><strong>${sub}:</strong> ${cant} cargadas</li>`)
    .join("");

  dom.bloqueInfo.innerHTML = `
    <div><strong>${cuad.nombre}</strong> — ${cuad.fecha || ""}</div>
    <p style="margin-top:6px;">Preguntas activas en este cuadernillo: <strong>${cuad.preguntas.length}</strong></p>
    <ul style="margin:6px 0 0 18px;">${items || "<li>Aún no hay preguntas cargadas.</li>"}</ul>
  `;
}

function iniciarSimulacro() {
  const cuad = obtenerCuadernilloSeleccionado();
  if (!cuad) return;

  estado.bloqueId = cuad.id;
  estado.modo = dom.modoSelect.value;
  estado.subprueba = dom.subpruebaSelect.value;
  estado.indiceActual = 0;

  preguntasActivas =
    estado.subprueba === "TODAS"
      ? cuad.preguntas
      : cuad.preguntas.filter((p) => p.subprueba === estado.subprueba);

  if (!preguntasActivas.length) {
    alert("No hay preguntas cargadas para esa subprueba en este cuadernillo. Selecciona 'Todas las preguntas cargadas'.");
    return;
  }

  const mins = parseInt(dom.minutosInput.value, 10) || 0;
  estado.segundosRestantes = estado.modo === "examen" && mins > 0 ? mins * 60 : 0;

  guardarEstado();
  dom.setupPanel.classList.add("hidden");
  dom.resultsPanel.classList.add("hidden");
  dom.quizPanel.classList.remove("hidden");

  arrancarCronometro();
  renderizarPregunta();
  renderizarMapa();
}

function arrancarCronometro() {
  clearInterval(intervaloReloj);
  if (estado.modo === "examen" && estado.segundosRestantes > 0) {
    dom.timerBox.classList.remove("hidden");
    pintarCronometro();
    intervaloReloj = setInterval(() => {
      estado.segundosRestantes -= 1;
      pintarCronometro();
      guardarEstado();
      if (estado.segundosRestantes <= 0) {
        clearInterval(intervaloReloj);
        calificarSimulacro();
      }
    }, 1000);
  } else {
    dom.timerBox.classList.add("hidden");
  }
}

function pintarCronometro() {
  const seg = Math.max(0, estado.segundosRestantes);
  const min = String(Math.floor(seg / 60)).padStart(2, "0");
  const sec = String(seg % 60).padStart(2, "0");
  dom.timerDisplay.textContent = `${min}:${sec}`;
}

function renderizarPregunta() {
  const cuad = obtenerCuadernilloSeleccionado();
  const p = preguntasActivas[estado.indiceActual];
  const uid = `${cuad.id}__${p.numero}`;
  const marcada = estado.respuestas[uid] || null;
  const clave = obtenerClaveOficial(cuad, p);

  dom.badgeBloque.textContent = cuad.codigo || cuad.id;
  dom.badgeSubprueba.textContent = p.subprueba;
  dom.contadorPregunta.textContent = `Pregunta ${p.numero} (${estado.indiceActual + 1} de ${preguntasActivas.length})`;

  const avancePct = ((estado.indiceActual + 1) / preguntasActivas.length) * 100;
  dom.progressFill.style.width = `${avancePct}%`;

  const texto = p.textoLectura || p.contexto || "";
  if (texto) {
    dom.lecturaTitulo.textContent = p.tituloLectura || "Texto de lectura";
    dom.lecturaCuerpo.textContent = texto;
    dom.contextoBox.classList.remove("hidden");
  } else {
    dom.lecturaTitulo.textContent = "";
    dom.lecturaCuerpo.textContent = "";
    dom.contextoBox.classList.add("hidden");
  }

  dom.enunciadoTexto.textContent = `${p.numero}. ${p.enunciado}`;
  dom.alternativasLista.innerHTML = "";
  dom.feedbackBox.classList.add("hidden");

  ["A", "B", "C"].forEach((letra) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";

    if (marcada === letra) {
      btn.classList.add("selected");
    }

    if (estado.modo === "practica" && marcada && clave) {
      if (letra === clave) btn.classList.add("correct");
      else if (letra === marcada) btn.classList.add("incorrect");
    }

    btn.innerHTML = `<strong>${letra})</strong> <span>${p.alternativas[letra]}</span>`;
    btn.addEventListener("click", () => {
      estado.respuestas[uid] = letra;
      guardarEstado();
      renderizarPregunta();
      renderizarMapa();
    });

    dom.alternativasLista.appendChild(btn);
  });

  if (estado.modo === "practica" && marcada) {
    dom.feedbackBox.classList.remove("hidden");
    if (!clave) {
      dom.feedbackBox.className = "feedback-banner feedback-err";
      dom.feedbackBox.textContent = `Marcada (${marcada}). Clave oficial pendiente de confirmar.`;
    } else if (marcada === clave) {
      dom.feedbackBox.className = "feedback-banner feedback-ok";
      dom.feedbackBox.textContent = `¡Correcto! Clave oficial de ${cuad.codigo || cuad.id}: (${clave}).`;
    } else {
      dom.feedbackBox.className = "feedback-banner feedback-err";
      dom.feedbackBox.textContent = `Incorrecto. Marcaste (${marcada}) y la clave oficial es (${clave}).`;
    }
  }

  dom.btnAnterior.disabled = estado.indiceActual === 0;
  dom.btnSiguiente.disabled = estado.indiceActual === preguntasActivas.length - 1;
  actualizarActivoMapa();
}

function renderizarMapa() {
  const cuad = obtenerCuadernilloSeleccionado();
  dom.mapaPreguntas.innerHTML = "";

  preguntasActivas.forEach((p, idx) => {
    const uid = `${cuad.id}__${p.numero}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "map-btn";
    if (estado.respuestas[uid]) btn.classList.add("answered");
    if (idx === estado.indiceActual) btn.classList.add("active");
    btn.textContent = p.numero;
    btn.addEventListener("click", () => {
      estado.indiceActual = idx;
      guardarEstado();
      renderizarPregunta();
    });
    dom.mapaPreguntas.appendChild(btn);
  });
}

function actualizarActivoMapa() {
  dom.mapaPreguntas.querySelectorAll(".map-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === estado.indiceActual);
  });
}

function calificarSimulacro() {
  clearInterval(intervaloReloj);
  dom.timerBox.classList.add("hidden");

  const cuad = obtenerCuadernilloSeleccionado();
  let correctas = 0;
  let incorrectas = 0;
  let sinResponder = 0;
  let puntajeTotal = 0;
  const statsSubprueba = {};

  const evaluadas = preguntasActivas.map((p) => {
    const uid = `${cuad.id}__${p.numero}`;
    const marcada = estado.respuestas[uid] || null;
    const clave = obtenerClaveOficial(cuad, p);
    const regla = REGLAS_SUBPRUEBA[p.subprueba] || { puntos: p.puntos ?? 2, minimo: null };
    const pts = p.puntos ?? regla.puntos;

    if (!statsSubprueba[p.subprueba]) {
      statsSubprueba[p.subprueba] = { aciertos: 0, puntaje: 0, minimo: regla.minimo };
    }

    let resultado = "sin";
    if (!marcada) {
      sinResponder += 1;
    } else if (clave && marcada === clave) {
      correctas += 1;
      puntajeTotal += pts;
      statsSubprueba[p.subprueba].aciertos += 1;
      statsSubprueba[p.subprueba].puntaje += pts;
      resultado = "ok";
    } else {
      incorrectas += 1;
      resultado = "err";
    }

    return { p, marcada, clave, resultado };
  });

  const efectividad = preguntasActivas.length
    ? ((correctas / preguntasActivas.length) * 100).toFixed(1)
    : "0.0";

  dom.resultadoSubtitulo.textContent = `${cuad.codigo || cuad.id} · ${preguntasActivas.length} evaluadas`;

  const tarjetasSub = Object.entries(statsSubprueba)
    .map(([nombreSub, d]) => {
      const refMin = d.minimo ? ` (mín. ${d.minimo})` : "";
      return `
        <div class="stat-box">
          <div class="stat-num">${d.puntaje}${refMin}</div>
          <div class="stat-desc">${nombreSub} · ${d.aciertos} aciertos</div>
        </div>
      `;
    })
    .join("");

  dom.resumenPuntaje.innerHTML = `
    <div class="stat-box"><div class="stat-num">${correctas}/${preguntasActivas.length}</div><div class="stat-desc">Correctas</div></div>
    <div class="stat-box"><div class="stat-num">${incorrectas}</div><div class="stat-desc">Incorrectas</div></div>
    <div class="stat-box"><div class="stat-num">${sinResponder}</div><div class="stat-desc">Sin responder</div></div>
    <div class="stat-box"><div class="stat-num">${efectividad}%</div><div class="stat-desc">Efectividad</div></div>
    <div class="stat-box"><div class="stat-num">${puntajeTotal}</div><div class="stat-desc">Puntaje total</div></div>
    ${tarjetasSub}
  `;

  renderizarRevision(evaluadas, false);
  dom.btnFalladas.onclick = () => renderizarRevision(evaluadas, true);
  dom.btnTodas.onclick = () => renderizarRevision(evaluadas, false);

  dom.quizPanel.classList.add("hidden");
  dom.resultsPanel.classList.remove("hidden");
}

function renderizarRevision(evaluadas, soloFalladas) {
  const lista = soloFalladas ? evaluadas.filter((x) => x.resultado !== "ok") : evaluadas;
  dom.detalleRevision.innerHTML = lista.length
    ? ""
    : `<p style="margin-top:10px; color:var(--muted);">No hay preguntas falladas ni sin responder en este filtro.</p>`;

  lista.forEach(({ p, marcada, clave, resultado }) => {
    const icono = resultado === "ok" ? "✅" : resultado === "err" ? "❌" : "⚪";
    const claveTxt = clave ? `${clave}) ${p.alternativas[clave]}` : "Pendiente";
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div><strong>${icono} Pregunta ${p.numero}</strong> · <span style="color:var(--muted);">${p.subprueba}</span></div>
      <div style="margin:6px 0;">${p.enunciado}</div>
      <div>Tu respuesta: <strong>${marcada || "Sin marcar"}</strong> | Clave oficial: <strong>${claveTxt}</strong></div>
    `;
    dom.detalleRevision.appendChild(card);
  });
}

dom.bloqueSelect.addEventListener("change", actualizarResumenCuadernillo);
dom.btnIniciar.addEventListener("click", iniciarSimulacro);
dom.btnLimpiar.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  estado.respuestas = {};
  estado.indiceActual = 0;
  guardarEstado();
  alert("Progreso guardado eliminado.");
});
dom.btnAnterior.addEventListener("click", () => {
  if (estado.indiceActual > 0) {
    estado.indiceActual -= 1;
    guardarEstado();
    renderizarPregunta();
  }
});
dom.btnSiguiente.addEventListener("click", () => {
  if (estado.indiceActual < preguntasActivas.length - 1) {
    estado.indiceActual += 1;
    guardarEstado();
    renderizarPregunta();
  }
});
dom.btnFinalizar.addEventListener("click", calificarSimulacro);
dom.btnInicio.addEventListener("click", () => {
  dom.resultsPanel.classList.add("hidden");
  dom.setupPanel.classList.remove("hidden");
  actualizarResumenCuadernillo();
});

cargarEstado();
poblarCuadernillos();
