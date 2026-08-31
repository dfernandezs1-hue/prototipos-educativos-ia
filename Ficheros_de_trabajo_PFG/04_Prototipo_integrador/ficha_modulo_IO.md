Ficha de encargo docente — Parte A
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Módulo de Investigación Operativa (dentro del integrador)

## 1. Datos generales
**Asignatura:** Investigación Operativa (módulo del proyecto integrador)
**Tema / contenido del temario:** Asignación de la producción por rentabilidad con recursos limitados.
**Nombre provisional del prototipo:** Módulo IO — Fundadores de una empresa industrial

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno asigne la producción entre productos maximizando la rentabilidad, respetando la capacidad de los recursos y los límites de demanda.
**Tipo de prototipo:** ☒ De cálculo y práctica guiada (integrado)

## 3. Contenido y datos
**Conceptos / procedimientos / fórmulas:** Función objetivo de margen, restricciones de capacidad (por ejemplo, horas de CNC y de acabado) y de demanda máxima; asignación óptima.
**Variables y parámetros con rangos realistas:** Márgenes por producto, consumos de recurso por unidad, capacidades de cada recurso y demanda máxima; valores concretos por caso en «datos_iniciales.js».
**Caso de referencia con resultado esperado:** El óptimo se calcula en vivo a partir de los márgenes y las restricciones del caso (no hay respuesta fijada por código).
**Qué NO debe hacer:** No dar la asignación óptima sin que el alumno razone la prioridad por recurso escaso.
**Errores típicos del alumno a detectar:** Priorizar por margen unitario sin mirar el margen por hora de recurso escaso.

## 4. Interacción y diseño
**Elementos visuales / interactivos:** Entrada de la asignación y comprobación frente al óptimo calculado.
**Qué debe poder hacer el alumno:** Proponer una asignación y contrastarla con la óptima.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
El profesor Martín Tanco señaló que, con el límite de demanda vigente, la asignación puede quedar casi determinada; se recoge como aspecto de diseño a revisar en una futura iteración.
