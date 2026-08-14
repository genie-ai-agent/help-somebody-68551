(function () {
  var HS = window.HS || {};

  // people we backed — person first, company as a quiet tag
  var list = document.getElementById('people-list');
  if (list && HS.backed) {
    list.innerHTML = HS.backed.map(function (p, i) {
      return (
        '<li class="person">' +
        '<span class="person__i">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="person__body">' +
        '<span class="person__name">' + p.name +
        (p.note ? '<span class="tag tag--note">' + p.note + '</span>' : '') +
        '</span>' +
        '<span class="person__help">' + p.help + '</span>' +
        '</span>' +
        '<span class="person__co">' + p.company + '</span>' +
        '</li>'
      );
    }).join('');
  }

  // companies backed, founder not yet named
  var also = document.getElementById('also');
  if (also && HS.alsoBacked) {
    also.innerHTML = 'Also backed: ' + HS.alsoBacked.map(function (c) {
      return '<b>' + c.company + '</b>';
    }).join(', ') + '.';
  }

  // first checks — resumes only
  var next = document.getElementById('next-list');
  if (next && HS.next) {
    next.innerHTML = HS.next.map(function (p) {
      return (
        '<article class="card">' +
        '<h3>' + p.name + '</h3>' +
        '<ul>' + p.resume.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul>' +
        '</article>'
      );
    }).join('');
  }

  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
