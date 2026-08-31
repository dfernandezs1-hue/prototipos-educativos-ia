// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {

  /* --- PUNTOS FIJOS (fracción del tamaño del mapa s) --- */
  puntos: {
    depot:    { fx:0.05, fy:0.5  }, // depósito en periferia
    ccu:      { fx:0.2,  fy:0.15 }, // CCU en periferia opuesta
    microhub: { fx:0.55, fy:0.55 }  // microhub dentro del centro
  },

  /* --- ZONAS FIJAS del mapa (posición y radio como fracción de s) --- */
  zonas: {
    trafico:      [ {fx:0.55, fy:0.55, fr:0.18}, {fx:0.7, fy:0.4, fr:0.12} ],
    restringidas: [ {fx:0.6,  fy:0.5,  fr:0.10} ],
    carga:        [ {fx:0.5, fy:0.45}, {fx:0.65, fy:0.6}, {fx:0.45, fy:0.7} ]
  },

  /* --- PILA DE DATOS ALEATORIOS: generación de clientes --- */
  escenario: {
    probCentral: 0.7,                          // prob. de cliente en zona central
    centralX: [0.3, 0.85], centralY: [0.2, 0.85], // fracciones de s (zona central)
    perifX:   [0.1, 0.95], perifY:   [0.05, 0.95], // fracciones de s (periferia)
    demanda:        [3, 15],
    ventanaInicio:  [8, 15],   // hora de inicio de la ventana horaria
    ventanaDuracion:[2, 4],    // horas que se suman al inicio para el fin
    descargaMin:    [5, 15],   // minutos de descarga
    prioridad:      [1, 3],
    probReverse:    0.25       // prob. de necesitar logística inversa
  }

};
