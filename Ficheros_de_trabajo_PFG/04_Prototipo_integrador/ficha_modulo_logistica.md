Ficha de encargo docente — Parte A
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Módulo de Logística (dentro del integrador)

## 1. Datos generales
**Asignatura:** Logística (módulo del proyecto integrador)
**Tema / contenido del temario:** Decisión de producción/pedido en presencia de variabilidad de la demanda (efecto látigo).
**Nombre provisional del prototipo:** Módulo Logística — Fundadores de una empresa industrial

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno decida el nivel de producción o pedido teniendo en cuenta la variabilidad de la demanda y sus consecuencias en la cadena.
**Tipo de prototipo:** ☒ De simulación conceptual (integrado)

## 3. Contenido y datos
**Conceptos / procedimientos / fórmulas:** Variabilidad de la demanda y efecto látigo; decisión de pedido y sus consecuencias aguas arriba.
**Variables y parámetros con rangos realistas:** Demanda y su variabilidad por caso, en «datos_iniciales.js».
**Caso de referencia con resultado esperado:** No aplica de forma cerrada; el módulo es de decisión y comparación.
**Qué NO debe hacer:** No reducir la decisión a un único número óptimo sin discutir el efecto de la variabilidad.
**Errores típicos del alumno a detectar:** Pedir siempre la media sin considerar otros costes ni la amplificación de la variabilidad.

## 4. Interacción y diseño
**Elementos visuales / interactivos:** Decisión de pedido y visualización de sus consecuencias.
**Qué debe poder hacer el alumno:** Tomar la decisión y observar su efecto.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
Martín Tanco observó que tomar siempre el «promedio» como óptimo es una simplificación, al no considerar otros costes; se recoge como línea de mejora de diseño.
