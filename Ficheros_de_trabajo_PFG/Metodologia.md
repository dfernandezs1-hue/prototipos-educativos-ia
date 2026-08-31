# Metodología — Proyecto Fin de Grado
### IA aplicada a la enseñanza universitaria

> Versión consolidada. Distingue dos planos: (A) la metodología reproducible, que es el producto pensado para el profesorado; y (B) el proceso de desarrollo y validación seguido en este PFG. La validación por experto es asimétrica: aparece en el plano B y no en el A.

---

## 1. Dos planos del trabajo

El trabajo opera en dos planos que conviene no confundir:

- **Plano A — La metodología reproducible (para el profesorado).** Es el producto transferible: un procedimiento por el cual cualquier docente, rellenando una plantilla, genera su propio material educativo interactivo mediante IA en muy poco tiempo. Aquí el actor es el profesor.
- **Plano B — El proceso de investigación del PFG (del autor).** Es el modo en que el autor aplicó esa metodología para construir los once prototipos y, después, los validó presentándolos al profesorado. Aquí el actor es el autor del trabajo.

La diferencia clave está en la **validación por experto**: es necesaria en el plano B —porque el autor no es el docente de cada asignatura y necesita que quien sí lo es confirme la corrección y la utilidad de los prototipos— y, en cambio, no aparece en el plano A, ya que el profesor que genera su propio material es él mismo el experto y no requiere acreditación externa.

---

## 2. Plano A — La metodología reproducible (orientada al profesorado)

El procedimiento se apoya en un **pipeline de dos modelos con funciones diferenciadas**: una *IA orquestadora*, encargada del diseño pedagógico y de traducir el encargo del docente en una especificación técnica de implementación; y una *IA constructora*, encargada de materializar el recurso. En este trabajo se emplearon ChatGPT para la orquestación y Claude (Artifacts y Code) para la construcción, si bien la metodología es independiente de los modelos concretos.

### Fase 1 — Identificación de la necesidad docente
Se selecciona un contenido susceptible de reforzarse mediante una herramienta interactiva, atendiendo a su dificultad habitual, su necesidad de visualización o simulación, su frecuencia en la evaluación y su potencial para el aprendizaje activo. Esta fase fija el objetivo pedagógico antes de abordar cualquier aspecto técnico.

### Fase 2 — Encargo docente estructurado
El docente cumplimenta una ficha de encargo organizada en tres partes:
- **Parte A (la rellena el profesor):** contenido del temario, objetivo pedagógico, rangos realistas de los parámetros y datos de ejemplo, diseño de la interacción y modo de iteración. Es la única parte que escribe el docente y se completa en 7–10 minutos.
- **Parte B (estándares fijos, aplicados automáticamente por la IA orquestadora):** especificaciones técnicas y pedagógicas que el profesor no rellena nunca —bloque CONFIG documentado, entrega como HTML autocontenido sin dependencias externas ni almacenamiento local, patrones pedagógicos como la solución paso a paso y la generación aleatoria de casos, y la regla de resultado invariante para las mejoras dirigidas.
- **Parte C:** las salidas esperadas de la IA orquestadora.

La estandarización es la aportación central del método: el esfuerzo del docente se limita a la Parte A, mientras la complejidad técnica vive en la Parte B y se aplica sola. Esto hace el procedimiento **reproducible y transferible** y reduce el coste de cada nuevo prototipo.

### Fase 3 — Orquestación
El docente entrega a la IA orquestadora dos insumos: la Parte A de la ficha y el material de la asignatura (temario, apuntes, ejemplos). Con ellos, la orquestadora elabora el diseño pedagógico y un **prompt de implementación** que ya incorpora los estándares fijos de la Parte B (esta es la salida descrita en la Parte C de la ficha). Si la información resulta insuficiente, formula un número mínimo de preguntas. Es el usuario quien decide después a qué IA constructora lleva ese prompt, según el tipo de prototipo y la herramienta que le interese: una de artefactos visuales autocontenidos para los recursos centrados en interacción y representación, o un entorno de desarrollo asistido para los que requieren más lógica.

### Fase 4 — Construcción y refinamiento
El prompt se traslada a la IA constructora, que genera el prototipo como HTML autocontenido conforme a los estándares de la Parte B: un bloque CONFIG documentado que centraliza los datos fijos y los rangos de generación aleatoria, ausencia de dependencias externas y de almacenamiento local, y validación de la sintaxis del código. Tras cada versión se realiza una revisión y, cuando es necesario, se itera; la iteración adopta dos formas: la **génesis** (construir desde cero) y la **mejora dirigida**, que perfecciona una versión existente —típicamente su estructura y mantenibilidad— sin alterar su resultado pedagógico (regla de resultado invariante). En el flujo del profesor, el proceso concluye con la **revisión del propio docente**: como experto de la materia, ajusta el resultado sin necesidad de validación externa.

### Tipología de prototipos
El procedimiento es común, pero los prototipos se agrupan en tres tipos, lo que condiciona los criterios de diseño y la elección de la IA constructora:
- **De cálculo y práctica guiada** (Simplex, camino crítico, inventarios, tablas financieras, desviaciones).
- **De simulación conceptual** (efecto látigo, última milla, pronósticos).
- **De generación de material docente**, en los que la IA produce ejercicios personalizados sin materializarse en una aplicación independiente.

### Adaptación según la asignatura
Manteniendo constante la metodología, los criterios de diseño variaron según la asignatura. En **Investigación Operativa** se priorizó la representación gráfica, la resolución visual paso a paso y la generación de casos. En **Dirección Financiera** se priorizó el razonamiento previo al cálculo y la retroalimentación, evitando que la herramienta entregue la solución directa. En **Logística** se priorizó la simulación de escenarios, la comparación de alternativas y la visualización de procesos.

### Principio metodológico común
Todos los prototipos comparten un mismo principio: emplear la IA no como sustituto del aprendizaje, sino como medio para construir recursos que favorezcan la comprensión, la experimentación y la participación activa del estudiante. La contribución no es un conjunto de prompts, sino un **procedimiento reproducible** para que cualquier docente genere prototipos educativos a partir de un encargo estructurado de sus necesidades.

---

## 3. Plano B — Desarrollo y validación en el PFG

En el marco de este PFG, el autor aplicó la metodología del plano A para construir los diez prototipos repartidos en tres asignaturas (Investigación Operativa, Dirección Financiera y Logística), asumiendo el papel del docente al cumplimentar las fichas de encargo y al iterar cada herramienta hasta una versión estable.

### Validación por juicio de experto
Para garantizar la validez de los prototipos, cada uno se somete a una **validación con el profesor responsable de la asignatura** mediante una entrevista semiestructurada. En ella, el docente valora la utilidad pedagógica del recurso, la corrección y el rigor del contenido, su ajuste al temario y a la forma de evaluar la asignatura y la claridad de la herramienta, y propone posibles mejoras.

Esta validación es necesaria **precisamente porque el autor no es el docente de la materia**: es quien tiene la autoridad disciplinar quien confirma que el prototipo es correcto y útil. Constituye, por tanto, una fase propia del PFG y no un paso del método del plano A; cuando es el propio profesor quien genera su material, esa validación no existe como fase, porque él mismo es el experto y la resuelve en su revisión.

### Retroalimentación
El feedback recogido en las entrevistas puede actuar en dos niveles: mejorar los **prototipos** concretos (mediante una iteración final) y, en su caso, mejorar la propia **plantilla** (por ejemplo, incorporando un campo que el profesorado eche en falta). Ambas mejoras son un fruto de la validación del PFG, no pasos que el profesor ejecute al usar el método.

> Nota de redacción: las entrevistas con el profesorado están pendientes de realizar. En esta sección se describe el procedimiento de validación; los resultados (feedback recibido y mejoras aplicadas) se recogerán en el capítulo de resultados y conclusiones.
