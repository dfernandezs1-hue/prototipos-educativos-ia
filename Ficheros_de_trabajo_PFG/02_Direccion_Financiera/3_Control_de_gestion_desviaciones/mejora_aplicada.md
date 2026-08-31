# Mejora aplicada tras la validación — Control de gestión (desviaciones)
**Origen:** validación de la profesora Leire Labaka (valoración 4/5).
**Observación:** la desviación por mix parecía dudosa y un campo resultaba confuso.

## Cambio aplicado
Se comprobó la fórmula de la desviación por mix frente a una referencia independiente sobre 200.000 casos: era correcta (diferencias inferiores al céntimo por redondeo). El problema estaba en la entrada numérica, que no admitía el formato español (puntos de millar y coma decimal); se sustituyó, se añadió el desglose por producto para hacer el resultado auditable y se reformuló la etiqueta del campo confuso.

---
*Esta mejora se aplicó **directamente sobre el prototipo**, a partir del feedback del profesor en la validación; no se generó mediante la ficha de encargo. Las observaciones de carácter generalizable se incorporaron, por separado, a la Parte A de la ficha (véase el apartado 5.4 de la memoria).*
