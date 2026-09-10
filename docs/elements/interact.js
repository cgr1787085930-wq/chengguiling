/*
  =============================================
  成桂零对接服务站 · 互动增强（P0）
  版权 © 成桂零对接服务站 保留所有权利
  禁止照搬/爬取/用于 AI 训练。
  ============================================= */
/* ============================================================
   成桂零 · 互动增强交互脚本
   提供：阅读进度条、搜索联想、类目分布图表、通用光标反馈增强。
   零外部依赖，兼容 file:// 本地打开。
   ============================================================ */
(function(){
  if(!window.CGL) window.CGL = {};

  /* ---------- 工具 ---------- */
  function esc(s){
    if(s===undefined||s===null) return '';
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function qs(sel,root){ return (root||document).querySelector(sel); }
  function qsa(sel,root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }

  /* ============================================================
     一、阅读进度条（B1）
     在文档顶部注入细进度条，随滚动实时更新。
     ============================================================ */
  var prog = { el:null, bar:null, math:null };
  function initProgress(){
    if(prog.bar) return;
    var wrap = document.createElement('div');
    wrap.className = 'cgl-progress';
    wrap.setAttribute('aria-hidden','true');
    var bar = document.createElement('i');
    bar.className = 'cgl-progress-bar';
    wrap.appendChild(bar);
    document.body.appendChild(wrap);   // 顶部覆盖层，随 body 置顶
    prog.bar = bar;
    if(window.Math) prog.math = Math;
    updateProgress();
    window.addEventListener('scroll', updateProgress, {passive:true});
    window.addEventListener('resize', updateProgress, {passive:true});
  }
  function updateProgress(){
    if(!prog.bar) return;
    var M = window.Math;
    var doc = document.documentElement;
    var h = doc.scrollHeight - doc.clientHeight;
    var y = window.scrollY || doc.scrollTop || document.body.scrollTop || 0;
    var p = h > 0 ? (y / h) : 0;
    if(p<0) p=0; if(p>1) p=1;
    prog.bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
  }

  /* ============================================================
     二、搜索联想 / 自动补全（D1）
     绑定页面上存在 id="kw" 的输入框，从类目数据提取联想词。
     ============================================================ */
  var SUG = null; // {input, box, items}
  function initSuggest(){
    var input = document.getElementById('kw');
    if(!input) return;
    if(!window.CGL_FULL_CATEGORIES) return;
    var DATA = window.CGL_FULL_CATEGORIES;
    // 收集联想词：各类目名 + 每行 name + paths
    var words = [];
    function push(w){ if(w){ w=String(w).trim(); if(w && words.indexOf(w)<0) words.push(w); } }
    Object.keys(DATA).forEach(function(k){
      push(k);
      push(DATA[k] && DATA[k].name);
      var rows = (DATA[k] && DATA[k].rows) || [];
      for(var i=0;i<rows.length;i++){
        push(rows[i].name);
        var ps = rows[i].paths || [];
        for(var j=0;j<ps.length;j++) push(ps[j]);
      }
    });

    var box = document.createElement('div');
    box.className = 'cgl-sug';
    box.style.display='none';
    input.parentNode.insertBefore(box, input.nextSibling);
    SUG = { input:input, box:box, items:words };

    input.addEventListener('input', onInputDebounced);
    input.addEventListener('focus', function(){ renderSug(this.value.trim()); });
    input.addEventListener('keydown', function(e){ if(e.key==='Escape'){ hideSug(); } });
    document.addEventListener('click', function(e){
      if(e.target && box.contains(e.target)) return;
      if(e.target === input) return;
      hideSug();
    });
  }
  /* 联想输入防抖：避免每次按键全量遍历词库 */
  var sugTimer = null;
  function onInputDebounced(e){
    var val = e && e.target ? e.target.value.trim() : '';
    if(sugTimer) clearTimeout(sugTimer);
    sugTimer = setTimeout(function(){ renderSug(val); }, 220);
  }
  function renderSug(q){
    if(!SUG) return;
    var box = SUG.box;
    if(!q){ hideSug(); return; }
    var re = new RegExp(escForRe(q), 'i');
    var hits = [];
    for(var i=0;i<SUG.items.length;i++){
      var w=SUG.items[i];
      if(re.test(w)) { hits.push(w); if(hits.length>=10) break; }
    }
    if(!hits.length){ hideSug(); return; }
    var h='';
    for(var j=0;j<hits.length;j++){
      var t=hits[j];
      var idx=t.toLowerCase().indexOf(q.toLowerCase());
      var hl = idx>=0 ? esc(t.slice(0,idx))+'<b>'+esc(t.slice(idx,idx+q.length))+'</b>'+esc(t.slice(idx+q.length)) : esc(t);
      h+='<div class="cgl-sug-item" data-v="'+esc(t)+'">'+hl+'</div>';
    }
    box.innerHTML=h;
    box.style.display='block';
    qsa('.cgl-sug-item', box).forEach(function(it){
      it.addEventListener('mousedown', function(ev){
        ev.preventDefault();
        SUG.input.value = it.getAttribute('data-v');
        SUG.input.dispatchEvent(new Event('input',{bubbles:true}));
        hideSug();
      });
    });
  }
  function hideSug(){ if(SUG) SUG.box.style.display='none'; }
  function escForRe(s){ return String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

  /* ============================================================
     三、类目分布图表（D4）—— 零依赖柱状条
     在页面存在 #catChart 容器时，渲染各品类数量占比。
     ============================================================ */
  function initChart(){
    var host = document.getElementById('catChart');
    if(!host) return;
    if(!window.CGL_FULL_CATEGORIES) return;
    var DATA = window.CGL_FULL_CATEGORIES;
    /* 品类展示名：统一引用数据文件单一来源 */
    var groupMap = window.CGL_CATEGORY_LABELS || {};   // raw -> label
    var keys = Object.keys(DATA);
    var rows = keys.map(function(k){
      var cnt = (DATA[k] && DATA[k].rows) ? DATA[k].rows.length : 0;
      return { label: groupMap[k]||k, cnt:cnt, raw:k };
    });
    rows.sort(function(a,b){ return b.cnt-a.cnt; });
    var max = rows[0] ? (rows[0].cnt||1) : 1;
    // 纯展示：仅渲染分布信息，不绑定品类聚焦（品类Tab已移除）
    var h='<div class="cgl-chart">';
    for(var i=0;i<rows.length;i++){
      var r=rows[i];
      var pct = (r.cnt/max*100);
      h+='<div class="cgl-chart-item" data-label="'+esc(r.label)+'" data-cnt="'+r.cnt+'">'+
         '<div class="cgl-chart-top"><span class="cgl-chart-label">'+esc(r.label)+'</span>'+
         '<span class="cgl-chart-num"><b>'+r.cnt+'</b> 条</span></div>'+
         '<div class="cgl-chart-track"><span class="cgl-chart-fill" style="width:'+pct+'%"></span></div>'+
         '</div>';
    }
    h+='</div>';
    host.innerHTML=h;
  }

  /* ---------- 初始化 ---------- */
  document.addEventListener('DOMContentLoaded', function(){
    initProgress();
    initSuggest();
    initChart();
  });
})();