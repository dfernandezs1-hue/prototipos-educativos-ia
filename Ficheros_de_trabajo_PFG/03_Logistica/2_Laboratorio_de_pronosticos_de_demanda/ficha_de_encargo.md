Ficha de encargo docente — Parte A (versión final consolidada)
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Laboratorio de pronósticos de demanda

## 1. Datos generales
**Asignatura:** Logística
**Tema / contenido del temario:** Pronóstico de demanda con técnicas tradicionales sobre series temporales (tendencia, estacionalidad y ruido).
**Nombre provisional del prototipo:** Laboratorio inteligente de pronósticos de demanda

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno aplique métodos de previsión sobre distintas series, reconozca sus patrones y compare el ajuste de cada método.
**Tipo de prototipo:** ☒ De simulación conceptual

## 3. Contenido y datos
**Conceptos / procedimientos / fórmulas:** Descomposición en tendencia, estacionalidad y ruido; métodos de previsión tradicionales; error de pronóstico.
**Variables y parámetros con rangos realistas:** Generador de series sintéticas con estacionalidad según la frecuencia (mensual 12, semanal 12, diaria 7, trimestral y anual 4), ruido base ±5 %, suave ±4 % y fuerte ±30 %, pendientes de ±2–3 % y amplitud estacional en torno al 22–25 %.
**Variedad de casos deseada:** Varios patrones de serie — estable, creciente, decreciente, estacional, tendencia+estacional, ruido y salto brusco.
**Niveles de dificultad:** Del patrón estable y limpio a las series con ruido fuerte o salto brusco.
**Datos o ejemplos reales:** Series de ejemplo precargadas (por ejemplo, una serie mensual de granos y una serie de crecimiento sostenido).
**Caso de referencia con resultado esperado:** El caso Tahoe Salt con su pronóstico, para contrastar los números.
**Qué NO debe hacer:** No limitarse a devolver un pronóstico; permitir comparar métodos y ver el efecto de los patrones.
**Errores típicos del alumno a detectar:** No identificar la estacionalidad o aplicar un método inadecuado al patrón de la serie.

## 4. Interacción y diseño
**Elementos visuales / interactivos:** Serie representada, selección de método y comparación del ajuste.
**Qué debe poder hacer el alumno:** Generar o cargar una serie, aplicar métodos y comparar resultados.
**Qué debe poder hacer el profesor:** Generar series de distintos patrones.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
Validado por el profesor Martín Tanco (4/5). La corrección del caso de referencia Tahoe Salt y del generador se detallan en «mejora_aplicada.md».
