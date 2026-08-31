// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

const CONFIG = {
  casos:[
    {
      id:"env", color:"#0d8a6f", nombre:"TerraPack", sector:"Envase sostenible",
      titulo:"TerraPack: bandejas compostables contra el plástico",
      resumen:"Una startup quiere fabricar bandejas compostables para alimentación aprovechando la normativa europea contra el plástico de un solo uso.",
      foco:"fin", focoTxt:"Dirección Financiera",
      historia:[
        "Europa restringe el plástico de un solo uso y las cadenas de supermercados buscan alternativas compostables para sus platos preparados. Tres ingenieras recién tituladas fundan <b>TerraPack</b> para fabricar bandejas de fibra moldeada compostable.",
        "Han alquilado una pequeña nave cerca de Gijón y negocian con dos cadenas regionales de supermercados. La tecnología funciona: el reto es demostrar que el negocio <b>es rentable</b>, porque la fibra certificada cuesta bastante más que el plástico."
      ],
      datos:[
        {v:"0,26 €/ud", l:"Precio de venta pactado con las cadenas"},
        {v:"0,19 €/ud", l:"Coste variable (fibra, energía, mano de obra)"},
        {v:"2,4 M uds/año", l:"Demanda estimada de las dos cadenas"},
        {v:"180 000 €", l:"Inversión inicial (moldes y línea de prensado)"},
        {v:"85 000 €/año", l:"Costes fijos (nave, salarios base, seguros)"},
        {v:"8 %", l:"Coste del capital (tasa de descuento)"}
      ],
      mision:"Vuestra misión: montar las cuentas de TerraPack, decidir si la inversión crea valor y defenderlo ante un inversor. Los otros departamentos os darán la capacidad real de producción y el coste logístico que necesitan las cuentas.",
      fin:{precio:0.26, cvar:0.19, uds:2400000, fijos:85000, inversion:180000, tasa:0.08, años:5},
      ops:{unidad:"millares/mes",
        prodA:{nombre:"Bandeja estándar", margen:70},
        prodB:{nombre:"Bandeja premium (con tapa)", margen:100},
        recursos:[
          {nombre:"Prensado", usoA:1.0, usoB:2.0, cap:220, ud:"h/mes"},
          {nombre:"Secado", usoA:0.5, usoB:0.5, cap:90, ud:"h/mes"}
        ],
        demandaMaxB:60, margenUd:"€/millar"},
      log:{unidad:"millares", serie:[190,230,165,240,205,175], media:200, invIni:100, costeInv:8, penal:30, capCamion:40, costeViaje:250},
      mkt:{segmentos:[
        {n:"Grandes cadenas de supermercados", datos:"Volumen muy alto · precio muy apretado · decisión lenta (12-18 meses)", pro:"Un solo contrato llena la fábrica y da credibilidad.", contra:"Aprietan el precio (recuerda tu margen de 0,07 €/ud) y dependes de un cliente."},
        {n:"Caterings y comedores colectivos", datos:"Volumen medio · valoran la certificación compostable · compra recurrente", pro:"Fieles y menos sensibles al precio; la normativa les obliga.", contra:"Muchos clientes pequeños: más esfuerzo comercial y logístico."},
        {n:"Marcas gourmet y delicatessen", datos:"Volumen bajo · pagan hasta un 40 % más · exigen estética impecable", pro:"Margen alto y marca aspiracional.", contra:"Volumen pequeño: difícil justificar la inversión solo con ellos."}
      ]}
    },
    {
      id:"iot", color:"#3b5fca", nombre:"AirSense", sector:"Dispositivo IoT industrial",
      titulo:"AirSense: sensores de aire para naves industriales",
      resumen:"Una empresa de electrónica lanza un sensor de calidad del aire para fábricas, empujada por la normativa de seguridad laboral.",
      foco:"ops", focoTxt:"Investigación Operativa",
      historia:[
        "La normativa de seguridad laboral obliga a monitorizar la calidad del aire en naves industriales. <b>AirSense</b>, una pyme de electrónica, ha diseñado dos versiones de su sensor: el <b>AS-Basic</b> (medición de partículas) y el <b>AS-Pro</b> (partículas + gases + conectividad).",
        "El problema está en la planta: comparten la misma línea de montaje electrónico y la misma estación de calibración, y no hay horas para todo. Hay que decidir <b>cuántos fabricar de cada modelo</b> para ganar lo máximo sin reventar la capacidad."
      ],
      datos:[
        {v:"38 € / 120 €", l:"Margen unitario: AS-Basic / AS-Pro"},
        {v:"0,5 h / 1,5 h", l:"Horas de montaje por unidad (Basic / Pro)"},
        {v:"0,2 h / 0,8 h", l:"Horas de calibración por unidad (Basic / Pro)"},
        {v:"900 h/mes", l:"Capacidad de la línea de montaje"},
        {v:"400 h/mes", l:"Capacidad de la estación de calibración"},
        {v:"≤ 350 uds/mes", l:"Demanda máxima estimada del AS-Pro"}
      ],
      mision:"Vuestra misión: encontrar el mix de producción que maximiza el margen mensual respetando la capacidad, y justificar qué recurso ampliaríais primero. Finanzas y Logística usarán después vuestra capacidad para sus decisiones.",
      fin:{precio:110, cvar:55, uds:12000, fijos:240000, inversion:300000, tasa:0.10, años:5},
      ops:{unidad:"uds/mes",
        prodA:{nombre:"AS-Basic", margen:38},
        prodB:{nombre:"AS-Pro", margen:120},
        recursos:[
          {nombre:"Línea de montaje", usoA:0.5, usoB:1.5, cap:900, ud:"h/mes"},
          {nombre:"Estación de calibración", usoA:0.2, usoB:0.8, cap:400, ud:"h/mes"}
        ],
        demandaMaxB:350, margenUd:"€/ud"},
      log:{unidad:"uds", serie:[980,1180,850,1230,1010,890], media:1000, invIni:500, costeInv:2, penal:12, capCamion:250, costeViaje:300},
      mkt:{segmentos:[
        {n:"Grandes fábricas (>250 empleados)", datos:"Presupuesto alto · ciclos de venta largos · exigen integración con sus sistemas", pro:"Contratos grandes y estables una vez dentro.", contra:"Meses de negociación y desarrollo a medida: caro para una pyme."},
        {n:"Pymes industriales", datos:"Miles de naves · sensibles al precio · se llega vía distribuidores", pro:"Mercado enorme y la normativa les afecta igual.", contra:"El distribuidor se queda margen y no controlas la relación."},
        {n:"Servicios de prevención y mutuas", datos:"Compran para sus empresas cliente · prescriptores del sector", pro:"Un acuerdo abre cientos de instalaciones de golpe.", contra:"No deciden solos: recomiendan, y el ciclo es indirecto."}
      ]}
    },
    {
      id:"auto", color:"#c87a00", nombre:"LigeraTech", sector:"Componente de automoción",
      titulo:"LigeraTech: soportes de aluminio para el coche eléctrico",
      resumen:"Un proveedor de automoción fabrica soportes ligeros de aluminio y debe organizar el suministro a las plantas de su cliente sin disparar costes.",
      foco:"log", focoTxt:"Logística",
      historia:[
        "<b>LigeraTech</b> fabrica soportes estructurales de aluminio que aligeran el coche eléctrico. Acaba de firmar con un fabricante que le exige servir a <b>dos plantas de ensamblaje</b> con entregas fiables: cada parada de línea del cliente se penaliza.",
        "La demanda mensual fluctúa con la producción de coches y los pedidos llegan con poca antelación. El reto es <b>decidir cuánto pedir/fabricar cada mes y cómo repartir</b> las entregas, sin acumular montañas de inventario ni quedarse corto."
      ],
      datos:[
        {v:"1 200 uds/mes", l:"Demanda media (fluctúa ±30 %)"},
        {v:"24 €/ud", l:"Precio de venta a las plantas"},
        {v:"3 €/ud·mes", l:"Coste de mantener inventario"},
        {v:"9 €/ud", l:"Penalización por unidad no servida"},
        {v:"400 uds", l:"Capacidad de cada camión de reparto"},
        {v:"350 € /viaje", l:"Coste de cada viaje de camión"}
      ],
      mision:"Vuestra misión: gestionar los pedidos mes a mes sin que el inventario se descontrole (cuidado con el efecto látigo) y repartir las entregas entre camiones al menor coste. Vuestro coste logístico entrará en las cuentas de Finanzas.",
      fin:{precio:24, cvar:13, uds:14400, fijos:90000, inversion:150000, tasa:0.09, años:5},
      ops:{unidad:"uds/mes",
        prodA:{nombre:"Soporte estándar", margen:11},
        prodB:{nombre:"Soporte reforzado", margen:23},
        recursos:[
          {nombre:"Mecanizado CNC", usoA:0.05, usoB:0.10, cap:100, ud:"h/mes"},
          {nombre:"Acabado y control", usoA:0.03, usoB:0.05, cap:60, ud:"h/mes"}
        ],
        demandaMaxB:400, margenUd:"€/ud"},
      log:{unidad:"uds", serie:[1150,1380,990,1420,1210,1050], media:1200, invIni:600, costeInv:3, penal:9, capCamion:400, costeViaje:350},
      mkt:{segmentos:[
        {n:"El OEM actual (fabricante de coches)", datos:"Volumen enorme · margen bajo · ya es tu cliente", pro:"Crecer con quien ya te conoce es lo más rápido.", contra:"Dependencia total: si te aprieta el precio o cambia de diseño, peligras."},
        {n:"Proveedores Tier-1", datos:"Varios clientes potenciales · exigen certificación IATF · margen medio", pro:"Diversificas riesgo y te consolidas en el sector.", contra:"La certificación cuesta tiempo y dinero antes de vender nada."},
        {n:"Recambio y aftermarket", datos:"Margen alto · volumen incierto · venta por catálogo", pro:"Precios mucho mejores por unidad.", contra:"Demanda impredecible: complica producción y logística."}
      ]}
    }
  ],

  /* Departamentos: navegación libre. activo:false = actividad aún en construcción (placeholder). */
  departamentos:[
    {id:"ops", nombre:"Operaciones", asig:"Investigación Operativa", color:"#3b5fca",
     desc:"Decide cuánto fabricar de cada producto con recursos limitados.",
     regs:[["plan","Mix / plan de producción decidido"]]},
    {id:"log", nombre:"Cadena de suministro", asig:"Logística", color:"#0d8a6f",
     desc:"Gestiona pedidos e inventario y reparte las entregas.",
     regs:[["demanda","Demanda / política de pedidos"],["costedist","Coste logístico (€/año)"]]},
    {id:"fin", nombre:"Finanzas", asig:"Dirección Financiera", color:"#c0392b",
     desc:"Monta la cuenta de resultados y decide si la inversión crea valor.",
     regs:[["van","VAN"],["decision","Decisión de inversión"]]},
    {id:"mkt", nombre:"Marketing", asig:"Cliente y lanzamiento", color:"#8e44ad",
     desc:"Elige el segmento y valida el producto con clientes simulados.",
     regs:[["segmento","Segmento y mensaje"]]}
  ]
};
