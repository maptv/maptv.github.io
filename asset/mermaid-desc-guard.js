// Quarto's bundled site_libs/quarto-diagram/mermaid-postprocess-shim.js
// throws if any div.cell-output-display svg on the page lacks a <desc>
// (`el.querySelector("desc").id` on a null desc), aborting its whole loop —
// see asset/mermaid-fix.js for the recentering fix that has to work around
// this. Mermaid diagrams rendered live from a code chunk ship with no <desc>
// at all, and so does any Observable JS cell that draws its own svg (D3
// charts like decplot/greplot/calsliders) into a cell-output-display div —
// both are exactly what the shim's selector matches.
//
// We don't control that generated shim file to fix it there, so we add an
// empty <desc> to any svg missing one, before the shim's own check can run.
// Both this guard and the shim listen for "load" (OJS cells render well
// after DOMContentLoaded, so that's the only event that reliably sees them
// too), and listeners for the same event fire in registration order — this
// script must be included in `include-in-header`, positioned before
// quarto's own dependency scripts in the generated <head>, so it registers
// first and always runs before the shim's listener does.
function addMissingMermaidDescs() {
  document.querySelectorAll("div.cell-output-display svg").forEach((svg) => {
    if (!svg.querySelector("desc")) {
      svg.insertBefore(
        document.createElementNS("http://www.w3.org/2000/svg", "desc"),
        svg.firstChild
      );
    }
  });
}
window.addEventListener("load", addMissingMermaidDescs);
