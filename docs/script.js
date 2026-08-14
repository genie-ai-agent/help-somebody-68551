(function () {
  var docs = window.DOCS || [];
  var main = document.getElementById('main');
  var nav = document.getElementById('nav');
  var search = document.getElementById('search');
  var count = document.getElementById('count');

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderBlock(b) {
    switch (b.type) {
      case 'p':
        return '<p>' + esc(b.text) + '</p>';
      case 'list':
        return '<ul class="plain">' + b.items.map(function (i) {
          return '<li>' + esc(i) + '</li>';
        }).join('') + '</ul>';
      case 'ol':
        return '<ol class="steps">' + b.items.map(function (i) {
          return '<li>' + esc(i) + '</li>';
        }).join('') + '</ol>';
      case 'rows':
        return '<dl class="rows">' + b.rows.map(function (r) {
          return '<div class="row"><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
        }).join('') + '</dl>';
      case 'quote':
        return '<blockquote>&ldquo;' + esc(b.text) + '&rdquo;</blockquote>';
      case 'note':
        return '<div class="note"><strong>Note</strong>' + esc(b.text) + '</div>';
      case 'people':
        return '<div class="people">' + b.items.map(function (p) {
          var warn = p.tag && /unconfirmed/i.test(p.tag) ? ' warn' : '';
          return '<article class="person">' +
            '<h3 class="name">' + esc(p.name) + '</h3>' +
            (p.company ? '<p class="co">' + esc(p.company) + '</p>' : '') +
            '<p class="desc">' + esc(p.desc) + '</p>' +
            (p.tag ? '<span class="tag' + warn + '">' + esc(p.tag) + '</span>' : '') +
            '</article>';
        }).join('') + '</div>';
      case 'links':
        return '<div class="links">' + b.items.map(function (l) {
          return '<a class="linkrow" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
            '<span class="lb">' + esc(l.label) + '</span>' +
            '<span class="lu">' + esc(l.url) + '</span>' +
            '<span class="ln">' + esc(l.note) + '</span></a>';
        }).join('') + '</div>';
      case 'log':
        return '<div class="log">' + b.items.map(function (e) {
          return '<div class="logrow"><span class="d">' + esc(e.date) + '</span>' +
            '<span class="t">' + esc(e.text) + '</span></div>';
        }).join('') + '</div>';
      default:
        return '';
    }
  }

  function render() {
    main.innerHTML = docs.map(function (d, i) {
      var n = String(i + 1).padStart(2, '0');
      return '<section class="doc" id="' + d.slug + '" data-slug="' + d.slug + '">' +
        '<p class="kicker">' + esc(d.kicker) + '</p>' +
        '<h2><span class="num">' + n + '</span>' + esc(d.title) + '</h2>' +
        d.blocks.map(renderBlock).join('') +
        '</section>';
    }).join('') + '<p class="empty hide" id="empty">Nothing in the docs matches that yet.</p>';

    nav.innerHTML = docs.map(function (d) {
      return '<a href="#' + d.slug + '">' + esc(d.nav) + '</a>';
    }).join('');
  }

  // ---- filter ----
  var raw = {};
  function cacheRaw() {
    docs.forEach(function (d) {
      var el = document.getElementById(d.slug);
      raw[d.slug] = { html: el.innerHTML, text: el.textContent.toLowerCase() };
    });
  }

  function clearMarks(el) {
    el.querySelectorAll('mark').forEach(function (m) {
      m.replaceWith(document.createTextNode(m.textContent));
    });
    el.normalize();
  }

  function highlight(el, term) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    nodes.forEach(function (n) {
      if (!re.test(n.nodeValue)) return;
      var span = document.createElement('span');
      span.innerHTML = n.nodeValue.replace(re, '<mark>$1</mark>');
      n.replaceWith(span);
    });
  }

  function filter() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    docs.forEach(function (d) {
      var el = document.getElementById(d.slug);
      clearMarks(el);
      var hit = !q || raw[d.slug].text.indexOf(q) !== -1;
      el.classList.toggle('hide', !hit);
      if (hit) {
        shown++;
        if (q.length > 1) highlight(el, q);
      }
    });
    document.getElementById('empty').classList.toggle('hide', shown !== 0);
    count.textContent = q
      ? shown + ' of ' + docs.length + ' sections'
      : docs.length + ' sections';
  }

  // ---- active nav on scroll ----
  function watch() {
    var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var slug = e.target.id;
        links.forEach(function (a) {
          a.classList.toggle('on', a.getAttribute('href') === '#' + slug);
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    docs.forEach(function (d) {
      var el = document.getElementById(d.slug);
      if (el) obs.observe(el);
    });
  }

  render();
  cacheRaw();
  filter();
  watch();
  search.addEventListener('input', filter);

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== search) {
      e.preventDefault();
      search.focus();
    }
    if (e.key === 'Escape' && document.activeElement === search) {
      search.value = '';
      filter();
      search.blur();
    }
  });
})();
