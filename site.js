// Lynal site script. Kept external so the page can run under a 'self'-only CSP.
(function () {
  // Screenshot overlays: if a shot fails to load, drop it so the built-in mockup underneath shows.
  function drop(img) { if (img && img.parentNode) img.parentNode.removeChild(img); }
  document.querySelectorAll('img.swap-img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) { drop(img); return; }
    img.addEventListener('error', function () { drop(img); });
  });
})();

// Reveal-on-scroll (moved from the former inline script).
(function () {
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var els = document.querySelectorAll('.reveal');
      if (reduce || !('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('in'); });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      els.forEach(function (el) { io.observe(el); });
    })();
