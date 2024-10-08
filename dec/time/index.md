# Ordinal date
Martin Laptev
2024+208

- [Dec dates](#dec-dates)

My website serves as a demonstration of both the
[Quarto](https://quarto.org) publishing system and the [Dec](../../dec)
measurement system. I use several clever hacks to get Quarto to display
all of the dates on my website in the Dec `year+day` format. If you are
not interested in Dec dates, you may want to skip to the section on
Quarto [filters](https://quarto.org/docs/extensions/filters.html),
[render
scripts](https://quarto.org/docs/projects/scripts.html#pre-and-post-render),
and [include
files](https://quarto.org/docs/output-formats/html-basics.html#includes).

### Dec dates

The `year+day` format of Dec dates is derived from the year of the era
equation:
$\colorbox{yellow}{y}{=}\lfloor\colorbox{yellow}{y}\rfloor{+}\colorbox{cyan}{d}{\div}\colorbox{orange}{n}$.
In this equation, $\colorbox{yellow}{y}$ is the decimal years since the
Dec epoch (Year 0 <span class="blue" data-bs-toggle="tooltip"
data-bs-title="March 1"><u>Day 0</u></span>),
$\lfloor\colorbox{yellow}{y}\rfloor$ is $\colorbox{yellow}{y}$
[floored](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=the%20greatest%20integer%20less%20than%20or%20equal%20to%20x)
to obtain an
[integer](https://en.wikipedia.org/wiki/Integer#:~:text=the%20number%20zero%20%280%29%2C%20a%20positive%20natural%20number%20%281%2C%202%2C%203%2C%20.%20.%20.%29%2C%20or%20the%20negation%20of%20a%20positive%20natural%20number%20%28%E2%88%921%2C%20%E2%88%922%2C%20%E2%88%923%2C%20.%20.%20.%29)
year, $\colorbox{cyan}{d}$ is the
[zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
day of the year, and $\colorbox{orange}{n}$ is the total number of days
in the year. The current values in this equation are:
`{ojs} styledDecoYear0`

Dec dates only include the first two terms from the equation above
($\colorbox{yellow}{y}$ and $\colorbox{cyan}{d}$), because
$\colorbox{orange}{n}$ is not needed to identify a specific date in
time, only has 2 possible values (365 or 366), remains constant for long
periods of time (366, 1095, or 2920 days), and can be calculated using
the Dec year length equation:

$$\colorbox{orange}{n}=\begin{cases}
  366&{\begin{align}\text{if } (\lfloor \colorbox{yellow}{y}\rfloor+1)\text{ \\ }4=0\\
  \land(\lfloor \colorbox{yellow}{y}\rfloor+1)\text{ \\ }100\neq0\\
  \lor(\lfloor \colorbox{yellow}{y}\rfloor+1)\text{ \\ }400=0\end{align}}\\\\
  365&{\text{otherwise.}}\end{cases}$$

In the Dec year length equation, $\text\\$ is the
[modulo](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
operator, ∧ is the logical
[conjunction](https://en.wikipedia.org/wiki/Logical_conjunction)
operator, and ∨ is the logical
[disjunction](https://en.wikipedia.org/wiki/Logical_disjunction)
operator. The easiest way to explain this equation is in terms of the
[Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world):
the length of a Dec year is 366 days if the subsequent year
($\lfloor\colorbox{yellow}{y}\rfloor{+}1$ ) is a Gregorian calendar
[leap
year](https://en.wikipedia.org/wiki/Leap_year#:~:text=Every%20year%20that%20is%20exactly%20divisible%20by%20four%20is%20a%20leap%20year%2C%20except%20for%20years%20that%20are%20exactly%20divisible%20by%20100%2C%20but%20these%20centurial%20years%20are%20leap%20years%20if%20they%20are%20exactly%20divisible%20by%20400)
and 365 days otherwise.

Dec dates look almost identical to [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
[ordinal
dates](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates:~:text=an%20ordinal%20format%20for%20the%20multiples%20of%20a%20day%20elapsed%20since%20the%20start%20of%20year).
On the surface, it appears that the only difference is their
[delimiter](https://en.wikipedia.org/wiki/Delimiter#:~:text=a%20sequence%20of%20one%20or%20more%20characters%20for%20specifying%20the%20boundary%20between%20separate%2C%20independent%20regions%20in%20plain%20text)
(`+` versus `-`), but they also have different [starting
values](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
(0 versus 1),
[epochs](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era)
(Year 0 <span class="blue" data-bs-toggle="tooltip"
data-bs-title="March 1"><u>Day 0</u></span> versus Year -1
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="January 1"><u>Day 306</u></span>), and [year
length](https://en.wikipedia.org/wiki/Intercalation_(timekeeping)#:~:text=the%20insertion%20of%20a%20leap%20day%2C%20week%2C%20or%20month)
equations ($\lfloor\colorbox{yellow}{y}\rfloor{+}1$ versus
$\lfloor\colorbox{yellow}{y}\rfloor$).

Unlike ISO 8601 dates, Dec dates can omit the year and track annual
events such as anniversaries. Use the sliders below to select a special
date like your birthday🎂! You can also press the Play▶️button below to
make the sliders cycle🔄back and forth through every day of the year and
its corresponding month and day of the month.

``` {ojs}
//| echo: false
viewof scrubberDoty = Scrubber(numbers, {autoplay: false, alternate: true, delay: 86.4, loopDelay: 864, format: y => "", inputStyle: "display:none;"})
viewof inputDoty = Inputs.range([0, 365], {value: 306, step: 1, label: "day of the year"});
viewof monthInput = transformInput(
    Inputs.range([1, 12], {step: 1, label: "month"}),
    {bind: viewof inputDoty, transform: doty2month, invert: month2doty}
);
viewof dotmInput = transformInput(
    Inputs.range([1, 31], {step: 1, label: "day of the month"}),
    {bind: viewof inputDoty, transform: doty2dotm, invert: (x => Math.floor(( 153 * (
        viewof monthInput.value > 2
        ? viewof monthInput.value - 3
        : viewof monthInput.value + 9) + 2
    ) / 5 + x - 1
))});
```

<div class="grid">

<div class="g-col-7">

``` {ojs}
//| echo: false
viewof yd = Inputs.form([
  Inputs.number({label: "year", value: "1969"}),
  Inputs.number({label: "doty", value: "306"})
])
```

``` {ojs}
//| echo: false
viewof decoOutput = transformInput(
  Inputs.text({label: "deco", placeholder: "year+day.ddd", value: "1969+306"}),
  {bind: viewof yd, transform: doty2deco, invert: deco2doty});
```

</div>

</div>

<div class="grid">

<div class="g-col-7">

``` {ojs}
//| echo: false
viewof inputDatetime = Inputs.datetime({label: "date", value: `${decoYear}-03-01T00:00`})
```

</div>

<div class="g-col-5">

1.  ${dtYear}+${dtDotyDate}${dtDotyTimeDelimiter}${dtDotyTime}
2.  ${styledOutputDatetimeYear}

</div>

</div>

A Dec beat is a centimilliday (10<sup>−5</sup> of a day), which can be
thought of as a heart❤️beat or
musical🎵[beat](https://en.wikipedia.org/wiki/Beat_(music)#:~:text=the%20beat%20is%20the%20basic%20unit%20of%20time)
with a constant
[rate](https://en.wikipedia.org/wiki/Heart_rate#:~:text=The%20American%20Heart%20Association%20states%20the%20normal%20resting%20adult%20human%20heart%20rate%20is%2060%2D100%20bpm.)
or
[tempo](https://en.wikipedia.org/wiki/Tempo#Basic_tempo_markings:~:text=Adagietto%20%E2%80%93%20slower%20than,56%E2%80%93108%C2%A0bpm)
of $69.\overline4$ beats per minute.

Dec dates and times are measured in days. The [subsequent
article](../../dec/time) on my website covers Dec times. While Dec dates
The units for both Dec dates and times are days, but on different
scales. decidays (tenths of a day), and beats, respectively. An example
of a duration is the time since this webpage was loaded:
${styledTickTime}.

Dec does not use months or days of the month, but dates can be include a
year can be entered using numeric or text inputs. Similarly, the second
Play▶️button below will go through every day of the year in the current
year. The `day` in `year+day` dates can therefore function independently
to represent the date of an event that occurs on the same day of the
year on an annual basis.

The animations above goes through an entire year in 36.5 beats, a
million times faster🏎️than the actual speed of time! A Dec beat is a
centimilliday (1% of a milliday, 10<sup>−5</sup> of a day, or 86.4% of a
second), which can be thought of as a heart❤️beat or
musical🎵[beat](https://en.wikipedia.org/wiki/Beat_(music)#:~:text=the%20beat%20is%20the%20basic%20unit%20of%20time)
with a constant
[rate](https://en.wikipedia.org/wiki/Heart_rate#:~:text=The%20American%20Heart%20Association%20states%20the%20normal%20resting%20adult%20human%20heart%20rate%20is%2060%2D100%20bpm.)
or
[tempo](https://en.wikipedia.org/wiki/Tempo#Basic_tempo_markings:~:text=Adagietto%20%E2%80%93%20slower%20than,56%E2%80%93108%C2%A0bpm)
of 69.4̅ beats per minute. In addition to displaying time on
clocks🕰️and⌚️watches, beats can be used to measure durations, such as
the time since this webpage was loaded: ${styledTickTime}.

Using the [Observable](https://observablehq.com/about) [datetime
input](https://observablehq.com/@observablehq/input-date#cell-111) in
**?@exm-intro-date**, you can select a year, month, `dotm`, hour, and
minute to see the equivalent 1) `deco` timestamp (`year+day.clock`) and
2) year date (`year.yyy`) in **?@lst-intro-date**. For comparison, the
current `deco` timestamp is
${styledYear}+${styledDotyDate1}.${styledDotyTime1}.

For example, the current day of the year (doty) is Day `{ojs} decoDate`.

60-day shift

Animation

Conversion functions year to year, doty to month and dotm, and vice
versa. Conclusion: it is easier to work with unix time.

Can we also find the day of the week? First, use dote2dotw function.
Conclusion: it is easier to work with deks instead of weeks.

days of the dek

Dec finger counting method svg

The Dec epoch, . This 60-day shift enables simplest way to describe Dec
dates my website are based on the [Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world),
but any calendar with fixed rules can be turned in a Dec calendar
(Decalendar) by expressing its dates as zero-based moving its starting
point ().

with simple arithmetic, Decalendar is
[perennial](https://en.wikipedia.org/wiki/Perennial_calendar#:~:text=applies%20to%20any%20year%2C%20keeping%20the%20same%20dates),
meaning that its features remain the same every year. Any

This major Dec dates can be omit the year and still be unequivocally
converted into a month and a day [start counting days from
zero](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
and do not need omit the year .

The first of the Dec year, [Day 0](), corresponds to Day 59 or Day 60
have a different starting point while ISO 8601 ordinal dates start
counting [from one](). Unlike ISO 8601 ordinal dates, Dec dates can omit
the year and still be useful. are zero-based and can the ordinal day
component of Dec dates can be unequivocally converted into [Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
dates Dec addresses the two major flaws of the by moving the start of
the year to March 1. When Leap Day is the last day of the year, the day
numbers (indexes) used by Decalendar remain constant year to year.
Starting the year on March 1 also brings Decalendar in better alignment
with the [metereological
seasons](https://en.wikipedia.org/wiki/Season#:~:text=meteorological%20seasons%20are%20reckoned%20by%20temperature%2C%20with%20summer%20being%20the%20hottest%20quarter%20of%20the%20year%20and%20winter%20the%20coldest%20quarter%20of%20the%20year).

Dec dates overcome several major flaws with the Gregorian calendar. The
`day` in `year+day` dates is referred to as the “day of the year” or
doty.

a single number that can identify specific days of the year (like months
and days of the month) and coordinate schedules of work and rest days
(like weeks and days of the week). Essentially, Dec greatly simplifies
the [Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
by replacing months and weeks with units called deks.

[Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
dates are not aligned with the days of the week. In contrast, the day of
the dek (dotd) is simply the last digit of the `day` number in the .y
format.

The `day` in `year+day` dates is a single number that can identify
specific days of the year (like months and days of the month) and
coordinate schedules of work and rest days (like weeks and days of the
week). Essentially, Dec greatly simplifies the [Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
by replacing months and weeks with units called deks.

Unlike months and weeks, deks are 10 days long and thus work well with
our decimal number system. The dek and day of the dek are provided by
the first two digits and the last digit of the 3-digit `day` number in
Dec dates, respectively. For example, the current dek is Dek
`{ojs} deco.slice(5, 7)` and the current day of the dek is Day
`{ojs} deco[7]`.

The most prominent Dec date on my site is the one in the Dec
[timestamp](https://en.wikipedia.org/wiki/Timestamp#:~:text=a%20sequence%20of%20characters%20or%20encoded%20information%20identifying%20when%20a%20certain%20event%20occurred)
in [navigation
bar](https://en.wikipedia.org/wiki/Navigation_bar#:~:text=a%20section%20of%20a%20graphical%20user%20interface%20intended%20to%20aid%20visitors%20in%20accessing%20information)
(navbar) above:
${styledDecoYear0}+${styledDecoDate0}${styledDecoTime0}-${styledTimeZone0}.
In this article, I will focus only on Dec dates
(${styledDecoYear1}+${styledDecoDate1}), but I will discuss Dec times
(${styledDecoTime1}-${styledTimeZone1}) in the [next
article](../../dec/time) in the [Measurement section](../../dec).

I generate all of the dates on my site from [UNIX
time](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201st%C2%A0January%201970%2C%20the%20Unix%20epoch)
using calculations that I adapted from the
[`civil_from_days`](https://howardhinnant.github.io/date_algorithms.html#civil_from_days)
function in [Howard Hinnant](https://howardhinnant.github.io)’s [`date`
library](https://howardhinnant.github.io/date/date.html). Each tab in
the [tabset
panel](https://quarto.org/docs/interactive/layout.html#:~:text=Tabset%20Panel,-If%20you%20want%20to%20allow)
below shows a different implementation of a function called `unix2date`
which converts UNIX time into `year+day` dates.

In this function, `socy` is an abbreviation for solar cycle and `dote`,
`dotc`, and `yotc` are acronyms for “day of the era”, “day of the
cycle”, and “day of the cycle”, respectively. A solar cycle in the
Gregorian calendar is [400
years](https://en.wikipedia.org/wiki/Solar_cycle_%28calendar%29#:~:text=400%2Dyear%20cycle%20of%20the%20Gregorian%20calendar).
A [calendar
era](https://en.wikipedia.org/wiki/Calendar_era#:~:text=the%20period%20of%20time%20elapsed%20since%20one%20epoch%20of%20a%20calendar)
is the time that has passed since a starting point called a [calendar
epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era).
The Dec epoch is <span class="blue" data-bs-toggle="tooltip"
data-bs-title="0000-03-01"><u>Year 0 Day 0</u></span>.

``` {ojs}
//| echo: false
unix = {
  while(true) {
    yield Date.now();
  }
}
tick = {
  let i = 0;
  while (true) {
    yield Promises.tick(864, ++i);
  }
}
tickTime = tick % 1e5
// http://howardhinnant.github.io/date_algorithms.html#civil_from_days
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
function doty2deco(year = 1969, doty = 306, zone = 0) {
  return `${year.toString().padStart(4, "0")}+${Math.floor(doty).toString().padStart(3, "0")}${String(doty % 1 * 10).slice(0, 6)}-${zone}`
}
ydz = dote2doty(...unix2dote(unix))
deco = doty2deco(...ydz)
// https://observablehq.com/@observablehq/text-color-annotations-in-markdown#textcolor
function setStyle(content, style = {}) {
  function yiq(color) {
    const {r, g, b} = d3.rgb(color);
    return (r * 299 + g * 587 + b * 114) / 1000 / 255; // returns values between 0 and 1
  }
  const {
    background,
    color = yiq(background) >= 0.6 ? "#111" : "white",
    padding = "0 1px",
    borderRadius = "4px",
    fontWeight = 900,
    fontSize = "1em",
    ...rest
  } = typeof style === "string" ? {background: style} : style;
  return htl.html`<span style=${{
    background,
    color,
    padding,
    borderRadius,
    fontWeight,
    ...rest
  }}>${content}</span>`;
}
function year2bool(year = 1970) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
decoYear = deco.slice(0, 4)
decoDate = deco.slice(5, 8)
decoTime = deco.slice(8, 14)
decoTimeZone = deco[15]
nDaysInYear = 365 + year2bool(ydz[0] + 1)
fracYear = (ydz[0] + (ydz[1] - ydz[2]) / nDaysInYear).toFixed(8)
styledDecoYear0 = setStyle(decoYear, d3.schemePaired[10])
styledDecoYear1 = setStyle(decoYear, d3.schemePaired[10])
styledFracYear = setStyle(fracYear, d3.schemePaired[10])
styledDecoDate0 = setStyle(decoDate, d3.schemePaired[1])
styledDecoDate1 = setStyle(decoDate, d3.schemePaired[1])
styledNdays = setStyle(nDaysInYear * 10, d3.schemePaired[1])
styledDecoTime0 = setStyle(decoTime, d3.schemePaired[2])
styledDecoTime1 = setStyle(decoTime, d3.schemePaired[2])
styledDecoTime2 = setStyle(decoTime, d3.schemePaired[2])
styledTimeZone0 = setStyle(decoTimeZone, d3.schemePaired[3])
styledTimeZone1 = setStyle(decoTimeZone, d3.schemePaired[3])
styledTimeZone2 = setStyle(decoTimeZone, d3.schemePaired[3])
styledTickTime = setStyle(tickTime, d3.schemePastel2[0])
// https://observablehq.com/@juang1744/transform-input/1
transformInput = function(target, {bind: source, transform = identity, involutory = false, invert = involutory ? transform : inverse(transform)} = {}){
  if (source === undefined) {
    source = target;
    target = html`<div>${source}</div>`;
  }
  function sourceInputHandler() {
    target.removeEventListener("input", targetInputHandler);
    setTransform(target).to(transform(source.value)).andDispatchEvent();
    target.addEventListener("input", targetInputHandler);
  }
  function targetInputHandler() {
    source.removeEventListener("input", sourceInputHandler);
    setTransform(source).to(invert(target.value)).andDispatchEvent();
    source.addEventListener("input", sourceInputHandler);
  }
  source.addEventListener("input", sourceInputHandler);
  target.addEventListener("input", targetInputHandler);
  invalidation.then(() => {
    source.removeEventListener("input", sourceInputHandler);
    target.removeEventListener("input", targetInputHandler);
  });
  sourceInputHandler();
  return target;
}
setTransform = (input) => ({to: (value) => (input.value = value, {andDispatchEvent: (event = new Event("input")) => input.dispatchEvent(event)})});
function inverse(f) {
  switch (f) {
    case identity:  return identity;
    case Math.sqrt: return square;
    case Math.log:  return Math.exp;
    case Math.exp:  return Math.log;
    default:        return (x => solve(f, x, x));
  }
  function solve(f, y, x = 0) {
    const dx = 1e-6;
    let steps = 100, deltax, fx, dfx;
    do {
      fx = f(x)
      dfx = (f(x + dx) - fx) || dx;
      deltax = dx * (fx - y)/dfx
      x -= deltax;
    } while (Math.abs(deltax) > dx && --steps > 0);
    return steps === 0 ? NaN : x;
  }
function square(x) {
    return x * x;
  }
}
function identity(x) {
  return x;
}
function doty2month(doty = 0) {
    const m = Math.floor((5 * doty + 2) / 153);
    return Math.floor(m < 10 ? m + 3 : m - 9);
}
function month2doty(month = 1) {
    return Math.floor(
        (153 * (month > 2 ? month - 3 : month + 9) + 2) / 5
)}
function doty2dotm(doty = 0) {
    const m = Math.floor((5 * doty + 2) / 153);
    return doty - Math.floor((153 * m + 2) / 5) + 1;
}
numbers = Array.from({length: 366}, (_, i) => i)
set(viewof inputDoty, scrubberDoty)
// https://observablehq.com/@observablehq/synchronized-inputs
function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}
// https://observablehq.com/@mbostock/scrubber
function Scrubber(values, {
  format = value => value,
  initial = 0,
  direction = 1,
  delay = null,
  autoplay = true,
  loop = true,
  loopDelay = null,
  alternate = false,
  inputStyle = ""
} = {}) {
  values = Array.from(values);
  const form = html`<form style="font: 18px var(--monospace); font-variant-numeric: tabular-nums; display: flex; height: 33px; align-items: center;">
  <button name=b type=button style="margin-right: 0.4em; width: 5em;"></button>
  <label style="display: flex; align-items: center;">
    <input name=i type=range min=0 max=${values.length - 1} value=${initial} step=1 style=${inputStyle}>
    <output name=o style="margin-left: 0.4em;"></output>
  </label>
</form>`;
  let frame = null;
  let timer = null;
  let interval = null;
  function start() {
    form.b.textContent = "Pause";
    if (delay === null) frame = requestAnimationFrame(tick);
    else interval = setInterval(tick, delay);
  }
  function stop() {
    form.b.textContent = "Play";
    if (frame !== null) cancelAnimationFrame(frame), frame = null;
    if (timer !== null) clearTimeout(timer), timer = null;
    if (interval !== null) clearInterval(interval), interval = null;
  }
  function running() {
    return frame !== null || timer !== null || interval !== null;
  }
  function tick() {
    if (form.i.valueAsNumber === (direction > 0 ? values.length - 1 : direction < 0 ? 0 : NaN)) {
      if (!loop) return stop();
      if (alternate) direction = -direction;
      if (loopDelay !== null) {
        if (frame !== null) cancelAnimationFrame(frame), frame = null;
        if (interval !== null) clearInterval(interval), interval = null;
        timer = setTimeout(() => (step(), start()), loopDelay);
        return;
      }
    }
    if (delay === null) frame = requestAnimationFrame(tick);
    step();
  }
  function step() {
    form.i.valueAsNumber = (form.i.valueAsNumber + direction + values.length) % values.length;
    form.i.dispatchEvent(new CustomEvent("input", {bubbles: true}));
  }
  form.i.oninput = event => {
    if (event && event.isTrusted && running()) stop();
    form.value = values[form.i.valueAsNumber];
    form.o.value = format(form.value, form.i.valueAsNumber, values);
  };
  form.b.onclick = () => {
    if (running()) return stop();
    direction = alternate && form.i.valueAsNumber === values.length - 1 ? -1 : 1;
    form.i.valueAsNumber = (form.i.valueAsNumber + direction) % values.length;
    form.i.dispatchEvent(new CustomEvent("input", {bubbles: true}));
    start();
  };
  form.i.oninput();
  if (autoplay) start();
  else stop();
  Inputs.disposal(form).then(stop);
  return form;
}
function unix2deco(ms = 0) {
    return doty2deco(unix2doty(ms));
};
function deco2doty(timestamp = "1969+306.00000Z") {
    const arr = timestamp.toString().split(/(?=[+-]|[a-zA-Z])/, 3);
    switch (arr.length) {
        case 1: return [unix2doty(Date.now())[0], parseFloat(arr[0]), 0];
        case 2: return (/^[a-zA-Z]+$/.test(arr[1]))
            ? [unix2doty(Date.now())[0], parseFloat(arr[0]), zone2hour(arr[1]) / 24]
            : [parseFloat(arr[0]), parseFloat(arr[1]), 0];
    };
    return [parseFloat(arr[0]), parseFloat(arr[1]), /^[a-zA-Z]+$/.test(arr[2])
        ? zone2hour(arr[2]) / 24
        : parseFloat(arr[2].replace(/([+-])/, "$1\."))];
}
function zone2hour(zone = "Z") {
    return (zone = zone.toUpperCase()) == "Z" ? 0
        : zone > "@" && zone < "J" ? zone.charCodeAt() - 64
        : zone > "J" && zone < "N" ? zone.charCodeAt() - 65
        : zone < "Z" && zone > "M" ? -(zone.charCodeAt() - 77)
        : zone;
}
```
