

(function(){
if(window.HotGrid) return;

var sel=[], selMap={}, PICK={};
var BATCH={grid:null, el:null, full:[], rendered:0, step:100, moreEl:null, done:false, obs:null, cid:null};

function esc(s){
return (window.CGL && CGL.esc) ? CGL.esc(s)
: String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function copyText(txt){
if(window.CGL && CGL.copyText){ CGL.copyText(txt); return; }
try{ navigator.clipboard.writeText(txt); }catch(e){ miniCopy(txt); }
}
function miniCopy(txt){
var ta=document.createElement('textarea');
ta.value=txt; ta.style.position='fixed'; ta.style.opacity='0';
document.body.appendChild(ta); ta.focus(); ta.select();
try{ document.execCommand('copy'); }catch(e){}
document.body.removeChild(ta);
}

var CARD_CSS = [
'.u-grid{display:grid;gap:10px}',
'.u-g7{grid-template-columns:repeat(7,1fr)}',
'.u-g10{grid-template-columns:repeat(10,1fr)}',
'@media(max-width:1280px){.u-g10{grid-template-columns:repeat(7,1fr)}.u-g7{grid-template-columns:repeat(6,1fr)}}',
'@media(max-width:1080px){.u-g10{grid-template-columns:repeat(5,1fr)}.u-g7{grid-template-columns:repeat(5,1fr)}}',
'@media(max-width:800px){.u-g10{grid-template-columns:repeat(4,1fr)}.u-g7{grid-template-columns:repeat(4,1fr)}}',
'@media(max-width:560px){.u-g10,.u-g7{grid-template-columns:repeat(3,1fr)}}',
'.u-card{position:relative;background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(60,72,120,.05);transition:box-shadow .18s,transform .18s}',
'.u-card:hover{box-shadow:0 8px 22px rgba(60,72,120,.16);transform:translateY(-2px)}',
'.u-ph{position:relative;background:#f5f5f7;line-height:0;cursor:pointer}',
'.u-card img{display:block;width:100%;aspect-ratio:3/4;object-fit:cover;background:#f5f5f7}',
'.u-card .u-no{font-size:11.5px;color:#4a4f8f;font-weight:600;padding:5px 6px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fafbfd;border-top:1px solid rgba(0,0,0,.04);cursor:pointer;transition:background .15s}',
'.u-card .u-no:hover{background:#eef0ff;color:#3a3c8c}',
'.u-card.u-sel{outline:2px solid #7d5cff;outline-offset:-2px}',
'.u-bar{position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:9999;background:rgba(24,24,28,.94);color:#fff;border-radius:999px;padding:9px 16px;display:none;align-items:center;gap:12px;box-shadow:0 8px 30px rgba(0,0,0,.35);font-size:13px}',
'.u-bar.show{display:flex}',
'.u-bar b{font-weight:700}',
'.u-bar button{border:none;border-radius:999px;padding:7px 15px;font-size:13px;cursor:pointer;color:#fff}',
'.u-copyall{background:linear-gradient(120deg,#0a84ff,#7d5cff);font-weight:700}',
'.u-reset{background:rgba(255,255,255,.16)}',
'.u-lm{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:10000;display:none;align-items:center;justify-content:center;flex-direction:column;padding:20px}',
'.u-lm.show{display:flex}',
'.u-lm .u-lm-wrap{position:relative;max-width:min(92vw,1000px);text-align:center}',
'.u-lm img{max-width:100%;max-height:70vh;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.5);display:block;margin:0 auto}',
'.u-lm .u-lm-x{position:absolute;top:-38px;right:0;color:#fff;font-size:32px;line-height:1;cursor:pointer;user-select:none}',
'.u-lm .u-lm-no{color:#fff;text-align:center;margin-top:10px;font-size:14px;font-weight:600}',
'.u-lm .u-lm-acts{display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;justify-content:center}',
'.u-lm-btn{border:none;border-radius:999px;padding:8px 16px;font-size:13px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:6px}',
'.u-gs{background:#fff;color:#1d1d1f;font-weight:600}',
'.u-cp{background:linear-gradient(120deg,#0a84ff,#7d5cff);color:#fff;font-weight:600}',
'.u-more{display:flex;justify-content:center;align-items:center;gap:12px;margin:18px 0 4px;flex-wrap:wrap}',
'.u-more-btn{border:none;border-radius:999px;padding:9px 22px;font-size:13.5px;font-weight:600;cursor:pointer;color:#fff;background:linear-gradient(120deg,#0a84ff,#7d5cff);box-shadow:0 4px 14px rgba(10,132,255,.25);transition:filter .15s,transform .15s}',
'.u-more-btn:hover{filter:brightness(1.06);transform:translateY(-1px)}',
'.u-more-btn[disabled]{opacity:.55;cursor:default;transform:none}',
'.u-more-tip{font-size:12.5px;color:var(--text-muted,#6e6e73)}'
].join('\n');

function ensureStyle(){
var st=document.getElementById('hot-ui-style');
if(st) return;
st=document.createElement('style');
st.id='hot-ui-style';
st.textContent=CARD_CSS;
document.head.appendChild(st);
}

function ensureUI(){
ensureStyle();
if(!document.getElementById('uBar')){
var barEl=document.createElement('div');
barEl.className='u-bar'; barEl.id='uBar';
barEl.innerHTML='<span>已选 <b class="u-cnt">0</b> 个编号</span>'+
'<button type="button" class="u-copyall">⧉ 批量复制编号</button>'+
'<button type="button" class="u-reset">清空</button>';
document.body.appendChild(barEl);
}
if(!document.getElementById('uLm')){
var lmEl=document.createElement('div');
lmEl.className='u-lm'; lmEl.id='uLm';
lmEl.innerHTML='<div class="u-lm-wrap"><span class="u-lm-x">×</span>'+
'<img class="u-lm-img" src="" alt=""><div class="u-lm-no" id="uLmNo">编号：</div>'+
'<div class="u-lm-acts">'+
'<a class="u-lm-btn u-gs" id="uGs" target="_blank" rel="noopener" href="#">🔍 谷歌搜图 · 搜同款</a>'+
'<button type="button" class="u-lm-btn u-cp" id="uCpNo">⧉ 复制编号</button>'+
'</div></div>';
document.body.appendChild(lmEl);
}
bindUI();
updateBar();
}

function bindUI(){
var barEl=document.getElementById('uBar');
if(barEl && !barEl._hb){
var c=barEl.querySelector('.u-copyall'), r=barEl.querySelector('.u-reset');
if(c) c.addEventListener('click', function(){ HotGrid.batchCopy(); });
if(r) r.addEventListener('click', function(){ HotGrid.reset(); });
barEl._hb=1;
}
var lm=document.getElementById('uLm');
if(lm && !lm._hb){
lm.addEventListener('click', function(e){ if(e.target===lm) HotGrid.close(); });
var x=lm.querySelector('.u-lm-x');
if(x) x.addEventListener('click', function(){ HotGrid.close(); });
var cp=lm.querySelector('#uCpNo');
if(cp) cp.addEventListener('click', function(){
var n=lm.querySelector('#uLmNo');
if(n && n.getAttribute('data-no')) copyText(n.getAttribute('data-no'));
});
lm._hb=1;
}
}

function updateBar(){
var b=document.getElementById('uBar');
if(!b) return;
if(sel.length){ b.classList.add('show'); } else { b.classList.remove('show'); }
var n=b.querySelector('.u-cnt');
if(n) n.textContent=sel.length;
}

function cardHtml(key,no,img){
no=esc(no); img=esc(img);
return '<div class="u-card" id="uCard_'+key+'">'+
'<div class="u-ph" onclick="HotGrid.toggle(\''+key+'\')" title="点击图片勾选该编号">'+
'<img src="'+img+'" alt="'+no+'" loading="lazy" decoding="async">'+
'</div>'+
'<div class="u-no" onclick="HotGrid.open(\''+key+'\')" title="点击编号放大查看">'+no+'</div>'+
'</div>';
}

function register(key,item){
PICK[key]={ no:String(item&&item.no==null?'':item.no), img:String(item&&item.img==null?'':item.img) };
}

var HotGrid={};

HotGrid.render = function(containerId, items, opts){
ensureUI();
var el=document.getElementById(containerId);
if(!el) return;
var list=(items&&items.slice)?items:[];
var cols=(opts&&opts.cols)||'u-g7';
var step=(opts&&opts.step>0)?opts.step:100;
if(!list.length){ HotGrid.renderEmpty(containerId, (opts&&opts.empty)||'暂无数据，请在对应数据文件中配置'); return; }
if(list.length<=step){

var h='<div class="u-grid '+cols+'">';
for(var i=0;i<list.length;i++){
var key=containerId+'_'+i;
register(key,list[i]);
h+=cardHtml(key,list[i].no,list[i].img);
}
h+='</div>';
el.innerHTML=h;
return;
}

teardownBatch();
var grid={'id':containerId,'cols':cols};
var kh='<div class="u-grid '+cols+'" id="uGrid_'+containerId+'"></div>';
kh+='<div class="u-more" id="uMore_'+containerId+'">'+
'<button type="button" class="u-more-btn" id="uMoreBtn_'+containerId+'">加载更多</button>'+
'<span class="u-more-tip" id="uMoreTip_'+containerId+'"></span>'+
'</div>';
el.innerHTML=kh;
var gridEl=el.querySelector('#uGrid_'+containerId);
var moreEl=el.querySelector('#uMore_'+containerId);
BATCH={grid:gridEl, el:el, full:list, rendered:0, step:step, moreEl:moreEl, done:false, obs:null, cid:containerId};
appendBatch();
bindMore();
};

function appendBatch(){
if(!BATCH.grid) return;
var start=BATCH.rendered;
var end=Math.min(BATCH.full.length, start+BATCH.step);
var h='';
for(var i=start;i<end;i++){
var k=String(BATCH.cid||BATCH.grid.id)+'_'+i;
register(k, BATCH.full[i]);
h+=cardHtml(k, BATCH.full[i].no, BATCH.full[i].img);
}
if(h) BATCH.grid.insertAdjacentHTML('beforeend', h);
BATCH.rendered=end;
if(BATCH.rendered>=BATCH.full.length){
BATCH.done=true;
finishBatch();
} else {
updateMoreTip();
}
}
function finishBatch(){
if(BATCH.obs){ try{ BATCH.obs.disconnect(); }catch(e){} BATCH.obs=null; }
var btn=BATCH.el.querySelector('.u-more-btn');
if(btn){ btn.disabled=true; btn.textContent='已全部加载'; }
updateMoreTip();
}
function updateMoreTip(){
var tip=BATCH.el.querySelector('.u-more-tip');
if(!tip) return;
tip.textContent='已加载 '+BATCH.rendered+' / '+BATCH.full.length+' 款 · 点击编号放大 · 点击图片勾选';
}
function bindMore(){
if(!BATCH.moreEl) return;
var btn=BATCH.el.querySelector('.u-more-btn');
if(btn){
btn.addEventListener('click', function(){
if(BATCH.done) return;
appendBatch();
});
}

if(typeof IntersectionObserver!=='undefined' && BATCH.moreEl){
BATCH.obs=new IntersectionObserver(function(entries){
entries.forEach(function(en){
if(en.isIntersecting && !BATCH.done){ appendBatch(); }
});
}, {rootMargin:'400px 0px', threshold:0});
BATCH.obs.observe(BATCH.moreEl);
}
}
function teardownBatch(){
if(BATCH.obs){ try{ BATCH.obs.disconnect(); }catch(e){} BATCH.obs=null; }
BATCH={grid:null, el:null, full:[], rendered:0, step:100, moreEl:null, done:false, obs:null, cid:null};
}

HotGrid.renderEmpty = function(containerId, txt){
var el=document.getElementById(containerId);
if(!el) return;
el.innerHTML='<p class="ph">'+esc(txt||'暂无数据')+'</p>';
};

HotGrid.toggle = function(key){
ensureUI();
var v=PICK[key];
if(!v) return;
var card=document.getElementById('uCard_'+key);
if(!card) return;
var k=String(v.no);
if(selMap[k]){
delete selMap[k];
sel=sel.filter(function(o){ return String(o.no)!==k; });
card.classList.remove('u-sel');
}else{
selMap[k]=1;
sel.push({no:v.no, img:v.img});
card.classList.add('u-sel');
}
updateBar();
};

HotGrid.open = function(key){
ensureUI();
var v=PICK[key];
if(!v) return false;
var lm=document.getElementById('uLm');
var img=lm.querySelector('.u-lm-img');
img.src=v.img;
var no=lm.querySelector('#uLmNo');
no.textContent='编号：'+v.no;
no.setAttribute('data-no', v.no);
var gs=lm.querySelector('#uGs');
gs.href='https://www.google.com/searchbyimage?image_url='+encodeURIComponent(v.img);
lm.classList.add('show');
document.body.style.overflow='hidden';
return false;
};

HotGrid.close = function(){
var lm=document.getElementById('uLm');
if(lm) lm.classList.remove('show');
document.body.style.overflow='';
};

HotGrid.batchCopy = function(){
if(!sel.length) return;
var txt=sel.map(function(o){ return String(o.no)+'\t'+String(o.img); }).join('\n');
copyText(txt);
};

HotGrid.reset = function(){
var cs=document.querySelectorAll('.u-card.u-sel');
for(var i=0;i<cs.length;i++) cs[i].classList.remove('u-sel');
sel=[]; selMap={}; updateBar();
};

HotGrid.init = function(){ ensureUI(); };

function normGroups(groups){
if(!groups) return [];
if(Object.prototype.toString.call(groups)==='[object Array]'){
if(!groups.length) return [];
var f=groups[0];
if(f && typeof f==='object' && ('region'in f || 'items'in f)) return groups;
return [{region:'全部站点', items:groups}];
}
if(typeof groups==='object' && groups.items) return [{region:'全部站点', items:groups.items}];
return [];
}
HotGrid.regionView = function(tabsId, preId, groups, opts){
ensureUI();
opts=opts||{};
var tabs=document.getElementById(tabsId), pre=document.getElementById(preId);
if(!tabs||!pre) return;
var gl=normGroups(groups);
if(!gl.length){ HotGrid.renderEmpty(preId, opts.empty||'暂未配置数据'); return; }
var cur=0;
function paintTabs(){
var h='';
for(var i=0;i<gl.length;i++){
h+='<span class="rtab'+(i===cur?' on':'')+'" data-i="'+i+'">'+esc(gl[i].region||('站点'+(i+1)))+'</span>';
}
tabs.innerHTML=h;
}
function paintPre(){
var g=gl[cur]; if(!g) return;
var tip='';
if(g.season||g.tip){ tip='<p style="font-size:13px;color:var(--text-muted,#6e6e73);margin-bottom:12px">'+esc(g.season||'')+(g.tip?' · '+esc(g.tip):'')+'</p>'; }
var sub='uGrid_'+tabsId;
pre.innerHTML=tip+'<div id="'+sub+'"></div>';
var items=(g.items&&g.items.slice)?g.items.slice(0, (opts.limit>0?opts.limit:g.items.length)):[];
HotGrid.render(sub, items, {cols:opts.cols||'u-g10', empty:opts.empty||'该站点暂未配置数据'});
}
tabs.addEventListener('click', function(e){
var t=e.target;
if(!t||String(t.className).indexOf('rtab')<0) return;
var i=parseInt(t.getAttribute('data-i')||'-1',10);
if(i<0||i>=gl.length) return;
if(i===cur) return;
cur=i;
HotGrid.reset();
paintTabs(); paintPre();
});
paintTabs(); paintPre();
};

window.HotGrid=HotGrid;
})();