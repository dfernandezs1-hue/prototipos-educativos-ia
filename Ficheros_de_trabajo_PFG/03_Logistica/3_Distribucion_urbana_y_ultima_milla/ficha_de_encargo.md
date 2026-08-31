Ficha de encargo docente — Parte A (versión final consolidada)
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Distribución urbana y última milla

## 1. Datos generales
**Asignatura:** Logística
**Tema / contenido del temario:** Distribución urbana y logística de última milla: reparto en ciudad con microhubs, ventanas horarias, zonas restringidas y logística inversa.
**Nombre provisional del prototipo:** Optimizador inteligente de distribución urbana y última milla

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno experimente con el diseño del reparto de última milla y comprenda el efecto de los microhubs, las ventanas horarias y las zonas restringidas sobre la distribución.
**Tipo de prototipo:** ☒ De simulación conceptual

## 3. Contenido y datos
**Conceptos / procedimientos / fórmulas:** Depósito, centro de consolidación urbana y microhub; zonas de tráfico, restringidas y de carga; ventanas horarias, prioridades y logística inversa.
**Variables y parámetros con rangos realistas:** Puntos fijos (depósito, CCU y microhub) sobre el mapa; generación de clientes con probabilidad 0,7 de zona central, demanda 3–15, ventana horaria de inicio 8–15 h y duración 2–4 h, descarga 5–15 min, prioridad 1–3 y probabilidad 0,25 de necesitar logística inversa.
**Variedad de casos deseada:** Distintos escenarios de clientes generados aleatoriamente sobre el mapa, con más o menos concentración central.
**Niveles de dificultad:** Del escenario con clientes concentrados y sin restricciones al escenario disperso con zonas restringidas y logística inversa.
**Datos o ejemplos reales:** Configuración fija del mapa (posiciones de depósito, CCU, microhub y zonas de tráfico/restringidas/carga).
**Caso de referencia con resultado esperado:** No aplica; es un prototipo de simulación y comparación, no de cálculo con un único resultado.
**Qué NO debe hacer:** No plantearse como un solver exacto de rutas; es un simulador para comparar configuraciones de reparto.
**Errores típicos del alumno a detectar:** Ignorar las ventanas horarias o las zonas restringidas al plantear el reparto.

## 4. Interacción y diseño
**Elementos visuales / interactivos:** Mapa con puntos y zonas, generación de clientes y visualización del reparto.
**Qué debe poder hacer el alumno:** Generar escenarios y observar el efecto de microhubs, ventanas y restricciones.
**Qué debe poder hacer el profesor:** Fijar o generar escenarios para la discusión en clase.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
Validado por el profesor Martín Tanco. La corrección del ruteo con varios vehículos se detalla en «mejora_aplicada.md».
