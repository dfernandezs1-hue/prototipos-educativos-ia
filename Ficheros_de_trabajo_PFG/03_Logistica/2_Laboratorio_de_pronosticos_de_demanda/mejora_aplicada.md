# Mejora aplicada tras la validación — Laboratorio de pronósticos de demanda
**Origen:** validación del profesor Martín Tanco (valoración 4/5).
**Observación:** los resultados no coincidían con el caso de referencia Tahoe Salt y el generador funcionaba de forma extraña.

## Cambio aplicado
El ejemplo Tahoe Salt cargaba datos no reales y un periodo inadecuado; se sustituyeron por la serie real de la bibliografía (Chopra) y se ajustó automáticamente el periodo, tras lo cual el prototipo reproduce el resultado de control. Se confirmó que el método estático y las etiquetas de los parámetros de Holt (α/β) eran correctos y se reparó el generador de ejercicios.

---
*Esta mejora se aplicó **directamente sobre el prototipo**, a partir del feedback del profesor en la validación; no se generó mediante la ficha de encargo. Las observaciones de carácter generalizable se incorporaron, por separado, a la Parte A de la ficha (véase el apartado 5.4 de la memoria).*
