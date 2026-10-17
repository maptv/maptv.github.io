// Each glossary entry links back to the first use of its term (e.g. #millijing).
// The glossary is shared by several articles, so when the current page never uses
// a term, its backlink is sent to the first article that does.
(() => {
  const pages = ["/dec/", "/dec/date/", "/dec/time/"];
  const idsOf = {};
  const loadIds = page => idsOf[page] ??= fetch(page)
    .then(r => (r.ok ? r.text() : ""))
    .then(html => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1])))
    .catch(() => new Set());
  const dir = path => path.replace(/index\.html$/, "");

  document.addEventListener("click", async e => {
    const a = e.target.closest("#gloslist a[href*='#']");
    if (!a || dir(a.pathname) !== dir(location.pathname)) return;
    const id = decodeURIComponent(a.hash.slice(1));
    if (!id || document.getElementById(id)) return;
    e.preventDefault();
    for (const page of pages) {
      if (page === dir(location.pathname)) continue;
      if ((await loadIds(page)).has(id)) {
        location.href = `${page}#${id}`;
        return;
      }
    }
  });
})();
