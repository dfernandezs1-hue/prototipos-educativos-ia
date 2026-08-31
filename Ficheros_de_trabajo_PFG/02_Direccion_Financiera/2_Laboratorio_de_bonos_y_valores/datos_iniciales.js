// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {

  nominal: 1000, // valor nominal de los bonos (datos fijos)

  /* --- PILA DE DATOS ALEATORIOS: rangos por tipo de ejercicio --- */
  ejercicios: {
    bajo:   { cupon:[3,6.5], anios:[3,8],  spread:[1.5,5] },   // r = cupón + spread
    sobre:  { cupon:[6,10],  anios:[3,8],  spread:[1.5,4] },   // r = cupón − spread (mín. 0.5)
    par:    { cupon:[4,8],   anios:[3,8] },                    // r = cupón
    venta:  { cupon:[4,8],   anios:[5,10], rCompra:[3,8], cambioR:[-3,3] }, // años venta = ri(2, n−1)
    cambio: { cupon:[4,8],   anios:[3,10], r0:[3,8], salto:[1.5,4] },       // el salto es ± al azar
    benef:  { cupon:[4,8],   anios:[3,8],  r:[3,9] },
    tae:    { cupon:[4,8],   anios:[5,9],  rCompra:[3,8], cambioR:[-2,2] }
  },

  /* --- NIVELES DE DIFICULTAD: vencimiento y amplitud de las variaciones de r --- */
  dificultad: {
    facil:   { anios:[3,5],   swing:0.6 },  // pocos años, variaciones suaves
    medio:   { anios:null,    swing:1   },  // usa el rango propio de cada tipo (sin cambios)
    dificil: { anios:[10,15], swing:1.7 }   // vencimientos largos, variaciones amplias
  }

};
