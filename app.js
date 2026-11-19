const STORAGE_KEY = "simulacro_docente_inicial_v1";

let estado = {
  bloqueId: null,
  modo: "examen",
  subprueba: "TODAS",
  indiceActual: 0,
  respuestas: {}, // { preguntaUid: "A" | "B" | "C" }
  segundosRestantes: 0
};

let preguntasActivas = [];
let intervaloTimer = null;

const el = {
  bloqueSelect: document.getElementById("bloque-select"),
  modoSelect: document.getElementById("modo-select"),
  subpruebaSelect: document.getElementById("subprueba-select"),
  minutosInput: document.getElementById("minutos-input"),
  bloqueInfo: document.getElementById("bloque-info"),
  btnIniciar: document.getElementById("btn-iniciar"),
  btnLimpiarProgreso: document.getElementById("btn-limpiar-progreso"),
  setupPanel: document.getElementById("setup-panel"),
  quizPanel: document.getElementById("quiz-panel"),
  resultsPanel: document.getElementById("results-panel"),
  timerBox: document.getElementById("timer-box"),
  timerDisplay: document.getElementById("timer-display"),
  badgeBloque: document.getElementById("badge-bloque"),
  badgeSubprueba: document.getElementById("badge-subprueba"),
  contadorPregunta: document.getElementById("contador-pregunta"),
  contextoBox: document.getElementById("contexto-box"),
  enunciadoTexto: document.getElementById("enunciado-texto"),
  alternativasLista: document.getElementById("alternativas-lista"),
  feedbackBox: document.getElementById("feedback-box"),
  btnAnterior: document.getElementById("btn-anterior"),
  btnSiguiente: document.getElementById("btn-siguiente"),
  btnFinalizar: document.getElementById("btn-finalizar"),
  mapaPreguntas: document.getElementById("mapa-preguntas"),
  resumenPuntaje: document.getElementById("resumen-puntaje"),
  detalleRevision: document.getElementById("detalle-revision"),
  btnRevisarFalladas: document.getElementById("btn-revisar-falladas"),
  btnVerTodas: document.getElementById("btn-ver-todas"),
  btnVolverInicio: document.getElementById("btn-volver-inicio")
};

function guardarProgreso() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function cargarProgreso() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    estado = { ...estado, ...parsed };
  } catch (_) {}
}

function poblarSelectBloques() {
  el.bloqueSelect.innerHTML = "";
  BLOQUES_EXAMEN.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.nombre} (${b.preguntas.length} preguntas cargadas)`;
    el.bloqueSelect.appendChild(opt);
  });
  if (estado.bloqueId && BLOQUES_EXAMEN.some((b) => b.id === estado.bloqueId)) {
    el.bloqueSelect.value = estado.bloqueId;
  }
  actualizarInfoBloque();
}

function actualizarInfoBloque() {
  const bloque = BLOQUES_EXAMEN.find((b) => b.id === el.bloqueSelect.value);
  if (!bloque) return;
  el.bloqueInfo.innerHTML = `
    <strong>${bloque.nombre}</strong> — Fecha: ${bloque.fecha || "No especificada"}<br/>
    Preguntas cargadas en este bloque: <strong>${bloque.preguntas.length}</strong> | Claves vinculadas únicamente a este bloque.
  `;
}

function obtenerPreguntasFiltradas(bloque) {
  if (estado.subprueba === "TODAS") return bloque.preguntas;
  return bloque.preguntas.filter((p) => p.subprueba === estado.subprueba);
}

function iniciarEvaluacion() {
  const bloque = BLOQUES_EXAMEN.find((b) => b.id === el.bloqueSelect.value);
  estado.bloqueId = bloque.id;
  estado.modo = el.modoSelect.value;
  estado.subprueba = el.subpruebaSelect.value;
  estado.indiceActual = 0;

  preguntasActivas = obtenerPreguntasFiltradas(bloque);
  if (preguntasActivas.length === 0) {
    alert("No hay preguntas cargadas para esa subprueba en este bloque todavía. Selecciona 'Todas las cargadas en el bloque'.");
    return;
  }

  const mins = parseInt(el.minutosInput.value, 10) || 0;
  estado.segundosRestantes = estado.modo === "examen" && mins > 0 ? mins * 60 : 0;

  guardarProgreso();
  el.setupPanel.classList.add("hidden");
  el.resultsPanel.classList.add("hidden");
  el.quizPanel.classList.remove("hidden");

  iniciarTimerSiCorresponde();
  renderPregunta();
  renderMapa();
}

function iniciarTimerSiCorresponde() {
  clearInterval(intervaloTimer);
  if (estado.modo === "examen" && estado.segundosRestantes > 0) {
    el.timerBox.classList.remove("hidden");
    actualizarTextoTimer();
    intervaloTimer = setInterval(() => {
      estado.segundosRestantes -= 1;
      actualizarTextoTimer();
      guardarProgreso();
      if (estado.segundosRestantes <= 0) {
        clearInterval(intervaloTimer);
        finalizarYCalificar();
      }
    }, 1000);
  } else {
    el.timerBox.classList.add("hidden");
  }
}

function actualizarTextoTimer() {
  const seg = Math.max(0, estado.segundosRestantes);
  const m = String(Math.floor(seg / 60)).padStart(2, "0");
  const s = String(seg % 60).padStart(2, "0");
  el.timerDisplay.textContent = `${m}:${s}`;
}

function renderPregunta() {
  const bloque = BLOQUES_EXAMEN.find((b) => b.id === estado.bloqueId);
  const p = preguntasActivas[estado.indiceActual];
  const uid = `${bloque.id}__${p.numero}`;
  const marcada = estado.respuestas[uid] || null;

  el.badgeBloque.textContent = bloque.codigo || bloque.id;
  el.badgeSubprueba.textContent = p.subprueba;
  el.contadorPregunta.textContent = `Pregunta ${p.numero} (${estado.indiceActual + 1} de ${preguntasActivas.length})`;

  if (p.contexto) {
    el.contextoBox.textContent = p.contexto;
    el.contextoBox.classList.remove("hidden");
  } else {
    el.contextoBox.classList.add("hidden");
  }

  el.enunciadoTexto.textContent = `${p.numero}. ${p.enunciado}`;
  el.alternativasLista.innerHTML = "";
  el.feedbackBox.classList.add("hidden");

  ["A", "B", "C"].forEach((letra) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "alt-btn";
    if (marcada === letra) btn.classList.add("selected");

    if (estado.modo === "practica" && marcada) {
      if (letra === p.correcta) btn.classList.add("correct");
      else if (letra === marcada && marcada !== p.correcta) btn.classList.add("incorrect");
    }

    btn.innerHTML = `<strong>${letra})</strong> <span>${p.alternativas[letra]}</span>`;
    btn.addEventListener("click", () => seleccionarAlternativa(uid, p, letra));
    el.alternativasLista.appendChild(btn);
  });

  if (estado.modo === "practica" && marcada) {
    el.feedbackBox.classList.remove("hidden");
    if (marcada === p.correcta) {
      el.feedbackBox.className = "feedback-box feedback-ok";
      el.feedbackBox.textContent = `¡Correcto! La clave de este bloque es (${p.correcta}).`;
    } else {
      el.feedbackBox.className = "feedback-box feedback-err";
      el.feedbackBox.textContent = `Incorrecto. Marcaste (${marcada}), pero la clave oficial de este bloque es (${p.correcta}).`;
    }
  }

  el.btnAnterior.disabled = estado.indiceActual === 0;
  el.btnSiguiente.disabled = estado.indiceActual === preguntasActivas.length - 1;
  resaltarMapa();
}

function seleccionarAlternativa(uid, pregunta, letra) {
  estado.respuestas[uid] = letra;
  guardarProgreso();
  renderPregunta();
  renderMapa();
}

function renderMapa() {
  const bloque = BLOQUES_EXAMEN.find((b) => b.id === estado.bloqueId);
  el.mapaPreguntas.innerHTML = "";
  preguntasActivas.forEach((p, idx) => {
    const uid = `${bloque.id}__${p.numero}`;
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "num-pill";
    if (estado.respuestas[uid]) pill.classList.add("answered");
    if (idx === estado.indiceActual) pill.classList.add("active");
    pill.textContent = p.numero;
    pill.addEventListener("click", () => {
      estado.indiceActual = idx;
      guardarProgreso();
      renderPregunta();
    });
    el.mapaPreguntas.appendChild(pill);
  });
}

function resaltarMapa() {
  const pills = el.mapaPreguntas.querySelectorAll(".num-pill");
  pills.forEach((pill, i) => {
    pill.classList.toggle("active", i === estado.indiceActual);
  });
}

function finalizarYCalificar() {
  clearInterval(intervaloTimer);
  el.timerBox.classList.add("hidden");

  const bloque = BLOQUES_EXAMEN.find((b) => b.id === estado.bloqueId);
  let correctas = 0;
  let incorrectas = 0;
  let sinResponder = 0;
  let puntajeTotal = 0;

  const evaluadas = preguntasActivas.map((p) => {
    const uid = `${bloque.id}__${p.numero}`;
    const marcada = estado.respuestas[uid] || null;
    const puntos = p.puntos ?? 2;
    let estadoResp = "sin";
    if (!marcada) {
      sinResponder += 1;
    } else if (marcada === p.correcta) {
      correctas += 1;
      puntajeTotal += puntos;
      estadoResp = "ok";
    } else {
      incorrectas += 1;
      estadoResp = "err";
    }
    return { p, marcada, estadoResp, puntos };
  });

  const porcentaje = preguntasActivas.length > 0
    ? ((correctas / preguntasActivas.length) * 100).toFixed(1)
    : "0.0";

  el.resumenPuntaje.innerHTML = `
    <div class="stat-card"><div class="stat-value">${correctas}/${preguntasActivas.length}</div><div>Aciertos</div></div>
    <div class="stat-card"><div class="stat-value">${incorrectas}</div><div>Incorrectas</div></div>
    <div class="stat-card"><div class="stat-value">${sinResponder}</div><div>Sin marcar</div></div>
    <div class="stat-card"><div class="stat-value">${porcentaje}%</div><div>Efectividad</div></div>
    <div class="stat-card"><div class="stat-value">${puntajeTotal}</div><div>Puntaje obtenido</div></div>
  `;

  renderDetalleRevision(evaluadas, false);

  el.btnRevisarFalladas.onclick = () => renderDetalleRevision(evaluadas, true);
  el.btnVerTodas.onclick = () => renderDetalleRevision(evaluadas, false);

  el.quizPanel.classList.add("hidden");
  el.resultsPanel.classList.remove("hidden");
}

function renderDetalleRevision(evaluadas, soloFalladas) {
  const lista = soloFalladas
    ? evaluadas.filter((item) => item.estadoResp !== "ok")
    : evaluadas;

  el.detalleRevision.innerHTML = lista.length === 0
    ? "<p style='margin-top:12px;'>No hay preguntas falladas ni sin responder en esta selección.</p>"
    : "";

  lista.forEach(({ p, marcada, estadoResp }) => {
    const div = document.createElement("div");
    div.className = "detalle-item";
    const icono = estadoResp === "ok" ? "✅" : estadoResp === "err" ? "❌" : "⚪";
    div.innerHTML = `
      <div><strong>${icono} Pregunta ${p.numero}</strong> (${p.subprueba})</div>
      <div style="margin:6px 0;">${p.enunciado}</div>
      <div>Tu respuesta: <strong>${marcada || "Sin marcar"}</strong> | Clave oficial (${estado.bloqueId}): <strong>${p.correcta}</strong></div>
      <div style="font-size:0.9rem; color:#334155; margin-top:4px;">Clave: ${p.alternativas[p.correcta]}</div>
    `;
    el.detalleRevision.appendChild(div);
  });
}

el.bloqueSelect.addEventListener("change", actualizarInfoBloque);
el.btnIniciar.addEventListener("click", iniciarEvaluacion);
el.btnLimpiarProgreso.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  estado.respuestas = {};
  alert("Progreso borrado.");
});
el.btnAnterior.addEventListener("click", () => {
  if (estado.indiceActual > 0) {
    estado.indiceActual -= 1;
    guardarProgreso();
    renderPregunta();
  }
});
el.btnSiguiente.addEventListener("click", () => {
  if (estado.indiceActual < preguntasActivas.length - 1) {
    estado.indiceActual += 1;
    guardarProgreso();
    renderPregunta();
  }
});
el.btnFinalizar.addEventListener("click", finalizarYCalificar);
el.btnVolverInicio.addEventListener("click", () => {
  el.resultsPanel.classList.add("hidden");
  el.setupPanel.classList.remove("hidden");
});

cargarProgreso();
poblarSelectBloques();
