/* ==========================================================
   GITHUB CONNECTION
   Paste your real URLs below. Any link left empty here stays
   exactly as a placeholder (still shows the "not connected
   yet" message on click) — nothing is invented.
   ========================================================== */
const GITHUB_PROFILE_URL = "https://github.com/farihafarii754-commits"; // your GitHub profile
const PROJECT_REPOS = {
  shoply: "https://github.com/farihafarii754-commits/shoply",       // e.g. "https://github.com/your-username/shoply"
  businesspro: "https://github.com/farihafarii754-commits/businesspro-",  // e.g. "https://github.com/your-username/businesspro"
  nexora: "https://github.com/farihafarii754-commits/nexora"        // e.g. "https://github.com/your-username/nexora"
};
(function(){
  const connect = (el, url) => {
    if (!el || !url) return;
    el.href = url;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  };
  connect(document.getElementById('ghProfile'), GITHUB_PROFILE_URL);
  connect(document.getElementById('ghProfileContact'), GITHUB_PROFILE_URL);
  connect(document.getElementById('repoShoply'), PROJECT_REPOS.shoply);
  connect(document.getElementById('repoBusinessPro'), PROJECT_REPOS.businesspro);
  connect(document.getElementById('repoNexora'), PROJECT_REPOS.nexora);
})();

const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const sections=[...document.querySelectorAll('main section[id],header[id]')];const links=[...document.querySelectorAll('.nav-links a')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');const link=links.find(a=>a.getAttribute('href')==='#'+e.target.id);if(link){links.forEach(x=>x.classList.remove('active'));link.classList.add('active')}}}),{threshold:.15,rootMargin:'-10% 0px -55% 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.getElementById('contactForm');const status=document.getElementById('formStatus');form?.addEventListener('submit',e=>{e.preventDefault();status.textContent='Message UI is ready — connect your form service to receive submissions.';form.reset()});
const hero=document.querySelector('.hero-art');hero?.addEventListener('pointermove',e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.style.transform=`translate(${x*7}px,${y*7}px)`});hero?.addEventListener('pointerleave',()=>hero.style.transform='');

/* ==========================================================
   RESTORED: mouse-following glow, floating particles,
   and honest feedback for links that don't have a real
   destination yet. Nothing above this block was changed.
   ========================================================== */
(function(){
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Mouse-following glow (desktop / pointer:fine only) --- */
  const glow = document.getElementById('cursorGlow');
  const canHover = matchMedia('(pointer: fine)').matches;
  if (glow && canHover && !reduceMotion) {
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2, cx = tx, cy = ty;
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.setProperty('--gx', cx + 'px');
      glow.style.setProperty('--gy', cy + 'px');
      requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      glow.classList.add('is-active');
    }, { passive: true });
    window.addEventListener('blur', () => glow.classList.remove('is-active'));
    document.addEventListener('mouseleave', () => glow.classList.remove('is-active'));
    loop();
  }

  /* --- Floating glowing particles (all devices, respects reduced motion) --- */
  const field = document.getElementById('particles');
  if (field && !reduceMotion) {
    const count = window.innerWidth < 640 ? 12 : 26;
    const colors = ['#ff3f83', '#a64dff', '#ff70a8'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('i');
      p.className = 'particle';
      const size = 2 + Math.random() * 4;
      const color = colors[i % colors.length];
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = color;
      p.style.boxShadow = `0 0 8px 2px ${color}`;
      p.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
      const duration = 10 + Math.random() * 12;
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = (-Math.random() * duration) + 's';
      field.appendChild(p);
    }
  }

  /* --- Honest feedback for links with no real URL yet ---
     Every link below was left as href="#" in the markup because
     no real Live Demo / GitHub / social URL was provided. Rather
     than jumping to the top of the page (dead-link feel) or
     inventing a fake URL, clicking shows what still needs a real
     link, so nothing is silently broken. */
  const toast = document.createElement('div');
  toast.className = 'link-toast';
  document.body.appendChild(toast);
  let toastTimer;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add('is-shown');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-shown'), 2600);
  };

  document.querySelectorAll('a[href="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const label = a.textContent.replace(/[↗◉]/g, '').trim() || 'This link';
      showToast(`${label} isn't connected yet — add the real URL to activate it.`);
      console.info('[FariDev portfolio] Placeholder link — needs a real URL:', a);
    });
  });
})();
