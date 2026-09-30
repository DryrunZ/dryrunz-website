/* ============================================================= GOOGLE ANALYTICS (gtag.js) */
(function(){
  var ID='G-S0GKBN0V3P';
  var s=document.createElement('script'); s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id='+ID;
  (document.head||document.documentElement).appendChild(s);
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments);};
  gtag('js', new Date());
  gtag('config', ID);
})();

/* ============================================================= CANONICAL URL (apex, clean path) */
(function(){
  var origin='https://dryrunz.ai';
  var path=location.pathname.replace(/index\.html$/,'').replace(/\.html$/,'');
  if(path.length>1) path=path.replace(/\/+$/,'');
  if(path==='') path='/';
  var href=origin+path;
  var link=document.querySelector('link[rel="canonical"]');
  if(!link){ link=document.createElement('link'); link.setAttribute('rel','canonical'); (document.head||document.documentElement).appendChild(link); }
  link.setAttribute('href', href);
})();

/* ============================================================= DIAMOND SVG */
/* Authentic product gem polygon from the platform UI: 12,2 22,9 12,22 2,9 */
function diaSVG(size, cls){
  cls = cls || '';
  return '<svg class="dia '+cls+'" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" aria-hidden="true">'
       + '<polygon class="outline" points="12,2 22,9 12,22 2,9"/></svg>';
}
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================= PRODUCT VIGNETTES (built in HTML/CSS) */
function voiceSim(){
  return ''
  + '<div class="screen voice viz" data-viz="voice">'
  +   '<div class="scr-head"><span class="scr-title">Live simulation · voice</span><span class="scr-time" data-timer>0:00</span></div>'
  +   '<div class="scr-body">'
  +     '<div class="caller"><span class="av" style="background:linear-gradient(135deg,#3f6ad8,#0F3D91)">C</span>'
  +       '<span><span class="nm">Customer · billing dispute</span><br><span class="rl">Actor · <span class="chip conf" style="padding:1px 5px">confrontational</span></span></span></div>'
  +     '<div class="caption"><span class="cap-txt" data-typewriter>Right. Because waiting patiently is just, uh, part of the charm here.</span></div>'
  +     '<div class="vwave-wrap" aria-hidden="true"><canvas class="vwave"></canvas></div>'
  +     '<div class="voice-ctrls">'
  +       '<span class="vc end" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="3"/></svg></span>'
  +       '<span class="vc mic" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4" stroke="currentColor" stroke-width="2" fill="none"/></svg></span>'
  +       '<span class="vc" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5h14M5 10h14M5 15h9"/></svg></span>'
  +     '</div>'
  +   '</div>'
  + '</div>';
}
function winCard(){
  return ''
  + '<div class="screen winc viz" data-viz="win">'
  +   '<div class="scr-body">'
  +     '<div class="wc-top"><span class="wc-status">You won</span><span class="wc-badge">retry 2 · earned</span></div>'
  +     '<div class="wc-dlabel">Win diamonds</div>'
  +     '<div class="wc-drow seq-dia">'+diaSVG(30,'')+diaSVG(30,'')+diaSVG(30,'')+'</div>'
  +     '<div class="wc-metric"><span class="seq-dia" data-solo>'+diaSVG(22,'')+'</span><span class="mlabel">Call time</span><span class="mval">1:12 <span class="sm">/ 1:30</span></span>'
  +       '<span class="meter"><i class="fill-blue" style="--w:80%"></i></span></div>'
  +     '<div class="wc-metric"><span class="seq-dia" data-solo>'+diaSVG(22,'')+'</span><span class="mlabel">Conversation skills</span><span class="mval"><span data-count="7.8" data-dp="1">0.0</span> <span class="sm">/ 10</span></span>'
  +       '<span class="meter"><i class="fill-mint" style="--w:78%"></i></span></div>'
  +   '</div>'
  + '</div>';
}
var GB='linear-gradient(135deg,#3f6ad8,#0F3D91)', GG='linear-gradient(135deg,#f0b23a,#d98a10)', GT='linear-gradient(135deg,#3aa38c,#1a7d68)';
function board(){
  function col(rank,initials,name,dia,h,color,crown){
    var gems=''; for(var i=0;i<Math.min(dia,3);i++){gems+=diaSVG(11,'on');}
    return '<div class="pod-col">'
      + '<div class="pod-av" style="background:'+color+'">'+(crown?'<span class="crown">👑</span>':'')+initials+'</div>'
      + '<div class="pod-nm">'+name+'</div>'
      + '<div class="pod-di">'+gems+dia+'</div>'
      + '<div class="pod-bar" style="--h:'+h+'px"></div>'
      + '<div class="pod-rank">'+rank+'</div></div>';
  }
  function item(rank,initials,name,dia,score,color,me){
    var g=''; for(var i=0;i<Math.min(dia,3);i++){g+=diaSVG(10,'on');}
    return '<div class="lb-item'+(me?' me':'')+'"><span class="r">'+rank+'</span>'
      + '<span class="a" style="background:'+color+'">'+initials+'</span>'
      + '<span class="n">'+name+'</span>'
      + '<span class="d">'+g+dia+'</span>'
      + '<span class="s">'+score+'</span></div>';
  }
  return ''
  + '<div class="screen podium viz" data-viz="board">'
  +   '<div class="scr-head"><span class="scr-title">Team leaderboard</span><span class="scr-time">Jul 1 – 31</span></div>'
  +   '<div class="scr-body">'
  +     '<div class="pod-cols">'
  +       col('2','MR','Maya R.',7,'44',GB,false)
  +       col('1','DK','Dana K.',9,'70',GG,true)
  +       col('3','OS','Omar S.',6,'32',GT,false)
  +     '</div>'
  +     '<div class="lb-list">'
  +       item('4','LM','Lena M.',5,'8.0',GB,false)
  +       item('5','YT','You',5,'7.6',GB,true)
  +       item('6','RA','Rafi A.',4,'7.2',GT,false)
  +     '</div>'
  +   '</div>'
  + '</div>';
}
function scenarioBuild(){
  return ''
  + '<div class="screen scn viz" data-viz="scn">'
  +   '<div class="scr-head"><span class="scr-title">Scenario · prompt maker</span></div>'
  +   '<div class="scr-body">'
  +     '<span class="aichip">'+diaSVG(11,'on')+' AI assist</span>'
  +     '<div class="promptbox">A member wants to cancel her gym membership. She hasn&rsquo;t been in two months and feels ignored. Your task: keep her — with one honest offer, no pressure.</div>'
  +     '<button class="genbtn" type="button" tabindex="-1" aria-hidden="true">Generate simulation</button>'
  +   '</div>'
  + '</div>';
}
function actorPick(){
  function row(initials,name,desc,cls,label,sel){
    return '<div class="actor-item'+(sel?' sel':'')+'">'
      + '<span class="av" style="width:30px;height:30px;background:'+GB+'">'+initials+'</span>'
      + '<span><span class="an">'+name+'</span><br><span class="desc">'+desc+'</span></span>'
      + '<span class="chip '+cls+'" style="margin-inline-start:auto">'+label+'</span></div>';
  }
  return ''
  + '<div class="screen viz" data-viz="actor">'
  +   '<div class="scr-head"><span class="scr-title">Pick an actor</span></div>'
  +   '<div class="scr-body">'
  +     '<div class="search"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>Search actors…</div>'
  +     '<div class="actorlist">'
  +       row('AN','Anya','Bitter competitor','conf','confrontational',true)
  +       row('MI','Miriam','Warm community elder','coop','cooperative',false)
  +       row('DA','Dana','Outspoken confidante','coop','cooperative',false)
  +     '</div>'
  +   '</div>'
  + '</div>';
}
function reportMini(){
  var c='M2,40 L24,37 L46,33 L68,26 L90,18 L112,9 L118,6';
  var a=c+' L118,44 L2,44 Z';
  return ''
  + '<div class="screen viz" data-viz="reportmini">'
  +   '<div class="scr-head"><span class="scr-title">Trend · last 30 days</span></div>'
  +   '<div class="scr-body">'
  +     '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">'
  +       '<div><div style="font-family:var(--font-display);font-weight:700;font-size:1.7rem;color:#fff;line-height:1"><span data-count="67" data-dp="0">0</span>%</div><div style="font-size:.72rem;color:var(--scr-mut);margin-top:3px">win rate</div></div>'
  +       '<div><div style="font-family:var(--font-display);font-weight:700;font-size:1.7rem;color:#fff;line-height:1"><span data-count="43" data-dp="0">0</span>%</div><div style="font-size:.72rem;color:var(--scr-mut);margin-top:3px">improved score</div></div>'
  +     '</div>'
  +     '<svg viewBox="0 0 120 44" preserveAspectRatio="none" style="width:100%;height:60px" aria-hidden="true"><path class="area" d="'+a+'" fill="#36E0BE"/><path class="line" pathLength="1" d="'+c+'" stroke="#36E0BE"/></svg>'
  +   '</div>'
  + '</div>';
}
function growthBand(){
  function g(label,sub,color){
    // hockey-stick: long flat then a sharp bend upward
    var c='M2,80 L26,78 L50,74 L74,64 L96,45 L112,22 L118,9';
    var a=c+' L118,88 L2,88 Z';
    return '<div class="gcard"><div class="glabel">'+label+' <span class="gup">▲</span></div><div class="gsub">'+sub+'</div>'
      + '<svg viewBox="0 0 120 88" preserveAspectRatio="none" aria-hidden="true"><path class="garea" d="'+a+'" fill="'+color+'"/><path class="gline" pathLength="1" d="'+c+'" stroke="'+color+'"/></svg>'
      + '<div class="gxaxis">the more they practice →</div></div>';
  }
  return '<div class="growth-grid viz" data-viz="growth">'
    + g('Skill','communication quality','#2278F8')
    + g('Wins','retries that land','#F2A31B')
    + g('Speed','minutes well spent','#1aa588')
    + g('Nerve','ready before the real call','#8A6FE8')
    + '</div>';
}
function insight(){
  return ''
  + '<div class="screen insight viz" data-viz="insight">'
  +   '<div class="scr-head"><span class="scr-title">Communication insights</span><span class="scr-time"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>'
  +   '<div class="scr-body">'
  +     '<div class="ins-row"><div class="ins-head"><span class="ins-name">Empathy</span><span class="ins-score"><span data-count="6" data-dp="0">0</span>/10</span></div>'
  +       '<span class="meter" style="height:6px"><i class="fill-mint" style="--w:60%"></i></span></div>'
  +     '<div class="ins-tip">You led with the fix before the apology. <b>Good instinct.</b> Next time, name the refund amount out loud so the caller hears it.</div>'
  +     '<span class="try-pill"><span class="lbl">Try saying</span>&ldquo;I&rsquo;m putting that refund through right now.&rdquo;</span>'
  +   '</div>'
  + '</div>';
}
function reportViz(){
  // line paths use pathLength="1" so a single dasharray/offset animates the draw
  function chart(color,d,area){
    return '<svg viewBox="0 0 120 44" preserveAspectRatio="none" aria-hidden="true">'
      + '<path class="area" d="'+area+'" fill="'+color+'"/>'
      + '<path class="line" pathLength="1" d="'+d+'" stroke="'+color+'"/></svg>';
  }
  var up1='M2,34 L22,30 L42,31 L62,22 L82,18 L102,12 L118,8';
  var up2='M2,36 L22,33 L42,28 L62,26 L82,19 L102,14 L118,10';
  var dn1='M2,8 L22,11 L42,15 L62,20 L82,27 L102,33 L118,38';
  var dn2='M2,10 L22,12 L42,18 L62,22 L82,28 L102,34 L118,39';
  function A(d){ return d+' L118,44 L2,44 Z'; }
  return ''
  + '<div class="report viz" data-viz="report">'
  +   '<div class="report-head"><h3>Improvement across attempts</h3><span class="tag">Enterprise trend · last 30 days</span></div>'
  +   '<div class="stat-row">'
  +     '<div class="stat"><div class="num"><span data-count="43" data-dp="0">0</span>%</div><div class="cap">improved their score</div></div>'
  +     '<div class="stat"><div class="num"><span data-count="36" data-dp="0">0</span>%</div><div class="cap">turned a loss into a win</div></div>'
  +     '<div class="stat"><div class="num"><span data-count="36" data-dp="0">0</span>%</div><div class="cap">improved communication</div></div>'
  +     '<div class="stat"><div class="num"><span data-count="33" data-dp="0">0</span>%</div><div class="cap">ran shorter calls</div></div>'
  +   '</div>'
  +   '<div class="charts charts-2x2">'
  +     '<div class="chartcard"><div class="ct"><span class="lb">Communication skill</span><span class="vv"><span data-count="5.5" data-dp="1">0.0</span><span class="trend up">▲</span></span></div>'+chart('#2278F8',up1,A(up1))+'</div>'
  +     '<div class="chartcard"><div class="ct"><span class="lb">Win rate</span><span class="vv"><span data-count="67" data-dp="0">0</span>%<span class="trend up">▲</span></span></div>'+chart('#1aa588',up2,A(up2))+'</div>'
  +     '<div class="chartcard"><div class="ct"><span class="lb">Filler words / min</span><span class="vv"><span data-count="1.8" data-dp="1">0.0</span><span class="trend down">▼</span></span></div>'+chart('#8A6FE8',dn1,A(dn1))+'</div>'
  +     '<div class="chartcard"><div class="ct"><span class="lb">Avg call duration</span><span class="vv">4:50<span class="trend down">▼</span></span></div>'+chart('#2B9FD8',dn2,A(dn2))+'</div>'
  +   '</div>'
  + '</div>';
}
function repAssign(){
  function simRow(title, tag, i){
    return '<div class="ra-sim" style="--i:'+i+'">'+diaSVG(15,'')
      + '<span class="ra-t">'+title+'</span>'
      + '<span class="ra-tag">'+tag+'</span>'
      + '<span class="ra-go">Start</span></div>';
  }
  return ''
  + '<div class="screen ra viz" data-viz="rep">'
  +   '<div class="scr-head"><span class="av" style="width:30px;height:30px;font-size:.72rem;background:linear-gradient(135deg,#3f6ad8,#0F3D91)">DC</span>'
  +     '<span><span class="mk-name" style="font-size:.9rem">David Cohen</span><br><span class="mk-role">Sales rep · 7 simulations</span></span>'
  +     '<span class="mk-tag" style="margin-inline-start:auto">Report #17</span></div>'
  +   '<div class="scr-body">'
  +     '<div class="ra-assign"><span class="ra-boom">✦ 3 sims assigned</span><span class="ra-until">until next report</span></div>'
  +     simRow('Handle the time objection','Objection handling',0)
  +     simRow('Start with verification, not assumption','Discovery',1)
  +     simRow('Save the account at risk','Churn',2)
  +   '</div>'
  + '</div>';
}
var BUILDERS={voice:voiceSim, win:winCard, board:board, insight:insight, report:reportViz,
              scn:scenarioBuild, actor:actorPick, reportmini:reportMini, growth:growthBand, rep:repAssign};

/* fill all mockup slots */
document.querySelectorAll('[data-mock]').forEach(function(el){
  var kind=el.getAttribute('data-mock');
  if(BUILDERS[kind]) el.innerHTML=BUILDERS[kind]();
});

/* inline diamond markers */
document.querySelectorAll('[data-dia="1"]').forEach(function(el){ el.innerHTML=diaSVG(15,'on'); });
document.querySelectorAll('.win-list .wl-dia').forEach(function(el){ el.innerHTML=diaSVG(20,''); });
document.querySelectorAll('[data-static-dia="1"] .wl-dia .dia').forEach(function(el){ el.classList.add('on'); });
document.querySelectorAll('[data-glyph="1"]').forEach(function(el){ el.innerHTML=diaSVG(96,'on'); });
document.querySelectorAll('#journeySteps .jnode').forEach(function(el){ el.innerHTML=diaSVG(20,''); });
document.querySelectorAll('.hero-orbit .spark').forEach(function(el){ el.innerHTML=diaSVG(parseInt(el.getAttribute('data-spark'),10)||20,''); });

/* ============================================================= ANIMATION ENGINE */
function runCount(el){
  var to=parseFloat(el.getAttribute('data-count')), dp=parseInt(el.getAttribute('data-dp')||'0',10);
  if(reduceMotion || isNaN(to)){ el.textContent=to.toFixed(dp); return; }
  var dur=1200, t0=performance.now();
  function fr(now){ var p=Math.min(1,(now-t0)/dur); p=1-Math.pow(1-p,3); el.textContent=(to*p).toFixed(dp); if(p<1) requestAnimationFrame(fr); }
  requestAnimationFrame(fr);
}
function activate(el){
  if(el.classList.contains('go')) return;
  el.classList.add('go');
  el.querySelectorAll('[data-count]').forEach(runCount);
  // sequential diamonds (rows) then solo metric diamonds
  var seqRows=el.querySelectorAll('.seq-dia:not([data-solo]) .dia');
  seqRows.forEach(function(d,i){ if(reduceMotion){d.classList.add('on');} else setTimeout(function(){d.classList.add('on');},260+i*260); });
  var solo=el.querySelectorAll('.seq-dia[data-solo] .dia');
  solo.forEach(function(d,i){ if(reduceMotion){d.classList.add('on');} else setTimeout(function(){d.classList.add('on');},900+i*300); });
}
var vizObs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ activate(e.target); startLive(e.target); vizObs.unobserve(e.target);} });
},{threshold:0.32});
function armViz(scope){
  (scope||document).querySelectorAll('.viz:not(.go)').forEach(function(el){
    if(el.hasAttribute('data-static')){ activate(el); startLive(el); }
    else vizObs.observe(el);
  });
}

/* live loops (voice caption + timer) — only while a voice screen is on-page */
function startLive(el){
  var tw=el.querySelector('[data-typewriter]');
  if(tw && !tw.dataset.live){ tw.dataset.live='1'; typewriter(tw); }
  var tm=el.querySelector('[data-timer]');
  if(tm && !tm.dataset.live){ tm.dataset.live='1'; runTimer(tm); }
}
function typewriter(el){
  var lines=[
    'Right. Because waiting patiently is just, uh, part of the charm here.',
    'Look, I was double-charged. I just want it fixed today.',
    'Okay… that actually makes sense. What do you need from me?'
  ];
  if(reduceMotion){ el.textContent=lines[0]; return; }
  var li=0,ci=0,dir=1;
  (function tick(){
    var s=lines[li]; el.textContent=s.slice(0,ci);
    if(dir>0){ ci++; if(ci>s.length){ dir=-1; return setTimeout(tick,1600);} }
    else { ci--; if(ci<0){ ci=0; dir=1; li=(li+1)%lines.length; return setTimeout(tick,260);} }
    setTimeout(tick, dir>0?42:16);
  })();
}
function runTimer(el){
  if(reduceMotion){ el.textContent='0:29'; return; }
  var t=0;
  setInterval(function(){ t=(t+1)%96; var m=Math.floor(t/60), s=t%60; el.textContent=m+':'+String(s).padStart(2,'0'); },1000);
}

/* ============================================================= ACTIVE NAV (multi-page) */
function setActiveNav(){
  var path=location.pathname.replace(/index\.html$/,'').replace(/\.html$/,'');
  if(path.length>1) path=path.replace(/\/+$/,'');
  if(path==='') path='/';
  document.querySelectorAll('nav.links a').forEach(function(a){
    var href=(a.getAttribute('href')||'').replace(/\/+$/,'')||'/';
    a.classList.toggle('active', href===path || (href!=='/' && path.indexOf(href+'/')===0));
  });
}

/* ============================================================= REVEALS + MASCOT POP */
var revealObs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); revealObs.unobserve(e.target);} });
},{threshold:0.12, rootMargin:'0px 0px -8% 0px'});
function armReveals(){
  document.querySelectorAll('.reveal:not(.in), .mascot.pop:not(.in)').forEach(function(el){
    if(reduceMotion){ el.classList.add('in'); } else revealObs.observe(el);
  });
}

/* ============================================================= HERO PARALLAX */
var isNarrow=window.matchMedia('(max-width: 940px)').matches;
var floats=document.querySelectorAll('.hero-stage .float');
var ptick=false;
function parallax(){
  if(reduceMotion || isNarrow) return;
  var y=window.scrollY;
  floats.forEach(function(f){ var sp=parseFloat(f.getAttribute('data-speed'))||0; f.style.transform='translateY('+(y*sp).toFixed(1)+'px)'; });
  ptick=false;
}
window.addEventListener('scroll', function(){ if(!ptick){ requestAnimationFrame(parallax); ptick=true; } }, {passive:true});

/* ============================================================= LEDGER SCROLL-FILL */
var ledgerBlock=document.getElementById('ledgerBlock');
var ledgerFill=document.getElementById('ledgerFill');
var ledgerGems=document.querySelectorAll('#ledgerList .wl-dia .dia');
var ledgerNodeGems=[];
document.querySelectorAll('#ledgerNodes .ledger-node').forEach(function(node){ node.innerHTML=diaSVG(22,''); ledgerNodeGems.push(node.querySelector('.dia')); });
function ledgerScroll(){
  if(!ledgerBlock) return;
  var rect=ledgerBlock.getBoundingClientRect(), vh=window.innerHeight;
  var start=vh*0.85, end=vh*0.25, p=(start-rect.top)/(start-end);
  p=Math.max(0,Math.min(1,p));
  if(reduceMotion) p=rect.top<vh?1:0;
  if(ledgerFill) ledgerFill.style.height=(p*100)+'%';
  var lit=Math.round(p*ledgerGems.length+0.0001);
  ledgerGems.forEach(function(g,i){ g.classList.toggle('on', i<lit); });
  ledgerNodeGems.forEach(function(g,i){ g.classList.toggle('on', i<lit); });
}
var ltick=false;
window.addEventListener('scroll', function(){ if(!ltick){ requestAnimationFrame(function(){ ledgerScroll(); ltick=false; }); ltick=true; } }, {passive:true});

/* ============================================================= MOBILE MENU */
var hamburger=document.getElementById('hamburger');
hamburger.addEventListener('click', function(){
  var open=document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('navCta').classList.toggle('open', open);
  var nl=document.getElementById('navLogin'); if(nl) nl.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open?'true':'false');
});

/* ============================================================= DEMO FORM */
var demoForm=document.getElementById('demoForm');
if(demoForm) demoForm.addEventListener('submit', function(e){
  e.preventDefault();
  var name=document.getElementById('f-name'), email=document.getElementById('f-email');
  if(!name.value.trim()){ name.focus(); return; }
  if(!email.value.trim() || email.validity.typeMismatch){ email.focus(); return; }
  var v=function(id){ var el=document.getElementById(id); return el?el.value:''; };
  var subj=encodeURIComponent('Demo request — '+(v('f-company')||name.value));
  var body=encodeURIComponent(
    'Name: '+name.value+'\nWork email: '+email.value+'\nCompany: '+v('f-company')+
    '\nTeam size: '+v('f-team')+'\nLanguages served: '+v('f-lang')+'\nAnything to prepare: '+v('f-prep'));
  window.location.href='mailto:admin@dryrunz.ai?subject='+subj+'&body='+body;
  demoForm.style.display='none';
  document.getElementById('formSuccess').classList.add('show');
});

/* ============================================================= JOURNEY (scroll storyboard) */
(function initJourney(){
  var steps=[].slice.call(document.querySelectorAll('#journeySteps .jstep'));
  var slides=[].slice.call(document.querySelectorAll('#jvStack .jv-slide'));
  var nodes=[].slice.call(document.querySelectorAll('#journeySteps .jnode .dia'));
  var fill=document.getElementById('jFill');
  if(!steps.length || !slides.length) return;
  var cur=-1;
  function nodeY(i){ var st=steps[i], nd=st.querySelector('.jnode'); return st.offsetTop + nd.offsetTop + 8; }
  function setJ(i){
    if(i===cur) return; cur=i;
    slides.forEach(function(s,k){ s.classList.toggle('on', k===i); });
    steps.forEach(function(s,k){ s.classList.toggle('active', k===i); });
    nodes.forEach(function(n,k){ n.classList.toggle('on', k<=i); });
    if(fill){ var t=nodeY(0), y=nodeY(i); fill.style.top=t+'px'; fill.style.height=Math.max(0,y-t)+'px'; }
    var viz=slides[i].querySelector('.viz'); if(viz){ activate(viz); startLive(viz); }
  }
  var jObs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ var idx=steps.indexOf(e.target); if(idx>-1) setJ(idx); } });
  },{rootMargin:'-45% 0px -45% 0px', threshold:0});
  steps.forEach(function(s){ jObs.observe(s); });
  setJ(0);
  var rt; window.addEventListener('resize', function(){ clearTimeout(rt); rt=setTimeout(function(){ var c=cur; cur=-1; setJ(c<0?0:c); },150); });
})();

/* ============================================================= VOICE WAVEFORM (ported from the real simulator: layered sines + glow line + envelope) */
function initVoiceWaves(){
  document.querySelectorAll('canvas.vwave').forEach(function(canvas){
    if(canvas.dataset.live) return; canvas.dataset.live='1';
    var ctx=canvas.getContext('2d'), dpr=window.devicePixelRatio||1, time=Math.random()*8;
    function resize(){ var r=canvas.getBoundingClientRect(); var w=r.width||300, h=r.height||46;
      canvas.width=w*dpr; canvas.height=h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
    resize(); window.addEventListener('resize', resize);
    var waves=[
      {base:12, freq:0.060, speed:0.9, color:'rgba(43,127,255,0.55)', yOff:0},
      {base:9,  freq:0.090, speed:1.2, color:'rgba(34,180,238,0.30)', yOff:3},
      {base:14, freq:0.045, speed:0.6, color:'rgba(43,127,255,0.32)', yOff:-4},
      {base:7,  freq:0.120, speed:1.5, color:'rgba(80,160,255,0.22)', yOff:5}
    ];
    function draw(){
      var W=canvas.width/dpr, H=canvas.height/dpr; ctx.clearRect(0,0,W,H); time+=0.03;
      var amp=0.6+0.32*Math.sin(time*0.55);
      var baseY=H*0.5;
      waves.forEach(function(w){
        var a=w.base*amp; ctx.beginPath(); ctx.moveTo(0,H);
        for(var x=0;x<=W;x+=2){ var nx=x/W, env=Math.exp(-Math.pow((nx-0.5)*2.4,2));
          var y=baseY+w.yOff+Math.sin(x*w.freq+time*w.speed)*a*env+Math.sin(x*w.freq*2.1+time*w.speed*0.8)*a*0.25*env;
          ctx.lineTo(x,y);
        }
        ctx.lineTo(W,H); ctx.closePath();
        var g=ctx.createLinearGradient(0,baseY-16,0,H); g.addColorStop(0,w.color); g.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=g; ctx.fill();
      });
      var la=13*amp; ctx.beginPath();
      for(var x=0;x<=W;x+=2){ var nx=x/W, env=Math.exp(-Math.pow((nx-0.5)*2.4,2));
        var y=baseY+Math.sin(x*0.06+time)*la*env+Math.sin(x*0.13+time*1.2)*la*0.35*env;
        x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.strokeStyle='rgba(90,170,255,'+(0.4+amp*0.4).toFixed(2)+')'; ctx.lineWidth=1.6;
      ctx.shadowColor='rgba(43,127,255,'+(0.3+amp*0.4).toFixed(2)+')'; ctx.shadowBlur=6+amp*6; ctx.stroke(); ctx.shadowBlur=0;
      if(!reduceMotion) requestAnimationFrame(draw);
    }
    draw();
  });
}

/* ============================================================= USE-CASE CYCLERS (smart animation) */
function initCyclers(){
  document.querySelectorAll('[data-cycler]').forEach(function(cyc){
    var words=[].slice.call(cyc.querySelectorAll('.cyc-word'));
    var pills=[].slice.call(cyc.querySelectorAll('.cyc-pill'));
    if(!words.length) return;
    var i=0, timer=null;
    function set(n){ i=((n%words.length)+words.length)%words.length;
      words.forEach(function(w,k){ w.classList.toggle('active',k===i); });
      pills.forEach(function(p,k){ p.classList.toggle('active',k===i); });
    }
    function start(){ if(reduceMotion||timer) return; timer=setInterval(function(){ set(i+1); },2200); }
    function stop(){ if(timer){ clearInterval(timer); timer=null; } }
    pills.forEach(function(p,k){ p.addEventListener('click',function(){ set(k); stop(); start(); }); });
    set(0); start();
    document.addEventListener('visibilitychange',function(){ document.hidden?stop():start(); });
  });
}

/* ============================================================= HERO MORPH (voice waves → performance chart) */
function initMorph(){
  var svg=document.getElementById('morphStage'); if(!svg) return;
  var NS='http://www.w3.org/2000/svg';
  var N=36, base=284, step=32, barW=16, x0=24;   /* viewBox 1200x300, hero right column */
  var g=svg.querySelector('.morph-bars'), rects=[];
  for(var i=0;i<N;i++){
    var r=document.createElementNS(NS,'rect');
    r.setAttribute('x',(x0+i*step).toFixed(1)); r.setAttribute('width',barW); r.setAttribute('rx',5);
    r.setAttribute('class','mbar'); g.appendChild(r); rects.push(r);
  }
  var line=svg.querySelector('.morph-line'), area=svg.querySelector('.morph-area');
  line.setAttribute('pathLength','1'); line.style.strokeDasharray='1';
  var words=[].slice.call(document.querySelectorAll('#morphTag .pw'));
  function chartH(i){ return 24 + (250-24)*Math.pow(i/(N-1),1.8); }
  function cx(i){ return x0+i*step+barW/2; }
  function paint(blend, ts){
    var pts=[];
    for(var i=0;i<N;i++){
      var wave = (ts==null) ? chartH(i) : 40+120*(0.5+0.5*Math.sin(ts*0.005+i*0.55));
      var h = wave*(1-blend)+chartH(i)*blend;
      rects[i].setAttribute('y',(base-h).toFixed(1)); rects[i].setAttribute('height',h.toFixed(1));
      pts.push([cx(i), base-h]);
    }
    var d='M'+pts.map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' L');
    line.setAttribute('d',d); line.style.opacity=(blend>0.02?blend:0); line.style.strokeDashoffset=(1-blend).toFixed(3);
    area.setAttribute('d', d+' L'+pts[N-1][0].toFixed(1)+','+base+' L'+pts[0][0].toFixed(1)+','+base+' Z');
    area.style.opacity=(0.06+blend*0.14).toFixed(3);
  }
  if(reduceMotion){ paint(1,null); if(words[4]) words[4].classList.add('lit'); return; }
  function frame(ts){
    var phase=(ts%3000)/3000, blend;
    if(phase<0.45) blend=0; else if(phase<0.68) blend=(phase-0.45)/0.23; else if(phase<0.9) blend=1; else blend=1-(phase-0.9)/0.1;
    blend=Math.max(0,Math.min(1,blend));
    paint(blend, ts);
    var pi=Math.min(3,Math.floor(phase/0.45*4));
    for(var k=0;k<4;k++) words[k].classList.toggle('lit', blend<0.35 && k===pi);
    if(words[4]) words[4].classList.toggle('lit', phase>0.58 && phase<0.94);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ============================================================= COOKIE CONSENT */
(function cookieConsent(){
  try{ if(localStorage.getItem('dz-cookie')) return; }catch(e){}
  var bar=document.createElement('div');
  bar.className='cookie-bar'; bar.setAttribute('role','dialog'); bar.setAttribute('aria-label','Cookie notice');
  bar.innerHTML='<p class="cookie-txt">We use cookies to run DryRunZ and understand how the site is used. See our <a href="/privacy">Privacy Policy</a>.</p>'
    +'<div class="cookie-actions"><button type="button" class="cookie-btn ghost" data-cc="decline">Decline</button><button type="button" class="cookie-btn" data-cc="accept">Accept</button></div>';
  document.body.appendChild(bar);
  requestAnimationFrame(function(){ bar.classList.add('in'); });
  bar.addEventListener('click', function(e){
    var b=e.target.closest('[data-cc]'); if(!b) return;
    try{ localStorage.setItem('dz-cookie', b.getAttribute('data-cc')); }catch(e){}
    bar.classList.remove('in'); setTimeout(function(){ bar.remove(); }, 320);
  });
})();

/* ============================================================= INIT */
setActiveNav();
armReveals();
armViz(document); /* footer statics + any current-view vizzes */
ledgerScroll();
initMorph();
initVoiceWaves();
initCyclers();
