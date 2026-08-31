Ficha de encargo docente — Parte A (versión final consolidada)
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Simulador de inventarios

## 1. Datos generales
**Asignatura:** Logística
**Tema / contenido del temario:** Gestión de inventarios: lote económico (EOQ), stock de seguridad y punto de pedido, sistemas de revisión continua (Q) y periódica (P), agregación (pooling) y clasificación ABC.
**Nombre provisional del prototipo:** Simulador de inventarios

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno calcule el lote económico, el stock de seguridad y el punto de pedido, entienda el efecto del nivel de servicio y de la variabilidad, y compare los sistemas Q y P.
**Tipo de prototipo:** ☒ De cálculo y práctica guiada

## 3. Contenido y datos
**Conceptos / procedimientos / fórmulas:** EOQ (Q*), costes de pedido y de mantenimiento; factor Z por nivel de servicio; sistema de revisión continua (Q) y periódica (P); agregación/pooling con correlación; clasificación ABC por valor.
**Variables y parámetros con rangos realistas:** EOQ — demanda 5.000–30.000 ud/año (o 400–3.000 mensual), coste de pedido 20–150 €, coste unitario 3–80 €, tasa de mantenimiento 15–30 %, 220–260 días laborables. Sistema Q — demanda diaria 20–100, desviación 4–25, plazo 2–12 días, nivel de servicio 0,90–0,99. Sistema P — periodo de revisión 7–30 días. Pooling — 2–8 almacenes con distintas correlaciones. ABC — 12 productos por tramos de valor.
**Variedad de casos deseada:** Cinco módulos (EOQ, Q, P, pooling y ABC), cada uno con generación de casos aleatorios realistas.
**Niveles de dificultad:** Implícitos en cada módulo (por ejemplo, demanda mensual frente a anual en EOQ, o variabilidad del plazo de entrega en el sistema Q).
**Datos o ejemplos reales:** Tabla Z de niveles de servicio precargada (0,84→1,00; 0,95→1,65; 0,99→2,33…).
**Caso de referencia con resultado esperado:** Un EOQ conocido con su Q* esperado, para comprobar que el prototipo devuelve el mismo lote.
**Qué NO debe hacer:** No entregar Q* ni el punto de pedido directamente; acompañar el cálculo.
**Errores típicos del alumno a detectar:** Mezclar demanda anual y mensual, y errar el factor Z asociado al nivel de servicio.

## 4. Interacción y diseño
**Elementos visuales / interactivos:** Módulos con entrada de datos, botón de caso aleatorio y comprobación del cálculo.
**Qué debe poder hacer el alumno:** Resolver cada módulo y contrastar el resultado.
**Qué debe poder hacer el profesor:** Generar casos aleatorios de cada módulo.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
Validado por el profesor Martín Tanco. La reparación del generador de casos y el ajuste del comparador se detallan en «mejora_aplicada.md».
