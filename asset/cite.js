// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2dote(unix, zone, offset = 719468) {
  return [(unix ?? Date.now()) / 86400000 + (
    zone = zone ?? -Math.round(
      (new Date).getTimezoneOffset() / 144)
    ) / 10 + offset, zone]
}
function dote2date(dote, zone = 0) {
  const cote = Math.floor((
      dote >= 0 ? dote
      : dote - 146096
    ) / 146097),
  dotc = dote - cote * 146097,
  yotc = Math.floor((dotc
    - Math.floor(dotc / 1460)
    + Math.floor(dotc / 36524)
    - Math.floor(dotc / 146096)
  ) / 365);
  return [
    yotc + cote * 400,
    dotc - (yotc * 365
      + Math.floor(yotc / 4)
      - Math.floor(yotc / 100)
  ), zone]}
function date2deco(year = 1969, doty = 306) {
  return `${year.toString().padStart(4, "0")}+${Math.floor(doty).toString().padStart(3, "0")}`
}
const qac = document.querySelector("div.csl-entry.quarto-appendix-citeas"),
  bib = document.querySelector("code.sourceCode.bibtex"),
  pub = document.querySelector("div.quarto-title-meta-contents > p.date")
  now = date2deco(...dote2date(...unix2dote())),
  arr = [pub.innerText, now];
let counter = 0; bib.innerText = bib.innerText.replace(/2024/g, match => ++counter > 1 ? arr[counter - 2] : match);
qac.innerText = qac.innerText.replace(/2024/g, match => ++counter === 4 ? pub.innerText : now);
