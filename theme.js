// Theme picker: three looks over the same deck.
// Choice sticks in localStorage and in ?theme= so a specific look is shareable.
const THEMES = ['zine', 'noir', 'press'];
const KEY = 'hs-deck-theme';
const bar = document.getElementById('themes');

function initial() {
  const q = new URLSearchParams(location.search).get('theme');
  if (THEMES.includes(q)) return q;
  const saved = localStorage.getItem(KEY);
  return THEMES.includes(saved) ? saved : 'zine';
}

function apply(name, remember) {
  document.body.setAttribute('data-theme', name);
  if (bar) {
    bar.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.theme === name));
    });
  }
  if (remember) {
    try { localStorage.setItem(KEY, name); } catch (e) {}
    const u = new URL(location.href);
    u.searchParams.set('theme', name);
    history.replaceState(null, '', u.toString() + location.hash);
  }
}

if (bar) {
  bar.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (btn && btn.dataset.theme) apply(btn.dataset.theme, true);
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 't' || e.key === 'T') {
    const cur = document.body.getAttribute('data-theme') || 'zine';
    apply(THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length], true);
  }
});

apply(initial(), false);
