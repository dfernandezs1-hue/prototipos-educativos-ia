Ficha de encargo docente — Parte A
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Módulo de Dirección Financiera (dentro del integrador)

## 1. Datos generales
**Asignatura:** Dirección Financiera (módulo del proyecto integrador)
**Tema / contenido del temario:** Viabilidad económica de la empresa: márgenes, cuenta de resultados e inversión.
**Nombre provisional del prototipo:** Módulo Finanzas — Fundadores de una empresa industrial

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno evalúe la viabilidad del caso a partir de precios, costes, unidades, costes fijos e inversión, y razone el resultado.
**Tipo de prototipo:** ☒ De cálculo y práctica guiada (integrado)

## 3. Contenido y datos
**Conceptos / procedimientos / fórmulas:** Precio de venta, coste variable y margen; unidades; costes fijos; inversión, tasa y horizonte para la valoración.
**Variables y parámetros con rangos realistas:** Por caso, en «datos_iniciales.js». En LigeraTech: precio de venta 24 €/ud, coste variable 13 €/ud, 14.400 uds, 90.000 € de fijos, 150.000 € de inversión, tasa 9 %, 5 años.
**Caso de referencia con resultado esperado:** Los subtotales se derivan de los datos del caso; deben cuadrar entre sí (coherencia margen–precio).
**Qué NO debe hacer:** No entregar las cuentas resueltas; guiar el razonamiento y señalar incoherencias.
**Errores típicos del alumno a detectar:** Manejar un margen incoherente con el precio de venta.

## 4. Interacción y diseño
**Elementos visuales / interactivos:** Entrada de las cuentas del caso y comprobación de coherencia.
**Qué debe poder hacer el alumno:** Completar las cuentas y verificar su coherencia.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
La incongruencia margen–precio detectada en LigeraTech se corrigió tras la revisión de Martín Tanco (véase «mejora_aplicada_correccion_margen.md»).
