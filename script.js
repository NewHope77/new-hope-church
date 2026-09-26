(() => {
  // logo instances (unique ids per copy so textPath refs don't clash)
  const tpl = document.getElementById('logo-tpl').innerHTML;
  document.querySelectorAll('[data-logo]').forEach((el, i) => {
    el.innerHTML = tpl.replaceAll('-ID', '-' + i);
  });

  // duplicate film strip for seamless loop
  const track = document.querySelector('.strip__track');
  track.innerHTML += track.innerHTML.replace(/<img /g, '<img aria-hidden="true" ');

  // film strip: drifts on its own, but can be swiped / dragged / scrolled by hand
  const strip = document.querySelector('.strip');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let pos = 0, idleUntil = 0, drag = null;
  const half = () => track.scrollWidth / 2;
  const wrap = () => {
    const h = half();
    if (pos >= h) pos -= h;
    if (pos < 1) pos += h;
  };
  const hold = () => { idleUntil = performance.now() + 2500; };
  // user moved it (touch, trackpad, wheel): adopt their position
  strip.addEventListener('scroll', () => {
    if (Math.abs(strip.scrollLeft - pos) > 2) { pos = strip.scrollLeft; hold(); wrap(); strip.scrollLeft = pos; }
  }, { passive: true });
  ['touchstart', 'wheel'].forEach(ev => strip.addEventListener(ev, hold, { passive: true }));
  strip.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') idleUntil = Infinity; });
  strip.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') hold(); });
  // mouse drag (touch uses native scrolling)
  strip.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    drag = { x: e.clientX, start: pos };
    strip.classList.add('is-dragging');
    strip.setPointerCapture(e.pointerId);
  });
  strip.addEventListener('pointermove', e => {
    if (!drag) return;
    pos = drag.start - (e.clientX - drag.x);
    wrap();
    strip.scrollLeft = pos;
  });
  const endDrag = () => { if (drag) { drag = null; strip.classList.remove('is-dragging'); } };
  strip.addEventListener('pointerup', endDrag);
  strip.addEventListener('pointercancel', endDrag);
  const drift = () => {
    if (!reduce && !drag && performance.now() > idleUntil) {
      pos += 0.6;
      wrap();
      strip.scrollLeft = pos;
    }
    requestAnimationFrame(drift);
  };
  pos = 1; wrap(); strip.scrollLeft = pos;
  requestAnimationFrame(drift);

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


  // galleries (ministries, cafe): open a lightbox, photos always whole
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('.lightbox__figure img');
  const lbCap = lb.querySelector('figcaption');
  const lbTitle = lb.querySelector('.lightbox__title');
  const lbCount = lb.querySelector('.lightbox__count');
  const lbThumbs = lb.querySelector('.lightbox__thumbs');
  let items = [], idx = 0, lastFocus = null;
  const show = i => {
    idx = (i + items.length) % items.length;
    lbImg.src = items[idx].src;
    lbImg.alt = items[idx].cap;
    lbCap.textContent = items[idx].cap;
    lbCount.textContent = `${idx + 1} / ${items.length}`;
    lbThumbs.querySelectorAll('button').forEach((b, k) => b.classList.toggle('is-active', k === idx));
    lbThumbs.children[idx]?.scrollIntoView({ block: 'nearest', inline: 'center' });
  };
  const openLb = btn => {
    items = btn.dataset.gallery.split(';').map(x => { const [src, cap] = x.split('|'); return { src, cap }; });
    lbTitle.textContent = btn.dataset.title;
    lbThumbs.innerHTML = items.map((it, k) => `<button type="button" aria-label="Фото ${k + 1}"><img src="${it.src}" alt=""></button>`).join('');
    lbThumbs.querySelectorAll('button').forEach((b, k) => b.addEventListener('click', () => show(k)));
    lb.querySelectorAll('.lightbox__nav').forEach(b => { b.hidden = items.length < 2; });
    lastFocus = btn;
    lb.hidden = false;
    requestAnimationFrame(() => lb.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    show(0);
    lb.querySelector('.lightbox__close').focus();
  };
  const closeLb = () => {
    lb.classList.remove('is-open');
    lb.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus();
  };
  document.querySelectorAll('[data-gallery]').forEach(b => b.addEventListener('click', () => openLb(b)));
  lb.querySelector('.lightbox__close').addEventListener('click', closeLb);
  lb.querySelector('.lightbox__nav--prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lightbox__nav--next').addEventListener('click', () => show(idx + 1));
  lb.querySelector('.lightbox__stage').addEventListener('click', e => { if (e.target === e.currentTarget) closeLb(); });
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  // swipe on phones
  let tx = null;
  lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    tx = null;
  });

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
