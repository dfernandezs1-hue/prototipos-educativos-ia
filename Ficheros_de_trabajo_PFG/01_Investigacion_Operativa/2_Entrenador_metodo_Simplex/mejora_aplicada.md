# Mejora aplicada tras la validación — Entrenador del método Símplex
**Origen:** validación de la profesora Leire Labaka (valoración 3/5).
**Observación:** faltaban la minimización y otros tipos de restricción.

## Cambio aplicado
Se incorporó el método Big-M con variables artificiales: el prototipo resuelve maximización y minimización y los tres tipos de restricción (≤, ≥, =) y detecta la infactibilidad. Para no perder legibilidad, la penalización M se representa de forma simbólica en la fila Z. Verificado frente a un solucionador de referencia independiente sobre 3.000 problemas aleatorios, sin discrepancias. En el CONFIG quedan casos de minimización y de restricciones mixtas.

---
*Esta mejora se aplicó **directamente sobre el prototipo**, a partir del feedback del profesor en la validación; no se generó mediante la ficha de encargo. Las observaciones de carácter generalizable se incorporaron, por separado, a la Parte A de la ficha (véase el apartado 5.4 de la memoria).*
