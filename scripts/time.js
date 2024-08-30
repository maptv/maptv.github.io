// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2dote(unix, zone, offset = 719468) {
  return [
    (unix ?? Date.now()) / 86400000
    + (zone = zone ?? (10 - Math.round(
        (new Date).getTimezoneOffset() / 144)) % 10
      ) / 10 + offset, zone]
}
function dote2doty(dote = 719468, zone = 0) {
  const socy = Math.floor((dote >= 0 ? dote : dote - 146096) / 146097), dotc = dote - socy * 146097,
    yotc = Math.floor((dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
  return [yotc + socy * 400, dotc + Math.floor(yotc / 100) - yotc * 365 - Math.floor(yotc / 4), zone];
}
function doty2date(year = 1969, doty = 306) {
  return `${year.toString().padStart(4, "0")}+${Math.floor(doty).toString().padStart(3, "0")}`
}
function doty2time(year = 1969, doty = 306, zone = 0) {
  return `${String(doty % 1 * 10).slice(0, 6)}-${zone}`
}
function doty2time(year = 1969, doty = 306, zone = 0) {
  return `${String(doty % 1 * 10).slice(0, 6)}-${zone}`
}
function setStamp() {
  document.getElementById("date").innerText = doty2date(...dote2doty(...unix2dote()));
  document.getElementById("time").innerText = doty2time(...dote2doty(...unix2dote()));
}

const nbc = document.getElementsByClassName("navbar-brand-container"),
  dat = document.createElement("div"),
  tim = document.createElement("div"),
  cal = document.createElement("i"),
  tik = document.createElement("i"),
  dot = document.createElement("i"),
  url = new URLSearchParams(window.location.search),
  key = url.keys().filter(v => !isNaN(v) && !isNaN(parseFloat(v)) && isFinite(v)).toArray(),
  val = url.values().filter(v => !isNaN(v) && !isNaN(parseFloat(v)) && isFinite(v)).toArray();
console.log("k", [...url.keys()])
console.log("v", [...url.values()])
console.log("v", val)
console.log("k", key)
cal.classList.add("bi", "bi-calendar");
cal.setAttribute("role", "img");
tik.classList.add("bi", "bi-clock");
tik.setAttribute("role", "img");
dat.setAttribute("id", "date");
tim.setAttribute("id", "time");
dot.setAttribute("id", "dote");
nbc[0].appendChild(cal);
nbc[0].appendChild(dat);
nbc[0].appendChild(tik);
nbc[0].appendChild(tim);
nbc[0].appendChild(dot);
setInterval(setStamp);
