const slides = Array.from(document.querySelectorAll('.slide'));
const counter = document.getElementById('counter');
const hint = document.getElementById('hint');
let i = 0;

function hashIndex() {
  const n = parseInt(location.hash.replace('#', ''), 10);
  return Number.isInteger(n) && n >= 1 && n <= slides.length ? n - 1 : 0;
}

function show(n, push) {
  i = Math.max(0, Math.min(slides.length - 1, n));
  slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
  counter.textContent = (i + 1) + ' / ' + slides.length;
  document.title = i === 0 ? 'Help Somebody' : 'Help Somebody / ' + (slides[i].dataset.label || '');
  if (push) history.replaceState(null, '', '#' + (i + 1));
  window.scrollTo(0, 0);
}

function go(step) { show(i + step, true); fade(); }

document.getElementById('next').addEventListener('click', function () { go(1); });
document.getElementById('prev').addEventListener('click', function () { go(-1); });

document.addEventListener('keydown', function (e) {
  const k = e.key;
  if (k === 'ArrowRight' || k === 'ArrowDown' || k === ' ' || k === 'PageDown') {
    e.preventDefault(); go(1);
  } else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp') {
    e.preventDefault(); go(-1);
  } else if (k === 'Home') { show(0, true); }
  else if (k === 'End') { show(slides.length - 1, true); }
});

let x0 = null, y0 = null;
document.addEventListener('touchstart', function (e) {
  x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
}, { passive: true });
document.addEventListener('touchend', function (e) {
  if (x0 === null) return;
  const dx = e.changedTouches[0].clientX - x0;
  const dy = e.changedTouches[0].clientY - y0;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  x0 = null; y0 = null;
}, { passive: true });

let faded = false;
function fade() {
  if (faded || !hint) return;
  faded = true;
  hint.classList.add('is-gone');
}
setTimeout(fade, 7000);

window.addEventListener('hashchange', function () { show(hashIndex(), false); });
show(hashIndex(), false);
