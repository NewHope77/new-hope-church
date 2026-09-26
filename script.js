(() => {
  // logo instances (unique ids per copy so textPath refs don't clash)
  const tpl = document.getElementById('logo-tpl').innerHTML;
  document.querySelectorAll('[data-logo]').forEach((el, i) => {
    el.innerHTML = tpl.replaceAll('-ID', '-' + i);
  });

  // duplicate film strip for seamless loop
  const track = document.querySelector('.strip__track');
  track.innerHTML += track.innerHTML.replace(/<img /g, '<img aria-hidden="true" ');

  // nav
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  document.querySelectorAll('.nav__menu a').forEach(a => a.addEventListener('click', () => setOpen(false)));

  // scroll: nav background + rising dawn glow
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    const p = Math.min(y / (document.body.scrollHeight - innerHeight), 1);
    document.documentElement.style.setProperty('--dawn-y', (85 - p * 120) + 'vh');
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // reveal on scroll
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  // failsafe: never leave above-the-fold content hidden
  setTimeout(() => document.querySelectorAll('.reveal:not(.is-in)').forEach(el => {
    if (el.getBoundingClientRect().top < innerHeight) el.classList.add('is-in');
  }), 1200);

  // countdown to next Sunday 10:00 (Warsaw time); "live" during 10:00–12:00
  const out = k => document.querySelector(`[data-cd="${k}"]`);
  const grid = document.querySelector('.countdown__grid');
  const label = document.querySelector('.countdown__label');
  const live = document.querySelector('.countdown__live');
  const pad = n => String(n).padStart(2, '0');
  const tick = () => {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Warsaw' }));
    const target = new Date(now);
    target.setHours(10, 0, 0, 0);
    target.setDate(now.getDate() + ((7 - now.getDay()) % 7));
    const isLive = now.getDay() === 0 && now.getHours() >= 10 && now.getHours() < 12;
    if (target <= now && !isLive) target.setDate(target.getDate() + 7);
    grid.hidden = label.hidden = isLive;
    live.hidden = !isLive;
    if (isLive) return;
    let s = Math.floor((target - now) / 1000);
    out('d').textContent = Math.floor(s / 86400); s %= 86400;
    out('h').textContent = pad(Math.floor(s / 3600)); s %= 3600;
    out('m').textContent = pad(Math.floor(s / 60));
    out('s').textContent = pad(s % 60);
  };
  tick();
  setInterval(tick, 1000);
})();
