Ficha de encargo docente — plantilla reproducible

Plantilla estándar que cumplimenta el docente para generar un prototipo educativo mediante el pipeline de dos IA. El profesor no escribe un prompt experto: solo rellena la PARTE A (el temario y la intención docente). La IA orquestadora convierte esta ficha en el diseño pedagógico y en el prompt de implementación que recibe la IA constructora, incorporando automáticamente las especificaciones comunes de la PARTE B.

**Solo se rellena la PARTE A (entre 7 y 10 minutos). Las PARTES B y C son fijas: no hay que tocarlas.**

# PARTE A — A rellenar por el docente

## 1. Datos generales

**Asignatura:**

**Tema / contenido del temario a trabajar:**

**Nombre provisional del prototipo:**

## 2. Objetivo pedagógico

**Objetivo (qué debe lograr o comprender el alumno; 1–3 ideas):**

**Tipo de prototipo (marca uno):**

☐  De cálculo y práctica guiada (acompaña la resolución paso a paso)

☐  De simulación conceptual (experimentar y comparar escenarios)

☐  De generación de material docente (asistente que produce ejercicios)

☐  Otro: ______________________________

## 3. Contenido y datos (la parte que solo conoces tú)

**Conceptos, procedimientos o fórmulas concretas que trabaja:**

**Variables y parámetros con los que opera, y rangos realistas:**

*Sirven para que los casos aleatorios tengan sentido. Ej.: demanda 5.000–30.000 ud/año; tasa de mantenimiento 15–30 %.*

**Variedad de casos deseada:**

*Cuántos contextos o escenarios distintos conviene que genere, para que los ejemplos no se repitan. Ej.: 6–8 enunciados de temas diferentes.*

**Niveles de dificultad (si procede):**

*Por ejemplo básico / intermedio / avanzado, indicando qué cambia entre ellos (rangos, número de pasos o conceptos exigidos).*

**Datos o ejemplos reales que conviene incluir:**

*Productos, empresas, valores típicos, casos de examen… alimentan los ejemplos precargados.*

**Caso de referencia con resultado esperado (si lo hay):**

*Un ejercicio conocido (de libro o de examen) con su solución, para comprobar que el prototipo da los mismos números. Ej.: el caso Tahoe Salt con su pronóstico, o un EOQ con su Q* esperado.*

**Qué NO debe hacer (p. ej.: no dar la solución directa, no ser un solver, no añadir teoría innecesaria):**

**Errores típicos del alumno que debe ayudar a detectar:**

## 4. Interacción y diseño

**Elementos visuales o interactivos deseados (gráficos, sliders, tablas, pasos, resaltados…):**

**Qué debe poder hacer el alumno:**

**Qué debe poder hacer el profesor (generar ejemplos, ocultar/mostrar solución, modo examen…):**

## 5. Iteración

**Modo (marca uno):**

☐  Génesis (construir desde cero)

☐  Mejora dirigida (partir de un HTML existente)

**Si es mejora dirigida — qué conservar / qué mejorar (sin romper lo que ya funciona):**

## 6. Observaciones (opcional)

# PARTE B — Notas a tener en cuenta (fijas, no rellenar)

La IA orquestadora aplica estas especificaciones comunes a todos los prototipos y las incorpora al prompt de implementación. El docente no tiene que rellenarlas; se documentan aquí para dejar constancia del estándar.

## Entrega y formato

- Archivo único .html autocontenido: todo el CSS y el JavaScript van incrustados en el propio archivo.

- Sin librerías externas ni CDN, sin backend y sin conexión a internet. Funciona con doble clic en cualquier navegador moderno.

- Sin almacenamiento persistente (nada de localStorage); el estado vive solo en memoria durante la sesión.

## Estructura y mantenibilidad del código

- Código organizado por bloques claros: HTML, CSS y JavaScript bien delimitados; el JS en secciones comentadas (configuración, utilidades, estado/navegación, lógica, render).

- **Bloque CONFIG al principio** que centraliza toda la «pila de datos» editable: datos fijos, rangos de los casos aleatorios, listas y datos de ejemplo, con un breve mapa de qué hay y dónde.

- Los datos que el usuario introduce en pantalla no van en CONFIG: se quedan como campos de entrada.

- Objetivo: que alguien con conocimientos básicos de programación pueda cambiar los valores sin tocar la lógica. Nombres descriptivos y comentarios en español.

- **En mejoras dirigidas, iso-resultado**: no se cambia el resultado visual ni funcional; solo se reorganiza y se centralizan los datos.

## Patrones pedagógicos (cuando apliquen)

- Generación de casos aleatorios realistas dentro de los rangos indicados en la Parte A.

- Validación de las entradas con mensajes didácticos.

- Solución paso a paso, pistas progresivas y feedback inmediato.

- Comparador de escenarios cuando aporte valor.

## Calidad, estética y rigor

- La IA constructora verifica la corrección de los cálculos o del algoritmo (probando varios casos) antes de entregar.

- Interfaz y textos en español, registro educativo y claro.

- Estética sobria, limpia, legible y coherente; gráficos dibujados a mano (canvas/SVG) sin librerías pesadas.

- Se prioriza la lógica y la claridad frente a lo vistoso; nada de botones o maquetas que no hagan nada. Optimizar tokens.

# PARTE C — Salida solicitada a la IA orquestadora

A partir de esta ficha, la IA orquestadora devuelve:

- Descripción del prototipo.

- Objetivo docente.

- Contenidos concretos del temario que trabaja.

- Funcionamiento paso a paso.

- Módulos o pestañas y qué hace cada uno.

- Errores típicos que debe detectar.

- Parte visual o interactiva.

- Por qué mejora el aprendizaje.

- **Prompt de implementación optimizado** para la IA constructora, que ya incorpora las Notas de la Parte B.