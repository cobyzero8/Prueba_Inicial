(function () {
  window.RESOLUCIONES = window.RESOLUCIONES || {};
  const CUAD_ID = "CO2-EBRI-12-2019";
  window.RESOLUCIONES[CUAD_ID] = window.RESOLUCIONES[CUAD_ID] || {};

  const R = {
    1: {
      correcta: "A",
      truco: "Ubica en el segundo párrafo qué explica cómo nuestras decisiones económicas impactan en otros países.",
      pasoAPaso: [
        "Revisa el segundo párrafo: 'Nuestras decisiones más básicas como consumidores o productores afectan el estándar de vida de otras personas que habitan otros países debido a la forma en que funciona la economía global'.",
        "Identifica la causa directa señalada por la autora: el funcionamiento de la economía global.",
        "Elige la alternativa A."
      ],
      porqueFallo: "La B alude a una condición necesaria para resolver problemas globales, y la C nombra brechas que el texto menciona en el primer párrafo, no la causa de ese impacto económico directo."
    },
    2: {
      correcta: "C",
      truco: "Busca la opción que contradiga la crítica de Nussbaum a formar personas enfocadas solo en competir por ganancias.",
      pasoAPaso: [
        "Revisa el tercer y quinto párrafo, donde la autora cuestiona centrarse en normas del mercado o en 'producir' adultos que compitan entre sí.",
        "Compara con la alternativa C, que propone que las escuelas se centren en formar estudiantes para competir según demandas económicas.",
        "Marca la C como afirmación inconsistente con su postura."
      ],
      porqueFallo: "La A coincide con el cuarto párrafo sobre el pensamiento crítico cooperativo; la B coincide con la idea de que el respeto o reconocimiento por sí solo no basta sin conocimientos fácticos."
    },
    3: {
      correcta: "A",
      truco: "Fíjate para qué introduce la autora la escuela fundada por Rabindranath Tagore en 1901.",
      pasoAPaso: [
        "Lee el sexto párrafo y el inicio del séptimo, justo después de preguntarse si es posible tener una escuela así.",
        "Observa que muestra cómo niños aprendieron costumbres y tradiciones de otros grupos distintos a los suyos.",
        "Selecciona la alternativa A."
      ],
      porqueFallo: "La B exagera o generaliza como conclusión de éxito amplio lo que en el texto funciona como un ejemplo concreto de posibilidad formativa; la C reduce el ejemplo solo a convivencia religiosa."
    },
    4: {
      correcta: "C",
      truco: "Revisa el cuarto párrafo donde se enumeran los 'conocimientos fácticos' sobre grupos humanos.",
      pasoAPaso: [
        "Ubica en el cuarto párrafo la mención a conocimientos sobre subgrupos étnicos, religiosos y nacionales.",
        "Compara las alternativas con esa enumeración literal del texto.",
        "Elige la C."
      ],
      porqueFallo: "Las alternativas A y B mencionan temas del primer párrafo (comercio internacional y desafíos ambientales), no los conocimientos fácticos sobre subgrupos de una nación."
    },
    5: {
      correcta: "A",
      truco: "La idea principal resume el eje central de todo el texto: educación + ciudadanía global/diversa frente a problemas comunes.",
      pasoAPaso: [
        "Integra el rol de la educación (segundo y tercer párrafo) y la necesidad de comprender la diversidad para abordar problemas globales.",
        "Verifica que la alternativa A abarque tanto la función de la educación como la mirada hacia la diversidad del mundo.",
        "Marca la A."
      ],
      porqueFallo: "La B corresponde a una idea secundaria del cierre sobre niños y relatos; la C describe un riesgo o norma del mercado, no la tesis central del texto."
    },
    6: {
      correcta: "B",
      truco: "Lee el segundo párrafo y observa la tensión entre proteger hábitats/agua y aprovechar los beneficios del litio.",
      pasoAPaso: [
        "Identifica en el segundo párrafo que se debe priorizar la conservación de hábitats (como el de los flamencos) sin perder de vista los beneficios e impactos hídricos de la minería.",
        "Relaciona esa tensión con la expresión 'intrincada situación'.",
        "Elige la alternativa B."
      ],
      porqueFallo: "La A contradice el texto (sí hay transición energética y estudios, aunque se cuestiona extrapolarlos o cómo se financian); la C aborda solo un aspecto legal del último párrafo."
    },
    7: {
      correcta: "B",
      truco: "Identifica qué resume mejor todo el primer párrafo, más allá de un dato aislado.",
      pasoAPaso: [
        "Lee el primer párrafo: define el litio, advierte el riesgo al ecosistema de extracción y concreta que la biodiversidad del altiplano peligra.",
        "Comprueba que la B resume el problema central del párrafo.",
        "Selecciona la B."
      ],
      porqueFallo: "La A es solo una definición inicial del metal; la C es un detalle específico (los flamencos como aves más afectadas) subordinado al peligro de la biodiversidad."
    },
    8: {
      correcta: "A",
      truco: "Sustituye la palabra en el contexto: 'esquilmar las reservas de litio' en veinte años por extracción indiscriminada.",
      pasoAPaso: [
        "Lee la frase completa en el quinto párrafo: 'en veinte años, se puede terminar con las reservas' / 'esquilmar las reservas'.",
        "Identifica qué palabra equivale a agotar o terminar con las reservas.",
        "Elige la A ('Acabar')."
      ],
      porqueFallo: "'Destruir' se asocia más a 'arrasar con un ecosistema'; 'malgastar' significa usar sin provecho, no agotar o terminar las reservas."
    },
    9: {
      correcta: "B",
      truco: "Busca en el texto qué genera duda o posible sesgo en los estudios ambientales.",
      pasoAPaso: [
        "Revisa el sexto párrafo donde se señala que las mismas empresas extractoras financian los estudios de impacto ambiental.",
        "Conecta ese dato con el comentario de la docente sobre la falta de imparcialidad o posible sesgo.",
        "Marca la B."
      ],
      porqueFallo: "La A trata sobre el uso y recuperación de agua dulce; la C se refiere a extrapolar datos de una zona a otra por las diferencias hidrogeológicas."
    },
    10: {
      correcta: "C",
      truco: "Determina la intención global del artículo: informar sobre los riesgos ecológicos de extraer litio en el altiplano.",
      pasoAPaso: [
        "Revisa todo el recorrido del texto: empieza con el riesgo al ecosistema y los flamencos, detalla impactos hídricos/salinos y cierra con alertas sobre reservas y biodiversidad.",
        "Identifica la alternativa que recoge ese propósito expositivo/informativo central.",
        "Elige la C."
      ],
      porqueFallo: "La A es demasiado parcial (no se limita a cuestionar desinterés); la B es incorrecta porque el texto no explica un procedimiento técnico paso a paso de extracción."
    },
    11: {
      correcta: "A",
      truco: "Ubica en el tercer párrafo dónde iba el hermano pequeño cuando salían a pescar.",
      pasoAPaso: [
        "Lee el tercer párrafo: 'Si era día de pesca, se iban los dos mar adentro, el hermano grande metido en el agua hasta los muslos, el pequeño encaramado en su oreja...'.",
        "Verifica la ubicación exacta.",
        "Marca la A."
      ],
      porqueFallo: "La alforja era al cazar en el bosque; encima de la cabeza iba durante el viaje/caminata por las tierras y la montaña."
    },
    12: {
      correcta: "C",
      truco: "Ordena cronológicamente los tres hechos al llegar cerca de la aldea.",
      pasoAPaso: [
        "Revisa los últimos párrafos: primero oyen un grito y otro al llegar a la primera aldea, luego el hermano pequeño baja y llama a la puerta, y finalmente el grande comprende la realidad.",
        "Identifica cuál ocurrió primero entre las tres opciones.",
        "Elige la C."
      ],
      porqueFallo: "La A ocurre al final cuando el grande comprende; la B ocurre después de oír los gritos y encerrarse los aldeanos."
    },
    13: {
      correcta: "A",
      truco: "Deduce a partir de lo que hacían juntos al pescar y cazar para conseguir comida.",
      pasoAPaso: [
        "Lee el tercer párrafo: 'Nada hacía sin llevarlo consigo' tanto al pescar como al cazar o buscar frutos para el almuerzo.",
        "Deduce que solía acompañarlo en la búsqueda de alimentos.",
        "Selecciona la A."
      ],
      porqueFallo: "El texto no dice que el hermano grande tuviera gran temor por caminar en las montañas ni que estuvieran tristes en la playa (al inicio dice que eran felices)."
    },
    14: {
      correcta: "B",
      truco: "Observa cómo actúa el hermano pequeño al proponer el viaje, guiar en la subida y acercarse a la casa.",
      pasoAPaso: [
        "Revisa expresiones como 'con firmeza' le propuso salir, 'con determinación' señalaba rumbos y 'resueltamente se acercó' a llamar a la puerta.",
        "Resume ese rasgo de personalidad.",
        "Marca la B ('Es decidido')."
      ],
      porqueFallo: "No se muestra suspicaz (desconfiado) ni indiscreto; su actitud es firme, resuelta y decidida."
    },
    15: {
      correcta: "B",
      truco: "Piensa en el giro final de la historia cuando llegan a la aldea y entienden su tamaño en ese mundo.",
      pasoAPaso: [
        "Observa cómo el relato culmina con el descubrimiento de que ese mundo está a la medida del hermano pequeño y cambia cómo ambos se ven.",
        "Compara con las opciones y elige la que capta ese cambio de perspectiva.",
        "Elige la B."
      ],
      porqueFallo: "La A solo resume el inicio en la playa; la C centra el relato en problemas del viaje, cuando el clímax está en el descubrimiento al llegar a la aldea."
    },
    16: {
      correcta: "A",
      truco: "Atento al 'NO se puede concluir': identifica qué afirmación contradice el tercer y cuarto párrafo.",
      pasoAPaso: [
        "Lee el tercer párrafo: usar pizarras digitales como pizarra de tiza sin polvo o libros digitalizados como los de papel es una visión restringida y superficial, no un verdadero proceso de alfabetización digital.",
        "Detecta que la A afirma lo contrario de lo que sostiene el autor.",
        "Marca la A."
      ],
      porqueFallo: "La B y la C sí se alinean con lo planteado por el autor sobre la dependencia de un solo libro y la preocupación por distracciones."
    },
    17: {
      correcta: "B",
      truco: "Revisa el primer párrafo y ubica el hecho concreto mencionado al inicio.",
      pasoAPaso: [
        "Lee el primer párrafo: desde 2017, el gobierno francés prohíbe a menores de 15 años llevar smartphones a escuelas públicas, y el autor critica que así triunfa contraponer educación y tecnología.",
        "Identifica ese hecho en las alternativas.",
        "Elige la B."
      ],
      porqueFallo: "La A y la C son interpretaciones o generalizaciones distintas del hecho concreto señalado en el primer párrafo."
    },
    18: {
      correcta: "C",
      truco: "Identifica la meta argumentativa del texto: integrar con sentido pedagógico la tecnología digital en la escuela.",
      pasoAPaso: [
        "Revisa la postura del autor a lo largo del texto: critica excluir o usar superficialmente la tecnología y propone integrarla para verificar fuentes y aprender reflexivamente.",
        "Elige la alternativa que expresa ese propósito principal.",
        "Marca la C."
      ],
      porqueFallo: "La A no es el eje central (no es una simple lista de beneficios) y la B solo recoge una parte de los últimos párrafos."
    },
    19: {
      correcta: "B",
      truco: "Lee el tercer párrafo justo después de 'seguir haciendo lo mismo que han hecho siempre'.",
      pasoAPaso: [
        "Observa que los dos puntos explican qué hacen: poner un poco de tecnología aquí y allá, como pizarras o libros digitalizados sin cambiar la práctica.",
        "Relaciona eso con un uso superficial y anecdótico.",
        "Elige la B."
      ],
      porqueFallo: "La A habla de prohibir smartphones y la C contradice la crítica del autor a la falta de transformación digital."
    },
    20: {
      correcta: "C",
      truco: "Conecta el uso de redes sociales que los chicos ya manejan para investigar personajes históricos con el reto de integrar tecnología al aprendizaje.",
      pasoAPaso: [
        "Analiza el caso del docente: usa redes sociales conocidas por los estudiantes para investigar y contrastar fuentes sobre personajes históricos.",
        "Relaciónalo con la idea del sexto párrafo sobre integrar la tecnología en el aprendizaje más allá del entretenimiento.",
        "Marca la C."
      ],
      porqueFallo: "La A menciona la necesidad de enseñar mecanismos de búsqueda en general, y la B enfatiza el comportamiento responsable/alfabetización digital, mientras la C captura directamente integrar tecnologías conocidas en actividades de aprendizaje."
    },
    21: {
      correcta: "C",
      truco: "Busca en el primer párrafo por qué era 'estratégico' empezar alfabetizando en quechua.",
      pasoAPaso: [
        "Lee el primer párrafo: la alfabetización en quechua motivaría a leer y escribir en castellano, abriendo las puertas hacia la modernidad de los centros urbanos.",
        "Ubica esa razón estratégica en las opciones.",
        "Elige la C."
      ],
      porqueFallo: "La A señala la afirmación de identidad cultural, y la B menciona la falta de alfabeto estándar/materiales, no el motivo estratégico de vincular con el castellano y la modernidad."
    },
    22: {
      correcta: "B",
      truco: "Busca en el cuarto párrafo la cifra de '101,7 millones' y el año correspondiente.",
      pasoAPaso: [
        "Lee el cuarto párrafo: 'que en 1936 era de 15,7 millones de soles, fue de 101,7 millones en 1946...'.",
        "Verifica el año exacto.",
        "Marca la B ('En 1946.')."
      ],
      porqueFallo: "1936 corresponde a 15,7 millones y 1949 corresponde a 195,1 millones."
    },
    23: {
      correcta: "B",
      truco: "Observa la estructura completa del texto: medidas del proyecto indigenista y luego balances/resultados según el censo de 1961.",
      pasoAPaso: [
        "Revisa la progresión del texto: origen con Arguedas y medidas desde 1945, expansión de escuelas/presupuesto, y limitaciones/resultados vistos en el censo de 1961.",
        "Selecciona la opción que abarca tanto lo que consistió como sus resultados.",
        "Elige la B."
      ],
      porqueFallo: "La A es demasiado negativa/parcial (no es una crítica destructiva) y la C omite los resultados y límites del censo de 1961."
    },
    24: {
      correcta: "C",
      truco: "Fíjate en el 'NO se puede concluir': revisa qué dice el quinto párrafo sobre el censo de 1961.",
      pasoAPaso: [
        "Lee el quinto párrafo: el censo de 1961 mostró limitaciones y que la brecha costa-sierra no se reducía (27% vs. 56% de analfabetismo en castellano), pero no afirma que las reformas causaran un aumento del analfabetismo.",
        "Identifica la C como conclusión indebida.",
        "Marca la C."
      ],
      porqueFallo: "La A se respalda en el cuarto párrafo sobre el presupuesto de los años 40; la B se respalda en el primer párrafo sobre la propuesta de Arguedas."
    },
    25: {
      correcta: "A",
      truco: "Lee el último párrafo completo y fíjate en la lección final que deja el proyecto indigenista.",
      pasoAPaso: [
        "Revisa el último párrafo: señala que mejorar las condiciones de vida de los indígenas requería no solo innovaciones educativas, sino sobre todo profundas reformas socioeconómicas.",
        "Busca la alternativa que recoja esa conclusión central del cierre.",
        "Elige la A."
      ],
      porqueFallo: "La B es un dato de apoyo dentro del párrafo, y la C resume obstáculos ya tratados en párrafos anteriores."
    },
    26: {
      correcta: "B",
      truco: "Haz el conteo por parejas (primera palabra, segunda palabra) y descarta las que empiecen con la misma letra inicial.",
      pasoAPaso: [
        "Primera palabra (4): Parque (P), Bosque (B), Jardín (J), Huerto (H). Segunda palabra (4): Jubiloso (J), Hermoso (H), Bello (B), Paraíso (P).",
        "Total sin restricción = 4 × 4 = 16; con restricción de distinta letra inicial, cada una de las 4 primeras tiene 3 opciones válidas (por ejemplo, Parque no puede ir con Paraíso).",
        "Calcula 4 × 3 = 12 nombres distintos (B)."
      ],
      porqueFallo: "16 olvida la condición de empezar con letra diferente; 7 resulta de sumar o restar incorrectamente las opciones."
    },
    27: {
      correcta: "A",
      truco: "'Por lo menos cuatro' significa 4 o más (≥ 4).",
      pasoAPaso: [
        "Revisa las tardanzas: Manuel (4), Noelia (5), Elmer (3), Sara (2).",
        "Selecciona a quienes tienen 4 o más: Manuel y Noelia.",
        "Marca la A."
      ],
      porqueFallo: "La B excluye a Noelia (que tiene 5); la C toma a quienes tienen menos de 4."
    },
    28: {
      correcta: "A",
      truco: "Empieza por el dato con precio en soles (café) y avanza hacia atrás en cadena.",
      pasoAPaso: [
        "25 kg de café = S/ 300 → 1 kg de café = S/ 12 → 9 kg de café = S/ 108.",
        "12 kg de arroz cuestan igual que 9 kg de café (S/ 108) → 1 kg de arroz = S/ 9 → 30 kg de arroz = S/ 270.",
        "45 kg de azúcar cuestan igual que 30 kg de arroz (S/ 270) → 1 kg de azúcar = 270 ÷ 45 = S/ 6,00 (A)."
      ],
      porqueFallo: "S/ 12,00 es el precio de 1 kg de café; S/ 13,50 surge de multiplicar o dividir en sentido inverso."
    },
    29: {
      correcta: "B",
      truco: "Cuenta primero cuántas bebidas distintas hay en total y luego multiplica por las 2 presentaciones.",
      pasoAPaso: [
        "Hay 4 jugos + 3 refrescos = 7 bebidas diferentes.",
        "Cada una puede pedirse helada o sin helar (2 presentaciones).",
        "Multiplica 7 × 2 = 14 pedidos distintos (B)."
      ],
      porqueFallo: "7 cuenta solo los sabores sin considerar helada o sin helar; 24 surge de multiplicar 4 × 3 × 2 en lugar de sumar 4 + 3 primero."
    },
    30: {
      correcta: "C",
      truco: "Calcula primero cuántos vasos rinde la gelatina y resta ese total a los 36 niños.",
      pasoAPaso: [
        "3 sobres de gelatina × 6 vasos = 18 vasos.",
        "Faltan 36 - 18 = 18 vasos para completar los 36 niños.",
        "Cada sobre de flan rinde 4 vasos: 18 ÷ 4 = 4,5 → se necesitan como mínimo 5 sobres (C)."
      ],
      porqueFallo: "4 sobres solo darían 16 vasos (18 + 16 = 34 vasos, faltarían 2 niños); 3 sobres darían 12 vasos."
    },
    31: {
      correcta: "B",
      truco: "Identifica el ciclo de 4 flechas y observa en qué parte del ciclo cae la 30.",
      pasoAPaso: [
        "Ciclo de 4: (1) horizontal derecha, (2) vertical abajo, (3) horizontal derecha, (4) vertical arriba.",
        "30 = 7 ciclos completos (28 flechas) + 2 flechas adicionales: la 29 es horizontal derecha y la 30 es vertical abajo.",
        "Las tres siguientes (31, 32 y 33) corresponden a las posiciones 3, 4 y 1 del ciclo: horizontal derecha, vertical arriba, horizontal derecha (B)."
      ],
      porqueFallo: "Si se cuenta mal el residuo de 30 ÷ 4, se adelanta o atrasa una posición en el ciclo de 4."
    },
    32: {
      correcta: "B",
      truco: "Cada especialista está certificado en un oficio distinto; busca qué oficio tiene un solo especialista certificado o qué persona es la única certificada en uno de ellos.",
      pasoAPaso: [
        "Observa los oficios: cerrajería solo aparece en Raúl → Raúl está certificado en cerrajería.",
        "Vigilancia solo aparece en Camila y Raúl (ya ocupado) → Camila está certificada en vigilancia.",
        "Queda albañilería para Fidel (B) y atención al cliente para Darío (único en ese oficio) o Zoe."
      ],
      porqueFallo: "Camila y Raúl ya quedan asignados a vigilancia y cerrajería respectivamente."
    },
    33: {
      correcta: "C",
      truco: "Prueba qué dato adicional fija sin ambigüedad las edades (6, 8, 10, 12) y los juegos.",
      pasoAPaso: [
        "Bruno = 12 (mayor); César = jenga. El doble de edad entre ajedrez y damas solo puede ser (12 y 6) o (8 y 4, no hay de 4), así que ajedrez = 12 (Bruno) y damas = 6.",
        "Si Andrés es 4 años menor que César, las edades posibles de César (6, 8, 10) con Andrés ≥ 6 obligan a César = 10 y Andrés = 6 (damas).",
        "Así queda Daniel = 8 y todo el cuadro determinado de forma única (C)."
      ],
      porqueFallo: "La A deja dudas entre 8 y 10 para César; la B no fija las edades de César y Andrés."
    },
    34: {
      correcta: "C",
      truco: "Calcula el área inicial y el área nueva; el porcentaje de incremento es (Área nueva - Área inicial) ÷ Área inicial × 100%.",
      pasoAPaso: [
        "Área inicial = 2 m × 2 m = 4 m².",
        "Área nueva = 4 m × 4 m = 16 m².",
        "Incremento = (16 - 4) ÷ 4 = 12 ÷ 4 = 3 → 300% (C)."
      ],
      porqueFallo: "100% es duplicar el área (pasar a 8 m²), pero aquí el área se cuadruplica (4 veces), lo que equivale a un aumento del 300%."
    },
    35: {
      correcta: "B",
      truco: "Separa los malogrados, calcula los buenos y luego halla el 20% de los buenos que no se vendió.",
      pasoAPaso: [
        "De 200 huevos, el 10% (20) están malogrados y 180 están en buen estado.",
        "Vende el 80% de 180 = 144 huevos; no vende el 20% de 180 = 36 huevos en buen estado.",
        "Total no vendidos (buenos no vendidos + malogrados) = 36 + 20 = 56 huevos (B)."
      ],
      porqueFallo: "36 cuenta solo los huevos en buen estado que no se vendieron y olvida los 20 malogrados que tampoco se vendieron."
    },
    36: {
      correcta: "B",
      truco: "Revisa la regla 'o excluyente': debe ser alto, y tener una (y solo una) de las dos: gordo o calvo.",
      pasoAPaso: [
        "Condición 1: ser alto.",
        "Condición 2: ser gordo o ser calvo, pero no ambos a la vez.",
        "Un bimbuense alto, delgado (no gordo) y calvo cumple ambas condiciones (B)."
      ],
      porqueFallo: "La A tiene ambos (gordo y calvo), lo cual está prohibido; la C no cumple ni ser gordo ni ser calvo."
    },
    37: {
      correcta: "C",
      truco: "Arma la secuencia paso a paso desde las pistas de posiciones contiguas.",
      pasoAPaso: [
        "Pista 1: ... Belén ... Ariana - Celeste (Ariana inmediatamente delante de Celeste).",
        "Pista 3: Elisa - Dayana ... Celeste (Dayana inmediatamente delante de Celeste o antes de Celeste).",
        "Como Elisa no va en primer lugar y Dayana va delante de Celeste y detrás de Elisa, el orden resulta Belén, Elisa, Dayana, Ariana, Celeste → Dayana va inmediatamente delante de Ariana (C)."
      ],
      porqueFallo: "Con el orden obtenido, Belén va delante de Elisa y Elisa va delante de Dayana/Ariana/Celeste."
    },
    38: {
      correcta: "A",
      truco: "Resta la intersección (50) para hallar cuántos prefieren al menos uno de los dos géneros y réstalo de 200.",
      pasoAPaso: [
        "Solo rock = 130 - 50 = 80; solo salsa = 80 - 50 = 30; ambos = 50.",
        "Les gusta al menos uno = 80 + 30 + 50 = 160 estudiantes.",
        "No les gusta ninguno = 200 - 160 = 40 estudiantes (A)."
      ],
      porqueFallo: "60 o 150 resultan de sumar mal los conjuntos o de no restar correctamente la intersección de 50."
    },
    39: {
      correcta: "B",
      truco: "Asigna el dato seguro primero (Carlos = papaya) y deduce el resto por eliminación.",
      pasoAPaso: [
        "Carlos = papaya. Quedan fresa y surtido para Elías y Jesús.",
        "Elías no pidió fresa → Elías = surtido.",
        "Por lo tanto, Jesús = fresa, lo que significa que Jesús no pidió jugo surtido (B)."
      ],
      porqueFallo: "Elías sí pidió surtido (la A es falsa) y Jesús sí pidió fresa (la C es falsa)."
    },
    40: {
      correcta: "C",
      truco: "Compara las respuestas de Hugo y Luis: fíjate en cuáles coinciden y en cuáles se oponen.",
      pasoAPaso: [
        "Hugo responde (F, F, V) y Luis responde (V, V, F): son exactamente opuestas en las tres preguntas.",
        "Si uno acertó todo (3/3) y otro falló todo (0/3), uno de ellos es el de 3/3 y el otro el de 0/3; Abel (F, V, V) coincide en 2 con Luis y en 1 con Hugo, por lo que Abel es quien falló en 1 (2/3).",
        "Entre Hugo y Luis, Hugo es quien respondió correctamente todas las preguntas según la clave (C)."
      ],
      porqueFallo: "Si se asigna mal cuál de los dos opuestos tiene 3/3 o se confunde con Abel, se elige otra letra."
    },
    41: {
      correcta: "C",
      truco: "Si el seguro pagó el 60%, Roberto pagó el 40% del total.",
      pasoAPaso: [
        "40% del costo total = S/ 120.",
        "10% del costo total = 120 ÷ 4 = S/ 30.",
        "100% del costo total = 30 × 10 = S/ 300 (C)."
      ],
      porqueFallo: "S/ 180 es el 60% que cubrió el seguro; S/ 200 resulta de dividir 120 entre 0,60 en vez de 0,40."
    },
    42: {
      correcta: "A",
      truco: "Ubica el museo en el penúltimo lugar (4.° de 5) y ordena templo → mirador → laguna → mercado.",
      pasoAPaso: [
        "En 5 lugares: el museo va en el 4.° lugar.",
        "La secuencia templo → mirador → laguna → mercado debe ubicarse antes y después del 4.° lugar.",
        "Como la laguna va antes que el mercado y el museo está en el 4.° lugar, se visitará la laguna antes que el museo (A)."
      ],
      porqueFallo: "El templo va antes que la laguna (la B es falsa); el mercado va después de la laguna y no necesariamente antes del 4.° lugar (la C no es segura)."
    },
    43: {
      correcta: "C",
      truco: "Ubica primero el bloque de tres sentados juntos (Antonio - Celia - Gloria) y coloca a sus parejas enfrente.",
      pasoAPaso: [
        "En fila/mesa alrededor: Antonio, Celia y Gloria van consecutivos, con Celia al medio.",
        "Frente a Antonio va Beatriz; frente a Celia va Daniel; frente a Gloria va Hans.",
        "Al distribuir los asientos considerando que Beatriz, Edith y Gloria no se sientan juntas, Beatriz queda entre Daniel y Fabio (C)."
      ],
      porqueFallo: "No ubicar a las parejas exactamente enfrente altera quién queda entre Daniel y Fabio."
    },
    44: {
      correcta: "C",
      truco: "Aplica el silogismo transitivo: si A es B y todo B es C, entonces todo A es C.",
      pasoAPaso: [
        "Premisa 1: Todo conductor → respeta leyes de tránsito.",
        "Premisa 2: Todo el que respeta leyes de tránsito → es persona paciente.",
        "Conclusión válida: Todo conductor es una persona paciente (C)."
      ],
      porqueFallo: "La A y la B invierten el condicional ('ser paciente' o 'respetar leyes' no implica necesariamente ser conductor)."
    },
    45: {
      correcta: "B",
      truco: "Convierte ambas medidas a la misma unidad (centímetros) antes de dividir.",
      pasoAPaso: [
        "Altura real = 140 m = 140 × 100 cm = 14 000 cm.",
        "Altura en la maqueta = 70 cm.",
        "Divide 14 000 ÷ 70 = 200 → las medidas son 200 veces menores (B)."
      ],
      porqueFallo: "2000 veces ocurre si se añade un cero de más al convertir metros a centímetros."
    },
    46: {
      correcta: "A",
      truco: "Usa los datos de cebiche y rocoto relleno para hallar varones y mujeres.",
      pasoAPaso: [
        "Total de cebiches = 45; varones que pidieron cebiche = 27 → mujeres que pidieron cebiche = 45 - 27 = 18.",
        "Mujeres que pidieron rocoto relleno = 31 → total de mujeres = 18 + 31 = 49.",
        "Como hay 14 mujeres más que varones, hay 49 - 14 = 35 varones; total = 49 + 35 = 84 comensales (A)."
      ],
      porqueFallo: "72 o 49 surgen de olvidar sumar a los varones o restar mal la diferencia de 14."
    },
    47: {
      correcta: "C",
      truco: "La razón de semejanza entre el lado del triángulo grande (20 cm) y el pequeño (5 cm) es 4; el número de piezas crece al cuadrado.",
      pasoAPaso: [
        "Lado grande ÷ lado pequeño = 20 ÷ 5 = 4.",
        "En triángulos equiláteros semejantes sin huecos ni superposiciones, el área o cantidad de piezas equivale a 4².",
        "Calcula 4 × 4 = 16 piezas (C)."
      ],
      porqueFallo: "4 es solo la relación lineal entre los lados, no el número de piezas que cubren la superficie."
    },
    48: {
      correcta: "A",
      truco: "Resuelve de atrás hacia adelante a partir de los 6 m² de frejoles.",
      pasoAPaso: [
        "Lo que faltaba sembrar después de tomates se dividió en dos mitades: ajíes y los 6 m² de frejoles → esa mitad restante era 6 + 6 = 12 m².",
        "Antes de sembrar ajíes y frejoles, faltaba sembrar 12 m²; como al inicio sembró zanahorias en la mitad y tomates en 10 m², la otra mitad del terreno total mide 12 + 10 = 22 m².",
        "Como zanahorias ocupan la mitad del terreno total, miden 22 m² (A)."
      ],
      porqueFallo: "32 m² o 44 m² confunden la mitad del terreno con el terreno completo o suman mal los tramos."
    },
    49: {
      correcta: "C",
      truco: "Plantea las equivalencias y elimina 'cuy' para hallar cuántos conejos equivalen a una gallina.",
      pasoAPaso: [
        "5 gallinas = 2 cuyes + 1 conejo; 3 gallinas = 1 cuy + 1 conejo.",
        "Multiplica la segunda por 2: 6 gallinas = 2 cuyes + 2 conejos; al comparar con 5 gallinas = 2 cuyes + 1 conejo, se ve que 1 gallina = 1 conejo.",
        "Por lo tanto, 6 gallinas se intercambian por 6 conejos (C)."
      ],
      porqueFallo: "No despejar el valor de un cuy en función de gallinas y conejos lleva a 3 o 4."
    },
    50: {
      correcta: "B",
      truco: "Aplica la contrarrecíproca: 'Si A entonces B' equivale a 'Si no B entonces no A'.",
      pasoAPaso: [
        "La proposición equivale a: 'Si es peruano, entonces es patriota'.",
        "Su contrarrecíproca necesaria es: 'Si no es patriota, entonces no es peruano'.",
        "Elige la B."
      ],
      porqueFallo: "La A comete la falacia de afirmar el consecuente; la C niega el antecedente, lo cual no se deduce lógicamente."
    },
    51: {
      correcta: "C",
      truco: "Para que los niños construyan sus propias explicaciones, primero expresan sus ideas/hipótesis y luego contrastan o amplían información.",
      pasoAPaso: [
        "Revisa el propósito: construir sus propias explicaciones a partir de su pregunta sobre cómo respiran los peces.",
        "La alternativa C invita a imaginar y representar sus ideas, dialogar entre pares y buscar información para complementar.",
        "Marca la C."
      ],
      porqueFallo: "La A entrega la explicación ya cerrada de entrada; la B parte de una ilustración técnica que condiciona antes de que elaboren sus propias ideas."
    },
    52: {
      correcta: "B",
      truco: "En educación inicial y cuidado infantil, se respetan los ritmos fisiológicos del bebé (sueño) antes de forzar la alimentación.",
      pasoAPaso: [
        "Observa que Gabriela, de 8 meses, tiene sueño justo antes de comer.",
        "Una atención respetuosa y segura reconoce su necesidad de descanso y pospone la comida hasta que despierte.",
        "Elige la B."
      ],
      porqueFallo: "La A apura la comida en un momento de sueño y cansancio; la C intenta forzarla a mantenerse despierta para comer."
    },
    53: {
      correcta: "A",
      truco: "En el periodo de adaptación de bebés, anticipar, dar un tiempo y narrar con afecto favorece la confianza y seguridad.",
      pasoAPaso: [
        "Considera la tensión muscular de Micaela (6 meses) en su segundo día de adaptación.",
        "Anticipar la acción, esperar su disposición y comunicar lo que se hace promueve vínculo y previsibilidad.",
        "Marca la A."
      ],
      porqueFallo: "La B distrae sin acompañar ni anticipar la interacción corporal; la C prioriza la rapidez mecánica sobre el vínculo y la confianza."
    },
    54: {
      correcta: "B",
      truco: "Cuando lo que ocurre contradice la predicción inicial de los niños ('¡Se mezclarán!' vs. separarse), se genera conflicto cognitivo.",
      pasoAPaso: [
        "Los niños predicen que el aceite y el vinagre se mezclarán, pero al remover y esperar ven que se separan.",
        "Ese contraste entre su hipótesis/saberes y la observación inesperada activa el conflicto cognitivo.",
        "Elige la B."
      ],
      porqueFallo: "La transferencia aplica lo aprendido a nuevas situaciones; la metacognición reflexiona sobre cómo se aprendió o resolvió algo."
    },
    55: {
      correcta: "C",
      truco: "Para que construyan sus propias explicaciones, haz que observen con atención y formulen sus propias hipótesis.",
      pasoAPaso: [
        "El propósito es que los niños elaboren explicaciones propias sobre la separación del aceite y el vinagre.",
        "Proponer observar de nuevo lo que pasa y compartir sus ideas promueve la indagación y construcción propia.",
        "Marca la C."
      ],
      porqueFallo: "La A y la B entregan la explicación ya elaborada por el adulto o el texto en lugar de que los niños construyan la suya."
    },
    56: {
      correcta: "A",
      truco: "Los niños juzgan 'más' por el tamaño grande de las bolitas y no abstraen la cantidad numérica independientemente del tamaño.",
      pasoAPaso: [
        "Observa la imagen: hay 5 bolitas grandes de Kevin y 5 bolitas pequeñas de Eduardo.",
        "Al creer que hay más por ser más grandes, no logran abstraer la cantidad numérica prescindiendo de las características físicas/tamaño de los objetos.",
        "Elige la A."
      ],
      porqueFallo: "No se evidencia problema de recitar una secuencia numérica fija (orden estable) ni de emparejar uno a uno (correspondencia término a término)."
    },
    57: {
      correcta: "A",
      truco: "Para favorecer la autonomía motora, ofrece un entorno seguro, mantente cerca disponible y deja que actúe por sí misma.",
      pasoAPaso: [
        "Valentina (18 meses) intenta subir una escalera tras iniciar la marcha.",
        "Permitir que intente sola con acompañamiento cercano e intervención solo si hace falta respeta su autonomía.",
        "Marca la A."
      ],
      porqueFallo: "La B dirige y lleva de la mano repetidamente; la C detiene la acción por anticipado en vez de acompañar con seguridad."
    },
    58: {
      correcta: "C",
      truco: "El cuidado respetuoso del movimiento adapta el cambio de pañal a la postura activa del bebé en vez de forzarlo a echarse.",
      pasoAPaso: [
        "Javier (11 meses) quiere ponerse de pie durante el cambio de pañal.",
        "Adecuarse a su postura respeta su iniciativa y desarrollo motor.",
        "Elige la C."
      ],
      porqueFallo: "La A fuerza a acostarlo y distraerlo; la B posterga el cuidado hasta que se duerma."
    },
    59: {
      correcta: "C",
      truco: "Acoge lo que el niño comunica, modela naturalmente sin corregir de forma punitiva y anima a seguir conversando.",
      pasoAPaso: [
        "Jimena (3 años) dice 'paque' por 'parque' al contar su fin de semana.",
        "La docente recoge el sentido del mensaje y hace una pregunta abierta para que amplíe su relato oral.",
        "Marca la C."
      ],
      porqueFallo: "La A expone al niño ante el grupo preguntando cómo se dice; la B interrumpe con corrección literal que corta la fluidez narrativa."
    },
    60: {
      correcta: "B",
      truco: "La aproximación a la lectura en inicial se promueve explorando libros libremente y leyendo en voz alta cuando los niños lo solicitan.",
      pasoAPaso: [
        "En el aula de 5 años se busca aproximación a la lectura en la biblioteca.",
        "Elegir libremente, acomodarse a leer y que la docente lea si se lo piden favorece el vínculo lector.",
        "Elige la B."
      ],
      porqueFallo: "La A exige que lean letras en voz alta como decodificación precoz; la C controla el intercambio libro por libro como tarea mecánica."
    },
    61: {
      correcta: "C",
      truco: "Yaquelín pregunta por 'aguarda' y, tras la explicación en situación, comprende que significa esperar.",
      pasoAPaso: [
        "Lee el diálogo: Yaquelín pregunta qué significa 'aguarda' y, al escuchar que no pueden darle goma aún y que irán en unos minutos, concluye: '¡Tengo que esperar!'.",
        "Ese proceso muestra deducción del significado a partir del contexto comunicativo.",
        "Marca la C."
      ],
      porqueFallo: "No está opinando sobre un tema polémico ni usando comparaciones o ejemplos en su intervención."
    },
    62: {
      correcta: "B",
      truco: "Escribir con un propósito real y significativo (registrar el préstamo de un libro) favorece la apropiación del sistema de escritura.",
      pasoAPaso: [
        "Compara las opciones según el sentido funcional de la escritura en el aula.",
        "Anotar el propio nombre al pedir un libro prestado da sentido real a escribir por sí mismos.",
        "Elige la B."
      ],
      porqueFallo: "La A se reduce a adivinar palabras y repasar con plumón; la C copia o transcribe mecánicamente una lista."
    },
    63: {
      correcta: "B",
      truco: "La expresión creativa se potencia cuando los niños eligen qué expresar y qué materiales usar, sin modelos rígidos ni plantillas.",
      pasoAPaso: [
        "Tras visitar la granja, los niños acordaron dibujar.",
        "Pedir que dibujen lo que más les gustó con los materiales que deseen libera su creatividad.",
        "Marca la B."
      ],
      porqueFallo: "La A exige copia fiel/realista; la C impone siluetas y decorado con embolillado."
    },
    64: {
      correcta: "C",
      truco: "Fíjate en el 'NO favorece': cortar el relato para corregir pronunciación y hacer repetir inhibe la expresión oral espontánea.",
      pasoAPaso: [
        "Antonia (4 años) narra emocionada sobre burbujas gigantes.",
        "Detenerla para corregir y pedir que repita interrumpe su expresión oral y puede cohibirla.",
        "Elige la C."
      ],
      porqueFallo: "La A y la B sí favorecen la oralidad: invitan a explicar, apoyarse con recursos y responder preguntas de compañeros."
    },
    65: {
      correcta: "C",
      truco: "Al preparar una entrevista, orientar las preguntas de los niños según el propósito promueve la expresión oral con intención comunicativa.",
      pasoAPaso: [
        "Revisa qué ocurre al preparar una entrevista en inicial.",
        "Recoger las preguntas que proponen y ayudar a seleccionar las que responden al propósito desarrolla su oralidad.",
        "Marca la C."
      ],
      porqueFallo: "La A se enfoca en fabricar utilería/equipos; la B limita a una pregunta por grupo y delega solo en quien habla con más fluidez."
    },
    66: {
      correcta: "A",
      truco: "En el nivel presilábico, el niño traza grafías variadas sin establecer todavía correspondencia sistemática entre cada grafía y una sílaba.",
      pasoAPaso: [
        "Observa el trazo de Saida (5 años) al escribir su nombre en la imagen.",
        "Presenta grafías pseudoletras/variadas sin relación silábica establecida, propio del nivel presilábico.",
        "Elige la A."
      ],
      porqueFallo: "En el nivel silábico cada grafía suele representar una sílaba; el silábico-alfabético combina representaciones silábicas y fonémicas."
    },
    67: {
      correcta: "B",
      truco: "Comparar la propia escritura con fuentes escritas disponibles (como los carteles del aula) ayuda a reflexionar sobre el sistema de escritura.",
      pasoAPaso: [
        "Saida tiene su nombre en los carteles del aula y escribió su intento en su hoja.",
        "Pedirle que ubique su cartel, compare con lo que escribió y note diferencias promueve reflexión y apropiación.",
        "Marca la B."
      ],
      porqueFallo: "La A y la C se centran en el trazo motor o decorado (repasar con dedo o pegar bolitas/semillas), no en la reflexión sobre la escritura."
    },
    68: {
      correcta: "B",
      truco: "La información explícita aparece literal y directamente en el texto ('flor azul llamada “pervinca”').",
      pasoAPaso: [
        "Busca en el cuento de Frederick la mención a la flor 'pervinca'.",
        "El texto dice explícitamente que es una 'hermosa flor azul llamada “pervinca”'.",
        "Elige la B."
      ],
      porqueFallo: "La A pide significado de vocabulario; la C pide una opinión/valoración."
    },
    69: {
      correcta: "C",
      truco: "Inferir implica deducir rasgos o sentidos a partir de pistas del texto y justificar ('¿Cómo era...? ¿Por qué dicen eso?').",
      pasoAPaso: [
        "Observa las pistas sobre Frederick: junta rayos de sol, colores y palabras, y reconforta a los ratones en invierno.",
        "Preguntar cómo era y pedir que justifiquen a partir del relato promueve inferencia.",
        "Marca la C."
      ],
      porqueFallo: "La A pregunta por un dato explícito del lugar ('muro de piedra'); la B pregunta por gusto personal."
    },
    70: {
      correcta: "A",
      truco: "Reflexionar sobre el texto implica tomar postura, opinar o valorar lo leído ('¿Qué piensan de...?').",
      pasoAPaso: [
        "Revisa qué pregunta invita a evaluar o dar opinión sobre las acciones de Frederick.",
        "'¿Qué piensan de lo que hacía Frederick en el cuento?' promueve la reflexión crítica/valorativa.",
        "Elige la A."
      ],
      porqueFallo: "La B y la C remiten a hechos o causas narradas en el cuento (por qué aplaudieron o qué recogieron)."
    },
    71: {
      correcta: "C",
      truco: "Cuando el niño de 18 meses señala, la docente acompaña poniendo palabra/nombre al objeto y confirmando su intención.",
      pasoAPaso: [
        "Carlos (18 meses) señala un objeto con el dedo.",
        "Coger el objeto, preguntar si es el que desea y nombrarlo enriquece su repertorio oral en contexto.",
        "Marca la C."
      ],
      porqueFallo: "La A le exige un pedido verbal que aún está construyendo; la B solo entrega el objeto sin modelar el nombre."
    },
    72: {
      correcta: "A",
      truco: "Acoge el intento comunicativo ('feyo'), reformula naturalmente ('feo') y pregunta para que el niño amplíe.",
      pasoAPaso: [
        "Andrea (2 años) dice 'feyo' para expresar desagrado.",
        "Preguntar si dice que algo es feo y qué es valida su expresión y modela la palabra de forma natural.",
        "Elige la A."
      ],
      porqueFallo: "La B entra en un juego ambiguo o de negación; la C obliga a repetir sílabas artificialmente."
    },
    73: {
      correcta: "B",
      truco: "Para favorecer autonomía, ayuda a que el niño note la consecuencia natural y apóyalo para resolverlo sin avergonzarlo.",
      pasoAPaso: [
        "Roberto (3 años) se pone los zapatos al revés.",
        "Invitarlo a caminar para notar si está cómodo y luego ayudarlo a ponerlos bien promueve autonomía y conciencia corporal.",
        "Marca la B."
      ],
      porqueFallo: "La A apela a 'ser grande' y le exige que lo haga solo sin apoyo; la C convierte a otro niño en modelo de comparación."
    },
    74: {
      correcta: "B",
      truco: "Valida el objeto transicional (el osito) e invita de forma afectuosa y no invasiva a sumarse al grupo.",
      pasoAPaso: [
        "Carla (3 años) se apoya en su oso durante su transición al jardín.",
        "Preguntar al osito si quiere estar con ellos e incluir a ambos respeta su apego y abre paso al vínculo.",
        "Elige la B."
      ],
      porqueFallo: "La A quita/guarda el osito hasta la salida; la C aparta al osito a un estante en vez de acompañar la transición gradual."
    },
    75: {
      correcta: "C",
      truco: "Valorar una lengua originaria (quechua, 'atoq') y los saberes culturales andinos en diálogo con otros niños corresponde al enfoque intercultural.",
      pasoAPaso: [
        "Hugo comparte el término quechua 'atoq' y las creencias sobre el zorro en su comunidad, y la docente lo valora y conecta con el grupo.",
        "Esto fomenta el reconocimiento y valoración de distintas culturas y lenguas en diálogo.",
        "Marca la C ('Enfoque intercultural.')."
      ],
      porqueFallo: "El enfoque inclusivo se centra en atender la diversidad de necesidades/condiciones individuales de aprendizaje; el de derechos en el reconocimiento de sujetos de derecho."
    },
    76: {
      correcta: "B",
      truco: "La resolución pacífica de conflictos pasa por escuchar a las partes, reconocer emociones y buscar acuerdos juntos.",
      pasoAPaso: [
        "Sonia y Pedro discuten por el turno en el tobogán.",
        "Escuchar ambas versiones, preguntar cómo se sienten y orientarlos a proponer un acuerdo favorece la autorregulación y resolución del conflicto.",
        "Elige la B."
      ],
      porqueFallo: "La A impone los turnos desde la docente; la C manda a otros juegos y apela a dar buen ejemplo sin resolver el conflicto."
    },
    77: {
      correcta: "A",
      truco: "La metacognición en la planificación implica que los niños evalúen sus propias posibilidades, tiempos y recursos.",
      pasoAPaso: [
        "Los niños proponen muchas actividades para hacer un robot.",
        "Preguntarles si creen poder hacer todas y elegir según tiempo y recursos promueve que reflexionen sobre su propia planificación.",
        "Marca la A."
      ],
      porqueFallo: "La B hace que la docente elija y organice; la C resuelve solo por votación sin reflexionar sobre viabilidad, tiempo y recursos."
    },
    78: {
      correcta: "A",
      truco: "Reflexionar sobre que los libros sirven a todos y que dañarlos afecta a los demás acerca a la noción de bien común.",
      pasoAPaso: [
        "Edgar arranca una hoja de un libro y la docente guía a los niños a pensar qué pasaría si se rompen y quiénes los usan.",
        "Comprender que son recursos compartidos que sirven a todos corresponde a aproximarse al bien común.",
        "Elige la A."
      ],
      porqueFallo: "El diálogo se centra en el sentido compartido del bien ('nos sirven a todos'), más que en redactar normas o fijar reparación."
    },
    79: {
      correcta: "C",
      truco: "El enfoque inclusivo elimina barreras del entorno para que la estudiante participe y se desplace con autonomía.",
      pasoAPaso: [
        "Jazmín presenta baja visión y se incorpora al aula de 5 años.",
        "Colocar puntos de apoyo para orientarse y desplazarse por su cuenta elimina barreras espaciales y promueve autonomía.",
        "Marca la C."
      ],
      porqueFallo: "La A crea dependencia constante de un compañero; la B rebaja la exigencia de actividades sin ajustar apoyos pertinentes."
    },
    80: {
      correcta: "A",
      truco: "La atención respetuosa explica el sentido del cuidado con afecto e invita a participar, sin chantajes ni burlas/amenazas.",
      pasoAPaso: [
        "Sofía (2 años) tiene mucosidad y no le gusta que le limpien la nariz.",
        "Reconocer su sentir, explicar que ayudará a respirar mejor e invitarla a hacerlo juntas muestra respeto y cuidado.",
        "Elige la A."
      ],
      porqueFallo: "La B usa soborno/condicionamiento ('sorpresita'); la C usa vergüenza o rechazo social ('se te va a ver feo', 'no van a querer jugar')."
    },
    81: {
      correcta: "A",
      truco: "Ayudar a reconocer el efecto de la acción en los demás ('están llorando porque no les gusta...') favorece la empatía y la convivencia.",
      pasoAPaso: [
        "Santiago (24 meses) toma comida del plato de otros niños y estos lloran.",
        "Explicarle de forma clara y serena cómo se sienten sus compañeros ayuda a comprender el conflicto.",
        "Marca la A."
      ],
      porqueFallo: "La B pide paciencia a los afectados sin abordar la conducta con Santiago; la C aísla como sanción o exclusión."
    },
    82: {
      correcta: "B",
      truco: "El número nominal identifica o nombra algo (como el número de una casa o teléfono), sin indicar cantidad ni orden.",
      pasoAPaso: [
        "Revisa los ejemplos: Eva indica cantidad ('cuántas pelotas'); Marcela indica orden ('segundo o al último'); Javier menciona 'calle Lima 215'.",
        "El número '215' identifica una dirección, es decir, cumple un uso nominal.",
        "Elige la B."
      ],
      porqueFallo: "La intervención de Eva es cardinal (cantidad) y la de Marcela es ordinal (posición/orden)."
    },
    83: {
      correcta: "A",
      truco: "Asignar un plato a cada persona ('este para Karen, este para Carlo...') es correspondencia uno a uno (término a término).",
      pasoAPaso: [
        "Iván relaciona cada plato con cada compañero nombrado, uno a uno.",
        "Ese emparejamiento uno a uno corresponde a la correspondencia término a término.",
        "Marca la A."
      ],
      porqueFallo: "El orden estable se refiere a recitar la serie numérica en un orden fijo; la abstracción se refiere a contar elementos heterogéneos."
    },
    84: {
      correcta: "A",
      truco: "Para favorecer la resolución de problemas, plantea el reto con preguntas y deja que los niños prueben y decidan sus estrategias.",
      pasoAPaso: [
        "Tres niños tienen 10 cartas y quieren repartirlas en partes iguales.",
        "Preguntar cuántas cartas y cuántos niños hay, qué hacer y dejar que prueben sus ideas promueve resolución de problemas.",
        "Elige la A."
      ],
      porqueFallo: "La B ya les dice cómo repartir hasta que sobre una; la C ya reparte tres y propone dejar la sobrante."
    },
    85: {
      correcta: "A",
      truco: "La clasificación en inicial se inicia con agrupaciones libres según criterios de los niños y luego preguntando por su criterio.",
      pasoAPaso: [
        "Los niños recogen piedras, ramas y hojas en el huerto.",
        "Pedir que agrupen como deseen y preguntar por qué lo hicieron así respeta su criterio clasificatorio.",
        "Marca la A."
      ],
      porqueFallo: "La B impone categorías previas en cajas; la C impone un criterio y un ejemplo dado por el adulto."
    },
    86: {
      correcta: "C",
      truco: "En 4 años, la noción de tiempo se construye desde vivencias, secuencias y términos temporales ('antes', 'después'), más que leyendo la hora en el reloj.",
      pasoAPaso: [
        "Se busca desarrollar la noción de tiempo en niños de cuatro años.",
        "Ordenar dibujos de la jornada usando 'antes' y 'después' ayuda a construir secuencialidad temporal.",
        "Elige la C."
      ],
      porqueFallo: "La A exige lectura de reloj de manecillas y horas exactas, alejada del nivel de 4 años; la B solo ordena y describe sin trabajar relaciones temporales como 'antes' y 'después'."
    },
    87: {
      correcta: "B",
      truco: "Dar y seguir orientaciones como 'avanza', 'adelante', 'atrás' trabaja directamente la ubicación y las relaciones espaciales.",
      pasoAPaso: [
        "El juego consiste en guiarse y desplazarse con indicaciones espaciales ('avanza', 'adelante', 'atrás').",
        "Eso desarrolla principalmente relaciones espaciales.",
        "Marca la B."
      ],
      porqueFallo: "La A centra el juego en el tacto de objetos; la C es una descripción genérica del uso de objetos."
    },
    88: {
      correcta: "A",
      truco: "Al preguntar al final '¿cómo hiciste para que la bolita ruede?', la docente pide reflexionar sobre el propio proceso o estrategia usada.",
      pasoAPaso: [
        "Cristina ya resolvió el problema haciendo rodar la bolita.",
        "La pregunta final '¿cómo hiciste para que la bolita ruede?' lleva a la niña a revisar su propia acción/estrategia, lo que promueve metacognición.",
        "Elige la A."
      ],
      porqueFallo: "El conflicto cognitivo ocurrió antes al ver que la bolita no avanzaba; aquí el cierre pide explicar el procedimiento seguido."
    },
    89: {
      correcta: "A",
      truco: "Recitar '1, 2, 3, 4, 5' en una secuencia fija (aunque cuente mal o repita un objeto) muestra el principio de orden estable.",
      pasoAPaso: [
        "Fernando dice '1, 2, 3, 4, 5' siguiendo la sucesión numérica conocida, incluso contando un mismo objeto dos veces.",
        "Mantener esa secuencia ordenada de etiquetas numéricas evidencia orden estable (aun cuando falle la correspondencia uno a uno).",
        "Elige la A."
      ],
      porqueFallo: "Contar dos veces un mismo objeto evidencia dificultad en la correspondencia término a término, no en el orden estable de la serie."
    },
    90: {
      correcta: "B",
      truco: "Comparar '5 carros' y '3 carros' para saber quién tiene más usa el número como cardinal (cantidad total de un conjunto).",
      pasoAPaso: [
        "Pamela compara cuántos carros tiene cada uno: 5 frente a 3.",
        "Expresar la cantidad total de elementos de un conjunto corresponde al uso cardinal del número.",
        "Marca la B."
      ],
      porqueFallo: "El uso ordinal indica posición o lugar en una sucesión; el nominal funciona como etiqueta o nombre."
    }
  };

  Object.keys(R).forEach((num) => {
    window.RESOLUCIONES[CUAD_ID][Number(num)] = R[num];
  });
})();
