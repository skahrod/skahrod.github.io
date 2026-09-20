/* Burger menu. Progressive enhancement: without JavaScript the nav stays
   visible in the markup, so every link is still reachable. */
(function () {
  var btn = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (!btn || !menu) return;

  document.documentElement.classList.add('has-js');
  btn.hidden = false;

  function set(open) {
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  }

  set(false);

  btn.addEventListener('click', function () {
    set(btn.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      set(false);
      btn.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (btn.getAttribute('aria-expanded') !== 'true') return;
    if (!menu.contains(e.target) && !btn.contains(e.target)) set(false);
  });

  /* Homepage only: the header is see-through while the poster fills the
     screen, and turns solid once you have scrolled past it. */
  var head = document.querySelector('.site-head');
  var poster = document.querySelector('.poster');
  if (!head || !poster) return;

  function place() {
    var onPoster = window.scrollY < poster.offsetHeight * 0.55;
    var open = btn.getAttribute('aria-expanded') === 'true';
    head.classList.toggle('is-over', onPoster && !open);
  }

  place();
  window.addEventListener('scroll', place, { passive: true });
  window.addEventListener('resize', place);
  btn.addEventListener('click', function () { window.requestAnimationFrame(place); });
})();
