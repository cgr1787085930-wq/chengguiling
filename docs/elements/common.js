/*
  =============================================
  成桂零对接服务站
  版权 © 成桂零对接服务站 保留所有权利
  禁止照搬/爬取/用于 AI 训练。
  =============================================
*/
/* ============================================================
   成桂零 · 对接服务站 — 公共脚本
   提供：日期、复制、弹窗、提示、标签云、通知、揭示动画、返回顶部
   ============================================================ */
(function(){
  window.CGL = window.CGL || {};

  /* ---------- 工具 ---------- */
  function esc(s){
    if(s===undefined||s===null) return '';
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  // 复制文本：优先 navigator.clipboard，回退 execCommand（兼容 file:// 本地打开）
  function copyText(txt, cb){
    txt = String(txt==null?'':txt);
    function done(ok){ if(cb) cb(ok); if(ok){ toast('已复制'); } else { toast('复制失败，请手动复制'); } }
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(txt).then(function(){done(true);}, function(){ legacyCopy(txt, done); });
    } else {
      legacyCopy(txt, done);
    }
  }
  function legacyCopy(txt, done){
    var ta = document.createElement('textarea');
    ta.value = txt;
    ta.style.position='fixed'; ta.style.left='-9999px'; ta.style.top='0';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    var ok=false;
    try{ ok = document.execCommand('copy'); }catch(e){ ok=false; }
    document.body.removeChild(ta);
    done(ok);
  }
  CGL.copyText = copyText;
  CGL.esc = esc;

  /* ---------- 提示 toast ---------- */
  var toastTimer=null;
  function toast(msg){
    var t=document.querySelector('.toast');
    if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
    t.textContent=msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(function(){ t.classList.remove('show'); }, 1900);
  }
  CGL.toast = toast;

  /* ---------- 弹窗 ---------- */
  function openModal(html){
    var m=document.getElementById('cglModal');
    if(!m){
      m=document.createElement('div');
      m.id='cglModal'; m.className='modal';
      m.innerHTML='<div class="mbox"><button type="button" class="mclose" aria-label="关闭">×</button><div class="mbody"></div></div>';
      document.body.appendChild(m);
      m.addEventListener('click', function(e){ if(e.target===m || e.target.classList.contains('mclose')) closeModal(); });
    }
    m.querySelector('.mbody').innerHTML=html;
    m.classList.add('open');
    document.body.style.overflow='hidden';
    return m;
  }
  function closeModal(){
    var m=document.getElementById('cglModal');
    if(m){ m.classList.remove('open'); document.body.style.overflow=''; }
  }
  CGL.openModal=openModal; CGL.closeModal=closeModal;

  /* ---------- 图片弹窗 ---------- */
  function viewImage(p){
    // p: {img,title,no,spu,cat,style,tag,extra:[[k,v],...],acts:[[label,js]...]}
    var h='';
    if(p.img) h+='<img class="mimg" src="'+esc(p.img)+'" alt="'+esc(p.title||'款式参考')+'">';
    h+='<div class="mrows">';
    if(p.title) h+='<div class="mr"><b>款式名</b><span>'+esc(p.title)+'</span></div>';
    if(p.cat)   h+='<div class="mr"><b>类目</b><span>'+esc(p.cat)+'</span></div>';
    if(p.tag)   h+='<div class="mr"><b>标签</b><span>'+esc(p.tag)+'</span></div>';
    var rows=p.extra||[];
    for(var i=0;i<rows.length;i++){
      h+='<div class="mr"><b>'+esc(rows[i][0])+'</b><span>'+esc(rows[i][1])+'</span></div>';
    }
    h+='</div>';
    var acts=p.acts||[];
    if(acts.length>0){
      h+='<div class="macts">';
      for(var j=0;j<acts.length;j++){
        h+='<button type="button" class="btn sm '+esc(acts[j].cls||'')+'" data-act="'+j+'">'+esc(acts[j].label)+'</button>';
      }
      h+='</div>';
    }
    openModal(h);
    var box=document.getElementById('cglModal');
    var btns=box.querySelectorAll('[data-act]');
    for(var k=0;k<btns.length;k++){
      (function(idx){
        btns[idx].addEventListener('click', function(){ if(acts[idx].fn) acts[idx].fn(); });
      })(k);
    }
  }
  CGL.viewImage=viewImage;

  /* ---------- 公共 Lightbox（全屏放大，全站复用） ---------- */
  function lightbox(opts){
    /* opts: {selector, image} —— selector: 自动绑定容器内所有 img；
       image: 直接指定一张图 src，方便手动打开。返回 {open,close} */
    var ov, im, x;
    function ensure(){
      if(ov) return;
      ov=document.createElement('div');
      ov.className='cgl-lm';
      im=document.createElement('img');
      x=document.createElement('button');
      x.className='cgl-lm-x';
      x.type='button';
      x.setAttribute('aria-label','关闭大图');
      x.textContent='✕';
      ov.appendChild(im); ov.appendChild(x);
      document.body.appendChild(ov);
      ov.addEventListener('click',function(e){ if(e.target===ov||e.target===x){ api.close(); } });
      document.addEventListener('keydown',function(e){ if(e.key==='Escape') api.close(); });
    }
    var api={
      open:function(src,alt){
        ensure();
        im.src=src; im.alt=alt||'';
        ov.classList.add('open');
        document.body.style.overflow='hidden';
      },
      close:function(){
        if(!ov) return;
        ov.classList.remove('open');
        document.body.style.overflow='';
      }
    };
    if(opts && opts.selector){
      var imgs=document.querySelectorAll(opts.selector);
      for(var i=0;i<imgs.length;i++){
        (function(img){
          img.addEventListener('click',function(e){
            e.preventDefault();
            api.open(img.getAttribute('src'), img.getAttribute('alt'));
          });
        })(imgs[i]);
      }
    }
    return api;
  }
  CGL.lightbox=lightbox;

  /* ---------- 标签云渲染 ---------- */
  function renderTags(el, list){
    // list: [{t:词, hot:bool(0-100)}]
    var h='';
    for(var i=0;i<list.length;i++){
      var it=list[i];
      var hot=Number(it.hot)>=70;
      h+='<span class="tag'+((hot)?' hot':'')+'">'+esc(it.t)+(it.hot?'<span class="lv">🔥'+esc(hot?Math.round(Number(it.hot)):'')+'</span>':'')+'</span>';
    }
    el.innerHTML=h || '<span class="ph">暂未配置热搜词，请编辑数据文件</span>';
  }
  CGL.renderTags=renderTags;

  /* ---------- 通知列表渲染 ---------- */
  function renderNotices(el, list){
    var h='<ul>';
    for(var i=0;i<list.length;i++){
      var n=list[i];
      var cls = n.tag==='重要'?'warn':(n.tag==='更新'||n.tag==='已上线'?'ok':'');
      h+='<li><span class="nd">'+esc(n.date)+'</span>'+
          '<div class="nt">'+esc(n.title)+'</div>'+
          (n.content?'<div class="nc">'+esc(n.content)+'</div>':'')+
          (n.tag?'<span class="ntag '+cls+'">'+esc(n.tag)+'</span>':'')+'</li>';
    }
    h+='</ul>';
    el.innerHTML= h.indexOf('<li>')<0 ? '<p class="ph">暂无通知，请编辑数据文件</p>' : h;
  }
  CGL.renderNotices=renderNotices;

  /* ---------- 日期 ---------- */
  function pad(n){ return n<10?'0'+n:''+n; }
  function setDate(){
    document.querySelectorAll('.js-date').forEach(function(el){
      var d=new Date();
      var days=['日','一','二','三','四','五','六'];
      el.textContent = d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())+' 星期'+days[d.getDay()];
    });
  }

  /* ---------- 揭示动画 + 返回顶部 ---------- */
  function initReveal(){
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in');}); return; }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    },{threshold:.08});
    els.forEach(function(e){ io.observe(e); });
  }

  function initBackTop(){
    var b=document.createElement('button');
    b.className='backtop'; b.textContent='↑ 返回顶部';
    b.style.position='fixed'; b.style.right='22px'; b.style.bottom='26px'; b.style.zIndex='60';
    b.style.opacity='0'; b.style.pointerEvents='none'; b.style.transition='opacity .25s';
    b.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
    document.body.appendChild(b);
    window.addEventListener('scroll', function(){
      var y=window.scrollY||document.documentElement.scrollTop;
      var show=y>500;
      b.style.opacity=show?'1':'0';
      b.style.pointerEvents=show?'auto':'none';
    });
  }

  /* ---------- 初始化 ---------- */
  document.addEventListener('DOMContentLoaded', function(){
    setDate();
    initReveal();
    initBackTop();
  });
})();