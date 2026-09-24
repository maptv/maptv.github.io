// Quarto's own site_libs/quarto-diagram/mermaid-postprocess-shim.js recenters
// each flowchart node's foreignObject using its actual rendered height (its
// build-time height estimate is often off, especially at larger font sizes).
// That shim only targets svg elements inside div.cell-output-display, so it
// never reaches diagrams embedded via {{< include >}} (fig-conv, fig-mud,
// the nav breadcrumbs), and it throws if any div.cell-output-display svg on
// the page lacks a mermaid <desc> (aborting the loop for every diagram after
// it, mermaid or not). This redoes the same recentering directly against
// every svg.flowchart on the page, regardless of ancestor or <desc>.
//
// Mermaid diagrams rendered directly from a code chunk (as opposed to our
// own pre-rendered `mermaid-format: svg` assets) come out of quarto without
// a <desc> at all, which is exactly what makes the bundled shim throw:
// `el.querySelector("desc").id` dereferences null. We don't control that
// generated file to fix it there, so instead we add an empty <desc> to any
// such svg before the shim's own "load" listener can run. Both listeners
// fire on "load", and the shim's script tag sits earlier in the document
// (so it registers first and would normally run first) — but this guard
// runs on "DOMContentLoaded", which always fires before "load" regardless
// of listener registration order, so it's guaranteed to patch the DOM in
// time.
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
document.addEventListener("DOMContentLoaded", addMissingMermaidDescs);
//
// Scoped to `g.node foreignObject` only: subgraph/cluster titles
// (g.cluster-label) and edge labels (g.edgeLabels) are positioned by mermaid
// with a fixed (positive) offset from the top of their box, not centered —
// applying this same "recenter around the vertical midpoint" correction to
// them shifts a cluster title like "work" or "Gregorian calendar" up and
// out of its box instead of leaving mermaid's own placement alone.
function fixMermaidForeignObjects() {
  document.querySelectorAll("svg.flowchart g.node foreignObject").forEach((fo) => {
    const div = fo.querySelector("div");
    if (!div) return;
    const divHeight = window.getComputedStyle(div).height;
    fo.setAttribute("height", divHeight);
    const g = fo.parentElement;
    const transform = g.getAttribute("transform");
    if (!transform) return;
    const m = transform.match(/translate\(([^,]+),(.+)\)/);
    if (!m) return;
    g.setAttribute(
      "transform",
      `translate(${m[1]},${-Number(divHeight.slice(0, -2)) / 2})`
    );
  });
}
window.addEventListener("load", fixMermaidForeignObjects);
