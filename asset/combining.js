// Runtime counterpart of asset/combining.lua for text that only exists once
// OJS runs (e.g. [${TminusColor1}]{.overline}): adds the hidden span.cm
// combining mark after each accented character, so copied text keeps the
// accent. Already-marked characters are skipped, so it can rerun safely.
(() => {
  const marks = {
    overline: "\u0305",
    grave: "\u0300",
    acute: "\u0301",
    acutegrave: "\u033D",
    doublegrave: "\u030F",
    doubleacute: "\u030B",
  };
  const selector = Object.keys(marks).map(c => "." + c).join(",");

  function cm(mark) {
    const span = document.createElement("span");
    span.className = "cm";
    span.textContent = mark;
    return span;
  }

  const hasMark = node => node.nextSibling?.classList?.contains("cm");

  function textNodes(el) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.data.trim() && !n.parentElement.closest(".cm")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function addMarks(el) {
    const cls = Object.keys(marks).find(c => el.classList.contains(c));
    const mark = marks[cls];
    const nodes = textNodes(el);

    if (cls !== "overline") {
      // An accent sits on the last character only.
      const last = nodes.at(-1);
      if (last && !hasMark(last)) last.after(cm(mark));
      return;
    }
    // A vinculum covers every character.
    for (const node of nodes) {
      const chars = [...node.data];
      if (chars.length === 1 && hasMark(node)) continue;
      const frag = document.createDocumentFragment();
      for (const ch of chars) {
        frag.append(ch);
        if (ch.trim()) frag.append(cm(mark));
      }
      node.replaceWith(frag);
    }
  }

  document.querySelectorAll(selector).forEach(addMarks);

  // OJS replaces its output whenever a value changes (e.g. the countdown).
  new MutationObserver(records => {
    for (const record of records) {
      const target = record.target.nodeType === Node.ELEMENT_NODE
        ? record.target
        : record.target.parentElement;
      const el = target?.closest(selector);
      if (el) addMarks(el);
    }
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
})();
