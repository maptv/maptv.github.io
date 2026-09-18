(() => {
  // MathJax typesets equations asynchronously, so mjx-mtd elements don't
  // exist until it finishes. Wait for MathJax's own "typesetting finished"
  // signal rather than guessing with DOMContentLoaded; fall back to window
  // "load" if that API isn't there for some reason.
  //
  // We also keep a MutationObserver for equations added later (e.g. a
  // retypeset), but it must only call fixAll() when a mutation actually
  // added a new equation node — an earlier version reran a full-document
  // querySelectorAll on *every* DOM mutation anywhere on the page, forever.
  // That's harmless on most pages, but /dec/date pairs the most numbered
  // equations on the site with by far the most reactive DOM churn (two
  // Observable Plot.plot() calendars that fully rebuild their SVG on load
  // and on every slider drag or radio change), so every rebuild re-ran the
  // expensive scan synchronously on the main thread — severe enough on a
  // phone's CPU to visibly hang the page during initial load. fixAll()'s
  // own edit (replacing an mjx-mtd's children with a plain <mjx-mtext>)
  // never matches the filter below, so it can't retrigger itself either.
  function fixAll() {
    document.querySelectorAll('mjx-mtd[id^="mjx-eqn:"]').forEach(el => {
      const oldNum = parseInt(el.id.replace("mjx-eqn:", ""), 10);
      if (Number.isNaN(oldNum)) return;
      const newLabel = `(${oldNum - 1})`;
      if (el.textContent.trim() !== newLabel) {
        el.innerHTML = `<mjx-mtext>${newLabel}</mjx-mtext>`;
      }
    });
  }

  function addsEquation(addedNodes) {
    for (const node of addedNodes) {
      if (node.nodeType !== Node.ELEMENT_NODE) continue;
      if (node.matches?.('mjx-container, mjx-mtd[id^="mjx-eqn:"]')) return true;
      if (node.querySelector?.('mjx-container, mjx-mtd[id^="mjx-eqn:"]')) return true;
    }
    return false;
  }

  if (window.MathJax?.startup?.promise) {
    window.MathJax.startup.promise.then(fixAll);
  } else {
    window.addEventListener("load", fixAll, { once: true });
  }

  new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (addsEquation(mutation.addedNodes)) {
        fixAll();
        return;
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
