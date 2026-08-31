// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {

  // DATOS FIJOS: proyecto de ejemplo cargado al inicio
  proyectoInicial: [
    {id:'A', dur:3, preds:[]},
    {id:'B', dur:2, preds:['A']},
    {id:'C', dur:4, preds:['A']},
    {id:'D', dur:2, preds:['B','C']},
    {id:'E', dur:3, preds:['D']}
  ],

  // PILA DE DATOS: parámetros del generador aleatorio
  generador: {
    numActividades:  [4, 10],   // mínimo y máximo de actividades permitidas
    duracionDefecto: [1, 6],    // duración por defecto si el campo está vacío
    // nº máximo de predecesores por actividad según dificultad/tipo
    maxPred: { facil:1, normal:2, basico:1, examenDificil:3 },
    intentosHolguras: 40        // reintentos para forzar que aparezcan holguras > 0
  }

};
