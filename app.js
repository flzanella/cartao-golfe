const STORAGE_KEY = "golf-scorecard-v1";

let HCP = {
  "Felipe Zanella": 18,
  "Fabiano Neris": 12,
  "José Bernardo Sanmartin": 17,
  "Ramon Piccoli": 20,
  "Matuzalém Ferreira": 18,
  "José Bassanesi": 19,
  "Felipe dos Santos": 12,
  "Fabrício Wernke": 30,
  "Guilherme Souza": 6,
};

const CAXIAS_PAR = [4,3,4,4,4,3,5,4,4, 4,3,4,4,4,3,4,5,5];
const GV_PAR = [4,3,5,4,3,4,4,4,3, 4,3,5,4,3,4,4,4,3];
const SAO_DOMINGOS_PAR = [4,3,4,3,5,3,4,4,4, 4,3,4,3,5,3,4,4,4];

let COURSE_PARS = {
  "São Domingos Golfe Clube": SAO_DOMINGOS_PAR,
  "Caxias Golf Clube": CAXIAS_PAR,
  "Green Village Golf Club": GV_PAR,
};

const SEED_ROUNDS = [
  {id:"sd0523", label:"Treino livre", date:"23/05/2025", campo:"São Domingos Golfe Clube", local:"", evento:"Treino livre",
   par:SAO_DOMINGOS_PAR, scores:[7,3,6,5,6,3,6,6,5, 7,4,4,4,6,4,5,5,4], hcp:19,
   companions:[]},
  {id:"sd0610", label:"Treino livre", date:"10/06/2025", campo:"São Domingos Golfe Clube", local:"", evento:"Treino livre",
   par:SAO_DOMINGOS_PAR, scores:[7,6,6,5,6,5,6,4,4, 9,5,5,4,5,4,5,6,6], hcp:18,
   companions:[
     {name:"Fabiano Neris", score:80, hcp:12, scores:[4,4,5,4,6,3,4,4,5, 5,4,6,3,6,4,4,4,5]}
   ]},
  {id:"sd0618", label:"Treino livre", date:"18/06/2025", campo:"São Domingos Golfe Clube", local:"", evento:"Treino livre",
   par:SAO_DOMINGOS_PAR, scores:[6,3,7,5,7,4,5,5,4, 6,3,8,4,3,4,4,6,4], hcp:22,
   companions:[
     {name:"Fabiano Neris", score:93, hcp:18, scores:[7,4,5,4,7,3,6,9,5, 6,4,4,4,6,3,5,5,6]}
   ]},
  {id:"gv0428", label:"Treino livre", date:"28/04/2026", campo:"Green Village Golf Club", local:"", evento:"Treino livre",
   par:GV_PAR, scores:[5,4,8,4,5,5,4,5,3, 5,3,6,5,5,5,4,5,4], hcp:20,
   companions:[
     {name:"Fabiano Neris", score:81, scores:[4,3,6,5,3,5,4,5,4, 4,2,7,7,4,6,4,5,3]},
     {name:"Guilherme Souza", score:86, hcp:6, scores:[5,3,6,7,4,7,5,5,3, 6,3,7,4,3,5,5,4,4]}
   ]},
  {id:"gv0804", label:"Treino livre", date:"04/08/2026", campo:"Green Village Golf Club", local:"", evento:"Treino livre",
   par:GV_PAR, scores:[5,4,5,6,3,5,5,4,4, 3,5,6,7,5,5,5,5,3], putts:34, hcp:18,
   companions:[
     {name:"Fabiano Neris", score:84, scores:[5,3,6,5,4,5,4,6,4, 5,3,5,6,4,5,5,5,4]},
     {name:"Felipe dos Santos", score:88, scores:[5,7,8,4,4,5,5,8,4, 4,4,6,5,3,4,4,5,3]}
   ]},
  {id:"gv0915", label:"Treino livre", date:"15/09/2026", campo:"Green Village Golf Club", local:"", evento:"Treino livre",
   par:GV_PAR, scores:[5,1,6,5,5,6,5,5,3, 5,5,5,4,5,5,5,5,5], putts:33, hcp:18,
   companions:[
     {name:"Fabiano Neris", score:84, scores:[4,3,10,6,3,5,4,5,3, 5,3,6,6,4,5,4,5,3]},
     {name:"Felipe dos Santos", score:87, scores:[4,3,6,6,4,5,4,5,5, 4,4,7,5,5,4,4,7,5]}
   ]},
  {id:"gv0616", label:"Treino livre", date:"16/06/2026", campo:"Green Village Golf Club", local:"", evento:"Treino livre",
   par:GV_PAR, scores:[4,3,6,4,3,5,4,7,5, 5,4,4,4,4,4,5,5,3], putts:29, hcp:19,
   companions:[
     {name:"Fabrício Wernke", score:103, hcp:30, scores:[7,5,7,7,5,6,5,6,6, 6,3,7,5,4,7,7,6,4]}
   ]},
  {id:"xangrila0516", label:"Xangri-lá", date:"16/05/2026", campo:"Green Village Golf Club", local:"Xangri-lá", evento:"Treino livre",
   par:GV_PAR, scores:[4,6,5,7,4,6,4,7,4, 4,5,6,6,3,5,4,6,4], stats:{puttAvg:1.94}, companions:[]},
  {id:"torneio0919", label:"Ranking interno", date:"19/09/2026", campo:"Green Village Golf Club", local:"", evento:"Ranking interno",
   par:GV_PAR, scores:[3,4,7,4,4,8,6,5,4, 5,3,6,6,5,6,5,5,3], putts:26,
   companions:[
     {name:"Fabiano Neris", score:83, scores:[5,4,6,5,4,7,6,6,4, 5,3,5,4,3,4,4,5,3]},
     {name:"Felipe dos Santos", score:88, scores:[6,4,6,6,4,6,4,4,4, 7,5,4,4,5,5,5,5,4]}
   ]},
  {id:"aberto_d2", label:"20º Aberto — D2", date:"06/09/2026", campo:"Caxias Golf Clube", local:"", evento:"20º Aberto · Dia 2",
   par:CAXIAS_PAR, scores:[6,3,6,6,6,4,8,6,5, 6,4,9,6,5,3,9,7,4],
   companions:[
     {name:"José Bernardo Sanmartin", score:90, scores:[4,3,6,6,3,4,4,7,4, 6,4,8,5,5,5,4,6,6]},
     {name:"Ramon Piccoli", score:104, scores:[5,4,6,6,9,3,5,7,7, 7,4,7,8,4,5,4,5,8]}
   ]},
  {id:"aberto_d1", label:"20º Aberto — D1", date:"05/09/2026", campo:"Caxias Golf Clube", local:"", evento:"20º Aberto · Dia 1",
   par:CAXIAS_PAR, scores:[4,4,5,7,4,5,9,6,5, 5,3,6,6,6,4,9,6,5],
   companions:[
     {name:"Matuzalém Ferreira", score:96, scores:[3,3,7,5,6,4,6,6,6, 6,3,6,5,7,7,5,6,5]},
     {name:"José Bassanesi", score:104, scores:[5,3,7,8,9,4,9,4,5, 8,3,6,5,8,4,5,6,5]}
   ]},
  {id:"treino0125", label:"Treino livre", date:"22/01/2025", campo:"Caxias Golf Clube", local:"", evento:"Treino livre",
   par:CAXIAS_PAR, scores:[4,5,5,5,7,3,9,5,6, 5,6,6,7,7,3,9,6,5],
   companions:[
     {name:"Fabiano Neris", score:88, scores:[4,4,6,5,4,4,5,5,7, 5,3,6,4,6,4,5,5,6]}
   ]},
];

let rounds = [];

// ---------- Persistence (localStorage) ----------

function loadState(){
  rounds = SEED_ROUNDS.map(r=>({...r}));
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const state = JSON.parse(raw);
      if(state.hcp) Object.assign(HCP, state.hcp);
      if(state.coursePars) Object.assign(COURSE_PARS, state.coursePars);
      if(Array.isArray(state.extraRounds)){
        state.extraRounds.forEach(r=>{
          const idx = rounds.findIndex(x=>x.id===r.id);
          if(idx>=0) rounds[idx] = r; else rounds.push(r);
        });
      }
    }
  }catch(e){ console.warn("Falha ao carregar dados salvos", e); }
}

function saveState(){
  const seedIds = new Set(SEED_ROUNDS.map(r=>r.id));
  const extraRounds = rounds.filter(r=>{
    if(!seedIds.has(r.id)) return true;
    const seed = SEED_ROUNDS.find(s=>s.id===r.id);
    return JSON.stringify(seed) !== JSON.stringify(r);
  });
  const state = {hcp:HCP, coursePars:COURSE_PARS, extraRounds};
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  }catch(e){
    console.warn("Falha ao salvar dados", e);
    return false;
  }
}

function markClass(diff){
  if(diff<=-3) return {cls:"circle mk-alb", rings:0};
  if(diff===-2) return {cls:"circle mk-eagle", rings:2};
  if(diff===-1) return {cls:"circle mk-birdie", rings:1};
  if(diff===0) return {cls:"mk-par", rings:0};
  if(diff===1) return {cls:"mk-bogey", rings:1};
  if(diff===2) return {cls:"mk-dbogey", rings:2};
  return {cls:"mk-big", rings:0};
}

function holeMarkHTML(score, par){
  if(score===1){
    return `<div class="hole-mark mk-ace"><span class="ace-star">★</span></div>`;
  }
  const diff = score - par;
  const m = markClass(diff);
  let inner = "";
  if(m.rings===1) inner = '<span class="ring"></span>';
  if(m.rings===2) inner = '<span class="ring"></span><span class="ring2"></span>';
  return `<div class="hole-mark ${m.cls}">${inner}<span>${score}</span></div>`;
}

function fmtDiff(v){
  return (v>0? "+"+v : v===0? "E" : v.toString());
}

function renderCard(r){
  const total = r.scores.reduce((a,b)=>a+b,0);
  const parTotal = r.par.reduce((a,b)=>a+b,0);
  const diff = total - parTotal;
  const hcpUsed = r.hcp ?? HCP["Felipe Zanella"];
  const net = total - hcpUsed;
  const front = r.scores.slice(0,9), back = r.scores.slice(9,18);
  const frontPar = r.par.slice(0,9), backPar = r.par.slice(9,18);
  const frontTotal = front.reduce((a,b)=>a+b,0), backTotal = back.reduce((a,b)=>a+b,0);
  const frontParTotal = frontPar.reduce((a,b)=>a+b,0), backParTotal = backPar.reduce((a,b)=>a+b,0);

  const puttAvg = r.putts !== undefined ? (r.putts/18)
                 : (r.stats && r.stats.puttAvg !== undefined ? r.stats.puttAvg : null);

  const dist = {eagle:0, birdie:0, par:0, bogey:0, dbogey:0, triple:0};
  r.scores.forEach((s,i)=>{
    const d = s - r.par[i];
    if(d<=-2) dist.eagle++;
    else if(d===-1) dist.birdie++;
    else if(d===0) dist.par++;
    else if(d===1) dist.bogey++;
    else if(d===2) dist.dbogey++;
    else dist.triple++;
  });
  const pct = n => Math.round(n/18*100) + "%";
  const puttLabel = puttAvg !== null ? puttAvg.toFixed(2) : "ND";

  const statsHtml = `<div class="stats-grid">
    <div class="stat"><div class="stat-label">Eagle</div><div class="stat-value">${pct(dist.eagle)}</div></div>
    <div class="stat"><div class="stat-label">Birdie</div><div class="stat-value">${pct(dist.birdie)}</div></div>
    <div class="stat"><div class="stat-label">Par</div><div class="stat-value">${pct(dist.par)}</div></div>
    <div class="stat"><div class="stat-label">Putts/Buraco</div><div class="stat-value">${puttLabel}</div></div>
    <div class="stat"><div class="stat-label">Bogey</div><div class="stat-value">${pct(dist.bogey)}</div></div>
    <div class="stat"><div class="stat-label">Dbl. bogey</div><div class="stat-value">${pct(dist.dbogey)}</div></div>
    <div class="stat"><div class="stat-label">Trp. bogey+</div><div class="stat-value">${pct(dist.triple)}</div></div>
  </div>`;

  return `
  <div class="card">
    <div class="card-top">
      <div class="player">
        <div class="player-name">Felipe Zanella</div>
        <div class="player-hcp">HCP ${hcpUsed}</div>
      </div>
      <div class="course-info">
        <div class="course-name">${r.campo}</div>
        <div class="course-sub">${r.local? r.local+" · " : ""}${r.date}</div>
      </div>
    </div>
    <div class="score-row">
      <div class="score-main">
        <div class="score-big">${total}</div>
        <div class="score-vs">${fmtDiff(diff)}</div>
      </div>
      <div class="score-net">
        <div class="net-label">Net</div>
        <div class="net-big">${net}</div>
        <div class="net-vs">${fmtDiff(net - parTotal)}</div>
      </div>
    </div>
    <div class="evt-row">
      <div class="evt">${r.evento} · Par ${parTotal}</div>
      ${r.scores.includes(1) ? `<div class="ace-badge">★ Hole-in-one</div>` : ""}
    </div>
    ${r.photo ? `<button type="button" class="photo-btn" id="cardPhotoBtn">📷 Ver foto do cartão</button>` : ""}
    <div class="hole-grid">
      ${front.map((s,i)=>`<div class="hole-cell"><div class="hole-num">${i+1}</div>${holeMarkHTML(s, frontPar[i])}</div>`).join("")}
      <div class="hole-cell sum-cell">
        <div class="sum-par">${frontParTotal}</div>
        <div class="hole-mark mk-sum"><span>${frontTotal}</span></div>
      </div>
    </div>
    <div class="hole-grid">
      ${back.map((s,i)=>`<div class="hole-cell"><div class="hole-num">${i+10}</div>${holeMarkHTML(s, backPar[i])}</div>`).join("")}
      <div class="hole-cell sum-cell">
        <div class="sum-par">${backParTotal}</div>
        <div class="hole-mark mk-sum"><span>${backTotal}</span></div>
      </div>
    </div>
  </div>
  ${statsHtml}
  `;
}

const MONTH_NAMES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function parsePeriod(dateStr){
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(dateStr);
  if(!m) return null;
  const month = parseInt(m[2],10) - 1;
  const year = parseInt(m[3],10);
  return {key:`${year}-${String(month).padStart(2,"0")}`, label:`${MONTH_NAMES[month]} de ${year}`, year, month};
}

function getCourses(){
  return [...new Set(rounds.map(r=>r.campo))];
}

function getPeriods(){
  const map = new Map();
  rounds.forEach(r=>{
    const p = parsePeriod(r.date);
    const key = p ? p.key : "none";
    const label = p ? p.label : "Sem data";
    if(!map.has(key)) map.set(key, {key, label, year:p?p.year:-1, month:p?p.month:-1});
  });
  return [...map.values()].sort((a,b)=> b.year-a.year || b.month-a.month);
}

let courseFilter = "all";
let periodFilter = "all";
let selectedCompanions = new Set();
let activeId = null;
const OVERVIEW_LIMIT = 10;
let overviewExpanded = false;

function roundPeriodKey(r){
  const p = parsePeriod(r.date);
  return p ? p.key : "none";
}

function dateSortKey(r){
  const p = parsePeriod(r.date);
  if(!p) return -1;
  const dayMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(r.date);
  const day = dayMatch ? parseInt(dayMatch[1],10) : 1;
  return p.year*10000 + (p.month+1)*100 + day;
}

function filteredRounds(){
  return rounds
    .filter(r=>
      (courseFilter==="all" || r.campo===courseFilter) &&
      (periodFilter==="all" || roundPeriodKey(r)===periodFilter)
    )
    .sort((a,b)=> dateSortKey(b) - dateSortKey(a));
}

function renderTabs(){
  const sel = document.getElementById("courseSelect");
  const tabList = ["all", ...getCourses()];
  sel.innerHTML = tabList.map(t=>
    `<option value="${t}" ${t===courseFilter?'selected':''}>${t==="all"?"Todos os campos":t}</option>`
  ).join("");
  sel.onchange = ()=>{
    courseFilter = sel.value;
    const list = filteredRounds();
    if(!list.some(r=>r.id===activeId) && list.length>0) activeId = list[0].id;
    selectedCompanions = new Set();
    overviewExpanded = false;
    renderAll();
  };

  const psel = document.getElementById("periodSelect");
  const periods = getPeriods();
  psel.innerHTML = `<option value="all" ${periodFilter==="all"?"selected":""}>Todos os períodos</option>` +
    periods.map(p=>`<option value="${p.key}" ${p.key===periodFilter?'selected':''}>${p.label}</option>`).join("");
  psel.onchange = ()=>{
    periodFilter = psel.value;
    const list = filteredRounds();
    if(!list.some(r=>r.id===activeId) && list.length>0) activeId = list[0].id;
    selectedCompanions = new Set();
    overviewExpanded = false;
    renderAll();
  };
}

function renderPlayersBox(r){
  if(!r.companions || r.companions.length===0){
    return `<div class="players-box">
      <div class="players-title">Jogadores da rodada</div>
      <div class="players-empty">Rodada individual — sem outros jogadores registrados.</div>
    </div>`;
  }
  const chips = r.companions.map(p=>
    `<button type="button" class="player-chip ${selectedCompanions.has(p.name)?'selected':''}" data-name="${p.name}">
      <span class="chip-name">${p.name}</span>
      <span class="chip-score">${p.score}</span>
    </button>`
  ).join("");
  return `<div class="players-box">
    <div class="players-title">Jogadores da rodada · toque para comparar</div>
    <div class="players-list">${chips}</div>
  </div>`;
}

function renderMiniCard(comp, par){
  const total = comp.scores.reduce((a,b)=>a+b,0);
  const parTotal = par.reduce((a,b)=>a+b,0);
  const diff = total - parTotal;
  const compHcp = comp.hcp ?? HCP[comp.name] ?? 0;
  const net = total - compHcp;
  const front = comp.scores.slice(0,9), back = comp.scores.slice(9,18);
  const frontPar = par.slice(0,9), backPar = par.slice(9,18);
  const frontTotal = front.reduce((a,b)=>a+b,0), backTotal = back.reduce((a,b)=>a+b,0);
  const frontParTotal = frontPar.reduce((a,b)=>a+b,0), backParTotal = backPar.reduce((a,b)=>a+b,0);
  return `<div class="mini-card">
    <div class="mini-header">
      <span class="mini-name-group">
        <span class="mini-name">${comp.name}</span>
        <span class="mini-hcp">HCP ${compHcp || "—"}</span>
      </span>
      <span class="mini-scores-group">
        <span class="mini-score-block">
          <span class="mini-total">${total}</span>
          <span class="mini-diff">${fmtDiff(diff)}</span>
        </span>
        <span class="mini-net-block">
          <span class="mini-net-label">Net</span>
          <span class="mini-net">${net}</span>
          <span class="mini-net-diff">${fmtDiff(net - parTotal)}</span>
        </span>
      </span>
    </div>
    <div class="hole-grid mini">
      ${front.map((s,i)=>`<div class="hole-cell"><div class="hole-num">${i+1}</div>${holeMarkHTML(s, frontPar[i])}</div>`).join("")}
      <div class="hole-cell sum-cell">
        <div class="sum-par">${frontParTotal}</div>
        <div class="hole-mark mk-sum"><span>${frontTotal}</span></div>
      </div>
    </div>
    <div class="hole-grid mini">
      ${back.map((s,i)=>`<div class="hole-cell"><div class="hole-num">${i+10}</div>${holeMarkHTML(s, backPar[i])}</div>`).join("")}
      <div class="hole-cell sum-cell">
        <div class="sum-par">${backParTotal}</div>
        <div class="hole-mark mk-sum"><span>${backTotal}</span></div>
      </div>
    </div>
  </div>`;
}

function renderComparison(r){
  if(selectedCompanions.size===0) return "";
  return r.companions
    .filter(c=>selectedCompanions.has(c.name))
    .map(c=>renderMiniCard(c, r.par))
    .join("");
}

function bindPlayerChips(r){
  document.querySelectorAll(".player-chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      const name = chip.dataset.name;
      if(selectedCompanions.has(name)) selectedCompanions.delete(name);
      else selectedCompanions.add(name);
      chip.classList.toggle("selected");
      document.getElementById("comparisonArea").innerHTML = renderComparison(r);
    });
  });
}

function renderOverview(){
  const ov = document.getElementById("overview");
  const list = filteredRounds();
  if(list.length===0){
    ov.innerHTML = `<div class="ov-row"><div class="ov-left"><div class="ov-sub">Nenhuma rodada encontrada para esse filtro.</div></div></div>`;
    return;
  }
  const hasMore = list.length > OVERVIEW_LIMIT;
  const visible = (hasMore && !overviewExpanded) ? list.slice(0, OVERVIEW_LIMIT) : list;
  ov.innerHTML = visible.map(r=>{
    const total = r.scores.reduce((a,b)=>a+b,0);
    const parTotal = r.par.reduce((a,b)=>a+b,0);
    const net = total - (r.hcp ?? HCP["Felipe Zanella"]);
    const grossDiff = total - parTotal;
    const netDiff = net - parTotal;
    const gClass = grossDiff>0? "diff-over":"diff-under";
    const nClass = netDiff>0? "diff-over":"diff-under";
    return `<div class="ov-row ${r.id===activeId?'active':''}" data-id="${r.id}">
      <div class="ov-left">
        <div class="ov-title">${r.campo}</div>
        <div class="ov-sub">${r.evento} · ${r.date}</div>
      </div>
      <div class="ov-right">
        <div class="ov-col">
          <div class="ov-score">${total}</div>
          <div class="ov-col-diff ${gClass}">${fmtDiff(grossDiff)}</div>
        </div>
        <div class="ov-col">
          <div class="ov-score net">${net}</div>
          <div class="ov-col-diff ${nClass}">${fmtDiff(netDiff)}</div>
        </div>
      </div>
    </div>`;
  }).join("") + (hasMore ? `<button type="button" class="ov-toggle ${overviewExpanded?'expanded':''}">
      ${overviewExpanded ? `Ver menos` : `Ver mais ${list.length - OVERVIEW_LIMIT} rodadas`}
      <span class="chev">▾</span>
    </button>` : "");
  ov.querySelectorAll(".ov-row").forEach(row=>{
    row.addEventListener("click", ()=>{
      activeId = row.dataset.id;
      selectedCompanions = new Set();
      renderAll();
      window.scrollTo(0, 0);
    });
  });
  const toggle = ov.querySelector(".ov-toggle");
  if(toggle){
    toggle.addEventListener("click", ()=>{
      overviewExpanded = !overviewExpanded;
      renderOverview();
    });
  }
}

function openPhotoViewer(src){
  const overlay = document.createElement("div");
  overlay.className = "photo-viewer";
  overlay.innerHTML = `<img src="${src}" alt="Foto do cartão"><button type="button" class="photo-viewer-close">✕</button>`;
  overlay.addEventListener("click", (e)=>{
    if(e.target === overlay || e.target.classList.contains("photo-viewer-close")) overlay.remove();
  });
  document.body.appendChild(overlay);
}

function renderAll(){
  const r = rounds.find(x=>x.id===activeId);
  if(!r){ document.getElementById("cardArea").innerHTML = ""; renderTabs(); renderOverview(); return; }
  document.getElementById("cardArea").innerHTML = renderCard(r) + renderPlayersBox(r);
  document.getElementById("comparisonArea").innerHTML = renderComparison(r);
  renderTabs();
  renderOverview();
  bindPlayerChips(r);
  const photoBtn = document.getElementById("cardPhotoBtn");
  if(photoBtn) photoBtn.addEventListener("click", ()=> openPhotoViewer(r.photo));
}

// ---------- Incluir cartão (entrada manual) ----------

function emptyExtraction(){
  return {
    campo:"", date:"", evento:"",
    scores: Array(18).fill(""),
    companions: [],
    photo: null
  };
}

function compressImage(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onerror = ()=> reject(reader.error);
    reader.onload = ()=>{
      const img = new Image();
      img.onerror = ()=> reject(new Error("Não foi possível ler a imagem."));
      img.onload = ()=>{
        const maxDim = 1280;
        let width = img.naturalWidth, height = img.naturalHeight;
        if(width > maxDim || height > maxDim){
          if(width > height){ height = Math.round(height * maxDim/width); width = maxDim; }
          else{ width = Math.round(width * maxDim/height); height = maxDim; }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.72));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function panelHTML(status, extraction, matchState){
  const courses = Object.keys(COURSE_PARS);
  const isNewCourse = matchState.isNew;
  let html = `<div class="acp-title">Incluir cartão</div>`;
  if(status) html += `<div class="acp-status">${status}</div>`;

  html += `<div class="acp-photo">`;
  if(extraction.photo){
    html += `<img src="${extraction.photo}" class="acp-photo-preview" alt="Foto do cartão">
      <button type="button" class="acp-photo-remove" id="acpPhotoRemove">Remover foto</button>`;
  } else {
    html += `<div class="acp-photo-row">
      <button type="button" class="acp-photo-btn" id="acpPhotoCameraBtn">📷 Tirar foto</button>
      <button type="button" class="acp-photo-btn" id="acpPhotoGalleryBtn">🖼️ Da galeria</button>
    </div>`;
  }
  html += `<input type="file" accept="image/*" capture="environment" id="acpPhotoCameraInput" style="display:none">
    <input type="file" accept="image/*" id="acpPhotoGalleryInput" style="display:none"></div>`;

  html += `<div class="acp-row"><label>Campo</label>
    <select id="acpCourse">
      ${courses.map(c=>`<option value="${c}" ${c===matchState.campo && !isNewCourse?"selected":""}>${c}</option>`).join("")}
      <option value="__new__" ${isNewCourse?"selected":""}>+ Cadastrar novo campo</option>
    </select>
  </div>`;
  if(isNewCourse){
    html += `<div class="acp-row"><label>Nome do novo campo</label><input type="text" id="acpNewCourseName" value="${extraction.campo||""}"></div>
    <div class="acp-holes-title">Par — buracos 1 a 9</div>
    <div class="acp-holes-grid">
      ${Array.from({length:9}).map((_,i)=>`<div class="acp-hole-input"><span>${i+1}</span><input type="number" class="acp-new-par" data-i="${i}" value="4"></div>`).join("")}
    </div>
    <div class="acp-holes-title">Par — buracos 10 a 18</div>
    <div class="acp-holes-grid">
      ${Array.from({length:9}).map((_,i)=>`<div class="acp-hole-input"><span>${i+10}</span><input type="number" class="acp-new-par" data-i="${i+9}" value="4"></div>`).join("")}
    </div>`;
  }
  html += `<div class="acp-two">
    <div class="acp-row"><label>Data</label><input type="text" id="acpDate" placeholder="dd/mm/aaaa" value="${extraction.date||""}"></div>
    <div class="acp-row"><label>Evento</label><input type="text" id="acpEvento" value="${extraction.evento||""}"></div>
  </div>`;

  html += `<div class="acp-holes-title">Seus scores — buracos 1 a 9</div>
    <div class="acp-holes-grid">
      ${Array.from({length:9}).map((_,i)=>`<div class="acp-hole-input"><span>${i+1}</span><input type="number" class="acp-score" data-i="${i}" value="${extraction.scores[i]??""}"></div>`).join("")}
    </div>
    <div class="acp-holes-title">Seus scores — buracos 10 a 18</div>
    <div class="acp-holes-grid">
      ${Array.from({length:9}).map((_,i)=>`<div class="acp-hole-input"><span>${i+10}</span><input type="number" class="acp-score" data-i="${i+9}" value="${extraction.scores[i+9]??""}"></div>`).join("")}
    </div>`;

  html += `<div id="acpCompanions">`;
  extraction.companions.forEach((c,ci)=>{
    const known = HCP[c.name] !== undefined;
    html += `<div class="acp-companion" data-ci="${ci}">
      <div class="acp-companion-head">
        <input type="text" class="acp-comp-name" placeholder="Nome e sobrenome" value="${c.name||""}">
        <input type="number" class="acp-comp-hcp" placeholder="HCP" value="${known?HCP[c.name]:(c.hcp??"")}" style="width:70px;">
        <button type="button" class="acp-remove" data-remove-companion="${ci}">Remover</button>
      </div>
      <div class="acp-holes-grid">
        ${Array.from({length:9}).map((_,i)=>`<div class="acp-hole-input"><span>${i+1}</span><input type="number" class="acp-comp-score" data-i="${i}" value="${c.scores?.[i]??""}"></div>`).join("")}
      </div>
      <div class="acp-holes-grid">
        ${Array.from({length:9}).map((_,i)=>`<div class="acp-hole-input"><span>${i+10}</span><input type="number" class="acp-comp-score" data-i="${i+9}" value="${c.scores?.[i+9]??""}"></div>`).join("")}
      </div>
    </div>`;
  });
  html += `</div>
  <button type="button" class="acp-add-companion" id="acpAddCompanion">+ Adicionar jogador</button>
  <div class="acp-error" id="acpError" style="display:none;"></div>
  <div class="acp-actions">
    <button type="button" class="acp-cancel" id="acpCancelBtn">Cancelar</button>
    <button type="button" class="acp-save" id="acpSaveBtn">Salvar rodada</button>
  </div>`;
  return html;
}

function matchCourse(name){
  if(!name) return {campo:"", isNew:true};
  const known = Object.keys(COURSE_PARS);
  const exact = known.find(c=>c.toLowerCase()===name.toLowerCase());
  if(exact) return {campo:exact, isNew:false};
  const partial = known.find(c=>c.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(c.toLowerCase()));
  if(partial) return {campo:partial, isNew:false};
  return {campo:name, isNew:true};
}

let currentExtraction = null;
let currentMatch = {campo:"", isNew:false};

function renderAddPanel(status, extraction){
  const panel = document.getElementById("addCardPanel");
  panel.style.display = "block";
  currentExtraction = extraction;
  panel.innerHTML = panelHTML(status, extraction, currentMatch);
  wireAddPanel();
  panel.scrollIntoView({behavior:"smooth", block:"start"});
}

function wireAddPanel(){
  const cancelBtn = document.getElementById("acpCancelBtn");
  if(cancelBtn) cancelBtn.onclick = closeAddPanel;

  const photoCameraBtn = document.getElementById("acpPhotoCameraBtn");
  if(photoCameraBtn) photoCameraBtn.onclick = ()=> document.getElementById("acpPhotoCameraInput").click();

  const photoGalleryBtn = document.getElementById("acpPhotoGalleryBtn");
  if(photoGalleryBtn) photoGalleryBtn.onclick = ()=> document.getElementById("acpPhotoGalleryInput").click();

  const photoRemove = document.getElementById("acpPhotoRemove");
  if(photoRemove) photoRemove.onclick = ()=>{
    syncFormIntoExtraction();
    currentExtraction.photo = null;
    renderAddPanel(null, currentExtraction);
  };

  const handlePhotoFile = async (file)=>{
    if(!file) return;
    try{
      const dataUrl = await compressImage(file);
      syncFormIntoExtraction();
      currentExtraction.photo = dataUrl;
      renderAddPanel(null, currentExtraction);
    }catch(e){
      alert("Não foi possível processar essa foto. Tente outra.");
    }
  };
  const photoCameraInput = document.getElementById("acpPhotoCameraInput");
  if(photoCameraInput) photoCameraInput.onchange = (ev)=> handlePhotoFile(ev.target.files[0]);
  const photoGalleryInput = document.getElementById("acpPhotoGalleryInput");
  if(photoGalleryInput) photoGalleryInput.onchange = (ev)=> handlePhotoFile(ev.target.files[0]);

  const courseSel = document.getElementById("acpCourse");
  if(courseSel) courseSel.onchange = ()=>{
    if(courseSel.value==="__new__"){ currentMatch = {campo:currentExtraction.campo||"", isNew:true}; }
    else{ currentMatch = {campo:courseSel.value, isNew:false}; }
    syncFormIntoExtraction();
    renderAddPanel(null, currentExtraction);
  };

  const addCompBtn = document.getElementById("acpAddCompanion");
  if(addCompBtn) addCompBtn.onclick = ()=>{
    syncFormIntoExtraction();
    currentExtraction.companions.push({name:"", hcp:"", scores:Array(18).fill("")});
    renderAddPanel(null, currentExtraction);
  };

  document.querySelectorAll("[data-remove-companion]").forEach(btn=>{
    btn.onclick = ()=>{
      syncFormIntoExtraction();
      const idx = parseInt(btn.dataset.removeCompanion,10);
      currentExtraction.companions.splice(idx,1);
      renderAddPanel(null, currentExtraction);
    };
  });

  const saveBtn = document.getElementById("acpSaveBtn");
  if(saveBtn) saveBtn.onclick = saveNewRound;
}

function syncFormIntoExtraction(){
  if(!currentExtraction) return;
  const dateEl = document.getElementById("acpDate");
  const evtEl = document.getElementById("acpEvento");
  if(dateEl) currentExtraction.date = dateEl.value.trim();
  if(evtEl) currentExtraction.evento = evtEl.value.trim();
  document.querySelectorAll(".acp-score").forEach(inp=>{
    currentExtraction.scores[parseInt(inp.dataset.i,10)] = inp.value;
  });
  document.querySelectorAll(".acp-companion").forEach(box=>{
    const ci = parseInt(box.dataset.ci,10);
    const name = box.querySelector(".acp-comp-name").value.trim();
    const hcp = box.querySelector(".acp-comp-hcp").value;
    const scores = Array(18).fill("");
    box.querySelectorAll(".acp-comp-score").forEach(inp=>{
      scores[parseInt(inp.dataset.i,10)] = inp.value;
    });
    currentExtraction.companions[ci] = {name, hcp, scores};
  });
}

function closeAddPanel(){
  document.getElementById("addCardPanel").style.display = "none";
  document.getElementById("addCardPanel").innerHTML = "";
  currentExtraction = null;
}

async function saveNewRound(){
  syncFormIntoExtraction();
  const errEl = document.getElementById("acpError");
  errEl.style.display = "none";

  const scores = currentExtraction.scores.map(v=>parseInt(v,10));
  if(scores.length!==18 || scores.some(v=>isNaN(v) || v<1 || v>15)){
    errEl.textContent = "Confira os 18 scores — todos precisam ser números válidos.";
    errEl.style.display = "block";
    return;
  }
  if(!currentExtraction.date || !/^\d{2}\/\d{2}\/\d{4}$/.test(currentExtraction.date)){
    errEl.textContent = "Informe a data no formato dd/mm/aaaa.";
    errEl.style.display = "block";
    return;
  }

  let par;
  let campoFinal;
  if(currentMatch.isNew){
    const nameEl = document.getElementById("acpNewCourseName");
    campoFinal = (nameEl?.value || currentExtraction.campo || "").trim();
    if(!campoFinal){
      errEl.textContent = "Informe o nome do novo campo.";
      errEl.style.display = "block";
      return;
    }
    const parInputs = document.querySelectorAll(".acp-new-par");
    par = Array(18).fill(4);
    parInputs.forEach(inp=>{ par[parseInt(inp.dataset.i,10)] = parseInt(inp.value,10) || 4; });
    COURSE_PARS[campoFinal] = par;
  } else {
    campoFinal = currentMatch.campo;
    par = COURSE_PARS[campoFinal];
  }

  for(const c of currentExtraction.companions){
    if(!c.name) continue;
    if(HCP[c.name]===undefined){
      const hcpVal = parseInt(c.hcp,10);
      if(isNaN(hcpVal)){
        errEl.textContent = `Informe o HCP de ${c.name} (jogador novo).`;
        errEl.style.display = "block";
        return;
      }
      HCP[c.name] = hcpVal;
    }
  }

  const companions = currentExtraction.companions
    .filter(c=>c.name)
    .map(c=>{
      const cs = c.scores.map(v=>parseInt(v,10));
      const total = cs.reduce((a,b)=>a+(isNaN(b)?0:b),0);
      return {name:c.name, score:total, scores:cs};
    });

  const slug = (currentExtraction.evento||"rodada").toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g,"")
    .replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"");
  const id = `${slug}_${currentExtraction.date.replace(/\//g,"")}_${Date.now().toString(36)}`;

  const newRound = {
    id, label: currentExtraction.evento || "Rodada", date: currentExtraction.date,
    campo: campoFinal, local:"", evento: currentExtraction.evento || "Rodada",
    par, scores, companions, photo: currentExtraction.photo || null
  };

  rounds.push(newRound);
  const saved = saveState();

  activeId = id;
  courseFilter = "all";
  periodFilter = "all";
  selectedCompanions = new Set();
  closeAddPanel();
  renderAll();

  if(!saved){
    alert("A rodada foi adicionada, mas não coube tudo no armazenamento do navegador (provavelmente por causa das fotos). Se isso persistir, remova a foto de rodadas mais antigas.");
  }
}

function openAddMenu(){
  const overlay = document.createElement("div");
  overlay.className = "add-menu-overlay";
  overlay.innerHTML = `
    <div class="add-menu">
      <button type="button" id="addMenuCamera">Tirar foto</button>
      <button type="button" id="addMenuGallery">Da galeria</button>
      <button type="button" id="addMenuManual">Manualmente</button>
    </div>
    <input type="file" accept="image/*" capture="environment" id="addMenuCameraInput" style="display:none">
    <input type="file" accept="image/*" id="addMenuGalleryInput" style="display:none">`;

  overlay.addEventListener("click", (e)=>{
    if(e.target === overlay) overlay.remove();
  });

  const startManual = ()=>{
    overlay.remove();
    currentMatch = matchCourse("");
    renderAddPanel("Preencha os dados da rodada.", emptyExtraction());
  };
  const startWithPhoto = async (file)=>{
    overlay.remove();
    if(!file){ startManual(); return; }
    currentMatch = matchCourse("");
    const extraction = emptyExtraction();
    try{
      extraction.photo = await compressImage(file);
    }catch(e){
      alert("Não foi possível processar essa foto. Você pode preencher manualmente.");
    }
    renderAddPanel("Confira o campo, a data e preencha os scores.", extraction);
  };

  overlay.querySelector("#addMenuCamera").onclick = ()=> overlay.querySelector("#addMenuCameraInput").click();
  overlay.querySelector("#addMenuGallery").onclick = ()=> overlay.querySelector("#addMenuGalleryInput").click();
  overlay.querySelector("#addMenuManual").onclick = startManual;
  overlay.querySelector("#addMenuCameraInput").onchange = (ev)=> startWithPhoto(ev.target.files[0]);
  overlay.querySelector("#addMenuGalleryInput").onchange = (ev)=> startWithPhoto(ev.target.files[0]);

  document.body.appendChild(overlay);
}

document.getElementById("addCardBtn").onclick = openAddMenu;

// ---------- PWA install prompt ----------

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e)=>{
  e.preventDefault();
  deferredInstallPrompt = e;
  document.getElementById("installBanner").style.display = "flex";
});
document.getElementById("installBtn").onclick = async ()=>{
  if(!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.getElementById("installBanner").style.display = "none";
};
window.addEventListener("appinstalled", ()=>{
  document.getElementById("installBanner").style.display = "none";
});

if("serviceWorker" in navigator){
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", ()=>{
    if(refreshing) return;
    refreshing = true;
    window.location.reload();
  });
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}

(function boot(){
  loadState();
  const list = filteredRounds();
  activeId = list.length ? list[0].id : null;
  renderAll();
})();
