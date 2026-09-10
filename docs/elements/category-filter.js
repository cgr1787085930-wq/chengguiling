/*
  =============================================
  成桂零对接服务站
  版权 © 成桂零对接服务站 保留所有权利
  禁止照搬/爬取/用于 AI 训练。
  =============================================
*/
/* ============================================================
   类目筛选 · 交互逻辑 —— 供 category.html 使用
   依赖：elements/data-full-categories.js（window.CGL_FULL_CATEGORIES）
   提供：跨品类关键词搜索、面包屑路径展示、复制路径
   ============================================================ */
(function(){
  if(!window.CGL_FULL_CATEGORIES) return;

  var DATA = window.CGL_FULL_CATEGORIES;
  var KEYS = Object.keys(DATA);
  var curKey = KEYS[0] || '';
  /* 品类展示名映射：统一引用数据文件的单一来源，避免多处重复维护 */
  var groupMap = window.CGL_CATEGORY_LABELS || {};   // raw -> label
  var filters = {};   // dimension -> selected value (string)
  var keyword = '';
  var $ = function(id){ return document.getElementById(id); };

  /* ---------- 常量（可调） ---------- */
  var PAGE_SIZE = 60;     // 结果列表每页条数（全品类搜索量较大，分页展示）
  var CRUMB_MAX = 6;      // 面包屑最多展示段数
  var curPage = 1;        // 当前页码（1 起）
  function totalPages(total){ return Math.max(1, Math.ceil(total / PAGE_SIZE)); }

  /* ---------- 顶部品类 Tab ---------- */
  function renderCatTabs(){
    var el = $('catTabs');
    if(!el) return;   /* 品类Tab区已移除：无 #catTabs 时跳过，防御性守卫 */
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

  /* ---------- 维度选择器 ---------- */
  function renderDims(){
    var el = $('dims');
    if(!el) return;   /* 维度筛选卡片已移除：无 #dims 时跳过维度渲染，仅保留关键词搜索 */
    var dims = DATA[curKey].dims || [];
    var rows = DATA[curKey].rows;
    var h = '';
    /* 收集每个维度的可选值（跨分组不分层级，直接枚举） */
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
      // 空选项 = 全部
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

  /* ---------- 筛选结果 ---------- */
  /* 跨全部品类统一搜索：遍历所有品类，命中任一品类即计入结果 */
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

  /* 面包屑路径渲染：按 > 分段，超长截断显示尾部若干段 */
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
    if(curPage > total) curPage = total;   // 数据变化后页码越界自动回退
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
    /* 分页控件 */
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

  /* ---------- 初始化 ---------- */
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