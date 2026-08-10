# Prototipos educativos interactivos con IA

Conjunto de **once prototipos educativos interactivos** desarrollados en el marco de un Proyecto Fin de Grado del **Grado en Ingeniería en Organización Industrial** (Tecnun — Universidad de Navarra).

Cada prototipo es una **aplicación web autocontenida**: un único archivo HTML, sin dependencias externas, sin servidor y sin conexión a internet. Se han generado mediante una metodología reproducible basada en un *pipeline* de dos modelos de inteligencia artificial (una IA orquestadora y una IA constructora) a partir de una ficha de encargo docente. Su objetivo no es dar respuestas terminadas, sino **fomentar el razonamiento y el aprendizaje activo** mediante práctica guiada, simulación y retroalimentación.

## Cómo usarlos

Descarga el archivo HTML del prototipo que quieras y **ábrelo con doble clic** en cualquier navegador moderno. No requiere instalación ni conexión. Al abrirlo aparece un caso de ejemplo cargado.

> Opcional: activando **GitHub Pages** en este repositorio, los prototipos quedan accesibles como páginas web con su propia URL, sin necesidad de descargarlos.

## Prototipos

### Investigación Operativa
- **Constructor de modelos de programación lineal** — Entrena la formulación de modelos (variables, función objetivo y restricciones) a partir de enunciados, con corrección por partes.
- **Entrenador del método Símplex** — Guía la resolución paso a paso del método Símplex (incluido Big-M), resaltando variable entrante, saliente y pivote.
- **Camino crítico (CPM)** — Cálculo de tiempos, holguras y actividades críticas sobre la red de un proyecto, para practicar y explicar.

### Dirección Financiera
- **Generador de tablas financieras** — Ejercicios razonados de cuenta de resultados, balance, NOF, cash flow y valoración, con predicción y pistas.
- **Laboratorio de bonos y valores** — Valoración de bonos y relación precio-rentabilidad, con gráfica interactiva, tutor socrático y modo examen.
- **Control de gestión (análisis de desviaciones)** — Resolución guiada de desviaciones (precio, mix, materiales, mano de obra…) con datos distractores.

### Logística
- **Simulador de inventarios** — EOQ, revisión continua y periódica, stock de seguridad, ABC, risk pooling, comparador y generador de ejercicios.
- **Laboratorio de pronósticos de demanda** — Métodos de previsión sobre series temporales, con métricas de error y comparación gráfica.
- **Distribución urbana y última milla** — Comparación de estrategias de reparto sobre una ciudad simulada (coste, tiempo, emisiones, servicio).
- **Simulador del efecto látigo** — Simulación de la amplificación de la demanda a lo largo de la cadena de suministro.

### Prototipo integrador
- **Fundadores de una empresa industrial** — Recorrido por las áreas de una empresa industrial (producto, operaciones, marketing, finanzas) que integra las tres asignaturas en un único caso.

## Estructura del repositorio

```
investigacion-operativa/    Prototipos de Investigación Operativa
direccion-financiera/       Prototipos de Dirección Financiera
logistica/                  Prototipos de Logística
prototipo-integrador/       Prototipo integrador
```

## Licencia

Distribuido bajo licencia MIT (ver el archivo `LICENSE`). Puedes cambiarla por la que prefieras.

## Autoría

Diego Fernández — Proyecto Fin de Grado, Tecnun (Universidad de Navarra).
