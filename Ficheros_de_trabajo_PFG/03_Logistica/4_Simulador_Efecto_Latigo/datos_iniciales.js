// Datos iniciales extraídos del bloque CONFIG del prototipo.
// Es la 'pila de datos' editable: datos fijos + rangos de generación aleatoria.

/* --- DATOS FIJOS: eslabones de la cadena (etiqueta y color) --- */
const ECHELONS = [
  { key:'cliente',    label:'Cliente',     short:'CLI', clr:'#7ad9ff' },
  { key:'tienda',     label:'Tienda',      short:'TND', clr:'#5fe0c4' },
  { key:'mayorista',  label:'Mayorista',   short:'MAY', clr:'#9be36a' },
  { key:'distribui',  label:'Distribuidor',short:'DIS', clr:'#ffc555' },
  { key:'fabrica',    label:'Fábrica',     short:'FAB', clr:'#ff8a4c' },
  { key:'proveedor',  label:'Proveedor',   short:'PRV', clr:'#ff5d9e' },
];
// Index 0 = Cliente (no es un eslabón con inventario, es la fuente de demanda).
// Los eslabones 1..5 procesan pedidos.

/* --- Constantes de simulación --- */
const HIST_LEN = 80;          // ventana mostrada en gráficos
const BWE_WIN  = 20;          // ventana de cálculo del BWE
const BASE_DEMAND = 30;       // demanda base del cliente

/* --- Estado inicial de cada eslabón (datos fijos de arranque) --- */
const INIT = {
  inventarioInicial: 60,      // inventario de cada eslabón al empezar
  pipelinePeriodos: 3         // nº de periodos de producto "en camino" al empezar
};

/* --- Valores por defecto de los controles (sliders) --- */
const params = {
  demandVar: 25,    // %
  infoLag: 2,       // periodos
  lot: 10,          // lote mínimo
  safety: 15,       // stock de seguridad
  forecastErr: 30,  // %
  coord: 40,        // 0-100
  spikeAmp: 50,     // 0-100
  speed: 6,         // 1-20 (pasos por segundo aprox.)
};

/* ---------- Estado ---------- */
function newEch(idx){
  return {
    idx,
    inventory: INIT.inventarioInicial,
    backlog: 0,
    incomingOrder: BASE_DEMAND,     // pedido recibido (de aguas abajo)
    outgoingOrder: BASE_DEMAND,     // pedido enviado (a aguas arriba)
    forecast: BASE_DEMAND,
    pipeline: Array(INIT.pipelinePeriodos).fill(BASE_DEMAND), // productos en camino desde aguas arriba
    orderQueue: [],                 // pedidos en tránsito hacia aguas arriba (retraso de info)
    stockouts: 0,
    excess: 0,
    stress: 0,
    histOrders: [],
    histInventory: [],
    histStockouts: [],
  };
}

function newState(){
  return {
    period: 0,
    running: true,
    histDemand: [],
    histDemandMA: [],
    pendingEvents: [],     // [{period, type, magnitude}]
    echelons: ECHELONS.map((_,i)=>newEch(i)),
    bweHist: [],
    summary: { stockouts:0, excess:0, peakBwe:1 },
  };
}

// (Los valores por defecto de los controles están arriba, en el bloque CONFIG: const params)

let mode = 'single';        // 'single' | 'compare'
let stateA = newState();    // estado principal (= no coord en modo compare)
let stateB = null;          // estado coordinado en modo compare

/* ---------- Utilidades ---------- */
const $ = id => document.getElementById(id);
const clamp = (x,a,b)=>Math.max(a,Math.min(b,x));
const std = arr => {
  if(arr.length<2) return 0;
  const m = arr.reduce((a,b)=>a+b,0)/arr.length;
  const v = arr.reduce((a,b)=>a+(b-m)*(b-m),0)/arr.length;
  return Math.sqrt(v);
};
const mean = arr => arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0;

/* ---------- Generación de demanda ---------- */
function genDemand(state){
  const varPct = params.demandVar/100;
  // ruido gaussiano aproximado (Box-Muller-lite)
  const noise = (Math.random()+Math.random()+Math.random()-1.5) * 2 * varPct;
  let d = BASE_DEMAND * (1 + noise);

  // Procesar eventos programados (picos/promos)
  state.pendingEvents = state.pendingEvents.filter(e=>{
    if(e.period <= state.period && e.period+e.duration > state.period){
      d *= e.mult;
    }
    return e.period+e.duration > state.period;
  });
  return Math.max(1, Math.round(d));
}

/* ---------- Lógica de simulación (un paso) ---------- */
function stepSimulation(state, scenarioCoord /* override coord 0..100 or null */){
  state.period++;
  const coord = (scenarioCoord==null ? params.coord : scenarioCoord)/100;

  // 1) demanda del cliente
  const customerDemand = genDemand(state);
  state.histDemand.push(customerDemand);
  if(state.histDemand.length>HIST_LEN) state.histDemand.shift();
  // media móvil para visualización
  const winN = 6;
  const recent = state.histDemand.slice(-winN);
  state.histDemandMA.push(mean(recent));
  if(state.histDemandMA.length>HIST_LEN) state.histDemandMA.shift();

  // 2) propagar demanda aguas arriba con retraso y ruido
  // El "incomingOrder" de cada eslabón depende del downstream.
  // Cliente -> tienda: la tienda recibe customerDemand inmediatamente
  // Tienda -> mayorista: el mayorista recibe el "outgoingOrder" de la tienda con retraso = infoLag
  const lag = Math.round(params.infoLag);

  // Para cada eslabón con inventario (1..5)
  for(let i=1;i<state.echelons.length;i++){
    const e = state.echelons[i];

    // a) Recibir pedido desde aguas abajo
    let receivedOrder;
    if(i===1){
      receivedOrder = customerDemand;
    } else {
      const downstream = state.echelons[i-1];
      // pedido emitido por el downstream que llega ahora (después de `lag` periodos)
      if(downstream.orderQueue.length>0){
        receivedOrder = downstream.orderQueue.shift();
      } else {
        receivedOrder = downstream.outgoingOrder;
      }
    }
    e.incomingOrder = receivedOrder;

    // b) Recibir productos desde aguas arriba (pipeline)
    const arrived = e.pipeline.shift() || 0;
    e.inventory += arrived;

    // c) Servir el pedido + backlog
    const totalNeeded = receivedOrder + e.backlog;
    const served = Math.min(totalNeeded, e.inventory);
    e.inventory -= served;
    const unserved = totalNeeded - served;
    e.backlog = unserved;
    if(unserved>0) e.stockouts++;

    // d) Actualizar pronóstico (exponential smoothing con ruido = error)
    const errPct = params.forecastErr/100;
    const noiseFc = 1 + (Math.random()-0.5)*errPct;
    const alpha = 0.3 + (1-coord)*0.4; // sin coordinación: reacciona más a corto plazo (peor)
    e.forecast = (alpha * receivedOrder + (1-alpha)*e.forecast) * noiseFc;

    // e) Calcular pedido a emitir
    //   pedidoBase = forecast (suavizado) + ajuste por safety stock + ajuste por backlog - inventario actual neto
    //   sobrerreacción si coord baja
    const safetyTarget = params.safety + e.forecast * (1 + i*0.05); // safety levemente mayor aguas arriba
    const desired = e.forecast + (safetyTarget - e.inventory)*0.3 + e.backlog;
    // sobrerreacción inversa a coordinación
    const overshoot = 1 + (1-coord)*0.5*(receivedOrder/Math.max(1,e.forecast) - 1);
    let order = desired * Math.max(0.3, overshoot);
    // Si hay coordinación alta, parte del pedido sigue directamente la demanda real del cliente
    if(coord>0){
      const share = coord*0.8;
      order = order*(1-share) + (customerDemand + params.safety*0.3) * share;
    }
    order = Math.max(0, Math.round(order));
    // tamaño mínimo de lote
    const L = Math.max(1, Math.round(params.lot));
    if(order>0) order = Math.ceil(order/L)*L;

    e.outgoingOrder = order;

    // f) Encolar el pedido hacia aguas arriba con retraso de información
    // Rellenamos con `lag` ceros la primera vez para diferir
    while(e.orderQueue.length<lag) e.orderQueue.push(e.outgoingOrder);
    e.orderQueue.push(order);

    // g) Para el último eslabón (proveedor), asumimos capacidad infinita: lo que pide, lo recibirá con lead time fijo
    // Para los intermedios, el pipeline se rellena cuando el upstream sirve.
    // Para simplificar, cada eslabón añade lo que pidió a su propio pipeline (capacidad infinita upstream)
    // pero con lead time = 3 periodos productivos.
    // Si la simulación es coordinada, lead time productivo más corto (2).
    const leadTime = coord>0.7 ? 2 : 3;
    while(e.pipeline.length<leadTime) e.pipeline.push(0);
    e.pipeline[leadTime-1] = (e.pipeline[leadTime-1]||0) + order;

    // h) Excesos / estrés
    const idealStock = params.safety + e.forecast*1.2;
    if(e.inventory > idealStock*1.5) e.excess++;
    const stressStock = unserved>0 ? 0.7 + Math.min(0.3, unserved/30) : 0;
    const stressExc   = e.inventory > idealStock*2 ? Math.min(0.8, (e.inventory-idealStock*2)/100) : 0;
    e.stress = clamp(Math.max(stressStock, stressExc, e.stress*0.85), 0, 1);

    // histories
    e.histOrders.push(order);     if(e.histOrders.length>HIST_LEN) e.histOrders.shift();
    e.histInventory.push(e.inventory); if(e.histInventory.length>HIST_LEN) e.histInventory.shift();
    e.histStockouts.push(unserved>0?1:0); if(e.histStockouts.length>HIST_LEN) e.histStockouts.shift();
  }

  // BWE = std(pedidos del eslabón más aguas arriba con datos suficientes) / std(demanda cliente)
  const dArr = state.histDemand.slice(-BWE_WIN);
  const upstream = state.echelons[state.echelons.length-1];
  const oArr = upstream.histOrders.slice(-BWE_WIN);
  const sd = std(dArr);
  const so = std(oArr);
  const bwe = sd>0.1 ? so/sd : 1;
  state.bweHist.push(bwe);
  if(state.bweHist.length>HIST_LEN) state.bweHist.shift();
  if(bwe>state.summary.peakBwe) state.summary.peakBwe = bwe;
}

/* ---------- Eventos ---------- */
function injectSpike(state){
  state.pendingEvents.push({ period: state.period+1, duration: 2, mult: 1 + params.spikeAmp/100*2 });
}
function injectPromo(state){
  state.pendingEvents.push({ period: state.period+1, duration: 6, mult: 1 + params.spikeAmp/100*0.8 });
}

/* ============================================================
   RENDER · cadena animada (SVG)
   ============================================================ */
const svgNS = 'http://www.w3.org/2000/svg';
const chainSvg = $('chainSvg');
const W = 1200, H = 180;
const nodeR = 28;
const margin = 70;
const xs = ECHELONS.map((_,i)=> margin + i*( (W-2*margin)/(ECHELONS.length-1) ));
const yc = 90;

function buildChain(){
  chainSvg.innerHTML = '';
  // Defs
  const defs = document.createElementNS(svgNS,'defs');
  defs.innerHTML = `
    <marker id="arrL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#67d4ff" opacity="0.7"/>
    </marker>
    <marker id="arrR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#9be36a" opacity="0.7"/>
    </marker>
    <linearGradient id="rail" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#7ad9ff" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#ff5d9e" stop-opacity="0.3"/>
    </linearGradient>
  `;
  chainSvg.appendChild(defs);

  // info rail (top) — orders flow right→left  (downstream→upstream)
  const railTop = document.createElementNS(svgNS,'line');
  railTop.setAttribute('x1', xs[0]); railTop.setAttribute('x2', xs[xs.length-1]);
  railTop.setAttribute('y1', yc-40); railTop.setAttribute('y2', yc-40);
  railTop.setAttribute('stroke','#2a3344'); railTop.setAttribute('stroke-width','1');
  railTop.setAttribute('stroke-dasharray','4 4');
  chainSvg.appendChild(railTop);
  const railTopLab = document.createElementNS(svgNS,'text');
  railTopLab.setAttribute('x', W/2); railTopLab.setAttribute('y', yc-46);
  railTopLab.setAttribute('text-anchor','middle');
  railTopLab.setAttribute('fill','#6b768a'); railTopLab.setAttribute('font-size','10');
  railTopLab.setAttribute('font-family','JetBrains Mono'); railTopLab.setAttribute('letter-spacing','2');
  railTopLab.textContent = 'INFORMACIÓN / PEDIDOS';
  chainSvg.appendChild(railTopLab);

  // material rail (bottom) — products flow left→right (upstream→downstream)
  const railBot = document.createElementNS(svgNS,'line');
  railBot.setAttribute('x1', xs[0]); railBot.setAttribute('x2', xs[xs.length-1]);
  railBot.setAttribute('y1', yc+40); railBot.setAttribute('y2', yc+40);
  railBot.setAttribute('stroke','#2a3344'); railBot.setAttribute('stroke-width','1');
  railBot.setAttribute('stroke-dasharray','4 4');
  chainSvg.appendChild(railBot);
  const railBotLab = document.createElementNS(svgNS,'text');
  railBotLab.setAttribute('x', W/2); railBotLab.setAttribute('y', yc+58);
  railBotLab.setAttribute('text-anchor','middle');
  railBotLab.setAttribute('fill','#6b768a'); railBotLab.setAttribute('font-size','10');
  railBotLab.setAttribute('font-family','JetBrains Mono'); railBotLab.setAttribute('letter-spacing','2');
  railBotLab.textContent = 'MATERIAL / PRODUCTOS';
  chainSvg.appendChild(railBotLab);

  // Nodes
  ECHELONS.forEach((ech, i)=>{
    const g = document.createElementNS(svgNS,'g');
    g.setAttribute('id','node_'+i);

    const halo = document.createElementNS(svgNS,'circle');
    halo.setAttribute('cx', xs[i]); halo.setAttribute('cy', yc);
    halo.setAttribute('r', nodeR+8); halo.setAttribute('fill', ech.clr);
    halo.setAttribute('opacity','0.0'); halo.setAttribute('id','halo_'+i);
    g.appendChild(halo);

    const c = document.createElementNS(svgNS,'circle');
    c.setAttribute('cx', xs[i]); c.setAttribute('cy', yc);
    c.setAttribute('r', nodeR); c.setAttribute('fill','#0f141c');
    c.setAttribute('stroke', ech.clr); c.setAttribute('stroke-width','2');
    g.appendChild(c);

    const t = document.createElementNS(svgNS,'text');
    t.setAttribute('x', xs[i]); t.setAttribute('y', yc+4);
    t.setAttribute('text-anchor','middle'); t.setAttribute('fill', ech.clr);
    t.setAttribute('font-size','11'); t.setAttribute('font-weight','700');
    t.setAttribute('font-family','JetBrains Mono'); t.setAttribute('letter-spacing','1');
    t.textContent = ech.short;
    g.appendChild(t);

    const lab = document.createElementNS(svgNS,'text');
    lab.setAttribute('x', xs[i]); lab.setAttribute('y', yc+nodeR+18);
    lab.setAttribute('text-anchor','middle'); lab.setAttribute('fill','#aab4c5');
    lab.setAttribute('font-size','11'); lab.setAttribute('font-weight','500');
    lab.textContent = ech.label;
    g.appendChild(lab);

    chainSvg.appendChild(g);
  });

  // Container for moving particles
  const ptcLayer = document.createElementNS(svgNS,'g');
  ptcLayer.setAttribute('id','particles');
  chainSvg.appendChild(ptcLayer);
}

/* Particles: small dots that travel between two nodes over time */
const particles = []; // {fromI,toI,kind:'order'|'product', size, t0, dur, clr}
function spawnParticle(fromI, toI, kind, size){
  const clr = kind==='order' ? '#67d4ff' : '#9be36a';
  particles.push({
    fromI, toI, kind, size: clamp(size, 2, 14),
    t0: performance.now(), dur: 1200 + Math.random()*400, clr
  });
}
function tickParticles(){
  const layer = document.getElementById('particles');
  if(!layer) return;
  layer.innerHTML = '';
  const now = performance.now();
  for(let i=particles.length-1;i>=0;i--){
    const p = particles[i];
    const t = (now - p.t0)/p.dur;
    if(t>=1){ particles.splice(i,1); continue; }
    const x = xs[p.fromI] + (xs[p.toI]-xs[p.fromI])*t;
    const y = p.kind==='order' ? yc-40 - Math.sin(t*Math.PI)*8 : yc+40 + Math.sin(t*Math.PI)*8;
    const c = document.createElementNS(svgNS,'circle');
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', p.size);
    c.setAttribute('fill', p.clr); c.setAttribute('opacity', 0.85*(1-Math.abs(t-0.5)*0.6));
    layer.appendChild(c);
  }
}

/* ============================================================
   RENDER · tarjetas de eslabón
   ============================================================ */
function buildEchelonCards(){
  const cont = $('echelons');
  cont.innerHTML = '';
  ECHELONS.forEach((ech,i)=>{
    const d = document.createElement('div');
    d.className = 'echelon';
    d.id = 'card_'+i;
    d.style.setProperty('--clr', ech.clr);
    d.innerHTML = `
      <h4><span class="swatch"></span>${ech.label}</h4>
      <div class="stat"><span>Demanda recibida</span><span class="v" data-f="inc">—</span></div>
      <div class="stat"><span>Pedido emitido</span><span class="v" data-f="out">—</span></div>
      <div class="stat"><span>Inventario</span><span class="v" data-f="inv">—</span></div>
      <div class="stat"><span>Roturas / Exceso</span><span class="v" data-f="se">—</span></div>
      <div class="stress"><i data-f="stress" style="width:0%"></i></div>
    `;
    cont.appendChild(d);
  });
}

function updateEchelonCards(state){
  ECHELONS.forEach((ech,i)=>{
    const card = $('card_'+i);
    if(!card) return;
    if(i===0){
      const cd = state.histDemand[state.histDemand.length-1] ?? '—';
      card.querySelector('[data-f=inc]').textContent = cd;
      card.querySelector('[data-f=out]').textContent = cd;
      card.querySelector('[data-f=inv]').textContent = '∞';
      card.querySelector('[data-f=se]').textContent = '—';
      card.querySelector('[data-f=stress]').style.width = '0%';
      return;
    }
    const e = state.echelons[i];
    card.querySelector('[data-f=inc]').textContent = Math.round(e.incomingOrder);
    card.querySelector('[data-f=out]').textContent = Math.round(e.outgoingOrder);
    const invEl = card.querySelector('[data-f=inv]');
    invEl.textContent = Math.round(e.inventory);
    invEl.className = 'v ' + (e.inventory<5?'bad':(e.inventory>180?'warn':'ok'));
    const seEl = card.querySelector('[data-f=se]');
    seEl.textContent = `${e.stockouts} / ${e.excess}`;
    seEl.className = 'v ' + (e.stockouts>5?'bad':(e.excess>10?'warn':''));
    const st = card.querySelector('[data-f=stress]');
    st.style.width = (e.stress*100).toFixed(0)+'%';
    st.className = e.stress>0.6 ? 'bad' : (e.stress>0.3?'warn':'');
  });
}

/* ============================================================
   RENDER · charts canvas
   ============================================================ */
function setupCanvas(c){
  const dpr = window.devicePixelRatio || 1;
  const rect = c.getBoundingClientRect();
  c.width = rect.width*dpr; c.height = rect.height*dpr;
  const ctx = c.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0);
  return ctx;
}
function drawGrid(ctx,w,h,yMax,yMin=0,yTicks=4){
  ctx.strokeStyle = '#1f2735'; ctx.lineWidth = 1;
  for(let i=0;i<=yTicks;i++){
    const y = h - (i/yTicks)*h;
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke();
  }
}
function drawLine(ctx, data, w, h, yMax, yMin, color, dashed=false, width=1.5){
  if(!data||data.length<2) return;
  ctx.strokeStyle = color; ctx.lineWidth = width;
  if(dashed) ctx.setLineDash([4,4]); else ctx.setLineDash([]);
  ctx.beginPath();
  data.forEach((v,i)=>{
    const x = (i/(HIST_LEN-1))*w;
    const y = h - ((v-yMin)/(yMax-yMin))*h;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.stroke();
  ctx.setLineDash([]);
}
function drawArea(ctx, data, w, h, yMax, yMin, color){
  if(!data||data.length<2) return;
  const grad = ctx.createLinearGradient(0,0,0,h);
  grad.addColorStop(0, color+'55');
  grad.addColorStop(1, color+'00');
  ctx.fillStyle = grad;
  ctx.beginPath();
  data.forEach((v,i)=>{
    const x = (i/(HIST_LEN-1))*w;
    const y = h - ((v-yMin)/(yMax-yMin))*h;
    if(i===0) ctx.moveTo(x,h);
    ctx.lineTo(x,y);
  });
  ctx.lineTo(((data.length-1)/(HIST_LEN-1))*w, h);
  ctx.closePath();
  ctx.fill();
}

function renderCharts(){
  // Demand chart
  const cD = $('chartDemand'); const ctxD = setupCanvas(cD);
  const wD = cD.getBoundingClientRect().width, hD = cD.getBoundingClientRect().height;
  ctxD.clearRect(0,0,wD,hD);
  const dMax = Math.max(80, ...stateA.histDemand) * 1.15;
  drawGrid(ctxD, wD, hD, dMax);
  drawArea(ctxD, stateA.histDemand, wD, hD, dMax, 0, '#7ad9ff');
  drawLine(ctxD, stateA.histDemand, wD, hD, dMax, 0, '#7ad9ff', false, 1.8);
  drawLine(ctxD, stateA.histDemandMA, wD, hD, dMax, 0, '#6b768a', true, 1.2);

  // Orders chart
  const cO = $('chartOrders'); const ctxO = setupCanvas(cO);
  const wO = cO.getBoundingClientRect().width, hO = cO.getBoundingClientRect().height;
  ctxO.clearRect(0,0,wO,hO);
  let oMax = 80;
  for(let i=1;i<stateA.echelons.length;i++) oMax = Math.max(oMax, ...stateA.echelons[i].histOrders);
  oMax = Math.max(oMax, ...stateA.histDemand);
  oMax *= 1.1;
  drawGrid(ctxO, wO, hO, oMax);
  // Customer demand as faded reference
  drawLine(ctxO, stateA.histDemand, wO, hO, oMax, 0, '#7ad9ff', true, 1.2);
  for(let i=1;i<stateA.echelons.length;i++){
    drawLine(ctxO, stateA.echelons[i].histOrders, wO, hO, oMax, 0, ECHELONS[i].clr, false, 1.5);
  }
  // legend
  $('legendOrders').innerHTML = ECHELONS.map((e,i)=>
    `<span><i style="background:${e.clr}"></i>${e.label}</span>`
  ).join('');

  // Inventory chart
  const cI = $('chartInv'); const ctxI = setupCanvas(cI);
  const wI = cI.getBoundingClientRect().width, hI = cI.getBoundingClientRect().height;
  ctxI.clearRect(0,0,wI,hI);
  let iMax = 100;
  for(let i=1;i<stateA.echelons.length;i++) iMax = Math.max(iMax, ...stateA.echelons[i].histInventory);
  iMax *= 1.1;
  drawGrid(ctxI, wI, hI, iMax);
  for(let i=1;i<stateA.echelons.length;i++){
    drawLine(ctxI, stateA.echelons[i].histInventory, wI, hI, iMax, 0, ECHELONS[i].clr, false, 1.5);
  }
  $('legendInv').innerHTML = ECHELONS.slice(1).map(e=>
    `<span><i style="background:${e.clr}"></i>${e.label}</span>`
  ).join('');

  // BWE chart
  const cB = $('chartBwe'); const ctxB = setupCanvas(cB);
  const wB = cB.getBoundingClientRect().width, hB = cB.getBoundingClientRect().height;
  ctxB.clearRect(0,0,wB,hB);
  const bMax = Math.max(3, ...stateA.bweHist) * 1.15;
  drawGrid(ctxB, wB, hB, bMax);
  // baseline at 1
  ctxB.strokeStyle='#444f66'; ctxB.setLineDash([3,3]); ctxB.lineWidth=1;
  const y1 = hB - (1/bMax)*hB;
  ctxB.beginPath(); ctxB.moveTo(0,y1); ctxB.lineTo(wB,y1); ctxB.stroke(); ctxB.setLineDash([]);
  drawArea(ctxB, stateA.bweHist, wB, hB, bMax, 0, '#ff5d9e');
  drawLine(ctxB, stateA.bweHist, wB, hB, bMax, 0, '#ff5d9e', false, 1.8);

  const lastBwe = stateA.bweHist[stateA.bweHist.length-1] ?? 1;
  $('bweBig').textContent = lastBwe.toFixed(2)+'×';
  $('bweBig').style.color = lastBwe>3 ? '#ff6b6b' : (lastBwe>1.5?'#ffc555':'#5ddc9a');
  $('bweTxt').textContent = lastBwe.toFixed(2)+'×';
}

/* ============================================================
   DIAGNÓSTICO EN VIVO
   ============================================================ */
function renderInsights(){
  const lines = [];
  const bwe = stateA.bweHist[stateA.bweHist.length-1] ?? 1;
  if(bwe>2.5) lines.push(`<b style="color:#ff6b6b">Amplificación crítica (BWE ${bwe.toFixed(1)}×)</b>: el último eslabón pide muchísimo más de lo que vende el cliente.`);
  else if(bwe>1.5) lines.push(`<b style="color:#ffc555">Amplificación notable (BWE ${bwe.toFixed(1)}×)</b>: la variabilidad crece aguas arriba.`);
  else lines.push(`<b style="color:#5ddc9a">Cadena estable (BWE ${bwe.toFixed(1)}×)</b>.`);

  if(params.infoLag>=3) lines.push(`Retraso de información alto (${params.infoLag} per): los pedidos llegan tarde y la reacción es desfasada.`);
  if(params.lot>=25) lines.push(`Lote mínimo alto (${params.lot} u): los pedidos se agrupan en picos.`);
  if(params.safety>40) lines.push(`Stock de seguridad excesivo: incrementa inventario y amplifica pedidos.`);
  if(params.forecastErr>50) lines.push(`Error de previsión elevado (${params.forecastErr}%): cada eslabón pronostica mal.`);
  if(params.coord<25) lines.push(`Baja coordinación: cultura de <b>silos</b>, cada eslabón decide aislado.`);
  if(params.coord>75) lines.push(`Alta coordinación: información compartida atenúa la amplificación.`);

  const totSO = stateA.echelons.slice(1).reduce((a,b)=>a+b.stockouts,0);
  const totEX = stateA.echelons.slice(1).reduce((a,b)=>a+b.excess,0);
  lines.push(`Acumulado: <b>${totSO}</b> roturas · <b>${totEX}</b> periodos de exceso.`);

  $('insightsList').innerHTML = lines.map(l=>`<li>${l}</li>`).join('');
}

/* ============================================================
   MODO COMPARACIÓN
   ============================================================ */
function renderCompare(){
  if(mode!=='compare' || !stateB) return;
  const tbody = $('cmpTable').querySelector('tbody');
  function metric(state){
    const bwe = state.bweHist[state.bweHist.length-1] ?? 1;
    const so = state.echelons.slice(1).reduce((a,b)=>a+b.stockouts,0);
    const ex = state.echelons.slice(1).reduce((a,b)=>a+b.excess,0);
    const totalInv = state.echelons.slice(1).reduce((a,b)=>a+b.inventory,0);
    const lastUp = state.echelons[state.echelons.length-1].outgoingOrder;
    return { bwe, so, ex, totalInv:Math.round(totalInv), lastUp };
  }
  const A = metric(stateA), B = metric(stateB);
  const rows = [
    ['Índice BWE', A.bwe.toFixed(2)+'×', B.bwe.toFixed(2)+'×', B.bwe<A.bwe],
    ['Roturas acumuladas', A.so, B.so, B.so<A.so],
    ['Periodos en exceso', A.ex, B.ex, B.ex<A.ex],
    ['Inventario total', A.totalInv, B.totalInv, B.totalInv<A.totalInv],
    ['Pedido proveedor', A.lastUp, B.lastUp, B.lastUp<A.lastUp],
  ];
  tbody.innerHTML = rows.map(r=>`
    <tr>
      <td>${r[0]}</td>
      <td class="v ${r[3]?'':'winner-cell'}">${r[1]}${!r[3]?' <span class="badge">mejor</span>':''}</td>
      <td class="v ${r[3]?'winner-cell':''}">${r[2]}${r[3]?' <span class="badge">mejor</span>':''}</td>
    </tr>
  `).join('');
}

/* ============================================================
   LOOP PRINCIPAL
   ============================================================ */
let lastTick = 0;
function loop(t){
  tickParticles();
  const period = 1000 / params.speed;
  if(stateA.running && t-lastTick >= period){
    lastTick = t;
    stepSimulation(stateA);
    if(mode==='compare' && stateB){
      stepSimulation(stateB, 90); // B = altamente coordinada
    }
    // spawn particles for visualization
    const d = stateA.histDemand[stateA.histDemand.length-1] || 0;
    spawnParticle(1, 0, 'product', d/6);   // tienda -> cliente
    for(let i=1;i<ECHELONS.length;i++){
      const e = stateA.echelons[i];
      spawnParticle(i, Math.min(i+1, ECHELONS.length-1), 'order', e.outgoingOrder/8);
      if(i<ECHELONS.length-1){
        const arrivedSize = (stateA.echelons[i].pipeline[0] || stateA.echelons[i].incomingOrder)/8;
        spawnParticle(i+1, i, 'product', arrivedSize);
      }
    }
    // node halo pulse based on stress
    for(let i=1;i<ECHELONS.length;i++){
      const halo = document.getElementById('halo_'+i);
      const s = stateA.echelons[i].stress;
      if(halo) halo.setAttribute('opacity', (s*0.35).toFixed(2));
    }

    $('periodTxt').textContent = stateA.period;
    updateEchelonCards(stateA);
    renderCharts();
    renderInsights();
    renderCompare();
  }
  requestAnimationFrame(loop);
}

/* ============================================================
   UI WIRING
   ============================================================ */
function setStatus(running){
  stateA.running = running;
  if(stateB) stateB.running = running;
  $('statusDot').classList.toggle('paused', !running);
  $('statusTxt').textContent = running ? 'En marcha' : 'Pausada';
}

function bindUI(){
  $('btnPlay').onclick = ()=> setStatus(true);
  $('btnPause').onclick = ()=> setStatus(false);
  $('btnReset').onclick = ()=> {
    stateA = newState();
    if(mode==='compare') stateB = newState();
    setStatus(true);
    $('periodTxt').textContent = 0;
    updateEchelonCards(stateA);
    renderCharts();
    renderInsights();
    renderCompare();
  };
  $('btnSpike').onclick = ()=> { injectSpike(stateA); if(stateB)injectSpike(stateB); flashEvent('Pico de demanda inyectado (+'+Math.round(params.spikeAmp*2)+'%)'); };
  $('btnPromo').onclick = ()=> { injectPromo(stateA); if(stateB)injectPromo(stateB); flashEvent('Promoción activada (6 periodos)'); };
  $('btnCoordOn').onclick = ()=> { setSlider('sCoord', 90); flashEvent('Coordinación al 90% activada'); };
  $('btnCoordOff').onclick = ()=> { setSlider('sCoord', 10); flashEvent('Coordinación reducida al 10%'); };

  $('btnSteps').onclick = openSteps;
  $('btnQuiz').onclick = openQuiz;

  // sliders
  const sliders = [
    ['sDemandVar','demandVar','vDemandVar', v=>v+'%'],
    ['sInfoLag','infoLag','vInfoLag', v=>v+' per'],
    ['sLot','lot','vLot', v=>v+' u'],
    ['sSafety','safety','vSafety', v=>v+' u'],
    ['sForecast','forecastErr','vForecast', v=>v+'%'],
    ['sCoord','coord','vCoord', v=>v+'%'],
    ['sSpikeAmp','spikeAmp','vSpikeAmp', v=>v+'%'],
    ['sSpeed','speed','vSpeed', v=>(v/6).toFixed(1)+'×'],
  ];
  sliders.forEach(([id,key,labId,fmt])=>{
    const el = $(id);
    el.addEventListener('input', ()=>{
      params[key] = +el.value;
      $(labId).textContent = fmt(el.value);
    });
    $(labId).textContent = fmt(el.value);
  });

  // mode tabs
  document.querySelectorAll('.mode-tab').forEach(t=>{
    t.onclick = ()=>{
      document.querySelectorAll('.mode-tab').forEach(x=>x.classList.remove('on'));
      t.classList.add('on');
      mode = t.dataset.mode;
      if(mode==='compare'){
        stateB = newState();
        // sincronizar la semilla de demanda copiando histDemand actual
        stateB.histDemand = [...stateA.histDemand];
        stateB.histDemandMA = [...stateA.histDemandMA];
        $('comparePanel').style.display = 'block';
      } else {
        stateB = null;
        $('comparePanel').style.display = 'none';
      }
    };
  });

  // explainer tabs
  document.querySelectorAll('.tab').forEach(t=>{
    t.onclick = ()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));
      t.classList.add('on');
      document.querySelectorAll('.tab-pane').forEach(p=>p.style.display='none');
      document.querySelector(`.tab-pane[data-pane=${t.dataset.tab}]`).style.display='block';
    };
  });
}

function setSlider(id, value){
  const el = $(id);
  el.value = value;
  el.dispatchEvent(new Event('input'));
}

function flashEvent(text){
  $('eventTxt').textContent = text;
  $('eventFlash').classList.add('on');
  clearTimeout(window._evtT);
  window._evtT = setTimeout(()=> $('eventFlash').classList.remove('on'), 2400);
}

/* ============================================================
   STEPS (explicación paso a paso)
   ============================================================ */
const STEPS = [
  { t:'1. El cliente compra cada periodo',
    b:'En el gráfico de demanda ves pequeñas variaciones aleatorias. Esa señal es la única demanda real de toda la cadena.'},
  { t:'2. Cada eslabón pronostica',
    b:'La tienda intenta predecir cuánto comprará el cliente. Si el pronóstico es malo, se equivoca de más o de menos.'},
  { t:'3. Cada eslabón pide al de aguas arriba',
    b:'El pedido incluye la demanda esperada + un stock de seguridad + ajuste por inventario. Por eso ya suele ser mayor que la demanda real.'},
  { t:'4. Información tarda en llegar',
    b:'Con retraso de información, los pedidos se cursan tarde. Cuando llegan, el upstream ve un pico súbito y sobrerreacciona.'},
  { t:'5. Lotes mínimos y sobrerreacción',
    b:'Si el lote mínimo es grande, los pedidos se agrupan en picos. Sin coordinación, cada eslabón añade un margen extra "por si acaso".'},
  { t:'6. El efecto látigo aparece',
    b:'El gráfico BWE muestra la varianza de los pedidos del proveedor dividida entre la varianza de la demanda. >1 = amplificación. Sube la coordinación al 90% y observa cómo baja.'},
];
let stepIdx = 0;
function openSteps(){
  stepIdx = 0;
  showStep();
}
function showStep(){
  const s = STEPS[stepIdx];
  $('stepNum').textContent = `PASO ${stepIdx+1}/${STEPS.length}`;
  $('stepTitle').textContent = s.t;
  $('stepBody').textContent = s.b;
  $('stepNext').textContent = stepIdx===STEPS.length-1 ? 'Terminar' : 'Siguiente →';
  $('stepTip').classList.add('on');
}
function closeSteps(){ $('stepTip').classList.remove('on'); }
document.addEventListener('keydown', e=>{
  if(e.key==='Enter' && $('stepTip').classList.contains('on')){
    if(stepIdx<STEPS.length-1){ stepIdx++; showStep(); }
    else closeSteps();
  }
  if(e.key==='Escape') closeSteps();
});
document.addEventListener('click', e=>{
  if(e.target && e.target.id==='stepNext'){
    if(stepIdx<STEPS.length-1){ stepIdx++; showStep(); }
    else closeSteps();
  }
});

/* ============================================================
   MINI TEST
   ============================================================ */
const QUIZ = [
  { q:'¿Qué ocurre si aumenta el retraso de información entre eslabones?',
    options:[
      {t:'La amplificación disminuye porque hay más tiempo para pensar.', ok:false},
      {t:'Aparece sobrerreacción tardía: cuando el upstream reacciona, ya es tarde y exagera el pedido.', ok:true},
      {t:'No tiene ningún efecto sobre el efecto látigo.', ok:false},
    ],
    fb:'El retraso de información es uno de los detonantes clásicos del bullwhip: la señal llega tarde y la reacción se desfasa, amplificando los pedidos.'
  },
  { q:'¿Por qué los pedidos aguas arriba pueden ser mayores que la demanda real del cliente?',
    options:[
      {t:'Porque cada eslabón añade stock de seguridad, pronóstico inflado y agrupa en lotes.', ok:true},
      {t:'Porque el cliente miente sobre lo que quiere comprar.', ok:false},
      {t:'Por errores del software ERP únicamente.', ok:false},
    ],
    fb:'Cada eslabón pide más para protegerse (stock de seguridad), pronostica con sesgo y agrupa pedidos en lotes mínimos. Esos tres factores hinchan el pedido aguas arriba.'
  },
  { q:'¿Qué efecto tiene compartir información de demanda real (POS) con toda la cadena?',
    options:[
      {t:'Reduce la necesidad de pronosticar localmente y atenúa la amplificación.', ok:true},
      {t:'Aumenta la confusión porque cada eslabón ve datos distintos.', ok:false},
      {t:'Sólo sirve a la tienda; el proveedor no la usa.', ok:false},
    ],
    fb:'La visibilidad compartida (POS, CPFR, VMI) permite que todos los eslabones reaccionen ante la misma señal real y no a versiones distorsionadas. Reduce el BWE.'
  },
  { q:'¿Qué relación existe entre pronósticos erróneos e inventario?',
    options:[
      {t:'Ninguna: los pronósticos no afectan al inventario.', ok:false},
      {t:'Malos pronósticos generan a la vez roturas (si infraestiman) y exceso (si sobreestiman).', ok:true},
      {t:'Sólo generan exceso de inventario, nunca roturas.', ok:false},
    ],
    fb:'El error de pronóstico se traduce directamente en desajuste de inventario: si pides poco, hay roturas; si pides mucho, hay exceso y obsolescencia.'
  },
  { q:'¿Por qué una promoción puntual puede generar efecto látigo?',
    options:[
      {t:'Porque cada eslabón interpreta el pico como tendencia y sobrepide.', ok:true},
      {t:'Porque las promociones siempre reducen la demanda real.', ok:false},
      {t:'Porque cambian el precio pero no la demanda.', ok:false},
    ],
    fb:'Un pico de demanda por promoción puede confundirse con un crecimiento estructural y desencadenar pedidos exagerados aguas arriba, que después se revertirán generando exceso.'
  },
];
let quizSel = {}; let quizDone = false;
function openQuiz(){
  quizSel = {}; quizDone = false;
  const body = $('quizBody');
  body.innerHTML = QUIZ.map((q,i)=>`
    <div class="quiz-q">
      <div class="q"><span class="num">${(i+1).toString().padStart(2,'0')}</span>${q.q}</div>
      ${q.options.map((o,j)=>`<div class="quiz-opt" data-q="${i}" data-o="${j}" data-ok="${o.ok?1:0}">${o.t}</div>`).join('')}
      <div class="quiz-fb" data-fb="${i}">${q.fb}</div>
    </div>
  `).join('') + `<button class="btn primary" id="quizSubmit" style="width:100%;justify-content:center">Comprobar respuestas</button>`;
  body.querySelectorAll('.quiz-opt').forEach(el=>{
    el.onclick = ()=>{
      if(quizDone) return;
      const qi = el.dataset.q;
      body.querySelectorAll(`.quiz-opt[data-q="${qi}"]`).forEach(x=>x.classList.remove('sel'));
      el.classList.add('sel');
      quizSel[qi] = el;
    };
  });
  $('quizSubmit').onclick = submitQuiz;
  $('quizScore').style.display = 'none';
  $('quizModal').classList.add('on');
}
function submitQuiz(){
  let score = 0;
  QUIZ.forEach((q,i)=>{
    const sel = quizSel[i];
    if(!sel) return;
    if(+sel.dataset.ok){ sel.classList.add('right'); score++; }
    else { sel.classList.add('wrong');
      // mostrar la correcta
      document.querySelector(`.quiz-opt[data-q="${i}"][data-ok="1"]`).classList.add('right');
    }
    document.querySelector(`.quiz-fb[data-fb="${i}"]`).classList.add('on');
  });
  $('scoreN').textContent = score;
  $('scoreT').textContent = QUIZ.length;
  const msgs = ['Necesitas repasar conceptos básicos.','Aún hay margen de mejora.','Bien, dominas lo esencial.','Muy bien, casi perfecto.','Excelente comprensión del bullwhip.'];
  $('scoreMsg').textContent = msgs[Math.max(0,Math.min(4, score-1))] || msgs[0];
  if(score===0) $('scoreMsg').textContent = msgs[0];
  $('quizScore').style.display = 'block';
  quizDone = true;
}
function resetQuiz(){ openQuiz(); }
function closeQuiz(){ $('quizModal').classList.remove('on'); }
window.closeQuiz = closeQuiz; window.resetQuiz = resetQuiz;

/* ============================================================
   ARRANQUE
   ============================================================ */
function init(){
  buildChain();
  buildEchelonCards();
  bindUI();
  updateEchelonCards(stateA);
  renderCharts();
  renderInsights();
  requestAnimationFrame(loop);
}
window.addEventListener('load', init);
window.addEventListener('resize', ()=> renderCharts());
