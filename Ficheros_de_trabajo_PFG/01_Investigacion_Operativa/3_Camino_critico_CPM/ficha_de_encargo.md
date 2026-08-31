Ficha de encargo docente — Parte A (versión final consolidada)
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Generador visual de ejercicios de camino crítico (CPM)

## 1. Datos generales
**Asignatura:** Investigación Operativa.
**Tema / contenido del temario:** Camino crítico (CPM): tiempos, holguras y ruta crítica sobre una red de actividades.
**Nombre provisional del prototipo:** Generador visual de ejercicios de camino crítico (CPM).

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno realice la pasada hacia adelante y hacia atrás, calcule las holguras e identifique la ruta crítica, apoyándose en la representación de la red.
**Tipo de prototipo:** ☒ De cálculo y práctica guiada

## 3. Contenido y datos
**Conceptos, procedimientos o fórmulas:** Precedencias, tiempos tempranos (ES/EF) y tardíos (LS/LF), holgura total y ruta crítica.
**Variables y parámetros, y rangos realistas:** Proyectos de 4 a 10 actividades; duraciones de 1 a 6; máximo de predecesores según dificultad (fácil 1, normal 2, examen difícil 3).
**Variedad de casos deseada:** Proyectos de distinto tamaño y forma de red, generados aleatoriamente.
**Niveles de dificultad:** Fácil, normal y de examen, según el número de actividades y de predecesores.
**Datos o ejemplos reales:** Proyecto inicial precargado A–E (A=3; B=2 tras A; C=4 tras A; D=2 tras B y C; E=3 tras D).
**Caso de referencia con resultado esperado:** Un proyecto con su ruta crítica y holguras conocidas, para contrastar los cálculos.
**Qué NO debe hacer:** No entregar directamente la ruta crítica; acompañar el cálculo.
**Errores típicos del alumno a detectar:** Omitir una precedencia, equivocarse en la pasada hacia atrás o confundir la holgura total.

## 4. Interacción y diseño
**Elementos visuales o interactivos:** Red del proyecto dibujada, tabla de tiempos y holguras, generador aleatorio con nivel.
**Qué debe poder hacer el alumno:** Definir o generar un proyecto y calcular tiempos, holguras y ruta crítica.
**Qué debe poder hacer el profesor:** Generar proyectos nuevos con el nivel deseado.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero)

## 6. Observaciones
Validado por la profesora Leire Labaka sin observaciones que motivaran cambios.
