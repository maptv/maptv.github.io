document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
   * 1. Inline footnote references
   *    <a class="footnote-ref" id="fnrefN" href="...#fnN"><sup>N</sup></a>
   * ============================================================ */
  document.querySelectorAll('a.footnote-ref').forEach(ref => {
    const sup = ref.querySelector('sup');
    if (!sup) return;

    const oldNum = parseInt(sup.textContent, 10);
    if (isNaN(oldNum) || oldNum <= 0) return;

    const newNum = oldNum - 1;

    // visible number
    sup.textContent = newNum;

    // id: fnrefN → fnref(N-1)
    if (ref.id) {
      ref.id = ref.id.replace(/\d+$/, newNum);
    }

    // href: ...#fnN → ...#fn(N-1)
    const href = ref.getAttribute('href');
    if (href) {
      ref.setAttribute('href', href.replace(/#fn\d+$/, `#fn${newNum}`));
    }

    // data-original-href
    if (ref.dataset.originalHref) {
      ref.dataset.originalHref =
        ref.dataset.originalHref.replace(/#fn\d+$/, `#fn${newNum}`);
    }
  });

  /* ============================================================
   * 2. Footnote list items and backlinks
   *    <li id="fnN"> ... <a class="footnote-back" href="...#fnrefN">
   * ============================================================ */
  const footnotes = document.querySelector('section#footnotes');
  if (!footnotes) return;

  footnotes.querySelectorAll('li[id^="fn"]').forEach(li => {
    const match = li.id.match(/^fn(\d+)$/);
    if (!match) return;

    const oldNum = parseInt(match[1], 10);
    if (oldNum <= 0) return;

    const newNum = oldNum - 1;

    // li id
    li.id = `fn${newNum}`;

    // backlink
    const back = li.querySelector('a.footnote-back');
    if (!back) return;

    const backHref = back.getAttribute('href');
    if (backHref) {
      back.setAttribute(
        'href',
        backHref.replace(/#fnref\d+$/, `#fnref${newNum}`)
      );
    }

    if (back.dataset.originalHref) {
      back.dataset.originalHref =
        back.dataset.originalHref.replace(/#fnref\d+$/, `#fnref${newNum}`);
    }
  });

});
