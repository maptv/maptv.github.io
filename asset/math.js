(() => {
  // MathJax typesets equations asynchronously, well after this script and
  // even after "load" fire, so mjx-mtd elements may not exist yet. Fix any
  // that already exist, then watch for the rest as MathJax creates them.
  // fixAll() recomputes each label from its stable mjx-eqn:N id, so it's
  // safe to call repeatedly (e.g. if MathJax retypesets later).
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

  fixAll();
  new MutationObserver(fixAll).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
