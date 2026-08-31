// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {
  // DATOS FIJOS: problemas de ejemplo (maximización, restricciones ≤)
  ejemplos: {
    basico:    {c:[3,5],A:[[2,1],[1,2]],b:[8,8]},
    entrante:  {c:[4,4],A:[[2,1],[1,2]],b:[8,8]},
    saliente:  {c:[2,3],A:[[1,1],[2,2]],b:[6,12]},
    noacotado: {c:[1,3],A:[[1,-1],[2,-1]],b:[4,6]},
    examen:    {c:[5,4],A:[[6,4],[1,2]],b:[24,6]},
    minimo:    {sense:'min', c:[4,3], A:[[2,1],[1,3]], b:[10,15], ops:['>=','>=']},
    mixto:     {c:[3,2], A:[[1,1],[1,3]], b:[8,18], ops:['=','<=']}
  }
};
