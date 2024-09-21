// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2doty() {
  const dote = Date.now() / 86400000 + 719468,
    cykl = Math.floor((
      dote >= 0 ? dote
      : dote - 146096
    ) / 146097),
  dotc = dote - cykl * 146097,
  yotc = Math.floor((dotc
    - Math.floor(dotc / 1460)
    + Math.floor(dotc / 36524)
    - Math.floor(dotc / 146096)
  ) / 365);
  return [
    yotc + cykl * 400,
    dotc - (yotc * 365
      + Math.floor(yotc / 4)
      - Math.floor(yotc / 100)
)]}
function doty2date(year = 1969, doty = 306) {
  return `${year.toString().padStart(4, "0")}+${Math.floor(doty).toString().padStart(3, "0")}`
}
const qac = document.querySelector("div.csl-entry.quarto-appendix-citeas"),
  bib = document.querySelector("code.sourceCode.bibtex"),
  pub = document.querySelector("div.quarto-title-meta-contents > p.date")
  now = doty2date(...unix2doty()),
  arr = [pub.innerText, now];
let counter = 0; bib.innerText = bib.innerText.replace(/2024/g, match => ++counter > 1 ? arr[counter - 2] : match);
qac.innerText = qac.innerText.replace(/2024/g, match => ++counter === 4 ? pub.innerText : now);
