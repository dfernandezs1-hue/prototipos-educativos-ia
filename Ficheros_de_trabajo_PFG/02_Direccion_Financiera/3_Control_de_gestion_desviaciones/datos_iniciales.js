// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {

  /* --- DATOS FIJOS: listas de nombres para los enunciados --- */
  listas: {
    prods: ['Toallas','Servilletas','Manteles','Sábanas','Bolsas','Cajas','Envases'],
    mkts:  ['España','Francia','Portugal','Alemania','Italia'],
    mats:  ['Tela','Algodón','Cartón','PVC','Plástico','Papel'],
    egys:  ['electricidad','gas natural','vapor industrial']
  },

  /* --- PILA DE DATOS ALEATORIOS: rangos de magnitud por ejercicio --- */
  rangos: {
    salesPrice: { unidades:[400,8000], precioStd:[8,60,2], desvPrecio:[-6,9,2] },
    salesMix:   { volumen:[12000,80000], mixStd:[30,70], desvMix:[-15,15], precioStd:[10,80,2] },
    commercial: { unidades:[1000,20000], costeStd:[2,20,2], desvCoste:[-0.18,0.18,3] },
    material:   { cantidad:[5000,50000], precioStd:[1,30,3], desvPrecio:[-6,8,3] },
    labor:      { unidades:[500,5000], horasStd:[0.5,4,2], desvHoras:[-0.6,0.8,2], costeHora:[15,45,2] },
    energy:     { consumo:[10000,200000], precioStd:[0.08,0.35,4], desvPrecio:[-0.06,0.09,4] }
  }

};
