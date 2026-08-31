// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {

  /* --- PILA DE DATOS ALEATORIOS: generador de series sintéticas --- */
  generador: {
    // estacionalidad (nº de períodos por ciclo) según la frecuencia
    estacionalidadPorFrecuencia: { mensual:12, semanal:12, diaria:7, trimestral:4, anual:4 },
    ruidoBase:   0.05,  // ±5% sobre el nivel base (patrones "estable" y "brusco")
    ruidoSuave:  0.04,  // ±4% (creciente, decreciente, estacional, tend+est)
    ruidoFuerte: 0.30,  // ±30% (patrón "ruido")
    pendienteCreciente:    0.03,  // +3% del nivel base por período
    pendienteDecreciente:  0.02,  // −2% del nivel base por período
    sueloDecreciente:      0.30,  // la serie decreciente no baja del 30% del nivel base
    ampEstacional:  0.25,         // amplitud estacional (patrón "estacional")
    ampTendEst:     0.22,         // amplitud estacional (patrón "tendencia+estacional")
    pendienteTendEst: 0.025,      // pendiente del patrón "tendencia+estacional"
    saltoBrusco:    1.5           // factor del salto (patrón "brusco")
  },

  /* --- DATOS FIJOS: series de ejemplo precargadas --- */
  // notas:null → las etiquetas se generan solas como T1, T2, ...
  ejemplos: {
    granos: {
      freq:'mensual',
      serie:[4200,4350,4180,4420,4310,4280,4390,4420,4150,4480,4220,4350],
      notas:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    },
    crecimiento: {
      freq:'mensual',
      serie:[120,135,142,158,165,178,192,205,218,232,248,265,280,295],
      notas:null
    },
    alimentario: {
      freq:'mensual',
      serie:[180,210,260,320,380,360,290,240,210,195,200,220,
             185,215,270,330,385,365,295,245,215,200,205,225],
      notas:['Ene1','Feb1','Mar1','Abr1','May1','Jun1','Jul1','Ago1','Sep1','Oct1','Nov1','Dic1',
             'Ene2','Feb2','Mar2','Abr2','May2','Jun2','Jul2','Ago2','Sep2','Oct2','Nov2','Dic2']
    },
    tahoe: {
      freq:'trimestral',
      serie:[8000,13000,23000,34000,10000,18000,23000,38000,12000,13000,32000,41000],
      notas:['Q1 A1','Q2 A1','Q3 A1','Q4 A1','Q1 A2','Q2 A2','Q3 A2','Q4 A2','Q1 A3','Q2 A3','Q3 A3','Q4 A3']
    }
  }

};
