// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function dote2doty(days = 719468) {
    const era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
        dotc = days - era * 146097,
        yotc = Math.floor((dotc - Math.floor(dotc / 1460)
        + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
    return [yotc + era * 400, dotc + Math.floor(yotc / 100)
        - yotc * 365 - Math.floor(yotc / 4)];
};
function unix2doty(ms = 0) { return dote2doty(ms / 86400000 + 719468) };
function doty2deco(year = 1969, doty = 306, zone = 0) {
    [date, time] = doty.toString().split(".")
    return `${year}+${date.toString().padStart(3, "0")}.${
    time.toString().slice(0, 5).padStart(5, "0")}`;
};
function unix2deco(ms = 0) { return doty2deco(...unix2doty(ms)) };
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
setInterval(() => document.getElementById("deco").innerText =
  unix2deco(Date.now()).slice(0, 14), 86.4);