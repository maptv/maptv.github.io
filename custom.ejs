// http://howardhinnant.github.io/date_algorithms.html#civil_from_days
function dote2doty(days = 719468) {
    const era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
        dotc = days - era * 146097,
        yotc = Math.floor((dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
    return [yotc + era * 400, dotc + Math.floor(yotc / 100) - yotc * 365 - Math.floor(yotc / 4)];
}
function unix2doty(ms = 0) {
  return dote2doty(ms / 86400000 + 719468)
}
const dates = document.getElementsByClassName("listing-date")
[...dates].map(i => i.innerText = unix2doty(i.innerText).map(i => Math.floor(i)).join("+"))
