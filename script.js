(function () {
  var d = window.HS || { portfolio: [], people: [] };

  var cols = document.getElementById('portfolio-cols');
  if (cols) {
    cols.innerHTML = d.portfolio.map(function (g) {
      var items = g.companies.map(function (c) {
        return '<li><span>' + c + '</span><span class="dot"></span></li>';
      }).join('');
      return '<div class="col"><h3>' + g.region + '</h3><ul>' + items + '</ul></div>';
    }).join('');
  }

  var people = document.getElementById('people-list');
  if (people) {
    people.innerHTML = d.people.map(function (p) {
      return '<li>' + p + '</li>';
    }).join('');
  }

  var targets = document.querySelectorAll('.band, .visions figure');
  if (!('IntersectionObserver' in window)) return;
  targets.forEach(function (el) { el.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
  targets.forEach(function (el) { io.observe(el); });

  // failsafe: never leave content hidden
  setTimeout(function () {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }, 1500);
})();
