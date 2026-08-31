**Validación con el profesorado**

Como se ha expuesto en el plano B, la validación por juicio de experto constituye una fase propia de este trabajo: dado que el autor no es el docente de las asignaturas, es el profesorado responsable quien confirma la corrección, el ajuste al temario y la utilidad de cada prototipo. En esta sección se recogen los resultados de la primera ronda de validación —los cinco prototipos de Investigación Operativa y Dirección Financiera evaluados por la profesora Leire Labaka— y las mejoras aplicadas a partir de ese feedback. Los prototipos de Logística quedan pendientes de la validación del profesor responsable de la asignatura.

**Diseño de la evaluación**

La valoración se articuló mediante un cuestionario estructurado que el docente cumplimentó para cada prototipo. El cuestionario combinaba una escala Likert de 1 a 5 sobre distintas dimensiones —corrección de conceptos, fórmulas y resultados; ajuste al temario y adecuación del nivel; funcionamiento e interfaz; valor pedagógico; y utilidad docente— con un conjunto de preguntas abiertas sobre lo que la profesora cambiaría, los errores concretos detectados, los contenidos que pudieran faltar y el uso previsto con el alumnado. La profesora evaluó cada prototipo situándose en el papel del alumno que lo utilizaría.

Se sometieron a validación cinco prototipos: tres de Dirección Financiera —Control de gestión (análisis de desviaciones), Laboratorio de bonos y valores y Generador de tablas financieras— y dos de Investigación Operativa —Entrenador del método Símplex y Constructor de modelos de programación lineal—.

**Resultados obtenidos**

La valoración global fue positiva, con puntuaciones de 4 sobre 5 en los tres prototipos financieros y de 3 sobre 5 en los dos de Investigación Operativa. La lectura conjunta de las respuestas revela dos patrones recurrentes: por un lado, una demanda generalizada de mayor variedad de casos y de distintos grados de dificultad; por otro, un único error concreto señalado —en la desviación por mix del prototipo de Control de gestión—. El resto de observaciones se refieren a ampliaciones de alcance o a aspectos de claridad, no a fallos de cálculo.

| Prototipo | Valoración global | Principal mejora solicitada |
|---|---|---|
| Laboratorio de bonos y valores | 4/5 | Incorporar distintos grados de dificultad |
| Control de gestión (desviaciones) | 4/5 | Revisar la desviación por mix; aclarar campos y flexibilizar la entrada |
| Generador de tablas financieras | 4/5 | Elevar el nivel y la complejidad de los casos |
| Entrenador del método Símplex | 3/5 | Añadir minimización y otros tipos de restricción |
| Constructor de modelos de PL | 3/5 | Aportar variedad de enunciados y poder cambiar los signos |

**Mejoras aplicadas a los prototipos**

En el prototipo de **Control de gestión** la profesora advirtió que la desviación por mix podía no estar bien calculada. La comprobación exhaustiva de la fórmula —contrastada frente a una referencia independiente sobre doscientos mil casos— confirmó que el cálculo era correcto, con diferencias inferiores al céntimo atribuibles al redondeo. El origen del problema era la entrada numérica, que no admitía el formato español (puntos de millar y coma decimal) y, en consecuencia, interpretaba mal valores como «−225.000». Se sustituyó esa entrada por una que reconoce el formato habitual, se incorporó el desglose por producto de la desviación por mix para que el resultado sea auditable y se reformuló la etiqueta del campo que la profesora señaló como confuso.

En el **Constructor de modelos de programación lineal**, la observación principal —enunciados repetitivos y la imposibilidad de cambiar el signo de las restricciones— se tradujo en tres cambios. Se amplió el banco de contextos de los enunciados, se habilitó que las restricciones combinen signos de distinto tipo (≤, ≥ o =) y que los coeficientes puedan ser positivos, negativos o nulos, y se añadió un selector explícito de signo por restricción. El motor de comprobación de la equivalencia del modelo no requirió modificaciones.

En el **Entrenador del método Símplex**, la petición de incorporar minimización y otros tipos de restricción se resolvió ampliando el algoritmo con variables artificiales mediante el método Big-M. El prototipo admite ahora problemas de maximización y de minimización y restricciones de tipo ≤, ≥ o =, y detecta la infactibilidad. La corrección se verificó contrastando el resultado frente a un solucionador de referencia independiente sobre tres mil problemas aleatorios sin discrepancias. Para preservar la legibilidad de la tabla, la penalización M se representa de forma simbólica en la fila Z.

En el **Laboratorio de bonos y valores** se añadieron niveles de dificultad (básico, intermedio y avanzado) que ajustan el vencimiento de los bonos y la amplitud de las variaciones de la rentabilidad exigida, manteniendo intacta la lógica de cálculo.

En el **Generador de tablas financieras**, donde el mecanismo de nivel ya exigía calcular la práctica totalidad de los subtotales, se elevó el nivel avanzado incorporando el cálculo e interpretación de un ratio analítico por tabla —margen neto, ratio de endeudamiento y conversión de beneficio en caja—, reutilizando la misma maquinaria de cálculo y retroalimentación.

**Mejora de la ficha de encargo docente**

Más allá de los prototipos concretos, la validación puso de manifiesto que las dos demandas recurrentes —variedad de casos y graduación de la dificultad— no estaban contempladas de forma explícita en la ficha de encargo docente. Por tratarse de carencias generalizables, se incorporaron a la Parte A de la plantilla dos campos nuevos: la variedad de casos deseada y los niveles de dificultad. De este modo, la mejora trasciende el prototipo individual y actúa sobre el propio método reproducible (plano A), de manera que un futuro encargo recoja ambos aspectos desde el inicio. Esto ilustra los dos niveles en los que la validación produce frutos en este trabajo: la mejora de los prototipos y la mejora de la plantilla.

**Conclusión de la ronda**

Con las mejoras anteriores queda completada la validación de los cinco prototipos evaluados por la profesora Leire Labaka —a los que se suma el Camino crítico (CPM), validado sin observaciones que motivaran cambios—. El balance es favorable: ningún prototipo presentó errores de cálculo —salvo el caso de la desviación por mix, que la comprobación descartó—, y las observaciones se orientaron a ampliar el alcance y a enriquecer la variedad y la dificultad, aspectos que se han atendido tanto en los prototipos como en la plantilla de encargo.
