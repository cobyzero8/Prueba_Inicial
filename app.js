const STORAGE_KEY = "prueba_inicial_coby_v9";

const REGLAS_SUBPRUEBA = {
  "Comprensión Lectora": { puntos: 2, minimo: 30 },
  "Razonamiento Lógico": { puntos: 2, minimo: 30 },
  "Conocimientos Curriculares y Pedagógicos de la Especialidad": { puntos: 2.5, minimo: 60 }
};

let estado = {
  bloqueId: null,
  modo: "practica",
  subprueba: "TODAS",
  lectura: "TODAS",
  indiceActual: 0,
  respuestas: {},
  reintentos: {},
  segundosRestantes: 0,
  rachaActual: 0,
  mejorRacha: 0,
  temaNoche: false
};

let preguntasActivas = [];
let ultimaEvaluacion = [];
let intervaloReloj = null;

const dom = {
  btnTema: document.getElementById("btn-tema"),
  rachaChip: document.getElementById("racha-chip"),
  bloqueSelect: document.getElementById("bloque-select"),
  subpruebaSelect:
    document.getElementById("subprueba-select") ||
    document.getElementById("modulo-select"),
  lecturaSelect: document.getElementById("lectura-select"),
  modoSelect: document.getElementById("modo-select"),
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
  badgeRacha: document.getElementById("badge-racha"),
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
  resultadosTitulo: document.getElementById("resultados-titulo"),
  resultadoSubtitulo: document.getElementById("resultado-subtitulo"),
  resumenPuntaje: document.getElementById("resumen-puntaje"),
  btnMisErrores: document.getElementById("btn-mis-errores"),
  btnTodas: document.getElementById("btn-ver-todas"),
  btnInicio: document.getElementById("btn-volver-inicio"),
  erroresLecturaBox: document.getElementById("errores-lectura-box"),
  erroresLecturaTitulo: document.getElementById("errores-lectura-titulo"),
  erroresLecturaCuerpo: document.getElementById("errores-lectura-cuerpo"),
  detalleRevision: document.getElementById("detalle-revision")
};

function escaparHTML(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatearTextoExplicacionHTML(valor) {
  if (Array.isArray(valor)) {
    return valor.map((paso) => escaparHTML(paso)).join("<br>");
  }
  return escaparHTML(valor || "").replace(/\n/g, "<br>");
}

function textoPlano(str) {
  return String(str || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function palabrasANumeros(texto) {
  const mapa = {
    cero: 0, uno: 1, una: 1, un: 1, dos: 2, tres: 3, cuatro: 4,
    cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10,
    once: 11, doce: 12, trece: 13, catorce: 14, quince: 15,
    dieciseis: 16, dieciséis: 16, diecisiete: 17, dieciocho: 18,
    diecinueve: 19, veinte: 20, veinticuatro: 24, treinta: 30
  };
  return texto.replace(/\b([a-záéíóúü]+)\b/gi, (match) => {
    const k = match.toLowerCase();
    return Object.prototype.hasOwnProperty.call(mapa, k) ? String(mapa[k]) : match;
  });
}

function extraerNumeros(texto) {
  const normalizado = palabrasANumeros(texto);
  const matches = normalizado.match(/\d+(?:[.,]\d+)?/g) || [];
  return matches.map((n) => Number(n.replace(",", ".")));
}

function normalizarRutaImg(ruta) {
  const r = String(ruta || "").trim();
  if (!r) return "";
  if (
    r.startsWith("http://") ||
    r.startsWith("https://") ||
    r.startsWith("/Prueba_Inicial/")
  ) {
    return r;
  }
  if (r.startsWith("/")) {
    return `/Prueba_Inicial${r}`;
  }
  return `/Prueba_Inicial/${r.replace(/^\.\//, "")}`;
}

function limpiarEtiquetasInternas(htmlStr) {
  return String(htmlStr || "")
    .replace(/&lt;br&gt;/gi, "<br>")
    .replace(/<br\s*\/?>/gi, "<br>")
    .replace(/&lt;strong&gt;([\s\S]*?)&lt;\/strong&gt;/gi, "<strong>$1</strong>")
    .replace(
      /&lt;mark class=&quot;clave-palabra&quot;&gt;([\s\S]*?)&lt;\/mark&gt;/gi,
      '<mark class="clave-palabra">$1</mark>'
    );
}

function colorearDialogosHTML(htmlConBrs) {
  const coloresHablante = [
    "#1d4ed8", // Azul
    "#0f766e", // Verde azulado
    "#b45309", // Ámbar / canela
    "#7e22ce", // Morado
    "#be123c"  // Rosa / guinda
  ];
  const mapaColores = new Map();

  return String(htmlConBrs || "")
    .split("<br>")
    .map((linea) => {
      const match = linea.match(/^([^<>:]{1,25}):(\s*.*)$/);
      if (!match) return linea;

      const hablante = match[1].trim();
      const resto = match[2];

      if (/^(texto|párrafo|parrafo|nota|ejemplo|paso)\b/i.test(hablante)) {
        return linea;
      }

      const clave = hablante.toLowerCase();
      if (!mapaColores.has(clave)) {
        mapaColores.set(clave, coloresHablante[mapaColores.size % coloresHablante.length]);
      }
      const color = mapaColores.get(clave);

      return `<span style="color:${color}; font-weight:700;">${hablante}:</span>${resto}`;
    })
    .join("<br>");
}

function crearBloqueImagenHTML(pregunta, altTexto) {
  if (!pregunta || !pregunta.imagen) return "";
  const ruta = escaparHTML(normalizarRutaImg(pregunta.imagen));
  const alt = escaparHTML(
    altTexto || `Esquema de la pregunta ${pregunta.numero}`
  );
  return `
    <div class="question-image-wrap">
      <img src="${ruta}" alt="${alt}" loading="lazy" onerror="this.closest('.question-image-wrap').classList.add('hidden')">
    </div>
  `;
}

function formatearEnunciadoHTML(texto, pregunta = null) {
  let html = escaparHTML(texto);

  html = html.replace(
    /&lt;mark class=&quot;clave-palabra&quot;&gt;([\s\S]*?)&lt;\/mark&gt;/g,
    '<mark class="clave-palabra">$1</mark>'
  );

  html = html.replace(
    /&lt;div style=&quot;background:#e6e2d8; border-radius:10px; padding:12px 16px; margin:8px 0; color:#1f2421;&quot;&gt;([\s\S]*?)&lt;\/div&gt;/g,
    (_, interior) => {
      const limpioInterior = limpiarEtiquetasInternas(interior);
      return `<div style="background:#e6e2d8; border-radius:10px; padding:12px 16px; margin:8px 0; color:#1f2421;">${limpioInterior}</div>`;
    }
  );

  html = html.replace(
    /&lt;div style=&quot;([^&]*)&quot;&gt;&lt;img src=&quot;([^&]*)&quot; alt=&quot;([^&]*)&quot; style=&quot;([^&]*)&quot;&gt;&lt;\/div&gt;/g,
    (_, divStyle, src, alt, imgStyle) =>
      `<div style="${divStyle}"><img src="${normalizarRutaImg(src)}" alt="${alt}" style="${imgStyle}" loading="lazy"></div>`
  );

  html = html.replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");

  const imgHTML = pregunta ? crearBloqueImagenHTML(pregunta) : "";
  if (/\[IMG\]/.test(html)) {
    html = html.replace(/(?:<br>)*\[IMG\](?:<br>)*/g, imgHTML);
  } else if (imgHTML) {
    html += imgHTML;
  }

  html = colorearDialogosHTML(html);
  return html;
}

function formatearLecturaHTML(texto, pregunta = null) {
  const limpio = String(texto || "").trim();
  if (!limpio) return "";

  const bloques = limpio.split(/\n\s*\n/);
  return bloques
    .map((bloque) => {
      const trimBloque = bloque.trim();

      if (trimBloque === "[IMG]") {
        const ruta = pregunta?.imagenLectura || pregunta?.imagen;
        if (!ruta) return "";
        return `
          <div class="question-image-wrap">
            <img src="${escaparHTML(normalizarRutaImg(ruta))}" alt="Ilustración de la lectura" loading="lazy" onerror="this.closest('.question-image-wrap').classList.add('hidden')">
          </div>
        `;
      }

      if (/<div\b[^>]*>[\s\S]*?<img\b[^>]*>[\s\S]*?<\/div>/i.test(trimBloque)) {
        return trimBloque.replace(
          /src=["']([^"']+)["']/i,
          (_, src) => `src="${normalizarRutaImg(src)}"`
        );
      }

      const lineas = trimBloque
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      if (!lineas.length) return "";

      const esPoema =
        lineas.length >= 4 &&
        lineas.every((l) => l.length <= 75 && !/[.:]$/.test(l));

      if (esPoema) {
        return `<div class="reading-poem">${lineas
          .map((l) => escaparHTML(l))
          .join("<br>")}</div>`;
      }

      return `<p>${colorearDialogosHTML(
        lineas.map((l) => escaparHTML(l)).join("<br>")
      )}</p>`;
    })
    .join("");
}

function obtenerResolucionExterna(cuad, p) {
  const fuentes = [
    window.RESOLUCIONES_POR_CUADERNILLO,
    window.RESOLUCIONES
  ].filter((m) => m && typeof m === "object");

  if (!cuad || !p) return null;
  const keysCuad = [cuad.id, cuad.codigo].filter(Boolean);

  for (const mapaGlobal of fuentes) {
    for (const k of keysCuad) {
      const porCuad = mapaGlobal[k];
      if (porCuad && typeof porCuad === "object") {
        const entry = porCuad[p.numero] || porCuad[String(p.numero)];
        if (entry && typeof entry === "object") {
          return entry;
        }
      }
    }
  }
  return null;
}

function resolverMatematicoPorReglas(enunLimpio, clave, textoClave) {
  const lower = enunLimpio.toLowerCase();
  const nums = extraerNumeros(enunLimpio);

  if (
    (lower.includes("parte del día") || lower.includes("parte del dia")) &&
    lower.includes("horas")
  ) {
    const totalDia = 24;
    const horasUsadas = nums.filter((n) => n > 0 && n <= 24);
    if (horasUsadas.length >= 2) {
      const suma = horasUsadas.reduce((a, b) => a + b, 0);
      const restante = totalDia - suma;
      return {
        truco:
          "Cuando te piden qué 'parte del día' queda, usa el total del día (24 horas), suma las horas empleadas, réstalas a 24 y coloca el resultado sobre 24.",
        pasoAPaso: [
          "1) El día tiene 24 horas.",
          `2) Sumamos las horas empleadas: ${horasUsadas.join(" + ")} = ${suma} horas.`,
          `3) Restamos lo que queda del día: 24 - ${suma} = ${restante} horas.`,
          `4) Como fracción del día completo es ${restante}/24 -> clave (${clave}) ${textoClave}.`
        ]
      };
    }
  }

  if (
    lower.includes("combinaciones") ||
    (lower.includes("cada") &&
      (lower.includes("sabor") ||
        lower.includes("tipo") ||
        lower.includes("color") ||
        lower.includes("par")))
  ) {
    const matchClaveNum = String(textoClave || "").match(/\d+/);
    if (matchClaveNum && nums.length >= 2) {
      const objetivo = Number(matchClaveNum[0]);
      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] * nums[j] === objetivo) {
            return {
              truco:
                "En problemas de combinaciones (elegir 1 de un grupo y 1 de otro), multiplica la cantidad de opciones de cada grupo; no las sumes.",
              pasoAPaso: [
                `1) Identificamos los dos grupos de opciones: ${nums[i]} y ${nums[j]}.`,
                `2) Multiplicamos para formar todas las parejas posibles: ${nums[i]} × ${nums[j]} = ${objetivo} combinaciones.`,
                `3) Marca (${clave}) ${textoClave}.`
              ]
            };
          }
        }
      }
    }
  }

  return {
    truco:
      "Identifica qué magnitud te piden hallar al final, extrae los datos numéricos o condiciones del texto y haz la operación directa sin mezclar totales con partes.",
    pasoAPaso: [
      "1) Lee la pregunta final y anota los datos dados.",
      "2) Plantea la operación o relación correspondiente.",
      `3) La alternativa correcta es (${clave}) ${textoClave}.`
    ]
  };
}

function generarResolucionAutonoma(cuad, p, marcada, clave) {
  const ext = obtenerResolucionExterna(cuad, p) || {};
  const enun = textoPlano(p.enunciado);
  const lower = enun.toLowerCase();
  const sub = String(p.subprueba || "").toLowerCase();
  const textoClave = clave && p.alternativas?.[clave] ? p.alternativas[clave] : "";
  const textoMarcada =
    marcada && p.alternativas?.[marcada] ? p.alternativas[marcada] : "";
  const resObj = p.resolucion && typeof p.resolucion === "object" ? p.resolucion : {};

  let truco = "";
  let pasoAPaso = "";

  if (sub.includes("lectora")) {
    if (
      lower.includes("explícita") ||
      lower.includes("explicita") ||
      lower.includes("literal")
    ) {
      truco =
        "Información explícita: busca el dato o hecho que aparece tal cual en el texto. Si no está dicho directamente o exige deducir, descártalo para este tipo de pregunta.";
      pasoAPaso = clave
        ? `1) Lee el dato exacto que pide la pregunta ${p.numero}. 2) Ubícalo directamente en el texto sin suponer nada extra. 3) La opción (${clave}) "${textoClave}" es la que recoge un hecho explícito.`
        : "1) Ubica el dato literal en el texto. 2) Elige la opción que lo refleje sin agregar suposiciones.";
    } else if (
      lower.includes("infiere") ||
      lower.includes("inferir") ||
      lower.includes("deduce") ||
      lower.includes("concluye")
    ) {
      truco =
        "Inferencia: une dos o más pistas reales del texto para obtener una conclusión lógica; descarta lo que es solo un dato literal suelto o una idea que el texto no respalda.";
      pasoAPaso = clave
        ? `1) Reúne las pistas del texto vinculadas a la pregunta ${p.numero}. 2) Comprueba qué conclusión se desprende lógicamente de ellas. 3) Marca (${clave}) "${textoClave}".`
        : "1) Identifica las pistas del texto. 2) Selecciona la deducción lógica respaldada por esas pistas.";
    } else if (
      lower.includes("propósito") ||
      lower.includes("intención") ||
      lower.includes("para qué") ||
      lower.includes("opina") ||
      lower.includes("postura")
    ) {
      truco =
        "Intención o postura: fíjate en qué busca lograr el personaje/autor o qué valoración expresa sobre el hecho, separando el objetivo del simple resumen de acciones.";
      pasoAPaso = clave
        ? `1) Observa el rol o intención del hablante/personaje en la pregunta ${p.numero}. 2) Descarta las opciones que solo repiten un hecho sin explicar el fin o postura. 3) Elige (${clave}) "${textoClave}".`
        : "1) Identifica la intención o postura del personaje/autor. 2) Elige la alternativa que la exprese con claridad.";
    } else {
      truco =
        "Comprensión lectora: contrasta cada alternativa con el sentido global y las pistas del texto; elimina las opciones que exageran, cambian el sujeto o contradicen el relato.";
      pasoAPaso = clave
        ? `1) Precisa qué pide exactamente la pregunta ${p.numero}. 2) Elimina las alternativas que no se sostienen en el texto. 3) Quédate con (${clave}) "${textoClave}".`
        : "1) Lee con atención la consigna. 2) Descarta opciones que contradigan o distorsionen el texto.";
    }
  } else if (sub.includes("lógico") || sub.includes("logico")) {
    const mat = resolverMatematicoPorReglas(enun, clave, textoClave);
    truco = mat.truco;
    pasoAPaso = mat.pasoAPaso;
  } else {
    if (
      lower.includes("retroaliment") ||
      lower.includes("error") ||
      lower.includes("dificultad")
    ) {
      truco =
        "Frente al error del estudiante: evita darle la respuesta hecha o señalarle solo 'está mal'; prioriza preguntas o acciones que lo ayuden a notar por sí mismo dónde está la contradicción o el paso clave.";
    } else if (
      lower.includes("propósito") ||
      lower.includes("actividad") ||
      lower.includes("pertinente") ||
      lower.includes("pedagógic")
    ) {
      truco =
        "Pertinencia pedagógica: verifica que la acción o pregunta esté alineada con lo que se busca que el niño aprenda o reflexione, y que fomente su participación activa.";
    } else {
      truco =
        "Especialidad pedagógica: prioriza la intervención que promueva la exploración, el razonamiento y la autonomía del niño, evitando que el docente resuelva por él o imponga una respuesta mecánica.";
    }

    pasoAPaso = clave
      ? `1) Identifica el propósito formativo de la pregunta ${p.numero}. 2) Compara cómo interviene el docente en cada opción y qué hace el niño. 3) La alternativa (${clave}) "${textoClave}" es la más pertinente.`
      : "1) Reconoce el propósito pedagógico de la situación. 2) Elige la opción que impulse el pensamiento autónomo del niño.";
  }

  const fuenteFallo = ext.porqueFallo || resObj.porqueFallo || p.trampas || null;
  let trampaMarcada = "";

  if (marcada && marcada !== clave) {
    if (fuenteFallo && typeof fuenteFallo === "object" && fuenteFallo[marcada]) {
      trampaMarcada = fuenteFallo[marcada];
    } else if (typeof fuenteFallo === "string" && fuenteFallo.trim()) {
      trampaMarcada = fuenteFallo;
    } else {
      trampaMarcada = `Marcaste (${marcada}) "${textoMarcada}". Suele ser un distractor porque atiende solo a un aspecto parcial, aplica una lógica distinta a la requerida o no responde con precisión a lo consultado.`;
    }
  } else if (!marcada) {
    if (typeof fuenteFallo === "string" && fuenteFallo.trim()) {
      trampaMarcada = `Dejaste esta pregunta sin marcar. Ojo con el error frecuente: ${fuenteFallo}`;
    } else {
      trampaMarcada =
        "Dejaste esta pregunta sin marcar. Revisa el truco y el paso a paso para resolverla y prueba tu elección en los botones de arriba.";
    }
  }

  return {
    truco: ext.truco || resObj.truco || p.truco || truco,
    pasoAPaso: ext.pasoAPaso || resObj.pasoAPaso || p.explicacion || pasoAPaso,
    trampaMarcada
  };
}

function construirResolucionTodoEnUnoHTML(cuad, p, marcada, clave) {
  const guia = generarResolucionAutonoma(cuad, p, marcada, clave);

  return `
    <div style="margin-top:10px; padding:12px 14px; border-radius:10px; background:rgba(120,130,140,0.12); border-left:4px solid #d97706; line-height:1.45;">
      <div><strong>⚡ Truco:</strong> ${formatearTextoExplicacionHTML(guia.truco)}</div>
      <div style="margin-top:6px;"><strong>🧠 Paso a paso:</strong><br>${formatearTextoExplicacionHTML(guia.pasoAPaso)}</div>
      <div style="margin-top:6px;"><strong>⚠️ Por qué fallaste:</strong> ${formatearTextoExplicacionHTML(guia.trampaMarcada)}</div>
    </div>
  `;
}

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function cargarEstado() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      estado = { ...estado, ...JSON.parse(raw) };
      if (!estado.reintentos) estado.reintentos = {};
    }
  } catch (_) {}
}

function aplicarTema() {
  document.body.classList.toggle("theme-noche", Boolean(estado.temaNoche));
  dom.btnTema.textContent = estado.temaNoche ? "☀️ Modo Cálido" : "🌙 Modo Noche";
}

function actualizarIndicadorRacha() {
  dom.rachaChip.textContent = `Racha actual: ${estado.rachaActual} · Récord: ${estado.mejorRacha}`;
  dom.badgeRacha.textContent = `🔥 Racha: ${estado.rachaActual}`;
}

function actualizarVisibilidadFiltroLectura() {
  const selectSub =
    dom.subpruebaSelect ||
    document.getElementById("subprueba-select") ||
    document.getElementById("modulo-select");
  const selectLec = dom.lecturaSelect || document.getElementById("lectura-select");
  if (!selectSub || !selectLec) return;

  const valor = String(selectSub.value || "").trim().toUpperCase();
  const textoSeleccionado = String(
    selectSub.options[selectSub.selectedIndex]?.textContent || ""
  )
    .trim()
    .toUpperCase();

  const esComprension =
    valor === "COMPRENSIÓN LECTORA" ||
    valor === "COMPRENSION LECTORA" ||
    textoSeleccionado.includes("COMPRENSIÓN LECTORA") ||
    textoSeleccionado.includes("COMPRENSION LECTORA");

  const campoLectura = selectLec.closest(".field") || selectLec.parentElement;
  if (campoLectura) {
    campoLectura.style.display = esComprension ? "" : "none";
    campoLectura.classList.toggle("hidden", !esComprension);
  }

  if (!esComprension) {
    selectLec.value = "TODAS";
    estado.lectura = "TODAS";
  }
}

function obtenerCuadernillos() {
  return Array.isArray(window.CUADERNILLOS) ? window.CUADERNILLOS : [];
}

function obtenerCuadernilloSeleccionado() {
  const lista = obtenerCuadernillos();
  const porId = lista.find(
    (b) => b.id === estado.bloqueId || b.id === dom.bloqueSelect.value
  );
  return porId || lista[0] || null;
}

function obtenerClaveOficial(cuadernillo, pregunta) {
  if (pregunta && pregunta.correcta) return pregunta.correcta;
  if (cuadernillo && cuadernillo.claves && pregunta) {
    return (
      cuadernillo.claves[pregunta.numero] ||
      cuadernillo.claves[String(pregunta.numero)] ||
      null
    );
  }
  return null;
}

function actualizarOpcionesLectura() {
  const cuad = obtenerCuadernilloSeleccionado();
  if (!cuad || !dom.lecturaSelect) return;

  const mapaLecturas = new Map();
  cuad.preguntas.forEach((p) => {
    if (p.subprueba === "Comprensión Lectora" && p.textoClave) {
      if (!mapaLecturas.has(p.textoClave)) {
        mapaLecturas.set(p.textoClave, p.tituloLectura || p.textoClave);
      }
    }
  });

  const seleccionPrevia = estado.lectura || dom.lecturaSelect.value || "TODAS";
  dom.lecturaSelect.innerHTML = `<option value="TODAS">Todas las lecturas cargadas</option>`;

  mapaLecturas.forEach((titulo, clave) => {
    const opt = document.createElement("option");
    opt.value = clave;
    opt.textContent = titulo;
    dom.lecturaSelect.appendChild(opt);
  });

  if (seleccionPrevia && mapaLecturas.has(seleccionPrevia)) {
    dom.lecturaSelect.value = seleccionPrevia;
    estado.lectura = seleccionPrevia;
  } else {
    dom.lecturaSelect.value = "TODAS";
    estado.lectura = "TODAS";
  }
}

function poblarCuadernillos() {
  const lista = obtenerCuadernillos();
  dom.bloqueSelect.innerHTML = "";

  lista.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = b.etiqueta || b.nombre;
    dom.bloqueSelect.appendChild(opt);
  });

  if (estado.bloqueId && lista.some((b) => b.id === estado.bloqueId)) {
    dom.bloqueSelect.value = estado.bloqueId;
  }

  dom.modoSelect.value = estado.modo || "practica";
  if (dom.subpruebaSelect) {
    dom.subpruebaSelect.value = estado.subprueba || "TODAS";
  }

  actualizarOpcionesLectura();
  actualizarVisibilidadFiltroLectura();
  actualizarResumenCuadernillo();
  actualizarIndicadorRacha();
}

function actualizarResumenCuadernillo() {
  const cuad = obtenerCuadernilloSeleccionado();
  if (!cuad) return;

  const porSubprueba = {};
  const lecturasCargadas = new Set();

  cuad.preguntas.forEach((p) => {
    porSubprueba[p.subprueba] = (porSubprueba[p.subprueba] || 0) + 1;
    if (p.textoClave) lecturasCargadas.add(p.textoClave);
  });

  const itemsSub = Object.entries(porSubprueba)
    .map(([sub, cant]) => `<li><strong>${sub}:</strong> ${cant} cargadas</li>`)
    .join("");

  const listaTextos = lecturasCargadas.size
    ? Array.from(lecturasCargadas).join(", ")
    : "Aún sin lecturas cargadas";

  dom.bloqueInfo.innerHTML = `
    <div><strong>${cuad.nombre}</strong> — ${cuad.fecha || ""}</div>
    <p style="margin-top:6px;">Preguntas cargadas: <strong>${cuad.preguntas.length}</strong> · Lecturas listas: <strong>${listaTextos}</strong></p>
    <ul style="margin:6px 0 0 18px;">${itemsSub || "<li>Sin preguntas aún.</li>"}</ul>
  `;
}

function iniciarSimulacro() {
  const cuad = obtenerCuadernilloSeleccionado();
  if (!cuad) return;

  actualizarVisibilidadFiltroLectura();

  estado.bloqueId = cuad.id;
  estado.modo = dom.modoSelect.value;
  estado.subprueba = dom.subpruebaSelect ? dom.subpruebaSelect.value : "TODAS";
  estado.lectura = dom.lecturaSelect ? dom.lecturaSelect.value : "TODAS";
  estado.indiceActual = 0;

  preguntasActivas = cuad.preguntas.filter((p) => {
    const pasaSub = estado.subprueba === "TODAS" || p.subprueba === estado.subprueba;
    const pasaLec =
      estado.subprueba !== "Comprensión Lectora" ||
      estado.lectura === "TODAS" ||
      p.textoClave === estado.lectura;
    return pasaSub && pasaLec;
  });

  if (!preguntasActivas.length) {
    alert(
      "No hay preguntas cargadas para ese filtro en este cuadernillo. Cambia el filtro de lectura o subprueba."
    );
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

function registrarRacha(esCorrecta) {
  if (esCorrecta) {
    estado.rachaActual += 1;
    if (estado.rachaActual > estado.mejorRacha) {
      estado.mejorRacha = estado.rachaActual;
    }
  } else {
    estado.rachaActual = 0;
  }
  actualizarIndicadorRacha();
}

function renderizarPregunta() {
  const cuad = obtenerCuadernilloSeleccionado();
  const p = preguntasActivas[estado.indiceActual];
  if (!cuad || !p) return;

  const uid = `${cuad.id}__${p.numero}`;
  const marcada = estado.respuestas[uid] || null;
  const clave = obtenerClaveOficial(cuad, p);

  dom.badgeBloque.textContent = cuad.etiqueta || cuad.codigo || cuad.id;
  dom.badgeSubprueba.textContent = p.subprueba;
  dom.contadorPregunta.textContent = `Pregunta ${p.numero} (${estado.indiceActual + 1} de ${preguntasActivas.length})`;

  const avancePct = ((estado.indiceActual + 1) / preguntasActivas.length) * 100;
  dom.progressFill.style.width = `${avancePct}%`;

  const texto = p.textoLectura || "";
  if (texto) {
    dom.lecturaTitulo.textContent = `📖 ${p.tituloLectura || "Texto de lectura"}`;
    dom.lecturaCuerpo.innerHTML = formatearLecturaHTML(texto, p);
    dom.contextoBox.classList.remove("hidden");
  } else {
    dom.lecturaTitulo.textContent = "";
    dom.lecturaCuerpo.innerHTML = "";
    dom.contextoBox.classList.add("hidden");
  }

  dom.enunciadoTexto.innerHTML = `${p.numero}. ${formatearEnunciadoHTML(p.enunciado, p)}`;
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

    btn.innerHTML = `<strong>${letra})</strong> <span>${escaparHTML(p.alternativas[letra])}</span>`;
    btn.addEventListener("click", () => {
      const primeraVez = !estado.respuestas[uid];
      estado.respuestas[uid] = letra;
      if (primeraVez && clave) {
        registrarRacha(letra === clave);
      }
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
      dom.feedbackBox.textContent = `¡Excelente! Respuesta correcta: (${clave}).`;
    } else {
      dom.feedbackBox.className = "feedback-banner feedback-err";
      dom.feedbackBox.textContent = `Revisa este punto: marcaste (${marcada}) y la respuesta correcta es (${clave}).`;
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
  const basePreguntas = preguntasActivas.length
    ? preguntasActivas
    : cuad
    ? cuad.preguntas
    : [];
  if (!cuad || !basePreguntas.length) return;

  let correctas = 0;
  let incorrectas = 0;
  let sinResponder = 0;
  let puntajeTotal = 0;
  const statsSubprueba = {};

  ultimaEvaluacion = basePreguntas.map((p) => {
    const uid = `${cuad.id}__${p.numero}`;
    const marcada = estado.respuestas[uid] || null;
    const clave = obtenerClaveOficial(cuad, p);
    const regla = REGLAS_SUBPRUEBA[p.subprueba] || {
      puntos: p.puntos ?? 2,
      minimo: null
    };
    const pts = p.puntos ?? regla.puntos;

    if (!statsSubprueba[p.subprueba]) {
      statsSubprueba[p.subprueba] = {
        aciertos: 0,
        puntaje: 0,
        minimo: regla.minimo
      };
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

  const totalFalladas = incorrectas + sinResponder;
  if (dom.btnMisErrores) {
    dom.btnMisErrores.textContent = `Mis errores (${totalFalladas})`;
  }

  const efectividad = basePreguntas.length
    ? ((correctas / basePreguntas.length) * 100).toFixed(1)
    : "0.0";

  dom.resultadosTitulo.textContent = "Balance de tu Sesión";
  dom.resultadoSubtitulo.textContent = `${
    cuad.etiqueta || cuad.codigo || cuad.id
  } · ${basePreguntas.length} evaluadas`;

  const tarjetasSub = Object.entries(statsSubprueba)
    .map(([nombreSub, d]) => {
      const refMin = d.minimo ? ` · Meta mín. ${d.minimo}` : "";
      return `
        <div class="stat-box">
          <div class="stat-num">${d.puntaje} pts</div>
          <div class="stat-desc">${nombreSub} (${d.aciertos} aciertos${refMin})</div>
        </div>
      `;
    })
    .join("");

  dom.resumenPuntaje.innerHTML = `
    <div class="stat-box"><div class="stat-num">${correctas}/${basePreguntas.length}</div><div class="stat-desc">Correctas</div></div>
    <div class="stat-box"><div class="stat-num">${incorrectas}</div><div class="stat-desc">Incorrectas</div></div>
    <div class="stat-box"><div class="stat-num">${sinResponder}</div><div class="stat-desc">Sin responder</div></div>
    <div class="stat-box"><div class="stat-num">${efectividad}%</div><div class="stat-desc">Efectividad</div></div>
    <div class="stat-box"><div class="stat-num">${puntajeTotal}</div><div class="stat-desc">Puntaje sesión</div></div>
    ${tarjetasSub}
  `;

  renderizarRevision(ultimaEvaluacion, false);

  dom.quizPanel.classList.add("hidden");
  dom.setupPanel.classList.add("hidden");
  dom.resultsPanel.classList.remove("hidden");
}

function mostrarLecturaDeErrores(falladas) {
  const primeraConTexto = falladas.find((x) => x.p && x.p.textoLectura);
  if (primeraConTexto) {
    dom.erroresLecturaTitulo.textContent = `📖 ${
      primeraConTexto.p.tituloLectura || "Texto de lectura"
    } (texto de apoyo para tus errores)`;
    dom.erroresLecturaCuerpo.innerHTML = formatearLecturaHTML(
      primeraConTexto.p.textoLectura,
      primeraConTexto.p
    );
    dom.erroresLecturaBox.classList.remove("hidden");
  } else {
    dom.erroresLecturaBox.classList.add("hidden");
  }
}

function renderizarRevision(evaluadas, modoMisErrores) {
  const cuad = obtenerCuadernilloSeleccionado();
  const lista = modoMisErrores
    ? evaluadas.filter((x) => x.resultado !== "ok")
    : evaluadas;

  if (modoMisErrores) {
    dom.resultadosTitulo.textContent = `Mis errores (${lista.length} por reforzar)`;
    mostrarLecturaDeErrores(lista);
  } else {
    dom.resultadosTitulo.textContent = "Balance de tu Sesión";
    dom.erroresLecturaBox.classList.add("hidden");
  }

  dom.detalleRevision.innerHTML = lista.length
    ? ""
    : `<p style="margin-top:10px; color:var(--muted);">${
        modoMisErrores
          ? "¡Excelente! En este cuadernillo no tuviste errores ni preguntas sin responder."
          : "No hay preguntas para mostrar en este filtro."
      }</p>`;

  lista.forEach(({ p, marcada, clave, resultado }) => {
    const uid = `${cuad.id}__${p.numero}`;
    const intentoNuevo = estado.reintentos[uid] || null;
    const esError = resultado === "err";
    const esSin = resultado === "sin";
    const icono = resultado === "ok" ? "✅" : esError ? "❌" : "⚪";
    const estadoClase = resultado === "ok" ? "is-ok" : "is-err";

    const textoMarca = marcada
      ? `${marcada}) ${p.alternativas[marcada] || ""}`
      : "Sin marcar";
    const claseMarca = esError ? "marca-caja err" : "marca-caja";

    const claveTxt = clave
      ? `${clave}) ${p.alternativas[clave]}`
      : "Pendiente de confirmar";

    const card = document.createElement("div");
    card.className = `review-card ${estadoClase}`;

    let bloqueReintentoHTML = "";
    if (modoMisErrores && clave) {
      const botonesHTML = ["A", "B", "C"]
        .map((letra) => {
          let extra = "";
          if (intentoNuevo) {
            if (letra === clave) extra = "picked-ok";
            else if (letra === intentoNuevo) extra = "picked-err";
          }
          return `<button type="button" class="retry-opt-btn ${extra}" data-uid="${uid}" data-letra="${letra}"><strong>${letra})</strong> ${escaparHTML(p.alternativas[letra])}</button>`;
        })
        .join("");

      let estadoReintentoMsg = "";
      if (intentoNuevo) {
        estadoReintentoMsg =
          intentoNuevo === clave
            ? `<div class="feedback-banner feedback-ok">¡Muy bien! Marcaste (${intentoNuevo}) y es la respuesta correcta.</div>`
            : `<div class="feedback-banner feedback-err">Aún no: elegiste (${intentoNuevo}). Revisa el truco y el paso a paso abajo.</div>`;
      }

      bloqueReintentoHTML = `
        <div class="retry-options">${botonesHTML}</div>
        ${estadoReintentoMsg}
      `;
    }

    const bloqueTodoEnUno =
      modoMisErrores || esError || esSin
        ? construirResolucionTodoEnUnoHTML(cuad, p, intentoNuevo || marcada, clave)
        : "";

    card.innerHTML = `
      <div class="review-top">
        <strong>${icono} Pregunta ${p.numero} · <span style="color:var(--muted);">${escaparHTML(p.subprueba)}</span></strong>
        <span class="badge badge-slate">${
          esSin ? "Sin responder" : esError ? "Error" : "Acierto"
        }</span>
      </div>
      <div class="review-q">${formatearEnunciadoHTML(p.enunciado, p)}</div>
      ${bloqueReintentoHTML}
      <div class="review-meta">
        <div class="${claseMarca}">Tu respuesta anterior: <strong>${escaparHTML(textoMarca)}</strong></div>
        <div class="clave-caja">✓ Respuesta correcta: <strong>${escaparHTML(claveTxt)}</strong></div>
      </div>
      ${bloqueTodoEnUno}
    `;

    card.querySelectorAll(".retry-opt-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const picked = btn.getAttribute("data-letra");
        estado.reintentos[uid] = picked;
        if (picked === clave) {
          registrarRacha(true);
        } else {
          registrarRacha(false);
        }
        guardarEstado();
        renderizarRevision(evaluadas, true);
      });
    });

    dom.detalleRevision.appendChild(card);
  });
}

function darOtroExamenDesdeCero() {
  clearInterval(intervaloReloj);
  dom.timerBox.classList.add("hidden");

  const temaGuardado = Boolean(estado.temaNoche);
  localStorage.removeItem(STORAGE_KEY);

  estado = {
    bloqueId: dom.bloqueSelect ? dom.bloqueSelect.value : null,
    modo: dom.modoSelect ? dom.modoSelect.value : "practica",
    subprueba: dom.subpruebaSelect ? dom.subpruebaSelect.value : "TODAS",
    lectura: "TODAS",
    indiceActual: 0,
    respuestas: {},
    reintentos: {},
    segundosRestantes: 0,
    rachaActual: 0,
    mejorRacha: 0,
    temaNoche: temaGuardado
  };

  preguntasActivas = [];
  ultimaEvaluacion = [];

  guardarEstado();
  actualizarIndicadorRacha();

  dom.resultsPanel.classList.add("hidden");
  dom.quizPanel.classList.add("hidden");
  dom.setupPanel.classList.remove("hidden");
  actualizarOpcionesLectura();
  actualizarVisibilidadFiltroLectura();
  actualizarResumenCuadernillo();
}

dom.btnTema.addEventListener("click", () => {
  estado.temaNoche = !estado.temaNoche;
  aplicarTema();
  guardarEstado();
});
dom.bloqueSelect.addEventListener("change", () => {
  estado.bloqueId = dom.bloqueSelect.value;
  estado.lectura = "TODAS";
  estado.indiceActual = 0;
  actualizarOpcionesLectura();
  guardarEstado();
  actualizarResumenCuadernillo();
});
if (dom.subpruebaSelect) {
  dom.subpruebaSelect.addEventListener("change", () => {
    estado.subprueba = dom.subpruebaSelect.value;
    actualizarVisibilidadFiltroLectura();
    guardarEstado();
  });
}
if (dom.lecturaSelect) {
  dom.lecturaSelect.addEventListener("change", () => {
    estado.lectura = dom.lecturaSelect.value;
    guardarEstado();
  });
}
dom.btnIniciar.addEventListener("click", iniciarSimulacro);
dom.btnLimpiar.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  estado.respuestas = {};
  estado.reintentos = {};
  estado.indiceActual = 0;
  estado.lectura = "TODAS";
  estado.rachaActual = 0;
  estado.mejorRacha = 0;
  guardarEstado();
  actualizarOpcionesLectura();
  actualizarIndicadorRacha();
  alert("Progreso reiniciado.");
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
dom.btnMisErrores.addEventListener("click", () =>
  renderizarRevision(ultimaEvaluacion, true)
);
dom.btnTodas.addEventListener("click", () =>
  renderizarRevision(ultimaEvaluacion, false)
);
if (dom.btnInicio) {
  dom.btnInicio.textContent = "Dar otro examen (desde cero)";
  dom.btnInicio.addEventListener("click", darOtroExamenDesdeCero);
}

cargarEstado();
aplicarTema();
poblarCuadernillos();
