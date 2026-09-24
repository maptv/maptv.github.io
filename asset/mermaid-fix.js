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
// (The missing-<desc> crash itself is worked around in
// asset/mermaid-desc-guard.js, which has to run earlier than this file does
// — see that file for why.)
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
