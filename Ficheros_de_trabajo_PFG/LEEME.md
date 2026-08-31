# Ficheros de trabajo — PFG
### Análisis y ensayos de utilización de la inteligencia artificial generativa en el grado en Organización Industrial

Este paquete reúne los ficheros de trabajo que hacen **reproducible** el proyecto: por cada prototipo, sus **datos iniciales**, las **instrucciones** con que se generó (la ficha de encargo docente y, cuando la hubo, la mejora dirigida) y el **resultado** (el HTML final, autocontenido y ejecutable con doble clic).

## Cómo está organizado
Cada prototipo tiene su carpeta con:
- `ficha_de_encargo.md` — la Parte A de la ficha de encargo docente (instrucciones).
- `datos_iniciales.js` — la «pila de datos» del prototipo, extraída de su bloque CONFIG (datos fijos y rangos de generación aleatoria).
- `mejora_aplicada.md` — cuando la validación motivó cambios, la mejora aplicada al prototipo (aplicada directamente a partir del feedback, no mediante la ficha).
- `resultado/` — el prototipo final en HTML.

Carpetas (numeradas en el mismo orden que el capítulo 4 de la memoria):
- `01_Investigacion_Operativa/` — 1) Constructor de modelos de PL · 2) Entrenador del método Símplex · 3) Camino crítico (CPM).
- `02_Direccion_Financiera/` — 1) Generador de tablas financieras · 2) Laboratorio de bonos y valores · 3) Control de gestión (desviaciones).
- `03_Logistica/` — 1) Simulador de inventarios · 2) Laboratorio de pronósticos de demanda · 3) Distribución urbana y última milla · 4) Simulador del efecto látigo.
- `04_Prototipo_integrador/` — «Fundadores de una empresa industrial», con el uso de la ficha **en cascada** (esqueleto + un módulo por departamento).

En la raíz:
- `Metodologia.md` — la metodología reproducible (planos A y B, pipeline de dos IA, fases y tipología).
- `Plantilla_ficha_de_encargo.md` — la ficha estándar (Parte A editable; Partes B y C fijas).
- `Validacion_con_el_profesorado.md` — resultados de la validación y mejoras aplicadas.

## Cómo se lee cada prototipo (reproducibilidad)
Datos iniciales → instrucciones (ficha) → resultado. La ficha, más el material de la asignatura, es lo que la IA orquestadora convierte en el prompt de implementación; la IA constructora produce el HTML conforme a las Partes B y C (estándares fijos).

## Cómo se desarrolló la ficha (y por qué la Parte A se muestra consolidada)
La ficha de encargo **no fue el punto de partida** del trabajo, sino un resultado que fue emergiendo. Siguiendo lo que recoge la memoria (apartados 3.8 y 5.4):

1. **Los primeros prototipos se construyeron sin ficha.** De la experiencia con esos primeros casos se confeccionó una **versión preliminar** de la plantilla.
2. **Refinamiento continuo:** con cada nuevo prototipo, si faltaba un elemento o un campo inducía a error, se corregía y se completaba la plantilla (refinamiento iterativo propio de la investigación basada en diseño).
3. **Aportación de la validación:** las observaciones generalizables añadieron a la Parte A tres campos nuevos —*variedad de casos*, *niveles de dificultad* y *caso de referencia con resultado esperado*—.
4. **Versión consolidada:** la que se emplea en este paquete es la del final del proyecto.

Por eso, y **al igual que la memoria en su anexo**, cada `ficha_de_encargo.md` presenta la **Parte A consolidada** y lleva una nota indicando que es una reconstrucción y no la ficha original. El desarrollo de la ficha se narra aquí y en la memoria; no se refleja mediante Partes A distintas por prototipo, para no contradecir el anexo de la memoria (donde un prototipo inicial como el Símplex ya figura con todos los campos).

El **prototipo integrador** ilustra un segundo régimen de uso: la ficha aplicada **en cascada** (una para el esqueleto y una por módulo departamental), tal como describe la memoria.



### Cómo se aplicaron las mejoras de la validación
Las mejoras derivadas del feedback del profesorado se aplicaron **directamente sobre cada prototipo**, como una iteración final (apartado 5.3 de la memoria); **no** se generaron mediante la ficha. En paralelo, solo las observaciones **generalizables** se llevaron a la Parte A de la ficha, dando lugar a los tres campos nuevos (apartado 5.4). Cada `mejora_aplicada.md` documenta ese cambio directo.

El **prototipo integrador** se construyó ya con la ficha **consolidada**, aplicándola **en cascada**: primero el esqueleto y después un módulo por departamento (Investigación Operativa, Dirección Financiera y Logística).

## Ejecución
Los HTML son autocontenidos: sin librerías externas, sin conexión y sin almacenamiento persistente. Se abren con doble clic en cualquier navegador moderno.
