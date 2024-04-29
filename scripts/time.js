// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2dote(unix, zone) {
  return [(unix ?? Date.now()) / 86400000 + 719467.6 + (zone = zone ?? 4 - Math.round((new Date).getTimezoneOffset() / 144)) / 10, zone]
}
function dote2doty(dote = 719468, zone = 0) {
  const cykl = Math.floor((dote >= 0 ? dote : dote - 146096) / 146097), dotc = dote - cykl * 146097,
        yotc = Math.floor((dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
  return [yotc + cykl * 400, dotc + Math.floor(yotc / 100) - yotc * 365 - Math.floor(yotc / 4), zone];
}
function doty2deco(year = 1969, doty = 306, zone = 0) {
  return `${year.toString().padStart(4, "0")}+${Math.floor(doty).toString().padStart(3, "0")}${String(doty % 1).slice(1, 7)}.${zone}`
}
const nbc = document.getElementsByClassName("navbar-brand-container");
const div = document.createElement("div");
const cal = document.createElement("i");
cal.classList.add("bi", "bi-calendar");
cal.setAttribute("role", "img");
const tik = document.createElement("i");
tik.classList.add("bi", "bi-clock");
tik.setAttribute("role", "img");
div.setAttribute("id", "deco");
nbc[0].appendChild(cal);
nbc[0].appendChild(div);
nbc[0].appendChild(tik);
setInterval(() => document.getElementById("deco").innerText = doty2deco(...dote2doty(...unix2dote())) );
