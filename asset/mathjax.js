window.addEventListener("load", () => {
  document.querySelectorAll('mjx-mtd[id^="mjx-eqn:"]').forEach(el => {
    const oldNum = parseInt(el.id.replace("mjx-eqn:", ""), 10);
    const newNum = oldNum - 1;
    const mtext = el.querySelector("mjx-mtext");
    if (mtext) {
      mtext.textContent = `(${newNum})`;
    }
  });
});
// previous version
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll('mjx-mtd[id^="mjx-eqn:"]').forEach(el => {
//     const oldNum = parseInt(el.id.replace("mjx-eqn:", ""), 10);
//     const newNum = oldNum - 1;
//     // Replace MathJax-generated number glyphs
//     el.innerHTML = `<mjx-mtext>(` + newNum + `)</mjx-mtext>`;
//   });
// });
