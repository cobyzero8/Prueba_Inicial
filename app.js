function generarResolucionAutonoma(cuad, p, marcada, clave) {
  const enun = textoPlano(p.enunciado);
  const lower = enun.toLowerCase();
  const sub = String(p.subprueba || "").toLowerCase();
  const textoClave = clave && p.alternativas?.[clave] ? p.alternativas[clave] : "";
  const textoMarcada =
    marcada && p.alternativas?.[marcada] ? p.alternativas[marcada] : "";

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

  let trampaMarcada = "";
  if (marcada && marcada !== clave) {
    if (p.trampas && p.trampas[marcada]) {
      trampaMarcada = p.trampas[marcada];
    } else {
      trampaMarcada = `Marcaste (${marcada}) "${textoMarcada}". Suele ser un distractor porque atiende solo a un aspecto parcial, aplica una lógica distinta a la requerida o no responde con precisión a lo consultado.`;
    }
  } else if (!marcada) {
    trampaMarcada =
      "Dejaste esta pregunta sin marcar. Revisa el truco y el paso a paso para resolverla y prueba tu elección en los botones de arriba.";
  }

  return {
    truco: p.truco || truco,
    pasoAPaso: p.explicacion || pasoAPaso,
    trampaMarcada
  };
}
