// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2eda(unix, offset = 719468) {
  const tzo = -Math.round(
    (new Date).getTimezoneOffset() / 144
  );
  return [
    (unix ?? Date.now()) / 86400000
    + (tzo + (tzo < 0 ? 10 : 0)) / 10
    + offset, tzo]
}
function eda2wda(eda = 719468, tzo = 0) {
  return (eda + (tzo < 0 ? 2 : 3)) % 7
}
function eda2yd(eda, tzo) {
  const coe = Math.floor((
      eda >= 0 ? eda
      : eda - 146096
    ) / 146097),
  doc = eda - coe * 146097,
  yoc = Math.floor((doc
    - Math.floor(doc / 1460)
    + Math.floor(doc / 36524)
    - Math.floor(doc / 146096)
  ) / 365);
  return [
    yoc + coe * 400,
    doc - (yoc * 365
      + Math.floor(yoc / 4)
      - Math.floor(yoc / 100)
), tzo]}
function eda2snap(eda, tzo) {
  const [year, ada] = eda2yd(eda),
    wda = eda2wda(eda, tzo),
    bow = ada - wda;
  return `${
    year.toString().padStart(4, "0")}${
    bow < 0 ? "-" : "+"}${
    String(Math.abs(bow)).padStart(3, "0")}+${
    wda.toFixed(5).padStart(7, "0")}-${
    tzo + (tzo < 0 ? 10 : 0)}`
}
function setSnap() {
  document.getElementById("snap").innerText = eda2snap(...unix2eda());
}
const nbc = document.getElementsByClassName("navbar-brand-container"),
  cal = document.createElement("i"),
  snap = document.createElement("div"),
  tik = document.createElement("i");//,
  //url = new URLSearchParams(window.location.search);
cal.classList.add("bi", "bi-calendar");
cal.setAttribute("role", "img");
snap.setAttribute("id", "snap");
tik.classList.add("bi", "bi-clock");
tik.setAttribute("role", "img");
nbc[0].appendChild(cal);
nbc[0].appendChild(snap);
nbc[0].appendChild(tik);
setInterval(setSnap);
// function isNumeric(x){
//   return !isNaN(x) && !isNaN(parseFloat(x)) && isFinite(x)
// }
  // parse url parameters
  // if no params, do nothing
// if (url.size > 0) {
//   const numericEntries = Object.fromEntries(url.entries().filter(
//     ([k, v]) => isNumeric(k) || k === "")
//   )

  // const key = url.keys().filter(x =>).toArray(),
  // val = url.values().filter(v => !isNaN(v) && !isNaN(parseFloat(v)) && isFinite(v)).toArray();
// }
