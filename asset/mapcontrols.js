// Map controls (.marginInputs) on /dec and /dec/time. From 992px up they
// sit in the right margin: the block is 0 high and stacks its inputs upward
// from its top edge (asset/style.css). The block comes before the toggles
// and the map table in the source, so the table stays directly above the
// map on phones; here we move the block's top edge down to the bottom of
// the map table, so the projection menu ends flush with the table and the
// controls sit right above the map, to the right of the table.
(() => {
  const wide = matchMedia("(min-width: 992px)");
  const align = () => {
    const box = document.querySelector(".marginInputs");
    const table = document.querySelector("#maptable table");
    if (!box) return;
    box.style.top = "";
    if (!wide.matches || !table) return;
    box.style.top = "0px";
    const shift = table.getBoundingClientRect().bottom - box.getBoundingClientRect().top;
    box.style.top = `${shift}px`;
  };
  let queued = false;
  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; align(); });
  };
  const start = () => {
    const box = document.querySelector(".marginInputs");
    if (!box) return;
    // The toggles and the table are filled in by OJS after load, and the
    // table can change height (fonts, edits), so watch everything between
    // the block and the map.
    const ro = new ResizeObserver(queue);
    ro.observe(box.parentElement);
    for (let el = box.nextElementSibling; el; el = el.nextElementSibling) {
      ro.observe(el);
      if (el.querySelector("#maptable") || el.id === "maptable") break;
    }
    wide.addEventListener("change", queue);
    queue();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
