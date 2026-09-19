document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('mjx-mtd[id^="mjx-eqn:"]').forEach(el => {
    const oldNum = parseInt(el.id.replace("mjx-eqn:", ""), 10);
    const newNum = oldNum - 1;
    // Replace MathJax-generated number glyphs
    el.innerHTML = `<mjx-mtext>(` + newNum + `)</mjx-mtext>`;
  });
});
