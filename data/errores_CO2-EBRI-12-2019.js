(function () {
  window.RESOLUCIONES = window.RESOLUCIONES || {};
  const CUAD_ID = "CO2-EBRI-12-2019";
  window.RESOLUCIONES[CUAD_ID] = window.RESOLUCIONES[CUAD_ID] || {};

  const R = {
    1: {
      correcta: "A",
      truco: "Es una pregunta literal: busca en el párrafo 2 la frase exacta 'consumidores o productores afectan el estándar de vida' y lee qué viene justo después de 'debido a'.",
      pasoAPaso: [
        "Ubica la primera oración del párrafo 2 del Texto 1: 'Nuestras decisiones más básicas como consumidores o productores afectan el estándar de vida de otras personas que habitan otros países debido a la forma en que funciona la economía global'.",
        "Observa que la pregunta pide exactamente la causa de ese hecho ('¿a qué se debe que...?').",
        "Contrasta con las opciones: la alternativa A reproduce literalmente 'A la forma en que opera la economía global'."
      ],
      porqueFallo: "La B menciona la falta de cooperación y diálogo multinacional, pero el párrafo 1 señala eso como condición para resolver problemas mundiales, no como la causa de que el consumo afecte a otros. La C menciona las brechas de geografía, lenguaje y nacionalidad del inicio del párrafo 1, que son el escenario donde nos encontramos, no la explicación económica."
    },
    2: {
      correcta: "C",
      truco: "Cuando pidan una afirmación 'inconsistente', busca la alternativa que diga exactamente lo opuesto a lo que critica la autora en el texto.",
      pasoAPaso: [
        "Revisa la postura de Martha Nussbaum en los párrafos 3 y 5: en el párrafo 3 advierte contra las normas del mercado que ven las vidas humanas como instrumentos para obtener ganancias, y en el párrafo 5 cuestiona un contexto educativo donde se prioriza 'producir futuros adultos que compitan entre sí en un mundo globalizado'.",
        "Evalúa cada alternativa frente a esa tesis: la A es consistente (párrafo 4: el pensamiento crítico vigorizado permite pensar cooperativamente para resolver problemas en común); la B también es consistente (párrafo 4: mostrar respeto o ser consciente de la diversidad no basta sin conocimientos fácticos).",
        "Detecta que la C afirma que las escuelas deben centrarse en formar estudiantes para competir entre sí según demandas económicas, lo cual contradice directamente la postura de la autora."
      ],
      porqueFallo: "Muchos docentes marcan la B porque leen rápido 'es insuficiente' y creen que contradice el respeto por la diversidad, pero en el párrafo 4 la autora dice textualmente que esto 'requiere más que una simple manifestación de principios como mostrar respeto por el otro'."
    },
    3: {
      correcta: "A",
      truco: "Para hallar la finalidad de un ejemplo en un texto argumentativo, lee la pregunta que está justo antes del ejemplo (fin del párrafo 5) y la conclusión que viene justo después (inicio del párrafo 7).",
      pasoAPaso: [
        "Lee el cierre del párrafo 5: 'Pero ¿no es acaso esperanzador pensar que sí es posible tener ese tipo de escuela?'.",
        "Lee el párrafo 6: presenta la escuela primaria fundada por Rabindranath Tagore en 1901 en la India, donde se celebraban festivales de amistad y festejos religiosos para reconocer y respetar tradiciones que no les eran propias.",
        "Lee el inicio del párrafo 7: 'Ejemplos como estos demuestran que se puede aprovechar la curiosidad natural de los niños y las niñas... fomentando el respeto por dichas tradiciones'. Eso coincide exactamente con la alternativa A."
      ],
      porqueFallo: "La B habla de 'subrayar los resultados positivos', pero el texto no evalúa mediciones ni resultados posteriores de los egresados de Tagore, sino que lo usa como prueba de que sí es posible ese modelo de escuela. La C reduce el caso solo a 'tradiciones religiosas', cuando el párrafo 6 menciona explícitamente 'distintas tradiciones étnicas y religiosas de su país y de otras naciones'."
    },
    4: {
      correcta: "C",
      truco: "Ubica el término exacto 'conocimientos fácticos' en el párrafo 4 y lee la definición que sigue después de los dos puntos.",
      pasoAPaso: [
        "En el párrafo 4 se lee: 'Es necesario que se desplieguen una gran cantidad de conocimientos fácticos: se trata de conocimientos sobre los varios subgrupos étnicos, religiosos, nacionales, que conforman la propia nación...'.",
        "Compara ese listado literal con las tres alternativas.",
        "La alternativa C ('Conocimientos sobre los diversos grupos étnicos que conforman las naciones') corresponde directamente al texto."
      ],
      porqueFallo: "La A ('regímenes del comercio internacional') y la B ('desafíos ambientales') son ejemplos de problemas globales citados en el párrafo 1, no la definición de conocimientos fácticos sobre grupos humanos del párrafo 4."
    },
    5: {
      correcta: "A",
      truco: "La idea principal debe unir los dos ejes que atraviesan todo el texto: la educación y su rol para formar ciudadanos de una nación y un mundo diversos frente a problemas globales.",
      pasoAPaso: [
        "Verifica qué tema aparece en todos los bloques del texto: en los párrafos 1 y 2 se plantean los problemas mundiales y el papel fundamental de la educación para formar 'ciudadanos del mundo'; en los párrafos 3 y 4, la tarea urgente de concebirse como parte de una nación y un mundo heterogéneos; y en los párrafos 5 al 7, cómo llevarlo a la escuela.",
        "Evalúa la alternativa A: integra la educación como base para afrontar problemas mundiales y el concebirse como integrantes de una nación y un mundo diversos.",
        "Confirma que la A abarca la totalidad del texto sin quedarse en un detalle de un solo párrafo."
      ],
      porqueFallo: "La B recoge únicamente una recomendación metodológica del último párrafo sobre aprovechar la curiosidad infantil. La C recoge una idea secundaria del tercer párrafo sobre lo que ocurre si falla la educación."
    },
    6: {
      correcta: "B",
      truco: "Lee las dos oraciones inmediatas que siguen a 'se enfrentan a una intrincada situación' en el párrafo 2; ahí la autora explica los dos polos del dilema.",
      pasoAPaso: [
        "En el párrafo 2 se indica que los países del triángulo de litio (Argentina, Bolivia y Chile) enfrentan una 'intrincada situación' y acto seguido se explican sus dos lados: por un lado, 'la conservación de los hábitats de especies naturales, como el hábitat de los flamencos, debe ser una prioridad'; por otro, 'no pueden perderse de vista los beneficios que genera' el litio.",
        "Relaciona esa tensión con el resto del texto (reducir el impacto hídrico y regular la extracción).",
        "Concluye que la alternativa B resume exactamente ambos polos de esa situación compleja."
      ],
      porqueFallo: "La A es falsa porque el texto no dice que carezcan de toda investigación sobre el litio (pide investigaciones específicas por zona hidrogeológica). La C toma un punto específico del último párrafo (financiamiento de estudios), que no es la definición de la intrincada situación planteada en el párrafo 2."
    },
    7: {
      correcta: "B",
      truco: "Para sacar la idea principal de un párrafo, pregúntate: ¿de qué se habla en el párrafo y qué es lo más importante que se afirma de ello?",
      pasoAPaso: [
        "Lee el párrafo 1 completo: presenta qué es el litio (oración 1), plantea la tesis de que su extracción pone en riesgo el ecosistema y la gran biodiversidad del altiplano según Borja Heredia (oraciones 2 y 3), y ejemplifica con los flamencos (oración 4).",
        "Observa que la oración 1 es solo presentación del tema y la oración 4 es un caso particular dentro de la biodiversidad.",
        "La idea central que engloba el párrafo es la B: la extracción de litio en el altiplano hace peligrar la gran biodiversidad de esa zona."
      ],
      porqueFallo: "La A es solo la definición introductoria de la primera oración. La C es un ejemplo específico (los flamencos como aves más afectadas) que ilustra el peligro mayor sobre toda la biodiversidad del altiplano."
    },
    8: {
      correcta: "A",
      truco: "Reemplaza la palabra 'esquilmar' por cada alternativa dentro de la frase y compárala con lo dicho en el párrafo 5 sobre las reservas de litio.",
      pasoAPaso: [
        "En el párrafo 5 la autora ya explicó el mismo dato con otras palabras: 'El litio es un material no renovable, por lo que, si se extrae indiscriminadamente, en veinte años, se puede terminar con las reservas'.",
        "En el párrafo 6 retoma exactamente esa advertencia: 'se corre el riesgo de esquilmar las reservas de litio y de arrasar con un ecosistema único'.",
        "Al sustituir 'esquilmar' por 'acabar' ('acabar las reservas de litio'), mantiene exactamente el sentido de agotar o terminar con las reservas."
      ],
      porqueFallo: "La B ('Destruir') corresponde más bien a la segunda parte de la oración ('arrasar con un ecosistema'). La C ('Malgastar') significa derrochar o gastar mal algo, no agotarlo por completo."
    },
    9: {
      correcta: "B",
      truco: "La docente habla de 'falta de imparcialidad' y 'estudios sesgados'; busca en el texto quién paga los estudios ambientales.",
      pasoAPaso: [
        "Ubica en el párrafo 6 la crítica de Borja Heredia a los mecanismos legales actuales: señala 'el hecho de que sean las propias empresas extractoras de litio las que financian los estudios de impacto ambiental'.",
        "Conecta ese conflicto de interés (quien extrae financia el estudio sobre su propio impacto) con la duda de la docente sobre la imparcialidad de la información.",
        "Marca la alternativa B."
      ],
      porqueFallo: "La A habla de mejorar la tecnología para usar menos agua dulce, y la C habla de no extrapolar estudios entre zonas distintas por su geología; ninguna de las dos explica un sesgo por conflicto de intereses."
    },
    10: {
      correcta: "C",
      truco: "Observa el título del texto ('Las víctimas del litio: los flamencos andinos') y cómo cierra el artículo: alertando sobre el daño al ecosistema del altiplano.",
      pasoAPaso: [
        "Revisa el hilo conductor de todo el texto: peligro para la biodiversidad del altiplano (párrafo 1), consumo de agua dulce y residuo ultrasalino en acuíferos únicos (párrafo 3), falta de estudios por zona y regulación (párrafos 5 y 6).",
        "Verifica cuál es la intención principal del texto informativo: dar a conocer los riesgos ecológicos de extraer litio en el altiplano.",
        "Elige la alternativa C."
      ],
      porqueFallo: "La A es errónea porque el texto no dice que los gobiernos tengan desinterés total, sino que enfrentan una situación difícil y falta rigor legal. La B es falsa porque no se describe paso a paso el proceso industrial de extracción."
    },
    11: {
      correcta: "A",
      truco: "Busca en el párrafo 3 la oración que empieza con 'Si era día de pesca...' y lee dónde iba ubicado el hermano pequeño.",
      pasoAPaso: [
        "Lee textualmente el párrafo 3 del Texto 3: 'Si era día de pesca, se iban los dos mar adentro, el hermano grande metido en el agua hasta los muslos, el pequeño encaramado en su oreja...'.",
        "Confirma la ubicación exacta durante la pesca: en la oreja de su hermano.",
        "Selecciona la alternativa A."
      ],
      porqueFallo: "La B ('En la alforja de su hermano') corresponde a cuando salían a cazar al bosque (siguiente oración del párrafo 3). La C ('Encima de la cabeza') corresponde al viaje hacia las montañas (párrafo 7)."
    },
    12: {
      correcta: "C",
      truco: "Ubica los tres hechos en los párrafos 12, 13 y 14 y ordénalos según aparecen en la narración.",
      pasoAPaso: [
        "En el párrafo 12 ocurre primero: 'Casi estaban llegando a la primera aldea, cuando oyeron un grito y después otro, y vieron que todas aquellas personitas corrían a encerrarse en sus casas'.",
        "Después, en el mismo párrafo 12, el hermano pequeño baja al suelo, se acerca a la casa más próxima y llama a la puerta para hablar con los aldeanos (hecho B).",
        "Finalmente, en el párrafo 14, el hermano grande comprende que el mundo estaba hecho a la medida de su hermano y que todos eran pequeños como él (hecho A). Por tanto, ocurrió primero la C."
      ],
      porqueFallo: "Si no se relee el párrafo 12 con calma, se confunde el momento en que llegan y oyen los gritos con el momento en que el pequeño toca la puerta."
    },
    13: {
      correcta: "A",
      truco: "Para validar una deducción, verifica qué afirmación se desprende con certeza de los hechos narrados en el párrafo 3.",
      pasoAPaso: [
        "Lee el párrafo 3: 'Nada hacía sin llevarlo consigo. Si era día de pesca, se iban los dos mar adentro... Si se trataba de cazar, salían al bosque... en busca de algún animal salvaje que les garantizara el almuerzo, o de frutas maduras y jugosas'.",
        "De ahí se deduce directamente que el hermano pequeño solía acompañar a su hermano en la búsqueda de alimentos (alternativa A).",
        "Descarta las otras opciones porque contradicen el texto."
      ],
      porqueFallo: "La B es falsa porque en el párrafo 7 el grande 'se sentía estremecer por dentro' al pisar tierras desconocidas, no sentía un 'gran temor por atravesar las montañas caminando'. La C es falsa porque el párrafo 1 dice explícitamente que 'eran felices'."
    },
    14: {
      correcta: "B",
      truco: "Rastrea los adverbios y adjetivos con los que el narrador describe las acciones del hermano pequeño a lo largo del cuento.",
      pasoAPaso: [
        "En el párrafo 5: 'el pequeño, con firmeza, le propuso a su hermano salir de casa para viajar hacia ese mundo que desconocían'.",
        "En el párrafo 8: 'Desde la cabeza del hermano, el pequeño, con determinación, señalaba los rumbos más fáciles'.",
        "En el párrafo 12: 'infló el pecho y resueltamente se acercó a la casa más próxima, llamó a la puerta'. Firmeza, determinación y resolución definen a alguien decidido (alternativa B)."
      ],
      porqueFallo: "No es suspicaz (no actúa con desconfianza ni recelo; quienes miran recelosos al inicio son los aldeanos en el párrafo 13) ni indiscreto."
    },
    15: {
      correcta: "B",
      truco: "El tema central de un cuento se define por el conflicto o viaje que transforma a los personajes al final de la historia.",
      pasoAPaso: [
        "Al inicio (párrafos 1-3), el hermano grande ve al pequeño como frágil y minúsculo, y el pequeño vive dependiente de él en una playa aislada.",
        "Al cruzar la montaña y llegar a la aldea (párrafos 12-14), descubren que todo ese mundo es del tamaño del pequeño y que el grande es 'el único gigante de este mundo', invirtiendo sus roles cuando el pequeño guía de la mano al mayor.",
        "Esa transformación se sintetiza en la alternativa B: un descubrimiento que cambia la perspectiva de dos hermanos sobre sí mismos."
      ],
      porqueFallo: "La A resume solo los tres primeros párrafos (el escenario inicial). La C es incorrecta porque el viaje no gira en torno a problemas o conflictos graves en el camino, sino al descubrimiento final."
    },
    16: {
      correcta: "A",
      truco: "Busca la opción 'NO se puede concluir' revisando el párrafo 3 y 4: para Enrique Dans, usar pizarras digitales o libros con video NO es verdadera alfabetización digital.",
      pasoAPaso: [
        "Lee los párrafos 3 y 4: el autor afirma que usar una pizarra digital igual que la de tiza o un libro digitalizado igual al de papel es 'seguir haciendo lo mismo que han hecho siempre' y ofrece 'una visión triste y restringida del uso de la tecnología digital' que afecta la alfabetización digital.",
        "Comprueba las otras alternativas: la B sí se concluye del párrafo 7 ('basándose en un solo libro de texto... trae como consecuencia que se produzca la dependencia por una sola fuente'); la C sí se concluye del párrafo 6 ('distracciones constantes, que es lo que preocupa a aquellos docentes que están de acuerdo con quitarlos').",
        "Por tanto, la afirmación falsa o no concluible es la A."
      ],
      porqueFallo: "Quien lee superficialmente ve las palabras 'libros electrónicos', 'pizarras digitales' y 'alfabetización digital' juntas y asume que el texto las relaciona positivamente, cuando el autor dice exactamente lo contrario."
    },
    17: {
      correcta: "B",
      truco: "Es una pregunta de localización directa en el párrafo 1: busca la frase 'detrás de este tipo de medidas, triunfa la absurda idea...'.",
      pasoAPaso: [
        "Lee las dos primeras oraciones del párrafo 1: 'Desde 2017, el gobierno francés prohíbe que los escolares menores de 15 años acudan a las escuelas públicas portando teléfonos móviles con pantallas táctiles (también llamados smartphones...)'.",
        "Lee la tercera oración: 'Otros docentes sostenemos que, detrás de este tipo de medidas, triunfa la absurda idea de contraponer educación y desarrollo tecnológico'.",
        "Identifica que 'este tipo de medidas' se refiere exactamente a la prohibición de smartphones en las escuelas por parte del gobierno francés (alternativa B)."
      ],
      porqueFallo: "La A menciona métodos del siglo XX, que aparecen recién en el párrafo 7. La C habla del uso de tecnología solo para entretenerse, tema del párrafo 6."
    },
    18: {
      correcta: "C",
      truco: "Para hallar el propósito de un texto argumentativo, identifica qué defiende el autor desde el inicio hasta el párrafo de cierre.",
      pasoAPaso: [
        "En el párrafo 1 critica separar educación y desarrollo tecnológico; en el párrafo 6 plantea el reto de 'integrar la tecnología en el aprendizaje'; y en el párrafo 11 concluye que es importante 'reorientar las dinámicas de las aulas, a fin de que la tecnología digital tenga un espacio en el proceso de aprender'.",
        "Contrasta con las alternativas: la C ('Resaltar la necesidad de incluir los avances del desarrollo tecnológico digital en la práctica pedagógica') recoge la tesis central del autor.",
        "Marca la alternativa C."
      ],
      porqueFallo: "La A es incorrecta porque el texto no es un listado o enumeración de beneficios. La B es parcial porque solo recoge una estrategia de verificación de fuentes de los párrafos finales."
    },
    19: {
      correcta: "B",
      truco: "Lee lo que viene inmediatamente después de los dos puntos en el párrafo 3 y la primera oración del párrafo 4.",
      pasoAPaso: [
        "En el párrafo 3 dice: 'la mayoría de escuelas pretenden seguir haciendo lo mismo que han hecho siempre: introducir un poco de tecnología aquí y allá, usar una pizarra digital que funcione igual que la pizarra de tiza... o leer un libro digitalizado, idéntico al de papel'.",
        "En el párrafo 5 retoma exactamente esa idea llamándola 'introducirla de manera anecdótica y superficial'.",
        "Por eso la respuesta correcta es la B."
      ],
      porqueFallo: "La A alude a la prohibición de smartphones del párrafo 1, no a lo que hacen dentro del aula con pizarras o libros digitales. La C afirma lo opuesto a la crítica del autor."
    },
    20: {
      correcta: "C",
      truco: "Fíjate en la clave del caso del docente: usa 'la red social que más utilicen' los estudiantes para convertirla en herramienta de investigación histórica.",
      pasoAPaso: [
        "Analiza la situación presentada: el docente toma una plataforma digital que los estudiantes ya usan cotidianamente (una red social) y la convierte en actividad de aprendizaje (investigar y contrastar biografías de personajes históricos).",
        "Ubica esa misma idea en el párrafo 6 del texto: 'El reto de la educación actual consiste en integrar la tecnología en el aprendizaje, ofreciendo a los estudiantes alternativas para usarla, y evitando que la consideren, únicamente, como una herramienta de entretenimiento'.",
        "Compara con las alternativas: la C expresa exactamente integrar las tecnologías digitales en el aprendizaje aprovechando lo que los estudiantes ya conocen."
      ],
      porqueFallo: "La A menciona solo enseñar mecanismos de búsqueda en internet, dejando fuera el aprovechamiento de herramientas digitales que los alumnos ya utilizan. La B alude a comportarse con responsabilidad en la sociedad (párrafo 4), que es más general que la estrategia didáctica descrita."
    },
    21: {
      correcta: "C",
      truco: "Busca en el párrafo 1 la oración exacta que contiene la palabra 'estratégica' y lee la oración siguiente.",
      pasoAPaso: [
        "Lee el cierre del párrafo 1 del Texto 5: 'Se trataba, además, de una cuestión estratégica. Según él, la población quechuahablante podría sentirse motivada a leer y escribir en castellano, lo que le abriría las puertas hacia la modernidad que se producía en los centros urbanos del país'.",
        "Compara palabra por palabra con las opciones.",
        "Selecciona la alternativa C."
      ],
      porqueFallo: "La A corresponde a la oración anterior (el valor identitario de alfabetizar en quechua, no el motivo estratégico respecto al castellano). La B menciona la carencia de un alfabeto estándar al inicio del párrafo."
    },
    22: {
      correcta: "B",
      truco: "Es un dato numérico puntual en el párrafo 4: ubica '101,7 millones' y lee el año que lo acompaña.",
      pasoAPaso: [
        "Ubica el inicio del párrafo 4: 'De otro lado, el despliegue presupuestal para el sector educativo, que en 1936 era de 15,7 millones de soles, fue de 101,7 millones en 1946, y llegaría a la suma de 195,1 millones en 1949'.",
        "Asocia cada cifra con su año: 15,7 millones (1936), 101,7 millones (1946) y 195,1 millones (1949).",
        "Marca la alternativa B ('En 1946.')."
      ],
      porqueFallo: "La A (1936) y la C (1949) corresponden a las otras dos cifras presupuestales citadas en la misma oración."
    },
    23: {
      correcta: "B",
      truco: "Divide el texto en sus dos grandes mitades: párrafos 1-4 (qué fue y qué medidas tuvo el proyecto indigenista) y párrafos 5-9 (resultados y límites según el censo de 1961).",
      pasoAPaso: [
        "En la primera mitad (párrafos 1 a 4) el autor explica la propuesta de Arguedas, los núcleos educativos comunales, las escuelas en haciendas y el aumento presupuestal.",
        "En la segunda mitad (párrafos 5 a 9) expone los resultados revelados por el censo de 1961 (brecha costa-sierra del 27% frente al 56%), sus causas y la reflexión final.",
        "La alternativa B ('Dar a conocer en qué consistió el proyecto educativo indigenista y cuáles fueron los resultados de su aplicación') integra ambas partes del texto."
      ],
      porqueFallo: "La A es errónea porque el autor no critica las medidas presupuestales o educativas como un fracaso, sino que destaca su aporte en el párrafo final. La C deja fuera toda la segunda mitad del texto sobre el censo de 1961 y sus resultados."
    },
    24: {
      correcta: "C",
      truco: "Para hallar lo que 'NO se puede concluir', revisa el párrafo 5 y verifica si el censo de 1961 dijo que el analfabetismo aumentó o que la brecha no se redujo.",
      pasoAPaso: [
        "Lee el párrafo 5: 'Si bien el avance con respecto al censo de 1940 no era despreciable, la cuestión era que, una vez más, la brecha en cuanto a los aprendizajes entre la costa y la sierra no se reducía: mientras que en la costa el promedio de analfabetismo en castellano era de 27%, en la sierra era de 56%'.",
        "Nota que hubo un avance respecto a 1940 y que el problema fue que la brecha costa-sierra no se redujo; en ningún momento dice que las reformas causaran un aumento del analfabetismo.",
        "Verifica que la A (párrafo 4) y la B (párrafo 1) sí se desprenden del texto, por lo que la C es la afirmación falsa."
      ],
      porqueFallo: "Un lector apresurado confunde 'la brecha no se reducía' o el alto porcentaje de 56% en la sierra con un 'aumento en el promedio de analfabetismo'."
    },
    25: {
      correcta: "A",
      truco: "Lee las dos últimas oraciones del párrafo 9; el autor usa la expresión 'Esta toma de conciencia fue quizá uno de los aportes más relevantes' para señalar su idea central.",
      pasoAPaso: [
        "Lee el párrafo 9: 'Los resultados del censo, más bien, ayudaron a comprender que la mejora de las condiciones de vida de los indígenas en el Perú necesitaba no solo de innovaciones en las estrategias educativas, sino, sobre todo, de profundas reformas socioeconómicas. Esta toma de conciencia fue quizá uno de los aportes más relevantes...'.",
        "Identifica que el núcleo del párrafo es esa conclusión: las innovaciones educativas por sí solas no bastan sin reformas socioeconómicas.",
        "Selecciona la alternativa A."
      ],
      porqueFallo: "La B recoge únicamente la primera oración del párrafo (que funciona como premisa introductoria). La C habla de las dificultades de aplicación, tema desarrollado en los párrafos 6, 7 y 8."
    },
    26: {
      correcta: "B",
      truco: "Haz el cruce de 4 primeras palabras × 4 segundas palabras = 16 combinaciones posibles, y resta las combinaciones prohibidas que empiezan con la misma letra.",
      pasoAPaso: [
        "Lista las opciones de la primera palabra y su inicial: Parque (P), Bosque (B), Jardín (J), Huerto (H).",
        "Lista las opciones de la segunda palabra y su inicial: Jubiloso (J), Hermoso (H), Bello (B), Paraíso (P).",
        "Para cada primera palabra hay 4 posibles segundas palabras, pero exactamente 1 comparte su letra inicial y queda prohibida: 'Parque Paraíso' (P-P), 'Bosque Bello' (B-B), 'Jardín Jubiloso' (J-J) y 'Huerto Hermoso' (H-H).",
        "Calcula las combinaciones válidas: 4 primeras palabras × 3 segundas palabras válidas cada una = 12 nombres distintos (alternativa B)."
      ],
      porqueFallo: "Marcar 16 (C) ocurre al multiplicar 4 × 4 olvidando la restricción de que empiecen con letra diferente. Marcar 7 (A) ocurre si se suman 4 + 3 en lugar de multiplicar."
    },
    27: {
      correcta: "A",
      truco: "En razonamiento lógico, la expresión 'por lo menos 4' equivale matemáticamente a 'mayor o igual que 4' (≥ 4), es decir, incluye al 4.",
      pasoAPaso: [
        "Revisa el dato de cada estudiante: Manuel = 4, Noelia = 5, Elmer = 3, Sara = 2.",
        "Aplica la condición 'por lo menos cuatro tardanzas' (4 o más tardanzas).",
        "Cumplen Manuel (4 ≥ 4) y Noelia (5 ≥ 4). Elmer (3) y Sara (2) tienen menos de 4. La respuesta es la A."
      ],
      porqueFallo: "Marcar 'Solo Manuel' (B) pasa cuando se confunde 'por lo menos 4' con 'exactamente 4'. Marcar 'Elmer y Sara' (C) pasa cuando se confunde 'por lo menos 4' con 'menos de 4'."
    },
    28: {
      correcta: "A",
      truco: "Empieza siempre por el único dato que tiene valor exacto en soles (25 kg de café = S/ 300) y ve hallando el precio por kilogramo de cada producto hacia atrás.",
      pasoAPaso: [
        "Paso 1 (Café): Si 25 kg de café cuestan S/ 300, entonces 1 kg de café cuesta 300 ÷ 25 = S/ 12.",
        "Paso 2 (Arroz): 12 kg de arroz cuestan igual que 9 kg de café. Como 9 kg de café valen 9 × 12 = S/ 108, entonces 12 kg de arroz = S/ 108, y 1 kg de arroz = 108 ÷ 12 = S/ 9.",
        "Paso 3 (Azúcar): 45 kg de azúcar cuestan igual que 30 kg de arroz. Como 30 kg de arroz valen 30 × 9 = S/ 270, entonces 45 kg de azúcar = S/ 270, y 1 kg de azúcar = 270 ÷ 45 = S/ 6,00 (alternativa A)."
      ],
      porqueFallo: "Marcar S/ 12,00 (B) ocurre cuando se detiene el cálculo en el precio de 1 kg de café. Marcar S/ 13,50 (C) ocurre al invertir la razón del arroz y café (hacer 12 × 12 ÷ 9 = 16 y luego 16 × 30 ÷ 45 = 10,67 o invertir en el último paso 9 × 45 ÷ 30 = 13,50)."
    },
    29: {
      correcta: "B",
      truco: "Se compra UNA bebida (es jugo O es refresco, no ambos a la vez), así que primero suma todas las bebidas disponibles y luego multiplica por 2 presentaciones.",
      pasoAPaso: [
        "Cuenta el total de bebidas distintas que ofrece el quiosco: 4 jugos (fresa, papaya, especial, surtido) + 3 refrescos (chicha, maracuyá, limonada) = 7 bebidas.",
        "Cada una de esas 7 bebidas se puede pedir en 2 presentaciones: helada o sin helar.",
        "Aplica el principio de multiplicación: 7 bebidas × 2 presentaciones = 14 pedidos distintos (alternativa B)."
      ],
      porqueFallo: "Marcar 24 (A) es el error clásico de multiplicar 4 jugos × 3 refrescos × 2 presentaciones, como si el cliente comprara un jugo y un refresco juntos. Marcar 7 (C) es contar solo las bebidas olvidando las 2 presentaciones."
    },
    30: {
      correcta: "C",
      truco: "Calcula cuántos vasos faltan para llegar a 36 niños y recuerda que en compras reales no puedes pedir medio sobre: siempre se redondea hacia arriba.",
      pasoAPaso: [
        "Calcula los vasos de gelatina que ya tiene María: 3 sobres × 6 vasos/sobre = 18 vasos de gelatina.",
        "Calcula cuántos vasos faltan para atender a los 36 niños: 36 - 18 = 18 vasos de flan necesarios.",
        "Divide los 18 vasos necesarios entre los 4 vasos que rinde cada sobre de flan: 18 ÷ 4 = 4,5 sobres. Con 4 sobres solo tendría 16 vasos (faltarían 2 niños), así que debe comprar como mínimo 5 sobres (alternativa C)."
      ],
      porqueFallo: "Marcar 4 sobres (B) ocurre al truncar 4,5 a 4 sin verificar que 18 + (4 × 4) = 34 vasos no alcanza para los 36 niños."
    },
    31: {
      correcta: "B",
      truco: "El patrón se repite exactamente cada 4 flechas; divide 30 entre 4 para saber en qué posición del ciclo quedó la flecha 30.",
      pasoAPaso: [
        "Escribe el ciclo base de 4 flechas: Posición 1 = horizontal a la derecha (→); Posición 2 = vertical hacia abajo (↓); Posición 3 = horizontal a la derecha (→); Posición 4 = vertical hacia arriba (↑).",
        "Ubica la flecha número 30 dividiendo 30 ÷ 4: da 7 ciclos completos (7 × 4 = 28 flechas) y sobran 2 flechas. Así, la flecha 29 es Posición 1 (→) y la flecha 30 es Posición 2 (↓).",
        "Las tres flechas siguientes son la 31, la 32 y la 33, que corresponden a Posición 3 (→), Posición 4 (↑) y Posición 1 (→): Horizontal a la derecha - vertical hacia arriba - horizontal a la derecha (alternativa B)."
      ],
      porqueFallo: "Marcar la A ocurre si se confunde el ciclo como de 2 flechas (→, ↓) olvidando que la cuarta flecha va hacia arriba (↑). Marcar la C ocurre si se cree que 30 es múltiplo de 4."
    },
    32: {
      correcta: "B",
      truco: "Si cada especialista está certificado en un oficio diferente, empieza asignando a quien solo hace un oficio y ve tachando ese oficio en los demás.",
      pasoAPaso: [
        "Darío solo se desempeña en 'Atención al cliente' → Darío está certificado en Atención al cliente.",
        "Zoe hace 'Atención al cliente' (ya asignado a Darío) y 'Logística' → Zoe está certificada en Logística.",
        "Fidel hace 'Albañilería', 'Atención al cliente' (Darío) y 'Logística' (Zoe) → el único oficio disponible para certificar a Fidel es Albañilería (alternativa B). (Además, Raúl tiene 'Cerrajería' solo para él y Camila se queda con 'Vigilancia')."
      ],
      porqueFallo: "Si no se empieza por Darío (que tiene un solo oficio), parecen quedar tres candidatos para albañilería (Camila, Fidel y Raúl) y se adivina al azar."
    },
    33: {
      correcta: "C",
      truco: "Primero deduce todo lo que ya se sabe con los datos iniciales y luego prueba cuál alternativa elimina la única duda restante.",
      pasoAPaso: [
        "Con las pistas iniciales: Bruno es el mayor → Bruno = 12 años. Entre las edades {6, 8, 10, 12}, el único par donde uno es el doble del otro es 12 y 6 → el de 12 (Bruno) juega ajedrez y el de 6 juega damas. Como César juega jenga, César no tiene 12 ni 6; César puede tener 8 o 10 años, y el de 6 años (damas) puede ser Andrés o Daniel.",
        "Prueba la alternativa C ('Andrés es cuatro años menor que César'): como las edades disponibles para César y Andrés son {6, 8, 10} y su diferencia debe ser 4, la única pareja posible es César = 10 años y Andrés = 6 años (damas). Por descarte, Daniel = 8 años (dominó).",
        "Quedan todas las edades y todos los juegos determinados de forma única con la C."
      ],
      porqueFallo: "La A ('Daniel no es el hermano menor') fija a Andrés = 6 (damas), pero deja sin saber si César tiene 8 o 10 años. La B ('El juego preferido de Daniel es dominó') tampoco permite saber si César tiene 8 o 10 años ni quién de Andrés o Daniel tiene 6 años."
    },
    34: {
      correcta: "C",
      truco: "Calcula el área antes y el área después; el porcentaje de incremento se calcula sobre el área inicial, no sobre el lado.",
      pasoAPaso: [
        "Calcula la superficie inicial del cuadrado de lado 2 m: Área inicial = 2 m × 2 m = 4 m².",
        "Calcula la nueva superficie del cuadrado de lado 4 m: Área nueva = 4 m × 4 m = 16 m².",
        "Halla el incremento neto de superficie: 16 m² - 4 m² = 12 m². Divide ese incremento entre el área inicial (4 m²): 12 ÷ 4 = 3, que en porcentaje equivale a 3 × 100% = 300% (alternativa C)."
      ],
      porqueFallo: "Marcar 100% (B) ocurre al comparar los lados (de 2 m a 4 m aumenta 100%) en vez de las áreas. Marcar 75% (A) ocurre al dividir el incremento entre el área nueva (12 ÷ 16 = 0,75) en vez del área inicial."
    },
    35: {
      correcta: "B",
      truco: "Cuidado con la pregunta final: pide cuántos huevos NO se vendieron del total de 200 (es decir, los malogrados + los buenos que sobraron).",
      pasoAPaso: [
        "Calcula los malogrados: 10% de 200 = 0,10 × 200 = 20 huevos malogrados (no se venden).",
        "Calcula los huevos en buen estado: 200 - 20 = 180 huevos buenos.",
        "Calcula cuántos buenos sí vendió y cuántos buenos quedaron sin vender: vendió el 80% de 180 = 144 huevos; quedaron sin vender el 20% de 180 = 36 huevos buenos.",
        "Suma todos los huevos que llevó al mercado y no se vendieron: 20 malogrados + 36 buenos sin vender = 56 huevos (alternativa B)."
      ],
      porqueFallo: "Marcar 36 (A) es la trampa más frecuente: calcular solo los huevos buenos que no se vendieron y olvidar que los 20 malogrados también formaban parte de los 200 huevos que llevó y no vendió. Marcar 60 (C) ocurre al sumar 10% + 20% = 30% de 200."
    },
    36: {
      correcta: "B",
      truco: "Descompón la regla en 3 requisitos obligatorios: (1) Alto = SÍ; (2) Tener exactamente UNA característica entre 'gordo' o 'calvo' (ni ambas, ni ninguna).",
      pasoAPaso: [
        "Evalúa la alternativa A ('alto, gordo y calvo'): cumple ser alto, pero tiene ambas características a la vez, lo cual prohíbe la regla ('Pero no debe tener estas dos últimas características a la vez'). Descartada.",
        "Evalúa la alternativa B ('alto, delgado y calvo'): cumple ser alto, no es gordo y sí es calvo (tiene solo una de las dos). Cumple exactamente la regla.",
        "Evalúa la alternativa C ('alto, delgado y melenudo'): cumple ser alto, pero no es ni gordo ni calvo. Descartada."
      ],
      porqueFallo: "Quien interpreta la 'o' como inclusiva marca la A sin leer la segunda oración que restringe explícitamente tener ambas características."
    },
    37: {
      correcta: "C",
      truco: "Une primero las parejas que van pegadas ('inmediatamente delante/detrás') y luego encájalas en los 5 puestos de la fila.",
      pasoAPaso: [
        "De la pista 1: Ariana va inmediatamente delante de Celeste, formando el bloque fijo [Ariana - Celeste], y Belén va en algún lugar delante de Ariana.",
        "De la pista 3: Dayana va inmediatamente detrás de Elisa, formando el bloque fijo [Elisa - Dayana], y Dayana va delante de Celeste.",
        "De la pista 2: Elisa no va en primer lugar (puesto 1). Como Belén debe ir delante de Ariana y Elisa no puede ser 1.ª, Belén ocupa el 1.er lugar. Luego entra el bloque [Elisa - Dayana] en los puestos 2 y 3, y el bloque [Ariana - Celeste] en los puestos 4 y 5.",
        "Verifica la fila completa (1.° al 5.°): 1.° Belén, 2.° Elisa, 3.° Dayana, 4.° Ariana, 5.° Celeste. Por tanto, Dayana va inmediatamente delante de Ariana (alternativa C)."
      ],
      porqueFallo: "Si se coloca el bloque [Elisa - Dayana] en 1.° y 2.° lugar, se viola la pista 2 ('Elisa no va en primer lugar')."
    },
    38: {
      correcta: "A",
      truco: "Para hallar la unión de dos conjuntos, suma ambos grupos y resta una vez la intersección (los 50 que contaste dos veces).",
      pasoAPaso: [
        "Calcula cuántos estudiantes gustan de al menos uno de los dos géneros: 130 (rock) + 80 (salsa) - 50 (ambos) = 160 estudiantes. (También: 80 solo rock + 30 solo salsa + 50 ambos = 160).",
        "Resta ese resultado del total de 200 encuestados para hallar los que no gustan de ninguno: 200 - 160 = 40 estudiantes (alternativa A)."
      ],
      porqueFallo: "Marcar 60 (B) ocurre al calcular (200 - 130) + (200 - 80) o restar mal. Marcar 150 (C) ocurre al hacer 200 - 50."
    },
    39: {
      correcta: "B",
      truco: "Haz una tabla rápida de 3 personas (Jesús, Elías, Carlos) × 3 jugos (fresa, papaya, surtido) y ve marcando por descarte.",
      pasoAPaso: [
        "Dato 1: Carlos pidió papaya → ni Jesús ni Elías pidieron papaya.",
        "Dato 2: Elías no pidió fresa → como tampoco pidió papaya, a Elías solo le queda surtido.",
        "Por eliminación, a Jesús le corresponde fresa. Revisa las alternativas: si Jesús pidió fresa, entonces es cierto que Jesús no pidió jugo surtido (alternativa B)."
      ],
      porqueFallo: "La A es falsa porque Elías sí pidió surtido. La C es falsa porque Jesús sí pidió fresa."
    },
    40: {
      correcta: "C",
      truco: "Busca dos personas con respuestas exactamente opuestas: una de ellas acertó las 3 (3/3) y la otra falló las 3 (0/3); la tercera persona acertó 2 y falló 1.",
      pasoAPaso: [
        "Compara las tres respuestas de Luis (V, V, F) y de Hugo (F, F, V): son completamente opuestas en las 3 preguntas. Eso demuestra que uno de ellos tiene 3 aciertos y el otro tiene 0 aciertos, mientras que Abel (F, V, V) tiene 2 aciertos y 1 error.",
        "Verifica las coincidencias de Abel (F, V, V) con cada uno: Abel coincide con Hugo en 1 respuesta (pregunta 3: V) y coincide con Luis en 2 respuestas (pregunta 2: V, pregunta 3: V).",
        "Como el que tiene 2 aciertos debe coincidir en 2 respuestas con el que acertó todo (3/3) y en 1 respuesta con el que falló todo (0/3), ¡espera! Revisa con cuidado: si Luis (V, V, F) fuera 3/3, Abel (F, V, V) tendría 2 aciertos (P2=V, P3=F falla, P1=F falla → tendría solo 1 acierto: P2=V). En cambio, si Hugo (F, F, V) es 3/3, Abel (F, V, V) acierta P1=F y P3=V (2 aciertos, 1 error) y Luis (V, V, F) falla las 3 (0 aciertos).",
        "Por lo tanto, Hugo respondió correctamente todas las preguntas (alternativa C)."
      ],
      porqueFallo: "Marcar Luis (A) es la trampa si no se comprueba cuántas respuestas acierta Abel (F, V, V) bajo cada hipótesis: bajo Luis = (V, V, F), Abel solo acertaría la 2.ª pregunta (1/3), incumpliendo que el tercero solo se equivocó en una."
    },
    41: {
      correcta: "C",
      truco: "Si el seguro cubrió el 60% del gasto, los S/ 120 que pagó Roberto representan el 40% restante.",
      pasoAPaso: [
        "Determina el porcentaje que pagó Roberto: 100% - 60% = 40% del costo total.",
        "Plantea la proporción: 40% del Total = S/ 120 → 0,40 × Total = 120.",
        "Despeja el costo total: Total = 120 ÷ 0,40 = 1200 ÷ 4 = S/ 300 (alternativa C)."
      ],
      porqueFallo: "Marcar S/ 180 (A) ocurre al calcular el 60% de 120 (72) y sumarlo (120 + 60 = 180). Marcar S/ 200 (B) ocurre al dividir 120 entre 0,60 en vez de 0,40."
    },
    42: {
      correcta: "A",
      truco: "Ordena los 4 lugares encadenados (templo → mirador → laguna → mercado) y ubica el museo en el puesto 4 de 5.",
      pasoAPaso: [
        "Con las pistas 1, 3 y 4 se obtiene una cadena estricta de cuatro lugares: 1.° Templo → 2.° Mirador → 3.° Laguna → 4.° Mercado.",
        "La pista 2 indica que el museo se visita en el penúltimo lugar (puesto 4 de los 5 lugares).",
        "Al insertar el museo en el puesto 4 dentro de esa cadena, los primeros tres puestos quedan fijos: 1.° Templo, 2.° Mirador, 3.° Laguna, 4.° Museo, 5.° Mercado.",
        "Verifica las alternativas con ese orden exacto: la laguna (3.°) se visita antes que el museo (4.°) → alternativa A."
      ],
      porqueFallo: "La B es falsa porque el templo (1.°) va antes que la laguna (3.°). La C es falsa porque el mercado (5.°) va después del museo (4.°)."
    },
    43: {
      correcta: "C",
      truco: "Dibuja un reloj de 8 asientos (1 al 8), coloca juntos a Antonio - Celia - Gloria (puestos 1, 2, 3), pon a sus parejas exactamente enfrente (5, 6, 7) y ubica a Edith y Fabio en los puestos libres (4 y 8).",
      pasoAPaso: [
        "Pista 3 ('Celia está sentada entre Antonio y Gloria'): ubica en sentido horario los asientos 1 = Antonio, 2 = Celia, 3 = Gloria.",
        "Pista 1 ('Los hermanos de una pareja se sientan frente a frente', es decir, +4 asientos): frente a Antonio (1) va Beatriz (5); frente a Celia (2) va Daniel (6); frente a Gloria (3) va Hans (7).",
        "Quedan libres los asientos 4 y 8 para Edith y Fabio. Por la pista 2 ('Beatriz, Edith y Gloria no se sientan juntas'), Edith no puede ir en el asiento 4 (junto a Gloria en el 3 y Beatriz en el 5); así que Edith va en el 8 (junto a Antonio y Hans) y Fabio va en el 4.",
        "Lee los asientos 4, 5 y 6 en orden: 4 = Fabio, 5 = Beatriz, 6 = Daniel. Quien se sienta entre Daniel y Fabio es Beatriz (alternativa C)."
      ],
      porqueFallo: "Si se coloca a Edith en el asiento 4 sin aplicar la pista 2 ('Beatriz, Edith y Gloria no se sientan juntas'), se altera quién queda entre Daniel y Fabio."
    },
    44: {
      correcta: "C",
      truco: "Representa el silogismo con conjuntos incluidos: [Conductores] dentro de [Respetan leyes] y estos dentro de [Personas pacientes].",
      pasoAPaso: [
        "Premisa 1: Todo conductor pertenece al grupo de quienes respetan las leyes de tránsito.",
        "Premisa 2: Todo el que respeta las leyes de tránsito pertenece al grupo de las personas pacientes.",
        "Por transitividad, el conjunto de conductores está totalmente contenido dentro de las personas pacientes: 'Todo conductor es una persona paciente' (alternativa C)."
      ],
      porqueFallo: "La A y la B invierten el sentido de inclusión de los conjuntos ('Todo A es B' no permite concluir 'Todo B es A')."
    },
    45: {
      correcta: "B",
      truco: "Para hallar la escala de una maqueta, convierte metros a centímetros (1 m = 100 cm) y divide la medida real entre la medida de la maqueta.",
      pasoAPaso: [
        "Convierte la altura real de la basílica a centímetros: 140 m × 100 cm/m = 14 000 cm.",
        "Divide la medida real entre la medida en la maqueta: 14 000 cm ÷ 70 cm = 200.",
        "Esto significa que la escala es 1:200, es decir, las medidas de la maqueta son 200 veces menores que las medidas reales (alternativa B)."
      ],
      porqueFallo: "Marcar 2000 veces menores (C) ocurre al multiplicar 140 × 1000 en lugar de 140 × 100 (confundiendo metros con milímetros). Marcar la mitad (A) ocurre al dividir 140 ÷ 70 sin convertir los metros."
    },
    46: {
      correcta: "A",
      truco: "Arma un cuadro de doble entrada (Varones / Mujeres vs. Cebiche / Rocoto relleno) y calcula primero el total de mujeres.",
      pasoAPaso: [
        "Halla cuántas mujeres pidieron cebiche: del total de 45 cebiches, 27 fueron para varones → 45 - 27 = 18 mujeres pidieron cebiche.",
        "Halla el total de mujeres: 18 mujeres (cebiche) + 31 mujeres (rocoto relleno) = 49 mujeres.",
        "Halla el total de varones: como hubo 14 mujeres más que varones, hay 49 - 14 = 35 varones.",
        "Suma mujeres y varones para el total de comensales: 49 + 35 = 84 comensales (alternativa A)."
      ],
      porqueFallo: "Marcar 49 (C) ocurre si se responde solo la cantidad de mujeres. Marcar 72 (B) ocurre si se confunden los 27 varones del cebiche con el total de varones (49 + 27 = 76) o se resta mal."
    },
    47: {
      correcta: "C",
      truco: "Divide el lado del triángulo grande entre el lado de una pieza (20 ÷ 5 = 4 pisos) y eleva ese número al cuadrado (4² = 16).",
      pasoAPaso: [
        "Calcula cuántas veces cabe el lado de 5 cm en el lado de 20 cm: 20 cm ÷ 5 cm = 4 segmentos por lado.",
        "Cuenta las piezas triangulares por filas desde la punta superior hasta la base de 4 segmentos: fila 1 = 1 pieza, fila 2 = 3 piezas, fila 3 = 5 piezas, fila 4 = 7 piezas.",
        "Suma las piezas de las 4 filas: 1 + 3 + 5 + 7 = 16 piezas triangulares (alternativa C)."
      ],
      porqueFallo: "Marcar 4 (A) es el error clásico de dividir solo los lados (20 ÷ 5 = 4) sin considerar que las figuras son bidimensionales (triángulos) y no segmentos lineales."
    },
    48: {
      correcta: "A",
      truco: "Trabaja de atrás hacia adelante: primero halla cuánto faltaba antes de sembrar ajíes y frejoles, y luego reconstruye la mitad del terreno.",
      pasoAPaso: [
        "En la segunda etapa sembró ajíes en la mitad de lo que faltaba y frejoles en los 6 m² restantes. Como esos 6 m² son la otra mitad, lo que faltaba sembrar antes de la segunda etapa era 6 + 6 = 12 m².",
        "En la primera etapa sembró zanahorias en la mitad del terreno total y tomates en 10 m², dejando esos 12 m² sin sembrar. Por tanto, la segunda mitad del terreno total mide 10 m² (tomates) + 12 m² (resto) = 22 m².",
        "Como las zanahorias ocupan exactamente la otra mitad del terreno, Pedro utilizó 22 m² para sembrar zanahorias (alternativa A)."
      ],
      porqueFallo: "Marcar 44 m² (C) es calcular el área total del terreno (22 + 22 = 44 m²) en vez de solo el área de zanahorias. Marcar 32 m² (B) ocurre al sumar 22 + 10."
    },
    49: {
      correcta: "C",
      truco: "Duplica el segundo trueque (3 gallinas = 1 cuy + 1 conejo) para igualar los 2 cuyes del primer trueque y restarlos.",
      pasoAPaso: [
        "Escribe las dos equivalencias: (1) 5 gallinas = 2 cuyes + 1 conejo; (2) 3 gallinas = 1 cuy + 1 conejo.",
        "Multiplica por 2 la equivalencia (2): 6 gallinas = 2 cuyes + 2 conejos.",
        "Compara ambas con '2 cuyes': si 5 gallinas = 2 cuyes + 1 conejo y 6 gallinas = 2 cuyes + 2 conejos, la diferencia de 1 gallina equivale exactamente a 1 conejo.",
        "Por lo tanto, 6 gallinas se intercambian por 6 conejos (alternativa C)."
      ],
      porqueFallo: "Si no se multiplica por 2 la segunda ecuación para eliminar los cuyes, se suelen sumar o restar coeficientes directamente llegando a 3 o 4."
    },
    50: {
      correcta: "B",
      truco: "Convierte 'Todos los peruanos son patriotas' en una flecha lógica: [Es peruano → Es patriota]. La única inferencia válida con negaciones es invertir la flecha negando ambos lados: [No es patriota → No es peruano].",
      pasoAPaso: [
        "Formula la regla: Si X es peruano, entonces X es patriota.",
        "Evalúa la A ('Si Andrés es patriota entonces es peruano'): falso, porque personas de otros países también pueden ser patriotas.",
        "Evalúa la C ('Si Andrés no es peruano entonces no es patriota'): falso por la misma razón.",
        "Evalúa la B ('Si Andrés no es patriota entonces no es peruano'): verdadero, porque si fuera peruano tendría que ser patriota obligatoriamente."
      ],
      porqueFallo: "La A (afirmar el consecuente) y la C (negar el antecedente) son las dos falacias formales más comunes en lógica proposicional."
    },
    51: {
      correcta: "C",
      truco: "Cuando el propósito pedagógico es que los niños 'construyan sus propias explicaciones', primero deben expresar sus hipótesis/ideas previas (dibujando o dialogando) ANTES de recibir información científica o láminas.",
      pasoAPaso: [
        "Analiza la situación: Pedro pregunta '¿qué respiran los peces?, ¿agua?' y la docente quiere que los niños construyan sus propias explicaciones.",
        "Evalúa la A: la docente da directamente la respuesta cerrada ('en el agua hay oxígeno... poseen branquias') y pide repetirla. No hay construcción propia.",
        "Evalúa la B: muestra primero una lámina anatómica del sistema respiratorio, condicionando las respuestas antes de recoger sus saberes.",
        "Evalúa la C: primero dibujan cómo se imaginan que respiran los peces (hipótesis propias), dialogan con sus compañeros y finalmente buscan información para complementar. Esa secuencia respeta la indagación en Inicial."
      ],
      porqueFallo: "Muchos docentes marcan la B porque ven las palabras 'planteen hipótesis', pero plantean hipótesis DESPUÉS de ver la lámina anatómica, cuando en indagación las hipótesis se formulan antes de consultar fuentes."
    },
    52: {
      correcta: "B",
      truco: "En el Ciclo I (0 a 2 años), la atención respetuosa prioriza las necesidades fisiológicas básicas del bebé (sueño) sin forzarlo a comer dormido ni interrumpir su descanso.",
      pasoAPaso: [
        "Identifica la situación: Gabriela (8 meses) se está quedando dormida justo antes de comer.",
        "Evalúa la A ('vamos a comer rapidito') y la C ('no te vayas a dormir; mira que ya vas a comer'): ambas fuerzan al bebé a postergar su necesidad de sueño para cumplir el horario adulto.",
        "Evalúa la B: verbaliza lo que siente la niña ('veo que tienes sueño'), atiende su descanso y le anticipa con calma que comerá al despertar. Esto favorece su desarrollo óptimo y seguridad afectiva."
      ],
      porqueFallo: "Se suele pensar erróneamente que el horario de alimentación es rígido y debe cumplirse antes de dormir, pasando por alto el respeto a los ritmos biológicos del lactante."
    },
    53: {
      correcta: "A",
      truco: "En los cuidados cotidianos del Ciclo I (cambio de ropa/pañal), el enfoque de atención temprana exige anticipar verbalmente, esperar la disposición corporal del bebé y narrar cada acción.",
      pasoAPaso: [
        "Analiza el caso: Micaela (6 meses) está en su segundo día de cuna y su tono muscular se tensa al cambiarle la ropa.",
        "Evalúa la B (poner un móvil para distraerla) y la C (cambiarla rápidamente): ambas tratan el cuerpo del bebé de forma mecánica sin construir vínculo ni comunicación.",
        "Evalúa la A: anticipa lo que va a ocurrir, espera un momento a que se disponga y describe sus acciones mientras la cambia. Esto brinda previsibilidad y confianza."
      ],
      porqueFallo: "La C parece atractiva por querer 'acortar el malestar', pero cambiarla rápido y sin aviso incrementa la inseguridad y tensión corporal del bebé."
    },
    54: {
      correcta: "B",
      truco: "Cuando los niños predicen un resultado ('¡Se mezclarán!') y al experimentar ocurre exactamente lo contrario ('ambos líquidos se separan'), se produce un conflicto cognitivo.",
      pasoAPaso: [
        "Identifica la secuencia en el aula: los niños tienen la idea previa de que al juntar y remover aceite con vinagre se van a mezclar.",
        "La docente les pide verter ambos en un vaso transparente y remover; al ver que se separan, su idea previa entra en contradicción con la evidencia observada.",
        "Ese desequilibrio entre lo que creían y lo que comprueban corresponde al conflicto cognitivo (alternativa B)."
      ],
      porqueFallo: "La transferencia (A) sería aplicar lo aprendido a una nueva situación; la metacognición (C) sería reflexionar sobre cómo aprendieron o qué pasos siguieron."
    },
    55: {
      correcta: "C",
      truco: "Para que los niños 'construyan sus propias explicaciones' tras el conflicto cognitivo, deben volver a observar el fenómeno y formular sus propias ideas entre pares, no escuchar una clase teórica.",
      pasoAPaso: [
        "Evalúa la A: la docente redacta un texto con gráficos explicando por qué se separan y se los lee (les da la respuesta hecha).",
        "Evalúa la B: la docente da una explicación molecular sobre partículas que no se atraen (transmisión directa del adulto).",
        "Evalúa la C: propone volver a revolver, observar detalladamente y compartir sus propias ideas sobre por qué ocurre la separación. Esto promueve la construcción de explicaciones."
      ],
      porqueFallo: "La A puede parecer didáctica por incluir gráficos sencillos, pero sigue siendo el adulto quien entrega la explicación ya elaborada en vez de guiar a los niños a formular la suya."
    },
    56: {
      correcta: "A",
      truco: "En la imagen ambos niños tienen exactamente 5 bolitas, pero Kevin hizo 5 bolitas grandes y Eduardo 5 bolitas pequeñas; creer que hay 'más' por ser más grandes muestra que falta el principio de abstracción.",
      pasoAPaso: [
        "Observa la imagen: en el recuadro de Kevin hay 5 bolitas grandes y en el de Eduardo hay 5 bolitas muy pequeñas.",
        "Revisa qué evalúa cada principio del conteo de Gelman y Gallistel: el orden estable es recitar siempre la misma secuencia numérica; la correspondencia término a término es asignar una palabra-número a cada objeto; la abstracción consiste en comprender que la cantidad de elementos de un conjunto es independiente de las cualidades físicas de los objetos (tamaño, color, forma).",
        "Como Kevin y Eduardo creen que Kevin tiene 'más bolitas' por el tamaño grande de su plastilina, evidencian no haber alcanzado aún el principio de abstracción (alternativa A)."
      ],
      porqueFallo: "Algunos confunden esta situación con conservación de la cantidad (Piaget), pero entre las alternativas de principios del conteo la única que explica abstraer el número prescindiendo del tamaño físico del objeto es la abstracción."
    },
    57: {
      correcta: "A",
      truco: "Según el enfoque de movimiento libre y autonomía (Emmi Pikler / CNEB Ciclo I), el adulto prepara un espacio seguro, observa cerca con disponibilidad y solo interviene si el niño lo solicita o necesita.",
      pasoAPaso: [
        "Analiza la situación: Valentina (18 meses) ya camina y toma la iniciativa de subir una escalera de madera dispuesta en el aula.",
        "Evalúa la B: tomarla de la mano y subir y bajar varias veces reemplaza su iniciativa por la conducción directa del adulto.",
        "Evalúa la C: detenerla para poner cojines interrumpe su acción y le transmite inseguridad sobre su propia capacidad.",
        "Evalúa la A: dejarla subir sola, permanecer cerca y actuar solo si lo pide o requiere respeta su iniciativa y fortalece su autonomía."
      ],
      porqueFallo: "La B suele marcarse por sobreprotección o idea tradicional de 'enseñar a subir', cuando el desarrollo motor autónomo exige que el niño conquiste el movimiento por sí mismo."
    },
    58: {
      correcta: "C",
      truco: "Si un bebé de 11 meses está conquistando la postura de pie y quiere pararse durante el cambio de pañal, respetar su desarrollo motor significa cambiarlo de pie adecuándose a su postura.",
      pasoAPaso: [
        "Identifica el hito motor de Javier (11 meses): ha empezado a ponerse de pie y busca practicar esa postura.",
        "Evalúa la A (acostarlo y darle un juguete para distraerlo) y la B (esperar a que se duerma): ambas evitan su postura activa para comodidad del adulto.",
        "Evalúa la C: cambiarle el pañal adecuándose a la postura de pie en la que él se encuentra respeta su iniciativa motriz y evita luchas corporales."
      ],
      porqueFallo: "La A es una práctica habitual en el hogar, pero en pedagogía del Ciclo I distraer al bebé para someterlo a una postura pasiva que rechaza no respeta su desarrollo motor."
    },
    59: {
      correcta: "C",
      truco: "Ante un error de pronunciación evolutivo en 3 años ('paque' por 'parque'), nunca corrijas en público ni pidas repetir; devuelve el modelo correcto dentro de una respuesta natural y sigue la conversación.",
      pasoAPaso: [
        "Analiza lo dicho por Jimena (3 años): 'Fui al paque con mi tía'.",
        "Evalúa la A (pedir a los compañeros que digan cómo se dice) y la B ('se dice parque; no paque'): ambas interrumpen la comunicación, exponen el error y cortan la espontaneidad oral.",
        "Evalúa la C: valida lo contado, pronuncia naturalmente 'parque' dentro de su frase ('Así que fuiste al parque con tu tía...') y hace una pregunta abierta para que siga hablando."
      ],
      porqueFallo: "La B parece amable porque empieza diciendo 'Es lindo lo que cuentas', pero inmediatamente corrige explícitamente ('se dice parque; no paque'), lo cual frena la expresión oral."
    },
    60: {
      correcta: "B",
      truco: "La 'aproximación a la lectura' en Inicial se fomenta dando libertad para elegir libros de interés, explorarlos cómodamente y atender sus pedidos de lectura en voz alta.",
      pasoAPaso: [
        "Revisa el propósito: promover la aproximación a la lectura durante la exploración de la biblioteca en 5 años.",
        "Evalúa la A ('señalen las letras que conozcan y las lean en voz alta'): reduce la lectura a reconocimiento aislado de letras.",
        "Evalúa la C (la docente elige los libros y los va cambiando uno por uno): quita la elección libre y convierte el momento en revisión mecánica.",
        "Evalúa la B: cada niño elige el libro que desea, se pone cómodo para leerlo y la docente lee a quien se lo pida."
      ],
      porqueFallo: "La A confunde aproximación a la lectura con enseñanza fonética o deletreo de letras sueltas."
    },
    61: {
      correcta: "C",
      truco: "Yaquelín pregunta qué significa 'aguarda', escucha la explicación en contexto ('No puedo darles goma ahora... solo demoraré un momento') y concluye: '¡Tengo que esperar!'.",
      pasoAPaso: [
        "Lee el intercambio final: Yaquelín no conocía el significado de la palabra 'aguarda'.",
        "A partir de las pistas del contexto situacional dadas por la docente (esperar unos minutos mientras termina con otro grupo), Yaquelín infiere su significado ('¡Tengo que esperar!').",
        "Esto corresponde exactamente al desempeño de oralidad 'Deduce el significado de una palabra por el contexto' (alternativa C)."
      ],
      porqueFallo: "No emite ninguna opinión valorativa (A) ni realiza comparaciones o ejemplos (B)."
    },
    62: {
      correcta: "B",
      truco: "Los niños se apropian del sistema de escritura cuando escriben por sí mismos en situaciones reales y con un propósito comunicativo auténtico (como registrar un préstamo de libro).",
      pasoAPaso: [
        "Evalúa la A ('repasen las palabras con plumón') y la C ('transcriban a sus cuadernos'): ambas son actividades mecánicas de trazado o copia sin producción propia ni propósito comunicativo.",
        "Evalúa la B: los niños escriben su propio nombre al lado del libro que toman prestado para llevar el control real de préstamos de la biblioteca.",
        "Escribir por sí mismos con una función social real favorece directamente la apropiación del sistema de escritura (alternativa B)."
      ],
      porqueFallo: "Copiar listas (C) o repasar letras punteadas (A) ejercita la motricidad fina, pero no permite que el niño piense cómo funciona el sistema de escritura."
    },
    63: {
      correcta: "B",
      truco: "Para favorecer la 'expresión creativa' en arte, los niños deben elegir libremente qué representar de su vivencia y con qué materiales hacerlo, sin moldes ni copias fieles.",
      pasoAPaso: [
        "Evalúa la A ('que elaboren un dibujo... lo más parecido posible'): impone realismo o copia fiel, limitando la expresión personal.",
        "Evalúa la C ('Darles siluetas... para que las delineen y decoren con papel embolillado'): es una manualidad estereotipada con plantillas cerradas.",
        "Evalúa la B: dibujar lo que más les gustó de la visita usando los materiales que deseen respeta su libertad expresiva y creativa."
      ],
      porqueFallo: "Las siluetas con embolillado (C) son actividades motoras tradicionales, pero no desarrollan expresión creativa propia."
    },
    64: {
      correcta: "C",
      truco: "La pregunta pide la acción que NO favorece la expresión oral: interrumpir a un niño emocionado para corregirlo y hacerlo repetir corta su fluidez comunicativa.",
      pasoAPaso: [
        "Analiza la situación: Antonia (4 años) cuenta con entusiasmo que fue a la fiesta de su prima y jugó con burbujas gigantes.",
        "Verifica que la A (preguntar en qué consiste y ofrecer materiales de apoyo) y la B (dejarla narrar espontáneamente y responder preguntas) sí promueven su expresión oral.",
        "Identifica la C como la acción inadecuada: detener su relato cada vez que pronuncia mal una palabra para hacerla repetir bloquea la comunicación."
      ],
      porqueFallo: "Si no se lee el 'NO' en mayúsculas del enunciado, se suele marcar la A o la B."
    },
    65: {
      correcta: "C",
      truco: "Preparar una entrevista es una actividad de oralidad: el foco pedagógico está en formular y seleccionar preguntas pertinentes al propósito comunicativo, no en hacer micrófonos de cartón.",
      pasoAPaso: [
        "Evalúa la A: se desvía hacia una manualidad (elaborar cámaras o micrófonos con material reusable).",
        "Evalúa la B: la docente da una sola pregunta ya hecha y hace hablar solo al niño más fluido, excluyendo a los demás.",
        "Evalúa la C: recoge las preguntas propuestas por los niños y los orienta a seleccionar las que responden al propósito de la entrevista, involucrándolos en la planificación oral."
      ],
      porqueFallo: "La A es un distractor muy común porque en Inicial se suele dramatizar con micrófonos, pero eso no desarrolla la competencia de expresión oral."
    },
    66: {
      correcta: "A",
      truco: "Mira la imagen de lo que escribió Saida para 'Saida' (2 sílabas: Sai-da o 3: Sa-i-da): hizo una cadena larga de unos 9 o 10 trazos parecidos a letras sin relación con la cantidad de sílabas ni sonidos de su nombre.",
      pasoAPaso: [
        "Observa la escritura de Saida en la imagen: aparecen múltiples grafías (alrededor de 9 trazos tipo B, e, t, a, m, n, o, i, u) que ocupan todo el ancho, sin correspondencia entre cada letra y una sílaba o fonema de 'Saida'.",
        "En los niveles de Emilia Ferreiro, escribir grafías variadas sin correspondencia sonora (silábica ni fonética) corresponde al nivel presilábico (alternativa A)."
      ],
      porqueFallo: "En el nivel silábico (B) Saida habría escrito 2 o 3 letras (una por cada sílaba de Sa-i-da); en el silábico alfabético (C) ya aparecerían letras pertinentes combinadas con sílabas (como S-A-I-D o S-I-D-A)."
    },
    67: {
      correcta: "B",
      truco: "Para ayudar a un niño en nivel presilábico a avanzar en su escritura, haz que compare su propia producción escrita con un modelo estable significativo (el cartel de su nombre).",
      pasoAPaso: [
        "Evalúa la A ('repase las letras varias veces con el dedo índice') y la C ('contornee con bolitas de papel, semillas, lanas'): ambas trabajan percepción táctil/motora pero no generan conflicto cognitivo sobre qué letras van y cuántas son.",
        "Evalúa la B: pedirle que ubique su nombre en los carteles del aula, lo compare con lo que ella escribió e identifique las diferencias la lleva a reflexionar sobre el sistema de escritura."
      ],
      porqueFallo: "Decorar el nombre con semillas o lana (C) es una práctica muy extendida pero meramente motora; no ayuda a comprender la relación entre oralidad y escritura."
    },
    68: {
      correcta: "B",
      truco: "Una pregunta de nivel literal ('información explícita') se responde leyendo directamente una oración del cuento sin deducir ni opinar.",
      pasoAPaso: [
        "Busca en el texto de Frederick la oración sobre la flor: 'Y cuando les habló de los trigos amarillos, de las dulces uvas verdes y de una hermosa flor azul llamada “pervinca”...'.",
        "La respuesta ('azul') está escrita literalmente en el texto → la pregunta B ('¿De qué color es la flor llamada pervinca?') evalúa información explícita."
      ],
      porqueFallo: "La A ('¿Qué querrá decir bayas?') pide deducir el significado de una palabra por contexto (nivel inferencial). La C ('¿Qué les parece que...?') pide una opinión o juicio valorativo (nivel crítico/reflexivo)."
    },
    69: {
      correcta: "C",
      truco: "Para inferir un rasgo de personalidad de un personaje ('¿Cómo era Frederick?'), el niño debe juntar pistas de sus acciones en el cuento porque ningún párrafo dice 'Frederick era solidario/creativo'.",
      pasoAPaso: [
        "Evalúa la A ('¿Dónde vivían los ratoncitos?'): es literal, el primer párrafo dice explícitamente 'en un muro de piedra'.",
        "Evalúa la B ('¿Les gustó esta historia? ¿Por qué?'): es valoración personal o reflexión sobre el texto.",
        "Evalúa la C ('¿Cómo era Frederick en el cuento? ¿Por qué dicen eso?'): exige deducir características del personaje a partir de lo que hace y dice en la historia (nivel inferencial)."
      ],
      porqueFallo: "La B suele confundirse con inferencia porque incluye un '¿Por qué?', pero preguntar si les gustó el cuento es una apreciación personal, no una deducción de información implícita del texto."
    },
    70: {
      correcta: "A",
      truco: "Las preguntas de reflexión (nivel crítico) invitan al niño a juzgar, opinar o tomar postura sobre las acciones de los personajes ('¿Qué piensan de...?').",
      pasoAPaso: [
        "Evalúa la B ('¿Por qué los ratoncitos aplaudieron a Frederick al final?'): se deduce directamente de la escena en que recita su poema y los alegra.",
        "Evalúa la C ('¿Qué recogieron los ratoncitos...?'): es literal del primer párrafo ('maíz, trigo y bayas').",
        "Evalúa la A ('¿Qué piensan de lo que hacía Frederick en el cuento?'): pide que los niños valoren y opinen sobre la actitud de Frederick frente al trabajo de los demás."
      ],
      porqueFallo: "La B pregunta por una causa dentro de la trama, mientras que la A abre el juicio valorativo del lector sobre el actuar del personaje."
    },
    71: {
      correcta: "C",
      truco: "A los 18 meses el niño se comunica señalando; la intervención docente que impulsa el lenguaje oral consiste en ponerle palabras a su gesto confirmando lo que quiere.",
      pasoAPaso: [
        "Evalúa la A ('debe pedirlo por su nombre'): le exige una habilidad verbal que aún está desarrollando y puede frustrar su comunicación.",
        "Evalúa la B (entregarle el objeto en silencio): valida el gesto pero pierde la oportunidad de enriquecer su vocabulario oral.",
        "Evalúa la C: coger el objeto señalado, preguntarle si es el que desea y nombrarlo modela el lenguaje en un intercambio comunicativo real."
      ],
      porqueFallo: "La B parece respetuosa porque atiende rápido el pedido, pero omite el andamiaje verbal necesario para favorecer la expresión oral."
    },
    72: {
      correcta: "A",
      truco: "A los 2 años es normal pronunciar 'feyo' por 'feo'; la docente valida su emoción, modela la palabra correctamente en su pregunta y la invita a conversar.",
      pasoAPaso: [
        "Evalúa la B ('¿Quién dijo feyo? No has sido tú'): niega o ridiculiza su expresión.",
        "Evalúa la C ('se dice feo. Repite conmigo: Fee-oo'): convierte una expresión espontánea en un ejercicio fonético artificial.",
        "Evalúa la A ('Andrea, ¿estás diciendo que algo es feo? ¿Es así? ¿Qué es?'): acoge su intención, devuelve el modelo adulto 'feo' de forma natural y abre el diálogo."
      ],
      porqueFallo: "La C es el error clásico de tratar el habla de 2 años como terapia de repetición silábica en vez de conversación significativa."
    },
    73: {
      correcta: "B",
      truco: "Cuando un niño de 3 años intenta vestirse solo pero se pone los zapatos al revés, no lo avergüences ni lo compares: ayúdalo a sentir la incomodidad física para que descubra el error y apóyalo.",
      pasoAPaso: [
        "Evalúa la A ('eres un niño grande... ponte bien los zapatos'): lo presiona y le pide corregir sin darle pistas de cómo darse cuenta.",
        "Evalúa la C (poner a otro niño como ejemplo): fomenta la comparación entre pares.",
        "Evalúa la B: pedirle que camine para notar si está cómodo le permite descubrir por sí mismo el efecto de ponerlos al revés y luego recibir apoyo para ajustarlos."
      ],
      porqueFallo: "La A apela al cliché de 'ya eres grande', que no brinda soporte real para construir autonomía."
    },
    74: {
      correcta: "B",
      truco: "El osito de peluche es un objeto transicional que da seguridad emocional a Carla (3 años); nunca se lo quites ni lo apartes, intégralo en la invitación al grupo.",
      pasoAPaso: [
        "Evalúa la A ('Guardaré tu osito y te lo devolveré a la hora de salida'): le arrebata su fuente de seguridad emocional en plena adaptación.",
        "Evalúa la C ('Vamos a sentarlo en ese estante'): separa a la niña de su objeto de apego antes de que esté lista.",
        "Evalúa la B ('pregúntale a tu osito si quiere estar con nosotros. Nosotros tenemos muchas ganas de trabajar con ustedes'): acepta su vínculo con el oso y tiende un puente lúdico y afectuoso hacia el grupo."
      ],
      porqueFallo: "La C parece suave porque dice que el osito la cuidará desde el estante, pero sigue forzando la separación física del objeto transicional."
    },
    75: {
      correcta: "C",
      truco: "El diálogo gira en torno a una palabra en quechua ('atoq') y la cosmovisión andina sobre el zorro como guardián del cerro valorada en un aula de la costa: eso es diálogo intercultural.",
      pasoAPaso: [
        "Identifica los elementos del caso: Hugo viene de una comunidad andina, comparte vocabulario quechua ('atoq') y saberes culturales de su pueblo, y la docente los legitima y dialoga con los demás niños de la costa.",
        "Relaciona con los enfoques transversales del CNEB: el Enfoque Intercultural promueve el intercambio equitativo y el respeto por las diversas identidades culturales y lenguas originarias.",
        "Selecciona la alternativa C."
      ],
      porqueFallo: "El Enfoque Inclusivo (A) se refiere a atender las diversas capacidades o condiciones de los estudiantes eliminando barreras de aprendizaje, no al diálogo entre culturas y lenguas."
    },
    76: {
      correcta: "B",
      truco: "En la resolución constructiva de conflictos en Inicial, el docente no dicta la solución: facilita que los niños expresen qué pasó, cómo se sienten y propongan un acuerdo.",
      pasoAPaso: [
        "Evalúa la A: la docente decide unilateralmente los turnos ('ella les asignará un turno a cada uno'), quitándoles la oportunidad de resolver el conflicto.",
        "Evalúa la C: los envía a otros juegos y sermonea sobre dar buen ejemplo, evadiendo el conflicto sin resolverlo.",
        "Evalúa la B: escucha ambas versiones, ayuda a identificar emociones y guía a Sonia y Pedro para que lleguen a un acuerdo mutuo."
      ],
      porqueFallo: "La A suele marcarse porque asignar turnos parece justo y rápido, pero resuelve el problema desde la autoridad adulta sin desarrollar autonomía moral en los niños."
    },
    77: {
      correcta: "A",
      truco: "La metacognición en la planificación de un proyecto ocurre cuando los niños revisan sus propias propuestas y evalúan su viabilidad según el tiempo y los recursos disponibles.",
      pasoAPaso: [
        "Evalúa la B: es la docente quien escoge, organiza temporalmente y explica sus razones (metacognición del docente, no de los niños).",
        "Evalúa la C: la docente decide que son demasiadas y los manda a votar sin reflexionar por qué unas son viables y otras no.",
        "Evalúa la A: les lee sus propuestas, pregunta si creen poder hacer todas y los invita a seleccionar según tiempo y recursos, haciéndolos reflexionar sobre su propio plan."
      ],
      porqueFallo: "Votar (C) es un mecanismo democrático, pero no implica reflexión metacognitiva sobre las propias capacidades, tiempos y recursos."
    },
    78: {
      correcta: "A",
      truco: "Fíjate en la conclusión a la que llegan los niños al final del diálogo guiado: '¡Y los otros niños tampoco podrían leer!' / '¡Porque nos sirven a todos!'. Eso es el bien común.",
      pasoAPaso: [
        "Sigue el hilo de preguntas de la docente: lleva a Edgar y Daniel a pensar qué pasaría con sus libros favoritos y con los libros que les gustan a Mariana y Pedro si aparecieran rotos.",
        "Daniel concluye: '¡Porque nos sirven a todos!'.",
        "Comprender que los materiales del aula son recursos compartidos que benefician a toda la comunidad corresponde a aproximarse a la noción de bien común (alternativa A)."
      ],
      porqueFallo: "En el diálogo no se acuerdan reglas escritas ni sanciones (B) ni se pide pegar o reparar la hoja arrancada (C)."
    },
    79: {
      correcta: "C",
      truco: "El enfoque inclusivo busca adaptar el entorno para que el estudiante participe con la mayor autonomía posible, sin sobreprotegerlo ni bajarle las expectativas de aprendizaje.",
      pasoAPaso: [
        "Evalúa el comentario de Sandra (A): asignar un compañero cada día para alcanzarle útiles crea dependencia y la limita.",
        "Evalúa el comentario de Gladis (B): darle actividades más sencillas reduce las expectativas de logro en vez de darle apoyos accesibles.",
        "Evalúa el comentario de Martha (C): colocar puntos de apoyo espaciales en el aula elimina barreras del entorno para que Jazmín se ubique y desplace por su cuenta."
      ],
      porqueFallo: "La A suele parecer solidaria, pero en educación inclusiva sustituir la autonomía del estudiante por asistencia constante es una barrera actitudinal."
    },
    80: {
      correcta: "A",
      truco: "Una atención respetuosa en los cuidados corporales valida lo que siente el niño, explica el beneficio del cuidado con afecto y pide su participación sin sobornos ni amenazas.",
      pasoAPaso: [
        "Evalúa la B ('te daré una sorpresita'): usa premios o chantaje material para lograr obediencia.",
        "Evalúa la C ('no te voy a obligar. Pero... tus amiguitos ya no van a querer jugar contigo'): descuida su higiene y usa el rechazo social como amenaza.",
        "Evalúa la A ('sé que no te gusta... pero si la limpiamos podrás respirar mejor. ¿Lo hacemos juntas?'): empatiza, explica el porqué y promueve su participación activa."
      ],
      porqueFallo: "Premiar con 'sorpresitas' (B) es conductismo externo que no respeta al niño como sujeto ni le ayuda a comprender el cuidado de su cuerpo."
    },
    81: {
      correcta: "A",
      truco: "A los 24 meses (2 años) los niños están aprendiendo a convivir; ante un conflicto en la mesa, el adulto explica con calma cómo afecta su conducta a sus compañeros sin aislarlo.",
      pasoAPaso: [
        "Evalúa la B: pedir paciencia a los niños que lloran deja sin límite claro la acción de Santiago.",
        "Evalúa la C: retirarlo de la mesa lo excluye de la experiencia social de comer juntos.",
        "Evalúa la A: explicarle a Santiago que sus compañeros lloran porque no les gusta que les quiten su comida ayuda a construir empatía y normas básicas de convivencia."
      ],
      porqueFallo: "La C suele marcarse creyendo que a los 24 meses debe comer aislado, pero el enunciado indica que justamente se busca que comparta la mesa con otros niños."
    },
    82: {
      correcta: "B",
      truco: "Distingue los 3 usos del número: Cardinal = cantidad ('cuántas pelotas'); Ordinal = posición ('segundo o al último'); Nominal = etiqueta o código de identificación ('calle Lima 215').",
      pasoAPaso: [
        "Analiza la intervención de Eva: 'cuántas pelotas hay en la caja' → indica cantidad (uso cardinal).",
        "Analiza la intervención de Javier: 'calle Lima 215' → el número identifica una vivienda como un nombre o código, no indica que haya 215 casas dentro de su casa (uso nominal).",
        "Analiza la intervención de Marcela: 'segundo o al último' → indica orden de llegada (uso ordinal)."
      ],
      porqueFallo: "Se suele confundir nominal con ordinal; recuerda que 'nominal' viene de 'nombre' (DNI, placa de auto, número de camiseta, dirección de casa)."
    },
    83: {
      correcta: "A",
      truco: "Iván entrega exactamente un plato a cada persona ('Este es para Karen, este para Carlo, este para Rocío y este para mí'): esa relación uno a uno es correspondencia término a término.",
      pasoAPaso: [
        "Observa la acción de Iván (4 años): empareja cada elemento de un conjunto (platos) con un elemento del otro conjunto (compañeros de mesa) sin repetir ni omitir.",
        "Ese emparejamiento exacto uno a uno define el principio de correspondencia término a término (alternativa A)."
      ],
      porqueFallo: "Iván ni siquiera está recitando números (por lo que no es orden estable) ni contando objetos distintos en un mismo grupo (abstracción)."
    },
    84: {
      correcta: "A",
      truco: "Para promover la resolución de problemas matemáticos en Inicial, plantea preguntas abiertas sobre los datos del problema y deja que los niños prueben y elijan sus propias estrategias de reparto.",
      pasoAPaso: [
        "Evalúa la B: la docente ya les indica la estrategia ('repártanse hasta que todos tengan la misma cantidad').",
        "Evalúa la C: la docente resuelve el reparto por ellos ('Repartir tres cartas a cada niño').",
        "Evalúa la A: pregunta cuántos son y cuántas cartas hay, plantea el reto ('¿Qué hacemos para que todos tengan la misma cantidad?') y deja que pongan en práctica sus propuestas."
      ],
      porqueFallo: "La B parece abierta por la pregunta final sobre la carta sobrante, pero en el primer paso ya les dijo cómo repartir."
    },
    85: {
      correcta: "A",
      truco: "En Inicial, la clasificación auténtica parte de agrupaciones libres donde los propios niños eligen su criterio (tamaño, color, tipo) y luego verbalizan por qué agruparon así.",
      pasoAPaso: [
        "Evalúa la B (cajas etiquetadas por la docente) y la C (dar la definición y un ejemplo de cómo juntar): en ambas el criterio clasificatorio lo impone el adulto.",
        "Evalúa la A: pedirles que agrupen según lo deseen y luego preguntarles por qué los agruparon de ese modo permite que construyan y expliquen su propio criterio."
      ],
      porqueFallo: "Las cajas etiquetadas (B) convierten la clasificación en una tarea de emparejamiento o seguimiento de consignas del docente."
    },
    86: {
      correcta: "C",
      truco: "A los 4 años los niños aún no leen la hora en el reloj; construyen la noción de tiempo ordenando secuencias vividas y usando nociones temporales como 'antes' y 'después'.",
      pasoAPaso: [
        "Evalúa la A: usar un reloj de manecillas para controlar horas exactas corresponde a primaria, no a niños de 4 años.",
        "Evalúa la B: muestra imágenes ya ordenadas por la docente y solo pide describirlas, sin que los niños establezcan relaciones temporales.",
        "Evalúa la C: pide dibujar una actividad de su jornada y ordenarla junto con ellos empleando los términos 'antes' o 'después'."
      ],
      porqueFallo: "La B es tentadora porque incluye imágenes ordenadas de la jornada, pero al entregarlas ya ordenadas los niños no construyen la secuencia temporal."
    },
    87: {
      correcta: "B",
      truco: "Fíjate en las palabras clave del juego: seguir indicaciones como 'avanza', 'adelante', 'atrás' para desplazarse hacia un punto desarrolla relaciones espaciales.",
      pasoAPaso: [
        "Identifica el eje del juego 'Le pongo la chompa a mi silla': tres niños dan consignas de desplazamiento ('avanza', 'adelante', 'atrás') y uno se orienta en el espacio con los ojos vendados.",
        "Dar y seguir indicaciones de ubicación y desplazamiento desarrolla directamente la competencia de establecer relaciones espaciales (alternativa B)."
      ],
      porqueFallo: "Aunque tenga los ojos vendados, el propósito del juego no es describir texturas al tacto (A), sino orientarse mediante consignas espaciales."
    },
    88: {
      correcta: "A",
      truco: "Lee con lupa la pregunta que cierra el enunciado: '¿Cuál de los siguientes procesos de aprendizaje promueve la docente principalmente con su intervención?' y observa la pregunta final tras el logro: 'Muy bien. Cuéntame, ¿cómo hiciste para que la bolita ruede?'.",
      pasoAPaso: [
        "Analiza toda la intervención: primero la docente guía con preguntas para que Cristina observe el tramo elevado y ensaye soluciones; luego, cuando Cristina ya logró que la bolita ruede, le pregunta '¿cómo hiciste para que la bolita ruede?'.",
        "Esa pregunta final lleva a la niña a tomar conciencia y verbalizar el procedimiento o estrategia que utilizó para resolver el problema, lo cual corresponde a la metacognición (alternativa A)."
      ],
      porqueFallo: "Muchos docentes marcan conflicto cognitivo (B) porque al inicio la bolita se detiene y Cristina está contrariada, pero el conflicto ya existía antes de que interviniera la docente; la intervención docente culmina haciendo que Cristina reflexione sobre cómo lo logró (metacognición)."
    },
    89: {
      correcta: "A",
      truco: "Fernando dice '1, 2, 3, 4, 5' siempre en el mismo orden aunque cuente dos veces el mismo objeto: falla en correspondencia uno a uno, pero domina el orden estable de la serie.",
      pasoAPaso: [
        "Observa qué hace bien Fernando: recita la secuencia numérica '1, 2, 3, 4, 5' respetando siempre el orden convencional sin saltarse ni invertir números.",
        "Observa qué hace mal: cuenta dos veces un mismo objeto (eso muestra que aún no domina la correspondencia término a término).",
        "Por lo tanto, el principio que SÍ evidencia haber alcanzado es el de orden estable (alternativa A)."
      ],
      porqueFallo: "Marcar correspondencia término a término (C) es leer al revés la pregunta: contar un mismo objeto dos veces demuestra justamente que NO ha alcanzado la correspondencia término a término."
    },
    90: {
      correcta: "B",
      truco: "Pamela dice 'yo tengo 5 carros y tú solo tienes 3' para comparar cantidades totales: expresar cuántos elementos tiene un conjunto es el uso cardinal del número.",
      pasoAPaso: [
        "Identifica qué representan el '5' y el '3' en el diálogo: la cantidad total de carritos que posee cada niño.",
        "Usar el número para cuantificar elementos y comparar cantidades ('tengo más') corresponde al uso cardinal (alternativa B)."
      ],
      porqueFallo: "El uso ordinal (A) indicaría posición en una fila o carrera (1.°, 2.°, 3.°); el nominal (C) sería un código o etiqueta identificadora."
    }
  };

  Object.keys(R).forEach((num) => {
    window.RESOLUCIONES[CUAD_ID][Number(num)] = R[num];
  });
})();
