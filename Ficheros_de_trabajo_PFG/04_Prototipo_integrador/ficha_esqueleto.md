Ficha de encargo docente — Parte A
(Las Partes B y C son fijas; véase «Plantilla_ficha_de_encargo.md» en la raíz.)


> **Nota.** Ficha reconstruida con fines de reproducibilidad a partir de las características del prototipo; muestra únicamente la **Parte A en su versión consolidada** al término del proyecto y no reproduce literalmente la ficha original. La plantilla no existía al principio —los primeros prototipos se construyeron sin ficha— y se fue desarrollando de forma iterativa. Los campos de *variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado* se incorporaron a raíz de la validación con el profesorado. Mismo criterio que los ejemplos de ficha del anexo de la memoria.

# PARTE A — Esqueleto del proyecto integrador

## 1. Datos generales
**Asignatura:** Integradora (Introducción a la Ingeniería / Organización Industrial) — combina Investigación Operativa, Dirección Financiera y Logística.
**Tema / contenido del temario:** Toma de decisiones al frente de una empresa industrial, recorriendo sus departamentos.
**Nombre provisional del prototipo:** Fundadores de una empresa industrial

## 2. Objetivo pedagógico
**Objetivo:** Que el alumno conecte los contenidos de las tres asignaturas en una misma situación empresarial, tomando decisiones coherentes entre departamentos.
**Tipo de prototipo:** ☒ Otro: proyecto integrador guiado

## 3. Contenido y datos
**Conceptos / procedimientos / fórmulas:** Se detallan en las fichas de cada módulo (Investigación Operativa, Dirección Financiera y Logística).
**Variables y parámetros con rangos realistas:** Definidos por caso; cada empresa (TerraPack, AirSense, LigeraTech) fija sus datos de partida en el bloque CONFIG (véase «datos_iniciales.js»).
**Variedad de casos deseada:** Tres casos de empresa con sectores distintos.
**Datos o ejemplos reales:** Los tres casos precargados con sus datos financieros, de operaciones y de mercado.
**Qué NO debe hacer:** No resolver las decisiones por el alumno; guiar el recorrido y dar retroalimentación.
**Errores típicos del alumno a detectar:** Tomar decisiones incoherentes entre departamentos (por ejemplo, ignorar en producción lo decidido en finanzas).

## 4. Interacción y diseño
**Elementos visuales / interactivos:** Recorrido en cuatro pasos —elegir un caso, entrar en los departamentos, pensar y usar la IA, y presentar al consejo—, con selección de caso y navegación por departamentos.
**Qué debe poder hacer el alumno:** Elegir un caso y recorrer los departamentos tomando decisiones.
**Qué debe poder hacer el profesor:** Seleccionar el caso y usar el recorrido como hilo conductor en clase.

## 5. Iteración
**Modo:** ☒ Génesis (construir desde cero) — esqueleto que después se completa módulo a módulo (uso en cascada).

## 6. Observaciones
La lógica y los datos de cada departamento se encargan en fichas independientes: «ficha_modulo_IO.md», «ficha_modulo_finanzas.md» y «ficha_modulo_logistica.md».
