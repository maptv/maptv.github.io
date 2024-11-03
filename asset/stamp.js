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
function dote2dotw(d = 719468) {
  return d >= -3 ? (d + 3) % 7 : (d + 4) % 7 + 6
}
function doty2date(year = 1969, doty = 306, dotw = 4) {
  dotw = Math.floor(dotw)
  doty = Math.floor(doty)
  doty = doty - dotw
  return `${year.toString().padStart(4, "0")}${doty < 0 ? "-" : "+"}${Math.abs(doty).toString().padStart(3, "0")}+${dotw}`
}
function doty2time(doty = 306, zone = 0) {
  return `${(doty % 1 * 10).toFixed(4)}${zone < 0 ? "+" : "-"}${Math.abs(zone)}`
}
function setStamp() {
  const [dote, zone] = unix2dote(), [y, d, z] = dote2date(dote, zone);
  document.getElementById("date").innerText = doty2date(y, d, dote2dotw(dote));
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
