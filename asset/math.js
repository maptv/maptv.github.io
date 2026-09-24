// Our crossref numbering (asset/crossref.js) is 0-based, but MathJax's own
// equation-number glyphs are always 1-based with no config knob to change
// that starting point, so they'd read one higher than the in-text "Eq. (n)"
// references pointing at the same equation. This decrements each rendered
// glyph to match.
//
// mjx-mtd[id^="mjx-eqn:"] elements don't exist at DOMContentLoaded: MathJax
// is loaded as a deferred <script>, so this script (a plain, non-deferred
// <script src>, executed synchronously wherever it sits in the body) always
// runs before MathJax's own script has even executed, let alone finished
// typesetting the page — querying for them then finds nothing. MathJax's
// startup object only appears once its script has run, and
// `startup.promise` only resolves once the initial page typeset (which
// creates these elements) is done, so we poll for the object to show up and
// hook the fix onto that promise rather than DOMContentLoaded.
function fixEquationNumbers() {
  document.querySelectorAll('mjx-mtd[id^="mjx-eqn:"]').forEach(el => {
    const oldNum = parseInt(el.id.replace("mjx-eqn:", ""), 10);
    const newNum = oldNum - 1;
    // Replace MathJax-generated number glyphs
    el.innerHTML = `<mjx-mtext>(` + newNum + `)</mjx-mtext>`;
  });
}

function waitForMathJaxThenFixEquationNumbers() {
  if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
    window.MathJax.startup.promise.then(fixEquationNumbers);
  } else {
    setTimeout(waitForMathJaxThenFixEquationNumbers, 50);
  }
}
waitForMathJaxThenFixEquationNumbers();
