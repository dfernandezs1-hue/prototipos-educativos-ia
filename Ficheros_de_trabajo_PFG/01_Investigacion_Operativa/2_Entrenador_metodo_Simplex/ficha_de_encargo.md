Ficha de encargo docente — Parte A (versión final consolidada)
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Entrenador del método Símplex

## 1. Datos generales
**Asignatura:** Investigación Operativa.
**Tema / contenido del temario:** Resolución de problemas de programación lineal mediante el método Símplex.
**Nombre provisional del prototipo:** Entrenador del método Símplex.

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno ejecute y comprenda las iteraciones del método Símplex, identificando en cada paso la variable entrante, la variable saliente y el pivote, y reconociendo los casos especiales (empate, degeneración, no acotación e infactibilidad).
**Tipo de prototipo:** ☒ De cálculo y práctica guiada

## 3. Contenido y datos
**Conceptos, procedimientos o fórmulas:** Tabla del Símplex, fila Z, criterio de la variable entrante, cocientes mínimos y pivoteo; tratamiento de restricciones de mayor o igual e igualdad mediante variables artificiales con el método Big-M; detección de infactibilidad y no acotación.
**Variables y parámetros, y rangos realistas:** Entre 2 y 5 variables de decisión; entre 2 y 4 restricciones; coeficientes enteros pequeños (aproximadamente entre 1 y 20).
**Variedad de casos deseada:** 6–8 problemas de contextos distintos (producción, mezcla, asignación), tanto de maximización como de minimización.
**Niveles de dificultad:** Básico (maximización con restricciones de menor o igual), intermedio (minimización y restricciones de mayor o igual o igualdad) y avanzado (combinación de signos y casos especiales).
**Datos o ejemplos reales:** Problemas típicos de examen de producción y mezcla de productos.
**Caso de referencia con resultado esperado:** Un problema de programación lineal con su solución óptima conocida, para comprobar que el prototipo alcanza el mismo resultado.
**Qué NO debe hacer:** No entregar la solución directamente sin mostrar las iteraciones; no comportarse como un solver de caja negra.
**Errores típicos del alumno a detectar:** Elegir mal la variable entrante, equivocarse en el cálculo de los cocientes y no reconocer los casos de no acotación o infactibilidad.

## 4. Interacción y diseño
**Elementos visuales o interactivos:** Tabla del Símplex, resaltado de la columna entrante, la fila saliente y el pivote, panel de explicación e historial de iteraciones.
**Qué debe poder hacer el alumno:** Avanzar iteración a iteración, comprobar cada paso y solicitar pistas.
**Qué debe poder hacer el profesor:** Generar problemas nuevos y mostrar u ocultar la solución.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
Interesa especialmente que el prototipo haga visible el porqué de cada decisión, más que el resultado final. La incorporación de la minimización y de los tres tipos de restricción (Big-M) se detalla en «mejora_aplicada.md».
