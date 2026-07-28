document.addEventListener('click', function (e) {
  var btn = e.target.closest('.copy-btn');
  if (!btn) return;
  var wrap = btn.closest('.prompt-wrap');
  var pre = wrap && wrap.querySelector('pre.prompt');
  if (!pre) return;
  var text = pre.innerText;
  var done = function () {
    var original = btn.getAttribute('data-label') || 'Copy';
    btn.textContent = 'Copied';
    btn.classList.add('done');
    setTimeout(function () { btn.textContent = original; btn.classList.remove('done'); }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { fallback(text, done); });
  } else {
    fallback(text, done);
  }
});
function fallback(text, done) {
  var ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); done(); } catch (err) {}
  document.body.removeChild(ta);
}
