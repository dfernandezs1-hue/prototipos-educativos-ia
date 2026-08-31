// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {
  // DATOS FIJOS: empresas usadas en los enunciados
  companies: [
    {name:"Olivar Andaluz S.L.", sector:"Aceites y conservas", note:"PYME familiar en expansión nacional."},
    {name:"NorteFrío S.A.", sector:"Logística refrigerada", note:"Empresa con CAPEX elevado y deuda bancaria."},
    {name:"Lúmina Diseño", sector:"Iluminación arquitectónica", note:"Negocio en crecimiento con NOF crecientes."},
    {name:"Bodegas Marvel", sector:"Vino y enoturismo", note:"Existencias altas y ciclo de cobro largo."},
    {name:"Tecnal Componentes", sector:"Componentes industriales", note:"Margen ajustado y rotación elevada."},
    {name:"Casa Riera", sector:"Distribución hortofrutícola", note:"Negocio con cobro rápido y proveedores largos."},
    {name:"Aerolínea Mistral", sector:"Aviación regional", note:"CAPEX intensivo y amortizaciones relevantes."},
    {name:"Vega Software", sector:"SaaS B2B", note:"Crecimiento rápido y caja sensible a cobros."}
  ]
};
