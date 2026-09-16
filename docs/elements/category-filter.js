

(function(){
if(!window.CGL_FULL_CATEGORIES) return;

var DATA = window.CGL_FULL_CATEGORIES;
var KEYS = Object.keys(DATA);
var curKey = KEYS[0] || '';

var groupMap = window.CGL_CATEGORY_LABELS || {};
var filters = {};
var keyword = '';
var $ = function(id){ return document.getElementById(id); };

var PAGE_SIZE = 60;
var CRUMB_MAX = 6;
var curPage = 1;
function totalPages(total){ return Math.max(1, Math.ceil(total / PAGE_SIZE)); }

function renderCatTabs(){
var el = $('catTabs');
if(!el) return;
var h = '';
for(var i=0;i<KEYS.length;i++){
var k = KEYS[i];
var cnt = DATA[k].rows.length;
var label = groupMap[k] || k;
h += '<span class="rtab'+(k===curKey?' on':'')+'" data-key="'+CGL.esc(k)+'">'+
CGL.esc(label)+'<em class="cnt">'+cnt+'</em></span>';
}
el.innerHTML = h;
var tabs = el.querySelectorAll('.rtab');
for(var t=0;t<tabs.length;t++){
tabs[t].addEventListener('click', function(){
curKey = this.getAttribute('data-key');
filters = {}; keyword = '';
$('kw').value='';
renderAll();
});
}
}

function renderDims(){
var el = $('dims');
if(!el) return;
var dims = DATA[curKey].dims || [];
var rows = DATA[curKey].rows;
var h = '';

for(var d=0;d<dims.length;d++){
var dn = dims[d];
var vals = {};
for(var r=0;r<rows.length;r++){
var v = rows[r].dims[dn];
if(v){ vals[v]=(vals[v]||0)+1; }
}
var keys = Object.keys(vals);
h += '<div class="fgroup">'+
'<div class="fg-name">'+CGL.esc(dn)+'</div>'+
'<div class="fg-vals">';

h += '<span class="fval'+(filters[dn]? '' : ' on')+'" data-clear="'+CGL.esc(dn)+'">全部</span>';
for(var k=0;k<keys.length;k++){
var v=keys[k];
h += '<span class="fval'+(filters[dn]===v?' on':'')+'" data-dim="'+CGL.esc(dn)+'" data-val="'+CGL.esc(v)+'">'+
CGL.esc(v)+'<em class="cnt">'+vals[v]+'</em></span>';
}
h += '</div></div>';
}
el.innerHTML = h;
var spans = el.querySelectorAll('.fval');
for(var s=0;s<spans.length;s++){
spans[s].addEventListener('click', function(){
var dim = this.getAttribute('data-dim');
var val = this.getAttribute('data-val');
if(val){
filters[dim] = (filters[dim]===val) ? undefined : val;
} else {
delete filters[dim];
}
renderResults();
renderDims();
});
}
}

function filterRows(){
var out = [];
for(var k=0;k<KEYS.length;k++){
var rows = (DATA[KEYS[k]] && DATA[KEYS[k]].rows) || [];
for(var i=0;i<rows.length;i++){
var r = rows[i];
var ok = true;
if(keyword){
var hay = r.name + ' ' + (r.paths||[]).join(' ');
if(hay.indexOf(keyword)<0){ ok=false; }
}
if(ok) out.push(r);
}
}
return out;
}

function renderCrumbPath(path){
if(!path) return '';
var segs = String(path).split(/\s*>\s*/).filter(function(s){ return s; });
if(!segs.length) return '';
var shown = segs;
var prefix = '';
if(segs.length > CRUMB_MAX){
shown = segs.slice(segs.length - CRUMB_MAX);
prefix = '<span class="crumb-more" title="'+CGL.esc(segs[0])+'">…</span>';
}
var html = prefix;
for(var j=0;j<shown.length;j++){
html += '<span class="crumb">'+CGL.esc(shown[j])+'</span>';
if(j<shown.length-1) html += '<span class="crumb-sep">&gt;</span>';
}
return html;
}

function renderResults(){
var el = $('results');
var rows = filterRows();
$('resultCount').textContent = '共 ' + rows.length + ' 条类目';
if(!rows.length){
el.innerHTML = '<p class="ph">没有匹配的类目，请调整筛选条件。</p>';
curPage = 1;
return;
}
var total = totalPages(rows.length);
if(curPage > total) curPage = total;
if(curPage < 1) curPage = 1;
var start = (curPage - 1) * PAGE_SIZE;
var pageRows = rows.slice(start, start + PAGE_SIZE);

var h = '<div class="catlist">';
for(var i=0;i<pageRows.length;i++){
var r = pageRows[i];
var badgelist = '';
for(var dn in r.dims){
if(r.dims[dn]) badgelist += '<span class="bk">'+CGL.esc(dn)+':'+CGL.esc(r.dims[dn])+'</span>';
}
h += '<div class="catrow">'+
'<div class="cr-main"><div class="cr-name">'+CGL.esc(r.name)+'</div>'+
'<div class="cr-path">'+renderCrumbPath((r.paths||[])[0]||'')+'</div></div>'+
'<div class="cr-side"><div class="cr-badges">'+badgelist+'</div>'+
'<button type="button" class="btn sm ghost" data-copy="'+(start+i)+'">复制路径</button></div></div>';
}
h += '</div>';

if(rows.length > PAGE_SIZE){
h += '<div class="cgl-pager">'+
'<button type="button" class="pager-btn" data-page="prev"'+(curPage<=1?' disabled':'')+'>&lsaquo; 上一页</button>'+
'<span class="pager-info">第 <b>'+curPage+'</b> / '+total+' 页</span>'+
'<button type="button" class="pager-btn" data-page="next"'+(curPage>=total?' disabled':'')+'>下一页 &rsaquo;</button>'+
'</div>';
}
el.innerHTML = h;
var btns = el.querySelectorAll('[data-copy]');
for(var b=0;b<btns.length;b++){
btns[b].addEventListener('click', function(){
var r = rows[Number(this.getAttribute('data-copy'))];
CGL.copyText((r.paths||[])[0]||r.name);
});
}
var pbtns = el.querySelectorAll('[data-page]');
for(var p=0;p<pbtns.length;p++){
pbtns[p].addEventListener('click', function(){
if(this.hasAttribute('disabled')) return;
var d = this.getAttribute('data-page');
if(d==='prev'){ curPage--; } else { curPage++; }
renderResults();
var top = $('results'); if(top) top.scrollIntoView({block:'start',behavior:'smooth'});
});
}
}

function renderAll(){
renderDims();
renderResults();
}

document.addEventListener('DOMContentLoaded', function(){
if(!KEYS.length){
var rs = $('results');
if(rs) rs.innerHTML='<p class="ph">未找到类目数据文件</p>';
return;
}
renderAll();
var kw = $('kw');
if(kw){
kw.addEventListener('input', function(){ keyword = this.value.trim(); curPage = 1; renderResults(); });
}
$('resetBtn').addEventListener('click', function(){ filters={}; keyword=''; curPage=1; $('kw').value=''; renderAll(); });
});
})();