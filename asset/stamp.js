// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2dote(unix, zone) {
  return [
    (unix ?? Date.now()) / 86400000
    + (zone = zone ?? (
      10 - Math.round((new Date)
        .getTimezoneOffset() / 144)
    ) % 10) / 10 + 719468, zone]}
function dote2doty(dote, zone = 0) {
  const socy = Math.floor((
      dote >= 0 ? dote
      : dote - 146096
    ) / 146097),
  dotc = dote - socy * 146097,
  yotc = Math.floor((dotc
    - Math.floor(dotc / 1460)
    + Math.floor(dotc / 36524)
    - Math.floor(dotc / 146096)
  ) / 365);
  return [
    yotc + socy * 400,
    dotc - (yotc * 365
      + Math.floor(yotc / 4)
      - Math.floor(yotc / 100)
  ), zone]}
function doty2date(year = 1969, doty = 306) {
  return `${year.toString().padStart(4, "0")}+${Math.floor(doty).toString().padStart(3, "0")}`
}
function doty2time(doty = 306, zone = 0) {
  return `${String(doty % 1 * 10).slice(0, 6)}-${zone}`
}
function setStamp() {
  [y, d, z] = dote2doty(...unix2dote());
  document.getElementById("date").innerText = doty2date(y, d);
  document.getElementById("time").innerText = doty2time(d, z);
}
function isNumeric(x){
  return !isNaN(x) && !isNaN(parseFloat(x)) && isFinite(x)
}
const nbc = document.getElementsByClassName("navbar-brand-container"),
  dat = document.createElement("div"),
  tim = document.createElement("div"),
  cal = document.createElement("i"),
  tik = document.createElement("i"),
  url = new URLSearchParams(window.location.search);
  // parse url parameters
  // if no params, do nothing
if (url.size > 0) {
  const numericEntries = Object.fromEntries(url.entries().filter(
    ([k, v]) => isNumeric(k) || k === "")
  )
  
  // const key = url.keys().filter(x =>).toArray(),
  // val = url.values().filter(v => !isNaN(v) && !isNaN(parseFloat(v)) && isFinite(v)).toArray();

}
cal.classList.add("bi", "bi-calendar");
cal.setAttribute("role", "img");
tik.classList.add("bi", "bi-clock");
tik.setAttribute("role", "img");
dat.setAttribute("id", "date");
tim.setAttribute("id", "time");
nbc[0].appendChild(cal);
nbc[0].appendChild(dat);
nbc[0].appendChild(tik);
nbc[0].appendChild(tim);
setInterval(setStamp);
