// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {

  /* --- DATOS FIJOS: tabla Z (nivel de servicio → factor Z) --- */
  tablaZ: {
    0.84: 1.00, 0.90: 1.28, 0.95: 1.65,
    0.975: 1.96, 0.99: 2.33, 0.998: 3.00
  },

  /* --- PILA DE DATOS ALEATORIOS: botones "Generar caso aleatorio" --- */
  aleatorio: {
    eoq: {
      probMensual: 0.4,             // prob. de presentar la demanda en meses
      demandaMensual: [400, 3000],
      demandaAnual:   [5000, 30000],
      S: [20, 150],                 // coste de pedido (€)
      C: [3, 80],                   // coste unitario (€/ud)
      i: [15, 20, 22, 25, 28, 30],  // tasa de mantenimiento (%)
      dias: [220, 240, 250, 260]    // días laborables/año
    },
    q: {
      d: [20, 100], sd: [4, 25], L: [2, 12],
      probLeadVar: 0.3,             // prob. de generar variabilidad de lead time
      sL: [0.5, 2],
      ns: ['0.90', '0.95', '0.975', '0.99']
    },
    p: {
      d: [20, 100], sd: [4, 20],
      P: [7, 10, 14, 15, 21, 30],   // periodo de revisión (días)
      L: [2, 8],
      ns: ['0.95', '0.975', '0.99'],
      invFraccion: [0.1, 0.8]       // inventario inicial como fracción de d·P
    },
    pool: {
      n: [2, 8], ss: [80, 500],
      rho: [0, 0, 0, 0.1, 0.3, 0.5, 0.8, -0.2] // el 0 se repite para que salga más
    },
    abc: {
      numProductos: 12,
      // tramos por valor; prob = umbral acumulado sobre Math.random()
      tramos: [
        { prob: 0.20, u: [20, 150],   pr: [80, 400] }, // pocas uds, caro  → posible A
        { prob: 0.55, u: [200, 1200], pr: [5, 30]   }, // gama media
        { prob: 1.00, u: [800, 6000], pr: [0.3, 5]  }  // muchas uds, barato → posible C
      ]
    },
    comp: {
      base: { D: [8000, 20000], S: [30, 100], C: [8, 50], i: [15, 20, 25, 30], L: [3, 8], sd: [5, 15], ns: 95 },
      tipos: ['servicio', 'volumen', 'logistica', 'mixto'],
      nsAlto: [99, 99.8],
      volumen:   { factorD: [1.3, 2], factorS:  [1.2, 1.8] },
      logistica: { incrL:   [2, 6],   factorSd: [1.3, 2]   },
      mixto:     { incrL:   [1, 4],   factorS:  [0.6, 0.9] }
    }
  },

  /* --- PILA DE DATOS ALEATORIOS: generador de ejercicios --- */
  generador: {
    productosEOQ: ['cojinetes', 'tornillos', 'filtros de aceite', 'baterías', 'neumáticos', 'cartuchos', 'cables HDMI'],
    eoq: { probMensual: 0.4, demanda: [5000, 30000], S: [20, 120], C: [5, 80], i: [15, 20, 22, 25, 28, 30], dias: 250 },
    q:   { d: [20, 80],  sd: [5, 20], L: [3, 10], ns: [0.90, 0.95, 0.975, 0.99] },
    ss:  { d: [30, 100], sd: [5, 25], L: [2, 10], ns: [0.90, 0.95, 0.975, 0.99] },
    p:   { d: [30, 100], sd: [5, 20], P: [7, 21], L: [2, 7], ns: [0.95, 0.975, 0.99] },
    abc: {
      numProductos: [8, 12],
      tramos: [
        { prob: 0.20, u: [20, 150],   pr: [80, 400] },
        { prob: 0.55, u: [200, 1200], pr: [5, 30]   },
        { prob: 1.00, u: [800, 6000], pr: [0.3, 5]  }
      ]
    },
    rp:  { n: [2, 8], ssi: [80, 400] }
  }

};
