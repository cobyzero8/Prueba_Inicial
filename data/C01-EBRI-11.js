window.CUADERNILLOS = window.CUADERNILLOS || [];

const TEXTO_1_C01 = `Resumen del relato "La tejedora" (adaptado de Marina Colasanti): Una joven teje en su telar elementos que cobran vida o influyen en su entorno (como el clima, los alimentos y la compañía). Crea a un esposo, quien al descubrir el poder del telar exige cada vez más riquezas y un palacio, aislando el telar en lo alto de una torre. Ante la tristeza y la pérdida de libertad, la tejedora desteje de noche lo construido y recupera su tranquilidad.`;

const TEXTO_2_C01 = `Resumen biográfico de Marie-Olympe de Gouges (1748–1793): Escritora y activista de la Ilustración y la Revolución francesa que defendió los derechos de las mujeres y de las personas esclavizadas. Tras un matrimonio impuesto en su juventud, se trasladó a París e inició su carrera teatral en 1774; en 1785 su obra Zamore y Mirza enfrentó tensiones vinculadas a la trata de esclavos y amenazas de prisión en la Bastilla, impulsando su activismo político. En 1791 redactó la Declaración de los Derechos de la Mujer y de la Ciudadana, y en noviembre de 1793 fue ejecutada durante el conflicto político con los montañeses.`;

const TEXTO_3_C01 = `Síntesis del artículo sobre educación y mercado (adaptado de Hugo Ñopo): Contrasta el servicio educativo con un servicio comercial típico como un restaurante, señalando diferencias en la medición de la calidad (especialmente habilidades socioemocionales), el horizonte temporal para ver resultados, el rol activo de estudiantes, familias y pares, la baja frecuencia de elección escolar y los retos de equidad.`;

const TEXTO_4_C01 = `Síntesis del reportaje sobre la industria azucarera y la ciencia nutricional (basado en publicaciones de JAMA Internal Medicine y The New York Times): Analiza cómo, desde mediados del siglo XX (1964–1967) con figuras como John Hickson y la Sugar Research Foundation hasta informes recientes, intereses comerciales influyeron en investigaciones y narrativas sobre el azúcar, las grasas y la salud.`;

const TEXTO_5_C01 = `Síntesis del análisis sobre escolarización y aprendizaje (basado en el Informe sobre el desarrollo mundial 2018 del Banco Mundial y El País): Distingue entre asistir a la escuela (cobertura) y lograr aprendizajes efectivos, ilustrando brechas en distintos países, el impacto de la desigualdad y medidas como medir resultados, priorizar la calidad y fortalecer la educación inicial.`;

window.CUADERNILLOS.push({
  id: "C01-EBRI-11",
  codigo: "C01-EBRI-11",
  etiqueta: "INICIAL 11-2018",
  nombre: "Cuadernillo C01-EBRI-11 — EBR Nivel Inicial",
  fecha: "Octubre 2018",
  claves: {
    1: "C", 2: "B", 3: "A", 4: "C", 5: "B",
    6: "A", 7: "C", 8: "C", 9: "B", 10: "C",
    11: "A", 12: "C", 13: "B", 14: "B", 15: "C",
    16: "B", 17: "C", 18: "A", 19: "C", 20: "B",
    21: "B", 22: "A", 23: "B", 24: "A", 25: "C",
    26: "A", 27: "B", 28: "C", 29: "A", 30: "B",
    31: "A", 32: "B", 33: "A", 34: "B", 35: "C",
    36: "C", 37: "C", 38: "B", 39: "B", 40: "C",
    41: "A", 42: "B", 43: "A", 44: "C", 45: "A",
    46: "C", 47: "A", 48: "A", 49: "C", 50: "B",
    51: "C", 52: "A", 53: "C", 54: "B", 55: "B",
    56: "C", 57: "C", 58: "C", 59: "A", 60: "C",
    61: "C", 62: "A", 63: "C", 64: "B", 65: "A",
    66: "A", 67: "C", 68: "A", 69: "B", 70: "A",
    71: "C", 72: "C", 73: "A", 74: "B", 75: "C",
    76: "B", 77: "B", 78: "A", 79: "B", 80: "A",
    81: "C", 82: "C", 83: "C", 84: "C", 85: "A",
    86: "C", 87: "B", 88: "B", 89: "B", 90: "A"
  },
  preguntas: [
    {
      numero: 1,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 1",
      tituloLectura: "Texto 1 — La tejedora",
      textoLectura: TEXTO_1_C01,
      enunciado: "En el texto, ¿cuál de los siguientes rasgos caracteriza al esposo de la tejedora?",
      alternativas: { A: "Es alegre.", B: "Es paciente.", C: "Es codicioso." }
    },
    {
      numero: 2,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 1",
      tituloLectura: "Texto 1 — La tejedora",
      textoLectura: TEXTO_1_C01,
      enunciado: "¿Cuál de las siguientes alternativas presenta una secuencia de acciones que se ajusta cronológicamente al contenido del texto?",
      alternativas: {
        A: "El esposo de la tejedora pidió un palacio - La tejedora destejió los jardines y criados que pidió su esposo - El esposo de la tejedora le dijo a ella que faltaban hilar los establos.",
        B: "Un joven llegó a la puerta de la tejedora - La tejedora usó hilos verdes para las puertas de su nueva casa - La tejedora subió descalza la larga escalera de la torre.",
        C: "La tejedora tomó su lanzadera al revés - El esposo de la tejedora despertó por la dureza de la cama - La tejedora sonrió mirando el jardín detrás de la ventana."
      }
    },
    {
      numero: 3,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 1",
      tituloLectura: "Texto 1 — La tejedora",
      textoLectura: TEXTO_1_C01,
      enunciado: "¿Cuál de las siguientes afirmaciones se puede <mark class=\"clave-palabra\">concluir</mark> del texto?",
      alternativas: {
        A: "La mujer podía tejer todos los alimentos que quería comer.",
        B: "La mujer decidió provocar la nieve mientras tejía el palacio.",
        C: "La mujer buscó evitar que se sepa sobre el poder de su tapiz."
      }
    },
    {
      numero: 4,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 1",
      tituloLectura: "Texto 1 — La tejedora",
      textoLectura: TEXTO_1_C01,
      enunciado: "¿Cuál es la razón <mark class=\"clave-palabra\">principal</mark> por la que a la tejedora 'le pareció que su tristeza era más grande que el palacio'?",
      alternativas: {
        A: "Porque su esposo se olvidó de la idea de tener hijos junto a ella.",
        B: "Porque su esposo la había aislado en la torre más alta del palacio.",
        C: "Porque su vida se redujo a tejer cada uno de los pedidos de su esposo."
      }
    },
    {
      numero: 5,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 1",
      tituloLectura: "Texto 1 — La tejedora",
      textoLectura: TEXTO_1_C01,
      enunciado: "¿Cuál de las siguientes frases expresa la enseñanza <mark class=\"clave-palabra\">principal</mark> del cuento?",
      alternativas: {
        A: "'En la boca del mentiroso, lo cierto se hace más que dudoso'.",
        B: "'No todo lo que se ama se desea, ni todo lo que se desea se ama'.",
        C: "'Cuando dos personas desean lo mismo, se convierten en enemigos'."
      }
    },
    {
      numero: 6,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 2",
      tituloLectura: "Texto 2 — Marie-Olympe de Gouges",
      textoLectura: TEXTO_2_C01,
      enunciado: "Según el texto, ¿qué evento fue clave para el nacimiento del compromiso político de Olympe?",
      alternativas: {
        A: "La exclusión de su pieza teatral del repertorio de la Comédie-Française.",
        B: "La aprobación de la Declaración de los Derechos del Hombre y del Ciudadano.",
        C: "La experiencia de un matrimonio forzado con un hombre mucho mayor que ella."
      }
    },
    {
      numero: 7,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 2",
      tituloLectura: "Texto 2 — Marie-Olympe de Gouges",
      textoLectura: TEXTO_2_C01,
      enunciado: "Según el texto, ¿cuál de los siguientes hechos ocurrió <mark class=\"clave-palabra\">primero</mark>?",
      alternativas: {
        A: "Olympe escribió la Declaración de los Derechos de la Mujer y de la Ciudadana.",
        B: "Los montañeses tomaron el poder político francés de manera violenta.",
        C: "Olympe fue amenazada con ser encarcelada en la Bastilla."
      }
    },
    {
      numero: 8,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 2",
      tituloLectura: "Texto 2 — Marie-Olympe de Gouges",
      textoLectura: TEXTO_2_C01,
      enunciado: "En el último párrafo del texto, el autor cita un comentario de un adversario político de Olympe. ¿Cuál es la finalidad <mark class=\"clave-palabra\">principal</mark> del autor al citar este comentario?",
      alternativas: {
        A: "Señalar que Olympe terminó siendo considerada una criminal por sus orientaciones políticas.",
        B: "Cuestionar la actitud intolerante de los líderes políticos montañeses hacia las ideas de sus rivales girondinos.",
        C: "Mostrar cuál fue la perspectiva dominante sobre el papel de la mujer en la sociedad tras la Revolución francesa."
      }
    },
    {
      numero: 9,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 2",
      tituloLectura: "Texto 2 — Marie-Olympe de Gouges",
      textoLectura: TEXTO_2_C01,
      enunciado: "¿En qué año Olympe comenzó su carrera literaria como autora de piezas de teatro?",
      alternativas: { A: "En 1770.", B: "En 1774.", C: "En 1785." }
    },
    {
      numero: 10,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 2",
      tituloLectura: "Texto 2 — Marie-Olympe de Gouges",
      textoLectura: TEXTO_2_C01,
      enunciado: "Según el texto, ¿cuál de los siguientes hechos causó la detención de Olympe?",
      alternativas: {
        A: "La publicación de una pieza teatral en la que denunciaba el enriquecimiento de la nobleza a partir de la trata de esclavos.",
        B: "La manifestación pública de su disconformidad ante la exclusión de su obra del repertorio de la Comédie-Française.",
        C: "La elaboración de un cartel propagandístico en el que defendía la causa de los líderes girondinos."
      }
    },
    {
      numero: 11,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 3",
      tituloLectura: "Texto 3 — Servicio educativo y mercado",
      textoLectura: TEXTO_3_C01,
      enunciado: "Según el autor, ¿por qué los 'consumidores del servicio educativo' juegan un rol importante en la provisión de dicho servicio?",
      alternativas: {
        A: "Porque el aprendizaje en la escuela depende en buena parte del esfuerzo de los estudiantes y de cómo interactúan entre ellos.",
        B: "Porque los estudiantes que cuentan con mayores recursos económicos reciben un mejor servicio educativo.",
        C: "Porque la eficiencia de una escuela se ve reflejada en el éxito que logren alcanzar sus exalumnos."
      }
    },
    {
      numero: 12,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 3",
      tituloLectura: "Texto 3 — Servicio educativo y mercado",
      textoLectura: TEXTO_3_C01,
      enunciado: "¿Cuál de las siguientes afirmaciones se puede <mark class=\"clave-palabra\">concluir</mark> a partir de lo sostenido por el autor?",
      alternativas: {
        A: "Es sencillo medir el desarrollo de las habilidades socioemocionales de los estudiantes.",
        B: "El mercado se encarga de asignar más recursos educativos en zonas menos favorecidas.",
        C: "Evaluar la calidad de una escuela es más complejo que evaluar la calidad de un restaurante."
      }
    },
    {
      numero: 13,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 3",
      tituloLectura: "Texto 3 — Servicio educativo y mercado",
      textoLectura: TEXTO_3_C01,
      enunciado: "¿Cuál de las siguientes alternativas <mark class=\"clave-palabra\">NO</mark> es uno de los 'ejes de comparación' utilizados por el autor?",
      alternativas: {
        A: "La frecuencia con la que se contrata el servicio.",
        B: "El nivel de innovación en la prestación del servicio.",
        C: "El tiempo que toma conocer los resultados del servicio."
      }
    },
    {
      numero: 14,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 3",
      tituloLectura: "Texto 3 — Servicio educativo y mercado",
      textoLectura: TEXTO_3_C01,
      enunciado: "Según el texto, ¿cuál fue la razón <mark class=\"clave-palabra\">principal</mark> por la que, en las últimas décadas, el Estado redujo su participación activa en los mercados?",
      alternativas: {
        A: "Porque las decisiones del Estado relacionadas con el servicio educativo habían tenido resultados desalentadores.",
        B: "Porque el motor de la libre competencia indujo a la mejora y al aumento de la productividad en múltiples sectores.",
        C: "Porque el Estado debió concentrarse en aquellos mercados que tenían que ser regulados para volverse eficientes."
      }
    },
    {
      numero: 15,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 3",
      tituloLectura: "Texto 3 — Servicio educativo y mercado",
      textoLectura: TEXTO_3_C01,
      enunciado: "¿Cuál es el argumento <mark class=\"clave-palabra\">principal</mark> del autor para defender que la libre competencia por sí sola no mejora la educación?",
      alternativas: {
        A: "Las decisiones ante la problemática del servicio educativo deben estar basadas en reflexiones sesudas y no en actos de fe.",
        B: "Existen fuertes diferencias entre el servicio educativo y el servicio de comida con relación a la disponibilidad de información.",
        C: "Las propuestas de mejora desde la libre competencia ignoran las importantes particularidades que tiene el servicio educativo."
      }
    },
    {
      numero: 16,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 4",
      tituloLectura: "Texto 4 — Industria azucarera y ciencia",
      textoLectura: TEXTO_4_C01,
      enunciado: "Entre los hechos presentados en el texto, ¿cuál ocurrió <mark class=\"clave-palabra\">primero</mark>?",
      alternativas: {
        A: "El Dr. Mark Hegsted llegó a convertirse en el director de nutrición del Departamento de Agricultura de EE. UU.",
        B: "John Hickson y sus colegas discutieron un plan para redireccionar la opinión pública sobre el azúcar y la salud.",
        C: "La prensa informó que algunas empresas financiaban estudios sobre el peso de los niños que consumían dulces."
      }
    },
    {
      numero: 17,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 4",
      tituloLectura: "Texto 4 — Industria azucarera y ciencia",
      textoLectura: TEXTO_4_C01,
      enunciado: "¿Cuál es el tema central de este texto?",
      alternativas: {
        A: "Los efectos negativos del azúcar en la salud.",
        B: "El debate científico sobre la industria alimenticia en EE. UU.",
        C: "La manipulación de información sobre los efectos del azúcar."
      }
    },
    {
      numero: 18,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 4",
      tituloLectura: "Texto 4 — Industria azucarera y ciencia",
      textoLectura: TEXTO_4_C01,
      enunciado: "¿En qué consiste el 'interés particular' al que se refiere la cita del penúltimo párrafo?",
      alternativas: {
        A: "En procurar que la opinión pública desconozca la relación entre el consumo de azúcar y las enfermedades cardiovasculares.",
        B: "En procurar que el público reflexione sobre las decisiones de los empresarios vinculados a la industria alimentaria.",
        C: "En procurar que el debate sobre los efectos del azúcar y las grasas en la salud siguiera vigente."
      }
    },
    {
      numero: 19,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 4",
      tituloLectura: "Texto 4 — Industria azucarera y ciencia",
      textoLectura: TEXTO_4_C01,
      enunciado: "¿Cuál de las siguientes afirmaciones se puede <mark class=\"clave-palabra\">concluir</mark> a partir de la información del texto?",
      alternativas: {
        A: "Mark Hegsted fue nombrado en un alto cargo gubernamental a pesar de saberse que estaba involucrado en tráfico de influencias.",
        B: "La investigación de JAMA muestra que los azúcares generan mayor riesgo cardiaco que las grasas saturadas.",
        C: "Los estudios financiados por la Asociación Azucarera fueron publicados en una revista prestigiosa para influir en la opinión pública."
      }
    },
    {
      numero: 20,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 4",
      tituloLectura: "Texto 4 — Industria azucarera y ciencia",
      textoLectura: TEXTO_4_C01,
      enunciado: "¿Cuál de los siguientes hechos apoya la idea de que la industria azucarera continúa ejerciendo influencia en la ciencia de la nutrición?",
      alternativas: {
        A: "John Hickson propuso contrarrestar descubrimientos sobre el azúcar con una investigación patrocinada por la industria.",
        B: "Fabricantes de dulces financiaron estudios que aseguraban que los niños que comían dulces tendían a pesar menos.",
        C: "Un grupo de científicos investigó una teoría sobre grasas saturadas y enfermedades del corazón."
      }
    },
    {
      numero: 21,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 5",
      tituloLectura: "Texto 5 — Escolarización y aprendizaje",
      textoLectura: TEXTO_5_C01,
      enunciado: "¿Por qué el autor afirma que una gran parte de la inversión educativa se pierde?",
      alternativas: {
        A: "Porque los estudiantes de países de menores ingresos aún tienen dificultades para acceder a una escuela.",
        B: "Porque los estudiantes desarrollan pocas habilidades que los ayuden a moverse eficazmente en el mundo.",
        C: "Porque los estudiantes pasan demasiadas horas realizando actividades de lectura, matemáticas y otras materias."
      }
    },
    {
      numero: 22,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 5",
      tituloLectura: "Texto 5 — Escolarización y aprendizaje",
      textoLectura: TEXTO_5_C01,
      enunciado: "¿Por qué el autor afirma que 'la escolarización sin aprendizaje no es solo una oportunidad perdida, sino también una gran injusticia hacia los estudiantes pobres'?",
      alternativas: {
        A: "Porque perpetúa la desigualdad entre los estudiantes pobres y aquellos que provienen de hogares con mayores ingresos.",
        B: "Porque las autoridades ignoran que la problemática educacional tiene que ver con una crisis de los aprendizajes.",
        C: "Porque la evidencia muestra que los estudiantes pobres fracasan en las evaluaciones cinco veces más que los más favorecidos."
      }
    },
    {
      numero: 23,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 5",
      tituloLectura: "Texto 5 — Escolarización y aprendizaje",
      textoLectura: TEXTO_5_C01,
      enunciado: "¿Cuál es la idea <mark class=\"clave-palabra\">principal</mark> del texto?",
      alternativas: {
        A: "Una conclusión clave del informe del Banco Mundial es que los países de menores ingresos tienen posibilidades reales de que sus jóvenes aprendan.",
        B: "Los esfuerzos por ampliar la cobertura educativa serán insuficientes si no están acompañados por políticas orientadas a la mejora significativa de los aprendizajes.",
        C: "Además de ser una oportunidad perdida, la escolarización de baja calidad es una injusticia que puede generar conflictos."
      }
    },
    {
      numero: 24,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 5",
      tituloLectura: "Texto 5 — Escolarización y aprendizaje",
      textoLectura: TEXTO_5_C01,
      enunciado: "¿Cuál de las siguientes medidas <mark class=\"clave-palabra\">NO</mark> forma parte de las propuestas del autor para mejorar los aprendizajes?",
      alternativas: {
        A: "Facilitar el acceso de niños y jóvenes a la escuela.",
        B: "Medir el rendimiento educativo de los estudiantes.",
        C: "Implementar el uso de la tecnología de forma funcional."
      }
    },
    {
      numero: 25,
      subprueba: "Comprensión Lectora",
      puntos: 2,
      textoClave: "Texto 5",
      tituloLectura: "Texto 5 — Escolarización y aprendizaje",
      textoLectura: TEXTO_5_C01,
      enunciado: "¿Cuál es el objetivo <mark class=\"clave-palabra\">principal</mark> de la pregunta 'Entonces, ¿es posible lograr mejoras en el aprendizaje de los estudiantes?'?",
      alternativas: {
        A: "Exhortar a las autoridades educativas a que respondan si es posible mejorar los aprendizajes.",
        B: "Transmitir dudas sobre la posibilidad de mejorar los aprendizajes en países en vías de desarrollo.",
        C: "Recalcar, sobre la base de ejemplos descritos en el texto, que existe la posibilidad de mejorar los aprendizajes."
      }
    },
    {
      numero: 26, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Un estudiante emplea ocho horas del día en dormir, seis horas en sus labores académicas y tres horas en alimentarse. ¿Qué parte del día le queda para realizar otras actividades?",
      alternativas: { A: "7/24", B: "9/24", C: "17/24" }
    },
    {
      numero: 27, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Una heladería ofrece los siguientes sabores de helado: vainilla, fresa, chocolate y lúcuma acompañados de un tipo de recubrimiento que puede ser mermelada, pecanas o frutas confitadas. Si solo se puede elegir un sabor de helado y un tipo de recubrimiento, ¿cuántas combinaciones diferentes se pueden pedir?",
      alternativas: { A: "7", B: "12", C: "24" }
    },
    {
      numero: 28, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Adrián, Bruno y Cristian viven en un edificio de tres pisos, cada uno en un piso distinto. Uno de ellos es dentista, otro es profesor y el otro es taxista. Se sabe que: El dentista vive inmediatamente debajo de Cristian. Adrián vive entre el profesor y Bruno. ¿Cuál de las siguientes afirmaciones es verdadera?",
      alternativas: { A: "El taxista vive en el segundo piso.", B: "El dentista vive en el primer piso.", C: "Bruno es el taxista." }
    },
    {
      numero: 29, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Dada la siguiente secuencia: RUSIA2018RUSIA2018RUSIA2018RUS... Considerando el orden de izquierda a derecha, ¿cuál es la letra o cifra que ocupa el lugar 100?",
      alternativas: { A: "R", B: "8", C: "A" }
    },
    {
      numero: 30, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Lea con atención las siguientes premisas: Todos los trabajadores de la empresa E han estudiado en el instituto T. Todos los que han estudiado en el instituto T han llevado un curso de reciclaje. A partir de las premisas anteriores, ¿qué se puede inferir?",
      alternativas: {
        A: "Todos los que han llevado un curso de reciclaje trabajan en la empresa E.",
        B: "Todos los trabajadores de la empresa E han llevado un curso de reciclaje.",
        C: "Solo los que trabajan en la empresa E han llevado un curso de reciclaje."
      }
    },
    {
      numero: 31, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Si se sabe que: Relacionando 1, 8 y 2, se obtiene 4. Relacionando 2, 9 y 3, se obtiene 6. Relacionando 2, 16 y 4, se obtiene 8. Si se mantiene la misma relación, ¿cuánto se obtiene al relacionar 4, 12 y 6?",
      alternativas: { A: "8", B: "10", C: "12" }
    },
    {
      numero: 32, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En una región del Perú, se realizan trueques entre los pobladores de una comunidad. Dichos pobladores intercambian una olla de barro por 1/2 kg de zanahorias y 1 kg de alverjas. Por otro lado, 1 kg de alverjas se puede intercambiar por 2 kg de zanahorias. ¿Cuántas ollas de barro se pueden intercambiar por 20 kg de alverjas?",
      alternativas: { A: "8 ollas de barro.", B: "16 ollas de barro.", C: "25 ollas de barro." }
    },
    {
      numero: 33, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En una ciudad, hay tres tipos de monedas: kina, soti y lets; los cambios monetarios se realizan entre kinas y sotis, y entre sotis y letses. Si se sabe que dos kinas equivalen a tres sotis y un soti equivale a tres letses, ¿cuál es el precio en kinas de un artefacto que cuesta 54 letses?",
      alternativas: { A: "12 kinas.", B: "27 kinas.", C: "36 kinas." }
    },
    {
      numero: 34, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En un cuadrado de 10 cm de lado, cada vértice está representado por las letras J, K, L y M, en ese orden y de forma consecutiva. Si un punto móvil inicia su recorrido en el vértice J, luego se dirige al vértice K, luego a L, después a M y continúa hacia J, y vuelve a repetir sucesivamente el mismo trayecto, ¿en qué vértice se encontrará el punto móvil cuando recorra 370 cm?",
      alternativas: { A: "J", B: "K", C: "L" }
    },
    {
      numero: 35, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Un año bisiesto es aquel que tiene 366 días, es decir, un día más que un año común. Además, se sabe que: Si un año es bisiesto, será múltiplo de cuatro. Si un año es múltiplo de cuatro, será un número par. De lo anterior, se puede inferir lo siguiente:",
      alternativas: {
        A: "Si un año es múltiplo de cuatro, ese año será bisiesto.",
        B: "Si un año es un número par, ese año será bisiesto.",
        C: "Si un año es bisiesto, ese año será un número par."
      }
    },
    {
      numero: 36, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Los tiempos (en segundos) de los concursantes de una competencia de natación estilo mariposa en la prueba de 100 m son los siguientes: Roger: 50,6; Daniel: 50,788; Ernesto: 50,42. ¿Quién llegó primero?",
      alternativas: { A: "Roger", B: "Daniel", C: "Ernesto" }
    },
    {
      numero: 37, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Alicia, Bianca, Charo, Dafne y Elena se sientan alrededor de una mesa circular con seis asientos distribuidos simétricamente. Se observa que: Elena se sienta junto a Charo y frente a Bianca. Alicia se sienta frente a Dafne. Entonces, se puede afirmar que necesariamente el asiento vacío se encuentra",
      alternativas: { A: "junto a Alicia.", B: "junto a Dafne.", C: "junto a Bianca." }
    },
    {
      numero: 38, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Melina, Nancy, Olivia y Paola compitieron en una carrera en la que no hubo empates. Más tarde, Rodrigo le preguntó a cada una cómo le fue y ellas respondieron lo siguiente: Melina: 'Yo gané'. Nancy: 'Yo quedé última'. Olivia: 'Yo no quedé última'. Paola: 'Yo no quedé primera ni última'. Diego, quien presenció la carrera, le dijo a Rodrigo los puestos de llegada de cada una. Así Rodrigo descubrió que una de las cuatro competidoras le había mentido. ¿Quién ganó la carrera?",
      alternativas: { A: "Melina", B: "Olivia", C: "Paola" }
    },
    {
      numero: 39, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "A partir de las siguientes premisas: Todos los exalumnos del colegio C son norteños, a excepción de uno que es pelirrojo. Ningún pelirrojo es músico. ¿Cuál de los siguientes razonamientos es correcto?",
      alternativas: {
        A: "Adrián es un norteño pelirrojo; por lo tanto, estudió en el colegio C.",
        B: "Claudio es músico y estudió en el colegio C; por lo tanto, es norteño.",
        C: "Bonifacio no es pelirrojo y estudió en el colegio C; por lo tanto, es músico."
      }
    },
    {
      numero: 40, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En la ciudad de Nairobi amanece antes que en la ciudad de Kinshasa y, además, hay dos horas de diferencia entre ambas ciudades. El vuelo entre estas dos ciudades dura 3 horas 15 minutos. Si un avión parte al mediodía de la ciudad de Nairobi (hora de Nairobi), ¿a qué hora llegará a la ciudad de Kinshasa (hora de Kinshasa)?",
      alternativas: { A: "17:15 h", B: "15:15 h", C: "13:15 h" }
    },
    {
      numero: 41, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "A un taller de capacitación asistieron 80 docentes peruanos. Además, se sabe que: 44 de ellos eran de Comunicación y los restantes eran de Matemática. 18 docentes de Comunicación nacieron en Lima y 21 docentes de Matemática nacieron en una región diferente de Lima. Del total de asistentes al taller, ¿cuántos docentes nacieron en una región diferente de Lima?",
      alternativas: { A: "47", B: "33", C: "21" }
    },
    {
      numero: 42, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Juan decide preparar un flan para la cena. Según las indicaciones de una receta, se necesitan 6 huevos, 240 g de azúcar y 540 mL de leche. Juan desea obtener más porciones, manteniendo la misma proporción de los ingredientes de la receta. Si tiene pensado usar 8 huevos, ¿qué cantidad de azúcar y de leche necesitará?",
      alternativas: {
        A: "242 g de azúcar y 542 mL de leche.",
        B: "320 g de azúcar y 720 mL de leche.",
        C: "480 g de azúcar y 1080 mL de leche."
      }
    },
    {
      numero: 43, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Cinthya es 3 cm más alta que su madre y su madre es 5 cm más baja que su abuela. Si se sabe que la estatura de Cinthya es 1,65 m, ¿cuál de las siguientes afirmaciones es verdadera?",
      alternativas: {
        A: "La estatura de la abuela de Cinthya es 1,67 m.",
        B: "Cinthya es 2 cm más alta que su abuela.",
        C: "La madre de Cinthya mide 1,68 m."
      }
    },
    {
      numero: 44, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Se ha formado una secuencia de figuras con palitos de helado de la siguiente manera: En la primera figura, se usan cuatro palitos para formar un cuadrado. En la segunda figura, se usan siete palitos para formar dos cuadrados contiguos. En la tercera figura, se usan diez palitos para formar tres cuadrados contiguos. ¿Cuántos palitos se usarán para formar la figura 12?",
      alternativas: { A: "48", B: "40", C: "37" }
    },
    {
      numero: 45, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Una carretera pasa por las ciudades P, Q, R y S, pero no necesariamente en ese orden. Su recorrido es de sur a norte y viceversa. Si se sabe que la ciudad S está al norte de Q y R, la ciudad Q está al sur de P y la ciudad S está entre P y R, ¿cuál de estas ciudades está más al norte?",
      alternativas: { A: "P", B: "Q", C: "R" }
    },
    {
      numero: 46, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En una maratón de baile, gana la pareja que logre bailar sin descanso por más tiempo. Si la pareja ganadora empezó a bailar a las 17:36 h y paró a las 20:14 h del mismo día, ¿cuánto tiempo estuvo bailando?",
      alternativas: { A: "3 h 38 min", B: "3 h 22 min", C: "2 h 38 min" }
    },
    {
      numero: 47, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Si se organiza un concurso entre cinco equipos de tal manera que cada equipo compite con otro una sola vez, ¿cuántos encuentros se deben programar?",
      alternativas: { A: "10", B: "20", C: "25" }
    },
    {
      numero: 48, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Lucas está de vacaciones en Europa. De los 100 dólares que tiene, gasta 30 dólares en una tienda y el equivalente a 40 euros en otra. Sabiendo que un dólar equivale a 3,25 soles y un euro equivale a 3,80 soles, ¿a cuántos soles equivale el monto que le sobra?",
      alternativas: { A: "75,50 soles.", B: "97,50 soles.", C: "114,00 soles." }
    },
    {
      numero: 49, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En una biblioteca, por cada tres libros leídos, el lector recibe dos pulseras amarillas; por cuatro pulseras amarillas, recibe tres pulseras rojas; y, por cada seis pulseras rojas, recibe dos pulseras verdes. Si Jaime tiene seis pulseras verdes, ¿cuál de las siguientes afirmaciones es verdadera?",
      alternativas: {
        A: "Por las seis pulseras verdes, Jaime tuvo que leer nueve libros.",
        B: "Jaime leyó ocho libros para obtener dos pulseras verdes.",
        C: "Por cada pulsera roja, Jaime tuvo que leer dos libros."
      }
    },
    {
      numero: 50, subprueba: "Razonamiento Lógico", puntos: 2, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Ante la cercanía de un encuentro deportivo internacional, el dueño de una tienda comercial de venta de artefactos eléctricos decide incrementar en 25% el precio de venta de los televisores. Si uno de los televisores se vendió a S/ 2000 con el incremento, ¿cuál era el precio de venta inicial?",
      alternativas: { A: "S/ 1500", B: "S/ 1600", C: "S/ 1975" }
    },
    {
      numero: 51, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En un niño de seis meses, la sonrisa constituye un indicio de que busca interactuar socialmente. Considerando la importancia de este hecho, ¿qué acción es pertinente realizar ante la sonrisa de un niño de seis meses?",
      alternativas: {
        A: "Hacerle cosquillas para prolongar su alegría.",
        B: "Celebrar su sonrisa y pedirle que vuelva a sonreír.",
        C: "Responderle con sonrisas y poner en palabras su expresión."
      }
    },
    {
      numero: 52, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente del aula de dos a tres años busca favorecer la colaboración voluntaria entre los niños. ¿Cuál de las siguientes intervenciones es pertinente para ese propósito?",
      alternativas: {
        A: "\"¿Quién puede llevar las cucharas a la mesa para comer el refrigerio?\".",
        B: "\"Para mantener el aula en orden, cada uno debe guardar el juguete con el que jugó\".",
        C: "\"A los que esperen sentaditos, les pondré una estrellita en la frente. ¿Quién quiere una estrellita?\"."
      }
    },
    {
      numero: 53, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Los niños del aula de doce a dieciocho meses están jugando. Andrea sostiene un payasito y Saúl se acerca a ella con la intención de quitárselo. Al verlo, la niña toma el juguete con un brazo y, con el otro, aleja a Saúl. Ante ello, el niño mira a la docente buscando su apoyo. Frente a esta situación de conflicto, ¿cuál de las siguientes intervenciones es pertinente que realice la docente?",
      alternativas: {
        A: "\"Andrea, tú ya jugaste con el payasito. Dámelo para entregárselo a Saúl, porque él también quiere jugar\".",
        B: "\"Niños, miren estos juguetes. Son más bonitos que el payasito y hay uno para cada uno. Así, los dos podrán jugar sin pelear\".",
        C: "\"Saúl, ya sé que quieres el payasito. Cuando Andrea termine de jugar, te lo dará. Mientras tanto, busquemos otro juguete que te guste\"."
      }
    },
    {
      numero: 54, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Los niños del aula de cinco años y la docente han salido al parque. Un grupo de niños se acercan a las flores y las observan. De pronto, Sofía comenta que le gustan mucho las margaritas y arranca algunas. Al verla arrancar las flores, sus compañeros la imitan. La docente se percata de ello y decide aprovechar la situación para que los niños comprendan la importancia de cuidar el espacio público. ¿Cuál de las siguientes intervenciones es más pertinente para ese propósito?",
      alternativas: {
        A: "Decir: \"Niños, ¿por qué rompen las flores? ¿A la plantita le dolerá si le arrancan sus flores? Entonces, ¿estará bien romperlas?\".",
        B: "Decir: \"Niños, ¿les gustan las flores del parque? ¿Quiénes más vienen al parque? ¿Qué pasaría si todas esas personas arrancaran las flores? Si al parque venimos todos, ¿quiénes deben cuidarlo?\".",
        C: "Decir: \"Niños, los parques y todo lo que hay en ellos como las plantas, las flores, los árboles, las bancas, etc. nos pertenecen a todos. Si cuidamos adecuadamente los parques, todos podremos disfrutar de ellos\"."
      }
    },
    {
      numero: 55, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Los niños del aula de cinco años se están lavando las manos. En ese contexto, la docente observa que, cuando terminan de asearse, algunos niños dejan el caño abierto. Ante ello, la docente busca que los niños comprendan la importancia de cuidar el agua. ¿Cuál de las siguientes acciones es más pertinente para ese propósito?",
      alternativas: {
        A: "Proponerles dramatizar lo sucedido durante el lavado de manos. Luego, explicarles que las personas, animales y plantas necesitan agua para vivir. Finalmente, decirles que el agua se va a acabar en cualquier momento y, por lo tanto, es importante cuidarla.",
        B: "Presentarles imágenes de personas recibiendo agua de camiones cisterna y pedirles que describan lo que observan. Luego, preguntarles si alguna vez faltó agua en sus casas, qué hicieron en ese momento y qué harían si el agua se acabara. Finalmente, explicarles que el agua se va a acabar en cualquier momento y preguntarles si dejar el caño abierto ayuda a cuidarla.",
        C: "Reunir a los niños en asamblea y decirles que ha observado que los caños quedan abiertos después del lavado de manos. Luego, indicarles que es responsabilidad de todos cuidar el agua y para asegurar ello incorporarán la norma de convivencia \"Cerrar el caño después de usarlo\". Finalmente, decirles que evaluarán el cumplimiento de esa norma diariamente."
      }
    },
    {
      numero: 56, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Los niños del aula de cinco años juegan en el patio de la IE. Julio y sus amigos están saltando liga en un extremo del patio. De pronto, Ana y un grupo de niños corren cerca de Julio y sus compañeros e interfieren en el juego de estos. Fastidiado, Julio le dice a Ana que ella y su grupo deben jugar en otro sitio, pues él y sus amigos estaban en ese lugar primero. Ana le responde que el patio es de todos. Ante ello, los niños empiezan a discutir. La docente, que estuvo observando la situación, se acerca para intervenir. ¿Cuál de las siguientes acciones es pertinente que la docente realice a continuación para promover la resolución del conflicto entre los niños?",
      alternativas: {
        A: "Explicar a los niños que todos tienen derecho a jugar en el patio. Luego, asignar a cada grupo un espacio en el patio para que jueguen. Finalmente, pedir a ambos grupos que se amisten.",
        B: "Decirles que no está bien discutir entre compañeros. Luego, proponerles un nuevo juego en el que puedan participar todos juntos. Finalmente, recordarles la importancia de convivir en armonía.",
        C: "Preguntar a Ana y a Julio qué sucedió. Luego, pedirles que digan cómo podrían hacer para que todos puedan jugar en el patio sin interrumpirse. Finalmente, establecer acuerdos a partir de sus propuestas."
      }
    },
    {
      numero: 57, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Los niños del aula de cinco años están desarrollando el proyecto \"Conociendo cómo nacen y crecen los peces\". Previamente, la docente ha coordinado con los padres la realización de una visita y han acordado que los niños elegirán el lugar. En este punto, los niños tienen dos propuestas: visitar el río o una piscigranja, ambas cercanas a la IE. Ellos están divididos frente a ambas propuestas y no logran ponerse de acuerdo. En esa situación, la docente busca desarrollar en los niños habilidades para una convivencia democrática. ¿Cuál de las siguientes intervenciones es más pertinente para ese propósito?",
      alternativas: {
        A: "Decir: \"Niños, ¿qué les parece si hacemos un sorteo para decidir a dónde iremos? Después del sorteo, todos debemos aceptar la propuesta ganadora\".",
        B: "Decir: \"Niños, como no se ponen de acuerdo, me apena decirles que yo tomaré la decisión por ustedes. Elegiré el lugar que visitaremos y deberán aceptar mi decisión\".",
        C: "Decir: \"Niños, les propongo que salgan voluntarios de cada propuesta para que nos digan por qué el lugar que proponen visitar es mejor para lo que queremos aprender. Luego, votaremos\"."
      }
    },
    {
      numero: 58, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Piero, de tres años, está resfriado. Para limpiarse la nariz, constantemente le pide ayuda a la docente. Ante ello, la docente busca que él aprenda a limpiarse la nariz autónomamente. ¿Cuál de las siguientes acciones es pertinente para ese propósito?",
      alternativas: {
        A: "Animar a Piero diciéndole que él ya es un niño grande y que los niños grandes sí pueden limpiarse la nariz solos.",
        B: "Atender a Piero y luego llamar a sus padres para decirles que deben enseñarle al niño a limpiarse la nariz solo.",
        C: "Limpiarle la nariz a Piero mostrándole cómo se hace y decirle que la próxima vez intente hacerlo solo."
      }
    },
    {
      numero: 59, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Situación — Plantas de la comunidad (59 y 60)",
      textoLectura: "En una IE de la sierra sur, los niños y la docente del aula de cinco años recorren la chacra que se encuentra alrededor de la institución para reconocer las plantas que existen en la comunidad. Durante el recorrido, se produce el siguiente diálogo:\nDocente: (Señalando una planta) ¿Alguien conoce esta planta?\nRosa: Sí... ¡es muña!\nDocente: ¿Cómo lo sabes?\nRosa: Es que cuando me dolía la barriga, mi mamá me dio agua de esa planta.\nDocente: ¿Y te pasó el dolor?\nRosa: ¡Sí!\nDocente: ¡Muy bien! ¿Y qué me dicen de esta otra planta?\nLeonardo: ¡Ah! ¡Esa es paico!\nDocente: ¿Así?\nLeonardo: ¡Sí! Es que mi mamá le echa sus hojas a la sopa. ¡Sale riiiica!\nDocente: ¡Qué bien! ¿Y de qué otras maneras se usará el paico?\nJimena: En mi casa, mi papá toma agua de paico cuando come mucho.",
      enunciado: "En esta situación, ¿qué acción está realizando principalmente la docente?",
      alternativas: { A: "Recoger saberes previos.", B: "Brindar retroalimentación.", C: "Generar conflicto cognitivo." }
    },
    {
      numero: 60, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Situación — Preparación de infusiones (60)",
      textoLectura: "Al volver al aula, los niños y la docente conversan sobre las plantas que observaron durante el recorrido y sus diferentes usos en la comunidad. Durante la conversación, los niños le dicen a la docente que desean preparar infusiones. En ese contexto, se produce el siguiente diálogo:\nDocente: ¿De qué plantas quisieran preparar infusiones?\nTeresa: ¡De muña!\nCristian: ¡De hierba buena!\nDocente: ¡Muy bien! ¿Y qué necesitamos para preparar nuestras infusiones?\nTeresa: ¡Las hojas!\nDocente: Así es. ¿Qué más?\nAntonio: ¡Agua!\nDocente: ¿Y cómo tiene que estar el agua?\nAntonio: Fría.\nDocente: ¿Será lo mismo usar agua caliente o fría para preparar infusiones?\nAntonio: ¡Sí!\nMaría: ¡No! ¡Mi mamá le echa agua caliente!\nLa docente busca aprovechar esta situación para que los niños formulen hipótesis. ¿Cuál de las siguientes preguntas es pertinente para ese propósito?",
      alternativas: {
        A: "\"Antonio, ¿en tu casa preparan infusiones con agua fría?\".",
        B: "\"Niños, ¿con qué otras plantas se podrán preparar infusiones?\".",
        C: "\"María, ¿qué crees que pasa con las hojas de las plantas cuando les añadimos agua caliente?\"."
      }
    },
    {
      numero: 61, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Sonia es una niña de cinco años que presenta hipoacusia leve o sordera leve. Ella requiere mirar el rostro de las personas para observar sus gestos, y, de ese modo, comprender mejor lo que dicen. Sonia será incluida en una IE. En el marco de un enfoque inclusivo, la docente busca generar condiciones que favorezcan el aprendizaje de la niña. ¿Cuál de las siguientes acciones es pertinente que realice la docente para ese propósito?",
      alternativas: {
        A: "Preparar para Sonia actividades de aprendizaje más sencillas que las propuestas para el resto de sus compañeros. Así, ella podrá realizarlas y valorar sus logros.",
        B: "Desarrollar las actividades con todos los niños, como habitualmente se realizan. Reservar un momento de la jornada para atender las necesidades de aprendizaje de Sonia de manera individualizada.",
        C: "Pedir a los niños que se sienten formando círculos. Asegurar que esta disposición se mantenga tanto para las actividades de aprendizaje que se realicen en grupos pequeños como durante la asamblea."
      }
    },
    {
      numero: 62, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Micaela, de dos meses, ha descubierto sus manos en su campo visual. Para favorecer que la niña continúe explorando sus manos, ¿cuál de las siguientes acciones es pertinente?",
      alternativas: {
        A: "Recostarla sobre su espalda y dejar sus manos libres.",
        B: "Colocarla boca abajo y ubicar sus manos a la altura de sus ojos.",
        C: "Cargarla con un brazo y, con el otro brazo, acercar las manos de la niña a su rostro."
      }
    },
    {
      numero: 63, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Desde hace una semana, Bruno, de ocho meses, se chupa los dedos de su mano. Esta acción le brinda seguridad y calma. Tomando en cuenta el desarrollo emocional de Bruno, ¿cuál de las siguientes acciones es pertinente que realice la docente en esta situación?",
      alternativas: {
        A: "Estar atenta a los momentos en que Bruno intente chuparse los dedos para decirle que no lo haga. Luego, distraerlo con acciones y juguetes de su agrado.",
        B: "Estar atenta a los momentos en que Bruno intente chuparse los dedos para detenerlo con suavidad. Luego, colocarle un chupón en la boca cuidadosamente.",
        C: "Estar atenta a los momentos en que Bruno intente chuparse los dedos para identificar si esta acción se produce por cansancio, ansiedad, etc. Luego, atenderlo según corresponda."
      }
    },
    {
      numero: 64, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente del aula de cinco años busca desarrollar habilidades de clasificación en los niños. Para ello, aprovechando que los niños están realizando un proyecto para reutilizar objetos del aula, entrega a cada equipo una caja con plumones usados. Considerando el propósito de la docente, ¿qué acción es pertinente que realice a continuación?",
      alternativas: {
        A: "Decirles que agrupen los plumones en función de si pintan o no.",
        B: "Decirles que piensen cómo reutilizarán los plumones y, de acuerdo a ello, los agrupen.",
        C: "Decirles que los plumones son apropiados para aprender a contar y, por tanto, sería útil que los agruparan por color."
      }
    },
    {
      numero: 65, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente del aula de cinco años conversa con los niños respecto de sus responsabilidades para la presente semana. Cuando conversa con el grupo \"Las hormiguitas\", que cuenta con 5 integrantes, les dice que ellos estarán a cargo de las siguientes responsabilidades:\n1. Regar las plantas.\n2. Repartir las loncheras.\n3. Limpiar las mesas después del refrigerio.\nLuego, añade lo siguiente: \"Niños, las 3 responsabilidades deben ser repartidas entre todos los integrantes\". Considerando que la docente busca aprovechar esta situación para que los niños resuelvan problemas cotidianos, ¿qué acción debe realizar a continuación?",
      alternativas: {
        A: "Decirles que piensen cómo podrían distribuir las 3 responsabilidades en el grupo de modo que todos realicen por lo menos una.",
        B: "Asignar a cada niño un número del 1 al 5, y luego decirles que se distribuyan las tareas de manera correlativa hasta que todos tengan por lo menos una.",
        C: "Indicarles que limpiar las mesas y repartir las loncheras son actividades diarias y, por tanto, cada una debe ser realizada por 2 niños; mientras que las plantas las puede regar 1 niño cada 2 días."
      }
    },
    {
      numero: 66, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Hace dos semanas, los niños del aula de cinco años han sembrado frejolitos. Cada día se acercan a observar cómo crecen. Hoy, Carolina y Antonio están discutiendo, pues cada uno afirma que su frejolito creció más que el de su compañero. Al escucharlos, la docente se acerca a los niños y se produce el siguiente diálogo:\nDocente: ¿Por qué están discutiendo?\nCarolina: Es que Antonio dice que su frejolito creció más que el mío.\nAntonio: ¡Sí, el mío creció más!\nDocente: ¿Cómo podemos saber cuál de los frejolitos creció más?\nAmbos: No sé.\nDocente: ¿Qué les parece si los comparamos?\nCarolina: ¿Cómo es comparar?\nDocente: A ver... Acerquemos la mesa en la que están sus plantitas a la pared. Ahora, cada uno estire el tallo del frejolito con mucho cuidado para que no se rompa.\nCarolina: ¿Así está bien?\nDocente: Sí, así está bien... Ahora, lo que haremos será marcar en la pared la altura de las dos plantitas. Luego, vamos a mirar las dos marcas y ver cuál creció más. Es decir, vamos a comparar las plantitas.\nAntonio: ¡Ahh! ¡Así me mide mi papá para ver cuánto he crecido!\nDocente: ¡Lo ves! Cada vez que tu papá te mide, compara tu altura con la marca anterior y así sabe cuánto has crecido.\n(Luego, la docente procede a marcar la altura de ambas plantas en la pared).\nA ver, ahora comparen la altura de los frejolitos. ¿Qué dicen?\nAmbos: ¡¡Yeee!!! ¡¡Los dos crecieron igual!!!\nEn esta situación, ¿qué acción está desarrollando principalmente la docente?",
      alternativas: { A: "Brindar andamiaje.", B: "Generar conflicto cognitivo.", C: "Promover la transferencia de los aprendizajes." }
    },
    {
      numero: 67, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Organizados en grupos de 6 integrantes, los niños del aula de cinco años han reciclado materiales y construido un juguete. Ahora, se preparan para explicar a sus compañeros cómo lo hicieron. La docente busca aprovechar esta situación para que los niños resuelvan problemas. Para ello, primero les dice lo siguiente: \"Necesitamos que 2 niños de cada grupo cuenten cómo construyeron el juguete y el resto responda las preguntas que hagan sus compañeros. Entonces, ¿cuántos niños deberán responder las preguntas?\". Luego, se asegura de que los niños comprendan el problema que les acaba de plantear. En el marco de la resolución de problemas, ¿qué acción es pertinente que la docente realice a continuación?",
      alternativas: {
        A: "Pedirles que cada uno resuelva el problema. Luego, decirles que comparen sus respuestas con las de sus compañeros.",
        B: "Designar a los niños que presentarán el juguete en cada grupo. Luego, pedir a estos niños que cuenten cuántos compañeros quedan en sus grupos.",
        C: "Proponerles que discutan en su grupo cómo harán para saber cuántos niños responderán las preguntas. Luego, pedirles que expliquen la propuesta que acordaron."
      }
    },
    {
      numero: 68, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "¿En cuál de las siguientes acciones se evidencia el principio de cardinalidad?",
      alternativas: {
        A: "La docente le dice a Daniel que le ayude a contar las pelotas que hay en la caja. Daniel lo hace diciendo lo siguiente: \"1, 2, 3, 4 y 5. Hay 5 pelotas\".",
        B: "La docente le dice a Sonia que reparta 4 cuerdas en su grupo. Ella entrega las cuerdas una por una diciendo lo siguiente: \"Esta es para Susana, esta para Pedro, esta para Ana y esta para mí\".",
        C: "La docente le dice a José que escoja 3 juguetes y los ubique sobre la mesa, empezando por el que más le gusta. José lo hace diciendo lo siguiente: \"Este es el que más me gusta, este me gusta después. Y este es el que me gusta menos\"."
      }
    },
    {
      numero: 69, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente y los niños del aula de cinco años han recolectado diversos materiales como botellas, cajas, bloques de madera, etc. para el sector de construcción. Ahora, la docente les plantea el siguiente problema: \"Niños, ¿cómo podrían ordenar estos materiales en el sector de construcción para que puedan utilizarlos con facilidad?\". En esta situación, ¿cuál de las siguientes acciones es pertinente para favorecer la resolución de problemas?",
      alternativas: {
        A: "Presentarles un dibujo del sector de construcción en el que se considere el criterio de accesibilidad a los materiales. Luego, pedirles que ordenen el sector guiándose del dibujo.",
        B: "Pedirles que en grupos acuerden cómo organizarán los materiales del sector de construcción y lo representen con un dibujo. Luego, decirles que expliquen su propuesta usando el dibujo.",
        C: "Decirle a cada niño que elija un material y lo coloque en el espacio que considere adecuado. Luego, pedir a cada uno que dibuje cómo quedó el sector y solicitar voluntarios para que presenten sus dibujos."
      }
    },
    {
      numero: 70, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "¿Cuál de las siguientes acciones es pertinente para atender a la necesidad de sueño de niños menores de dieciocho meses?",
      alternativas: {
        A: "Observar a cada niño para identificar en qué momentos suele tener sueño y llevarlo al espacio de descanso.",
        B: "Realizar actividades con mucho movimiento antes de dormir para que los niños se cansen y concilien el sueño rápidamente.",
        C: "Establecer un horario de sueño para que todos los niños duerman al mismo tiempo y así se acostumbren a seguir una rutina."
      }
    },
    {
      numero: 71, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Situación — Puesto de venta de flores (71 y 72)",
      textoLectura: "Los niños y la docente del aula de cinco años han salido al mercado. Al pasar por un puesto de venta de flores, los niños observan sorprendidos sus colores. \"¡Mira, hay flores azules!\" \"¡Y verdes!\" \"¡Qué colores tan bonitos!\" \"¡Yo nunca vi flores de estos colores!\", exclaman.\nJuana se queda observando las flores detenidamente. Luego de unos momentos, le pregunta a la docente: \"¿Por qué las flores tienen color?\".",
      enunciado: "La docente busca ayudar a Juana a construir sus propias explicaciones respecto del mundo físico. Considerando ese propósito, ¿qué acción es más pertinente que realice la docente ante la inquietud de la niña?",
      alternativas: {
        A: "Decirle que las flores tienen color porque así pueden atraer a las aves, abejas y otros insectos. Estos llevan el polen de una flor a otra y así las flores pueden asegurar su supervivencia.",
        B: "Indicarle que, cuando regresen al aula, buscarán en los libros la respuesta. Luego de consultar en los libros, proponerle elaborar un álbum con flores de distintos colores.",
        C: "Compartir con los demás niños la pregunta de Juana y pedirles que propongan respuestas. Luego, complementarlas con la lectura de textos científicos sencillos."
      }
    },
    {
      numero: 72, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Situación — Flores teñidas (72)",
      textoLectura: "La vendedora les comenta a los niños que algunas de esas flores han sido teñidas. Cuando los niños le preguntan qué quiere decir \"teñidas\", ella les precisa que eso significa que se les ha cambiado de color. Entusiasmados, los niños le dicen a la docente que ellos también desean teñir flores. De regreso al aula, conversan sobre la propuesta.",
      enunciado: "La docente busca conocer qué saben los niños respecto del proceso de teñir. ¿Cuál de las siguientes preguntas NO es pertinente para recoger los saberes previos de los niños sobre el proceso de teñir?",
      alternativas: {
        A: "¿Alguna vez han visto cómo se cambia de color algo? ¿Qué materiales se utilizaron?",
        B: "¿Qué nos dijo la vendedora que era teñir? ¿A qué cosas se les podrá cambiar de color?",
        C: "¿Quieren saber cuántas maneras de cambiar de color a las cosas hay? ¿Cómo podríamos averiguarlo?"
      }
    },
    {
      numero: 73, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Situación — Paracaídas de juguete (73 y 74)",
      textoLectura: "Ricardo, de cinco años, lleva al aula el siguiente paracaídas de juguete:\nAl verlo jugar con el paracaídas, los niños se entusiasman y participan del juego. Luego, le comentan a la docente que les gustaría tener un juguete igual. Entonces, acuerdan elaborar un paracaídas de juguete.",
      enunciado: "La docente busca aprovechar esta situación para favorecer que los niños diseñen prototipos. ¿Cuál de las siguientes acciones es más pertinente para ese propósito?",
      alternativas: {
        A: "Pedir a cada grupo que proponga cómo elaborar el paracaídas y con qué materiales. Luego, decirles que dibujen su propuesta y expliquen a sus compañeros cómo la realizarán.",
        B: "Repartir a cada niño un círculo de plástico recortado, ocho trozos de pita del mismo tamaño y un muñeco pequeño. Luego, guiar paso a paso la elaboración del paracaídas.",
        C: "Presentarles en un papelógrafo los materiales que se requieren para elaborar el paracaídas, los moldes y la secuencia de elaboración. Luego, explicarles cómo armar el paracaídas y decirles que lo elaboren."
      }
    },
    {
      numero: 74, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Situación — Elaboración de paracaídas (74)",
      textoLectura: "Mientras los niños construyen sus paracaídas, la docente los acompaña y conversa con ellos. Les pide que le comenten cómo lo están haciendo, qué dificultades han tenido hasta el momento y cómo las han solucionado.",
      enunciado: "En la situación presentada, ¿qué acción realiza principalmente la docente?",
      alternativas: { A: "Activar saberes previos.", B: "Promover la metacognición.", C: "Generar conflicto cognitivo." }
    },
    {
      numero: 75, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Marcela, de seis meses, ha comenzado a emitir vocalizaciones. Lo hace sobre todo cuando está en compañía de adultos o de otros niños. ¿Qué acción es pertinente realizar en el momento de cuidados infantiles para favorecer los intentos comunicativos de Marcela?",
      alternativas: {
        A: "Dejar que Marcela emita vocalizaciones sin cortar su iniciativa. Luego, reproducir sonidos de diferentes animales para que experimente estímulos distintos a los que escucha regularmente.",
        B: "Colocarse cerca de la cara de Marcela y establecer contacto visual con ella. Luego, decir varias veces una palabra enfatizando su pronunciación para provocar que la niña la imite.",
        C: "Responder a Marcela con las vocalizaciones que ha emitido. Luego, continuar interactuando con la niña para que descubra que sus intentos comunicativos pueden tener respuesta."
      }
    },
    {
      numero: 76, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En el aula de 2 años, Pilar se encuentra jugando con una muñeca cerca a la hora de salida. Cuando su mamá llega a recogerla, Pilar le muestra la muñeca. Entonces, su mamá le dice: \"¡Qué linda! ¡Es una bebé como tú!\". Ante ello, Pilar le responde: \"¡No ya, no yeyo bebé, yeyo niña!\". Considerando el enfoque comunicativo, ¿qué intervención es pertinente para favorecer el desarrollo de la expresión oral de la niña en esta situación?",
      alternativas: {
        A: "\"Pilar, no se dice 'yeyo', se dice 'soy'. A ver, repite conmigo 'no soy bebé, soy una niña\".",
        B: "\"Pilar, entiendo que dices 'no soy una bebé, soy una niña'. Claro que sí, Pilar, tú ya eres una niña\".",
        C: "\"Pilar, las niñas grandes no dicen 'yeyo', dicen 'soy'. Tú eres grande, debes decir 'soy' en vez de 'yeyo\"."
      }
    },
    {
      numero: 77, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "José, de tres años, ha realizado un dibujo compuesto por trazos y formas circulares dispersas. ¿Cuál de las siguientes acciones es pertinente para favorecer que José continúe desarrollando su capacidad de representación?",
      alternativas: {
        A: "Proporcionarle fichas de trabajo con imágenes de personas, animales u objetos incompletos para que identifique qué partes les faltan a dichas imágenes y las dibuje.",
        B: "Después de haber realizado actividades que involucren juego libre, experiencias corporales y exploración de materiales, proponerle que las dibuje.",
        C: "Cada vez que dibuje, preguntarle qué ha querido dibujar y brindarle distintas ideas para que enriquezca su dibujo."
      }
    },
    {
      numero: 78, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente y los niños del aula de cinco años salieron a los alrededores de la IE para recolectar libros para la biblioteca del aula. Al retorno, la docente pide a los niños que dibujen la actividad realizada. Juan acompaña su dibujo con un escrito con grafías variadas y trazos separados. Luego, le muestra su dibujo a la docente. Cuando ella le pregunta qué escribió, el niño responde: \"La vecina nos regaló revistas\". Según los niveles de apropiación del sistema de escritura propuestos por Emilia Ferreiro, ¿en qué nivel se encuentra Juan?",
      alternativas: { A: "En el nivel presilábico.", B: "En el nivel silábico.", C: "En el nivel silábico alfabético." }
    },
    {
      numero: 79, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente del aula de cinco años busca favorecer la apropiación del sistema de escritura en los niños. ¿Cuál de las siguientes acciones es pertinente para dicho propósito?",
      alternativas: {
        A: "Escribir en la pizarra un comunicado corto dirigido a los padres de familia. Luego, pedir a los niños que lo transcriban a sus cuadernos de control.",
        B: "Pedir a los niños que comenten la última actividad realizada. Luego, decirles que dibujen lo que más les gustó de la actividad y que, si desean escribir, lo hagan también.",
        C: "Mostrar a los niños la forma correcta de coger el lápiz y de ejercer la presión suficiente para el trazo. Luego, plantearles actividades para que ejerciten los trazos hasta que lleguen a dominarlos."
      }
    },
    {
      numero: 80, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "Después de visitar la tienda de la localidad, los niños y la docente del aula de cinco años deciden organizar una tienda en el aula. Para ello, los niños recolectan botellas, empaques y envolturas de distintos productos. Mientras los niños ordenan la tienda, la docente recorre el aula y observa que Samuel está sujetando una envoltura y mirándola fijamente. La docente tiene la intención de aprovechar esa situación para favorecer que Samuel se aproxime a la lectura. ¿Qué acción es pertinente para dicho propósito?",
      alternativas: {
        A: "Preguntar a Samuel qué dirá en la envoltura y por qué piensa que eso es lo que dice en esta.",
        B: "Proponer a Samuel que lea las vocales que encuentra en la envoltura señalándolas, y que lo haga de izquierda a derecha.",
        C: "Decir a Samuel que, como lo ve interesado, le leerá lo que dice en la envoltura para que él repita las palabras después de ella."
      }
    },
    {
      numero: 81, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente del aula de cinco años busca favorecer el acercamiento de los niños a la lectura. Para ello, ha colocado en el respaldo de las sillas tarjetas con sus respectivos nombres y ha cambiado las sillas de lugar antes de que ellos ingresen al aula. Cuando los niños ingresan, la docente les propone que encuentren sus sillas guiándose de las tarjetas que observan en ellas. Entonces, Daniela y Damaris se acercan al mismo tiempo a la silla de Damaris. Este es el diálogo que surge a continuación:\nDaniela: ¡Ah! ¡Ya encontré mi silla!\nDamaris: ¡No, ya! ¡Esta silla es mía! Mira, ¡aquí dice \"Damaris\"!\nDaniela: ¡No, es mi silla! ¡Aquí dice \"Daniela\"!\nDamaris: ¡Lee bien! ¡Aquí dice \"DA-MA-RIS\"! (la niña lee su nombre mientras señala el escrito).\nDaniela mira desconcertada a la docente. Ante esta situación, ¿cuál de las siguientes acciones es más pertinente para favorecer el acercamiento de Daniela a la lectura?",
      alternativas: {
        A: "Preguntar a Daniela: \"¿Todavía no sabes reconocer tu nombre? ¿Te gustaría que te enseñe a reconocerlo?\". Luego, llevarla hacia su silla, señalar la tarjeta y decirle: \"Mira, aquí dice Daniela. Ahora ya puedes sentarte en tu silla\".",
        B: "Preguntar a Daniela: \"¿Hay alguna marca que te permita reconocer tu silla? ¿Qué te parece si te doy un sticker para que lo pegues en ella cuando la encuentres?\". Luego, pedir a los niños que ayuden a Daniela a encontrar su silla.",
        C: "Preguntar a Daniela: \"¿Por qué crees que ahí está escrito tu nombre? ¿Te parece si buscamos tu nombre en el cartel de asistencia?\". Después de hacerlo, añadir: \"Ahora vamos a la silla en la que está Damaris. ¿Ahí dice tu nombre? ¿En qué se parece a tu nombre? ¿En qué se diferencia?\"."
      }
    },
    {
      numero: 82, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Cuento — Las vacas que dan leche con sabor (82, 83 y 84)",
      textoLectura: "Resumen del cuento 'Las vacas que dan leche con sabor' (Esteban Cabezas): El profesor Chucrut investiga y experimenta alimentando a las vacas con dulces, pintándolas de colores y subiéndolas a un helicóptero para intentar obtener leche saborizada; tras cansarse de sus experimentos, las vacas protestan y solo dan leche en polvo.",
      enunciado: "¿Cuál de las siguientes preguntas es pertinente para que los niños identifiquen información explícita en este cuento?",
      alternativas: {
        A: "¿Para qué pintó el profesor Chucrut de color fresa a una de las vacas?",
        B: "¿Qué les parece lo que hizo el profesor Chucrut con las vacas?",
        C: "¿Con qué alimentó el profesor Chucrut a las vacas?"
      }
    },
    {
      numero: 83, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Cuento — Las vacas que dan leche con sabor (82, 83 y 84)",
      textoLectura: "Resumen del cuento 'Las vacas que dan leche con sabor' (Esteban Cabezas): El profesor Chucrut investiga y experimenta alimentando a las vacas con dulces, pintándolas de colores y subiéndolas a un helicóptero para intentar obtener leche saborizada; tras cansarse de sus experimentos, las vacas protestan y solo dan leche en polvo.",
      enunciado: "¿Cuál de las siguientes preguntas es pertinente para que los niños realicen inferencias sobre este cuento?",
      alternativas: {
        A: "¿Qué hicieron las vacas para protestar contra el profesor Chucrut?",
        B: "¿Qué creen que se merece el profesor Chucrut por lo que les hizo a las vacas?",
        C: "¿Por qué se mareó la vaca que el profesor Chucrut subió a un helicóptero?"
      }
    },
    {
      numero: 84, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Cuento — Las vacas que dan leche con sabor (82, 83 y 84)",
      textoLectura: "Resumen del cuento 'Las vacas que dan leche con sabor' (Esteban Cabezas): El profesor Chucrut investiga y experimenta alimentando a las vacas con dulces, pintándolas de colores y subiéndolas a un helicóptero para intentar obtener leche saborizada; tras cansarse de sus experimentos, las vacas protestan y solo dan leche en polvo.",
      enunciado: "¿Cuál de las siguientes preguntas es pertinente para que los niños reflexionen acerca de este cuento?",
      alternativas: {
        A: "¿Dónde vivía el profesor Chucrut? ¿Cuántos años investigó cómo hacer que las vacas den leche con sabor?",
        B: "¿Qué significará la palabra \"atontada\"? ¿Cómo lo saben?",
        C: "¿Qué parte del texto les gustó más? ¿Por qué?"
      }
    },
    {
      numero: 85, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "En el aula de cuatro años, los niños están cantando la canción \"Los patitos\". En ese contexto, la docente busca favorecer la expresión corporal y gestual de los niños al entonar dicha canción. ¿Cuál de las siguientes acciones es más pertinente para ese propósito?",
      alternativas: {
        A: "Pedirles que imaginen que son patitos y preguntarles cómo se moverían. Luego, dejarles experimentar libremente esos movimientos.",
        B: "Proporcionarles diversos elementos como los picos, las alas y las patas de los patitos. Luego, pedirles que se los pongan y canten la canción.",
        C: "Mostrarles cómo se paran, mueven su cuerpo y caminan los patitos. Luego, ensayar con ellos hasta que logren realizar los movimientos de los patitos."
      }
    },
    {
      numero: 86, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente del aula de cinco años tiene como propósito que los niños creen historias. Aprovechando que los niños están llevando a cabo el proyecto \"Hacemos un huerto\", les presenta una imagen en la que aparecen dos niños mirando sorprendidos en su huerto mientras dos conejos comen zanahorias. ¿Cuál de las siguientes acciones es pertinente para que los niños creen historias a partir de esta imagen?",
      alternativas: {
        A: "Contar a los niños que los personajes de la imagen se llaman Rosa y José, y que un día descubrieron a dos conejos comiéndose las zanahorias de su huerto. Luego, decirles que cuenten de nuevo la historia cambiando de nombre a los personajes.",
        B: "Preguntarles: \"¿Qué están haciendo los niños de la imagen? ¿Qué hacen los conejos? ¿Qué opinan de lo que hacen los conejos?\". Luego, pedirles que propongan ideas para que otros animalitos no hagan lo mismo en el huerto que están construyendo.",
        C: "Pedir a los niños que observen la imagen. Luego, preguntarles quiénes serán los personajes, en qué lugar estarán, qué creen que está sucediendo, qué habrá pasado antes y cómo quisieran que termine la historia. Finalmente, pedirles que cuenten la historia completa."
      }
    },
    {
      numero: 87, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "", tituloLectura: "", textoLectura: "",
      enunciado: "La docente del aula de cuatro años busca promover la expresión oral de los niños. ¿Cuál de las siguientes acciones es menos pertinente para ese propósito?",
      alternativas: {
        A: "Plantear a los niños que elaboren predicciones antes y durante la lectura de cuentos.",
        B: "Pedir a los niños que todos los días practiquen las canciones, poesías, rimas y trabalenguas aprendidos hasta el momento.",
        C: "Proponer a los niños que lleven al aula el juguete que más les gusta y compartan con sus compañeros por qué les gusta."
      }
    },
    {
      numero: 88, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Fragmento — El bagrecico (88, 89 y 90)",
      textoLectura: "Resumen del fragmento 'El bagrecico' (Francisco Izquierdo Ríos): En un riachuelo de la selva, un viejo bagre cuenta orgulloso que conoció el mar de joven; un bagrecito decide emprender el viaje al amanecer tras aprender el camino, mientras su madre lo busca preocupada y el anciano bagre la tranquiliza confiando en su regreso.",
      enunciado: "¿Cuál de las siguientes preguntas es pertinente para que los niños identifiquen información explícita en este fragmento?",
      alternativas: {
        A: "¿Qué será un bagrecico?",
        B: "¿Dónde vivían los peces de esta historia?",
        C: "¿Qué opinan de la decisión del bagrecico de conocer el mar?"
      }
    },
    {
      numero: 89, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Fragmento — El bagrecico (88, 89 y 90)",
      textoLectura: "Resumen del fragmento 'El bagrecico' (Francisco Izquierdo Ríos): En un riachuelo de la selva, un viejo bagre cuenta orgulloso que conoció el mar de joven; un bagrecito decide emprender el viaje al amanecer tras aprender el camino, mientras su madre lo busca preocupada y el anciano bagre la tranquiliza confiando en su regreso.",
      enunciado: "¿Cuál de las siguientes preguntas es pertinente para que los niños realicen inferencias sobre este fragmento?",
      alternativas: {
        A: "¿Cómo eran las barbas del viejo bagre?",
        B: "¿Por qué se sentía orgulloso el viejo bagre?",
        C: "¿Qué piensan de la preocupación de la mamá del bagrecico?"
      }
    },
    {
      numero: 90, subprueba: "Conocimientos Curriculares y Pedagógicos de la Especialidad", puntos: 2.5, textoClave: "",
      tituloLectura: "Fragmento — El bagrecico (88, 89 y 90)",
      textoLectura: "Resumen del fragmento 'El bagrecico' (Francisco Izquierdo Ríos): En un riachuelo de la selva, un viejo bagre cuenta orgulloso que conoció el mar de joven; un bagrecito decide emprender el viaje al amanecer tras aprender el camino, mientras su madre lo busca preocupada y el anciano bagre la tranquiliza confiando en su regreso.",
      enunciado: "¿Cuál de las siguientes preguntas es pertinente para que los niños reflexionen sobre este fragmento?",
      alternativas: {
        A: "¿Te parece bien que el bagrecico no se despidiera de su mamá antes de partir?",
        B: "¿El bagrecico le dijo a su mamá que se iba de viaje?",
        C: "¿Qué le enseñó el viejo bagre al bagrecico?"
      }
    }
  ]
});
