Ficha de encargo docente — Parte A (versión final consolidada)
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Simulador del efecto látigo

## 1. Datos generales
**Asignatura:** Logística.
**Tema / contenido del temario:** El efecto látigo en la cadena de suministro.
**Nombre provisional del prototipo:** Simulador del efecto látigo.

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno comprenda cómo pequeñas variaciones en la demanda del cliente final se amplifican aguas arriba en la cadena, y qué factores —retraso de la información, tamaño de lote, falta de coordinación— agravan o atenúan el fenómeno.
**Tipo de prototipo:** ☒ De simulación conceptual

## 3. Contenido y datos
**Conceptos, procedimientos o fórmulas:** Eslabones de la cadena, pedidos, inventarios, roturas de stock y exceso de inventario; índice de efecto látigo; factores amplificadores del fenómeno.
**Variables y parámetros, y rangos realistas:** Variabilidad de la demanda, retraso de la información (0–4 periodos), tamaño mínimo de lote, stock de seguridad, error de pronóstico y grado de coordinación entre eslabones.
**Variedad de casos deseada:** Distintos escenarios de demanda: estable, con pico puntual y con promoción.
**Niveles de dificultad:** Escenarios de complejidad creciente, desde una cadena coordinada hasta una con retrasos y lotes grandes.
**Datos o ejemplos reales:** Una cadena de cinco o seis eslabones (cliente, tienda, mayorista, distribuidor, fábrica y proveedor).
**Caso de referencia con resultado esperado:** El comportamiento cualitativo del clásico juego de la cerveza como referencia conceptual del fenómeno.
**Qué NO debe hacer:** No limitarse a exponer la teoría; debe permitir experimentar modificando parámetros.
**Errores típicos del alumno a detectar:** Creer que la variabilidad se mantiene constante a lo largo de la cadena y no percibir el efecto del retraso de la información.

## 4. Interacción y diseño
**Elementos visuales o interactivos:** Controles para los parámetros, gráficos de pedidos e inventarios por eslabón, índice de efecto látigo, comparador de escenarios, eventos activables (pico, promoción) y un modo de explicación paso a paso.
**Qué debe poder hacer el alumno:** Modificar los parámetros, activar eventos y observar la evolución de cada eslabón.
**Qué debe poder hacer el profesor:** Utilizarlo en clase para explicar el fenómeno y comparar escenarios.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
Conviene que la velocidad de la simulación sea ajustable, para poder seguir la evolución con calma durante la explicación en clase. Fue el prototipo con la valoración más alta; el ajuste de la velocidad se detalla en «mejora_aplicada.md».
