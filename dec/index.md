# Dec
Martin Laptev
2024+340

- [Context clues](#sec-context)
- [Snaps](#snaps)
- [Specific dates and times](#sec-specific)
- [Negative numbers](#sec-neg)
- [Units](#sec-unit)

<div id="decnavtop">

<div>

<img src="index_files/figure-commonmark/mermaid-figure-1.png"
style="width:8.64in;height:0.98in" />

</div>

</div>

This section of my site focuses on Dec, a [measurement
system](https://en.wikipedia.org/wiki/System_of_units_of_measurement#:~:text=a%20collection%20of%20units%20of%20measurement%20and%20rules%20relating%20them%20to%20each%20other)
that [I](https://maptv.github.io) created to measure time⏳, position📍,
orientation🧭, angles📐, and cycles🔄in
[turns](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees)
([*τ*](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=the%20Greek%20letter,to%20one%20turn))
instead of months, weeks, hours, minutes, seconds, and degrees. To
measure time⏳, Dec uses years and days. Years are turns of a celestial
body around [the point it
orbits](https://en.wikipedia.org/wiki/Barycenter_%28astronomy%29#:~:text=the%20point%20about%20which%20the%20bodies%20orbit).
Days are turns of a [celestial
body](https://en.wikipedia.org/wiki/Astronomical_object#:~:text=a%20single%2C%20tightly%20bound%2C%20contiguous%20entity)
on [its
axis](https://en.wikipedia.org/wiki/Axial_tilt#:~:text=the%20imaginary%20line%20that%20passes%20through%20both%20the%20north%20pole%20and%20south%20pole).

In the scope of time⏳measurement, Dec is comparable to the
[ISO🌐8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
international date📅and time⏳standard. The ISO🌐8601 [combined
date📅and
time⏳representation](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations:~:text=A%20single%20point%20in%20time%20can%20be%20represented%20by%20concatenating%20a%20complete%20date%20expression%2C%20the%20letter%20%22T%22%20as%20a%20delimiter%2C%20and%20a%20valid%20time%20expression)
of the current
[UTC+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=a%20time%20offset%20from%20UTC%20of%20%2B00%3A00)
time⏳, <span class="yellow">${String(isoYear).padStart(4,
“0”)}</span>-<span class="mulberry">${String(month).padStart(2,
“0”)}</span>-<span class="magenta">${String(decDotm).padStart(2,
“0”)}</span>T<span class="hardwood">${String(isoHour).padStart(2,
“0”)}</span>:<span class="maroon">${String(isoMinute).padStart(2,
“0”)}</span>:<span class="sienna">${String(isoSecond).padStart(2,
“0”)}</span>+<span class="hardwood">00</span>:<span class="maroon">00</span>,
is equivalent to the Dec
snap🫰<span class="yellow">${String(decYear).padStart(4,
“0”)}</span>+<span class="cyan">${String(decDate).padStart(3,
“0”)}</span>.<span class="cyan">${decTime.toFixed(5).slice(2)}</span>+<span class="lime">0</span>.
The ISO🌐8601 format is
<span class="yellow">year</span>-<span class="mulberry">mm</span>-<span class="magenta">dd</span>T<span class="hardwood">hh</span>:<span class="maroon">mm</span>:<span class="sienna">ss</span>+<span class="hardwood">hh</span>:<span class="maroon">mm</span>.

If the Dec day-of-year (<span class="under tool"
data-bs-toggle="tooltip" data-bs-title="day-of-year">doy</span>),
<span class="cyan">${String(decDate).padStart(3,
“0”)}</span>.<span class="cyan">${decTime.toFixed(5).slice(2)}</span>,
is greater than <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="January 1">306</span>, the Dec year is 1 less than the
ISO🌐year.

The ISO🌐8601
[time⏳interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals:~:text=the%20intervening%20time%20between%20two%20time%20points)
from now until midnight can be expressed without including the current
time as , which is equivalent to the Dec span🌈.

ISO🌐8601 and Dec are different objectives. ISO🌐8601 seeks to
standardize how we measure time, whereas Dec aims to completely redefine
how we measure time.

Unlike ISO🌐8601, the documentation describing Dec is available for free
under a [Creative Commons
license](https://en.wikipedia.org/wiki/Creative_Commons_license#:~:text=one%20of%20several%20public%20copyright%20licenses%20that%20enable%20the%20free%20distribution%20of%20an%20otherwise%20copyrighted%20%22work%22).
While ISO🌐8601 standardizes,

can be split two components: the Dec calendar🗓️(Decalendar) and
clock🕓(Declock). The year in Dec is the same as in the Dec
counts🧮years and days as integers and fractions. In Dec, the
[integer](https://en.wikipedia.org/wiki/Decimal#:~:text=the%20integer%20written%20to%20the%20left%20of%20the%20decimal%20separator)
and
[fractional](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part)
part of a year form a date, while the fractional part of a year. The
fractional years are expressed by while [fractional
days](https://en.wikipedia.org/wiki/Decimal_time#Fractional_days) are .
since the Dec
[epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era),
Dec tracks the date as and the time of day as fractional days using a
single number called the <span class="under tool"
data-bs-toggle="tooltip" data-bs-title="day-of-year">doy</span>. In
essence, Decalendar and Declock count🧮fractions of a year and a day,
respectively. The numerator and denominator for Decalendar is the number
of days in the year, and the Declock denominator is 10<sup>*x*</sup>,
where *x* is the number of digits in the numerator. In both systems,
only the numerator, not the denominator, is provided. In the context of
Decalendar, the numerator is the days that have passed in the year,
while in the context of Declock, the numerator is the parts of the day
that have passed in the day.

To avoid any confusion between the two, we can say <span class="tool"
data-bs-toggle="tooltip" data-bs-title="March 6"><u>Day 5</u></span> to
mean the date when 5 days have passed this year or <span class="tool"
data-bs-toggle="tooltip" data-bs-title="March 1"><u>Day 0</u></span> to
mean the first day-of-year (<span class="under tool"
data-bs-toggle="tooltip" data-bs-title="day-of-year">doy</span>). This
is like the use of the term “day zero” in other contexts, such as
epidemiology. The analogous term for times is “Dot”. The word “Dot”
conveys that at its core Declock is a system built on [fractional
days](https://en.wikipedia.org/wiki/Decimal_time#Fractional_days)
expressed as decimal numbers. The 5 in “Dot 5” can be thought of as a
number after a decimal (0.5) or a numerator (⁵/₁₀), either way it means
noon, the time when half the day has passed.

The analogy to decimals or fractions is important, because it explains
why adding a zero at the end of a time does not change the time, only
the implied tolerance of time points or the implied duration of time
intervals. If Dot 5 is a time point, it has an implied tolerance of 5%
of the day (.5 ± .05), because any time after Dot 45 and before Dot 55
(\[.45, .55)) would round to Dot 5. On the other hand, if Dot 5 is the
start time for a time interval, that interval is implied to start at Dot
5 and end before Dot 6 (\[.5, .6)) and thus have a duration of 10% of
the day (Dot 6-Dot 5). Every additional digit we add decreases the
implied tolerance and the implied duration 10-fold.

If we really want to insist on punctuality, we could include up to 5
digits in a time. Specifying times with more than 5 digits is possible,
and may be useful for scientific or technical purposes, but it is
analogous to providing [extremely long GPS
coordinates](https://xkcd.com/2170/); at some point the level of
precision stops having relevance to daily life. If we want to strive for
the highest level of precision possible, we can add the word “sharp” or
the `#` symbol to the time. Saying “5 Sharp” or writing `5#` means as
close as possible to noon. Times that include `#` cannot have an implied
duration. We can only add `#` to a time, so there is no need say “Dot 5
Sharp” or write `.5#`.

# Context clues

Not saying “Day” or “Dot” in general is acceptable, because it is
convenient and often the numbers make perfect sense in context. If
someone says “let’s have lunch at 5”, it is clear that they are
referring to noon (`Dot` `5`) and not the sixth `doty` (`Day` `5`).
Also, the number itself may provide a clue. Numbers greater than 365
could still be a `doty`, but it would represent a day in an upcoming
year, not the current year. The meaning of such dates depends on whether
the current year is a common year (n=365) or a leap year (n=366). Saying
“500” could mean `Day` `134` (if n=366) or `Day` `135` (if n=365) of the
subsequent year, but it would most likely mean noon (`Dot` `500`).

# Snaps

If a Decalender date and a Declock time are combined, they form a time
`snap`. The date always goes before the time in any snap. When said
together, the numbers “0” and “5” mean the first doy (Day 0) at noon
(Dot 5). In written form, this would be 000.5. This format is called
`.y`, which is read the same way as `doty`, but emphasizes that the `.`
is used in a floating point decimal `doty`. In other words, `doty` can
be used instead of “day of the year” in a sentence, whereas `.y`
indicates a `stamp`, such as `000.5`. Ideally, a `stamp` will include
all of the information needed to identify a singular point in time, and
thus should include a year and time zone.

# Specific dates and times

The `stamp` in **?@sec-stamp** assumes that the year and time zone are
known. A date without a year is like a time without a time zone, both
depend on the context. Most likely, we are talking about the current
year and the local time zone, but it may be unclear. Including a year
allows us to pinpoint a specific day, instead of a day that could happen
any year. Similarly, a time with a time zone occurs once every day,
rather than once in every time zone per day. The `Day` `306` of 1969,
would be written `1969+306` and said “Year 1969 Day 306” or simply “1969
306”, while midnight in `Zone` `0` would be written `.000+0` and said
“Dot 0 Zone 0”, “0 Zone 0”, or “0 0”. Combined together, this date and
time form the `stamp` `1969+306.000+0`.

# Negative numbers

Every component of `Decalender` dates and `Declock` times can be
negative. A negative year is before 1 BCE (Before Common Era) and a
negative time zone is West of `Zone` `0`. The year is usually provided
without a sign, because most people rarely discuss years before 1 BCE,
but numeric time zone offset must have a sign. Negative `doties` work
like [zero-based
indexes](https://en.wikipedia.org/wiki/Zero-based_numbering) in
[computer
programming](https://en.wikipedia.org/wiki/Zero-based_numbering#Computer_programming)
in that they label the days of the year from −*N* to −1, where *N* is
the number of the days in the current year. The first `doty` is indexed
by both 0 and −*N*, while the last `doty` is indexed by both −1 and *N*.

In general, negative numbers show the number of parts that are left in
the whole. A negative `doty` shows how many days remain in the year and
a negative time [counts down](https://en.wikipedia.org/wiki/Countdown)
to the end of the day. To extend the fractions analogy in **?@sec-frac**
to negative numbers, the negative number added to the whole gives us the
numerator of the positive fraction (*p**o**s* = *N* + *n**e**g*).
Positive and negative numbers arrive at the same answer from opposite
directions.

In certain contexts, the choice of using a negative number over a
positive number may mean that we want to emphasize how much time is left
instead of how much has passed. Even though `Dot` `-1` and `Dot` `9` are
synonymous `Declock` times, the former could highlight that there is
only 1 tenth (⅒ or .1) of the day remaining before midnight. `Dot` `5`
and `Dot` `-5` both mean noon, like saying that a glass is half-empty or
half-full.

The negative equivalent of `1969+306`, January 1st, 1970 in the
Gregorian calendar, is `1970-059`. This negative `deco` date literally
subtracts 59 days from the beginning of year 1970 to arrive at `Day`
`306` of 1969. The year in negative `deco` dates is always 1 greater
than the year in the equivalent positive `deco` date. Both `1969+306`
and `1970-059` translate to January 1, 1970 in the Gregorian calendar.
`Decalendar` years are shifted by two months in relation to the
Gregorian calendar years because `Decalendar` years start on March 1.

This shift causes the Gregorian calendar year to be 1 greater than the
year in the positive `deco` dates during January and February and 1 less
than the year in negative `deco` dates during every other month. For
example, the `Deco` dates `1969+000` and `1970-365` are March 1, 1969 in
the Gregorian calendar. Immediately after midnight on this date, the
negative `doty` will change from -365 to -364, while the positive `doty`
will remain at 0. At noon, the positive `deco` date will be
`1969+306.500` and the negative `deco` date will be `1970-058.500`.

# Units

`Declock` times often have three digits because this is the best level
of precision for displaying time on clocks and watches. While 3 digits
are often best, `Declock` times can have any number of digits, depending
on the desired precision level. `Declock` provides names for extremely
precise time units, but the most relevant units are within a few orders
of magnitude from a day, which is the base unit of both `Declock` and
`Decalendar`. Listing the units of each, as in **?@tbl-unit**,
highlights the relationship between the two:

<div id="decnavbtm">

<div>

<img src="index_files/figure-commonmark/mermaid-figure-2.png"
style="width:8.64in;height:0.98in" />

</div>

</div>

``` {ojs}
//| echo: false
//| output: false
unix = {
  while(true) {
    yield Date.now();
  }
}
// http://howardhinnant.github.io/date_algorithms.html#civil_from_days
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
dz = unix2dote(unix, 0)
ydz = dote2date(...dz)
decYear = ydz[0]
decDate = Math.floor(ydz[1])
decTime = ydz[1] % 1
decMoty = Math.floor((5 * decDate + 2) / 153)
decDotm = Math.floor(decDate - (153 * decMoty + 2) / 5 + 1)
isoYear = decYear + (decMoty > 9)
month = decMoty < 10 ? decMoty + 3 : decMoty - 9
decHour = decTime * 24
decMinute = (decHour % 1) * 60
decSecond = (decMinute % 1) * 60
isoHour = Math.floor(decHour)
isoMinute = Math.floor(decMinute)
isoSecond = Math.floor(decSecond)
isLeap = decYear % 4 == 0 && decYear % 100 != 0 || decYear % 400 == 0;
midYear = 182.5 + .5 * isLeap
midYearDiff = (decDate - midYear).toFixed(5)
midYearDotm = isLeap ? 30 : 31
midYearHour = isLeap ? 0 : 12
pastmidYear = decDate > midYear
sinceUntil = pastmidYear ? "since" : "until"
```

<style>
div.cell:has(form.oi-3a86ea-toggle) {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
div.observablehq > div:has(form.oi-3a86ea-toggle) {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
div.cell:has(form.oi-3a86ea) {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
form.oi-3a86ea-toggle {
  max-width: 100% !important;
  --input-width: 30px;
  --label-width: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
form.oi-3a86ea {
  --input-width: 200px;
  padding-right: 9px;
}
form.oi-3a86ea-toggle > label {
  width: 75px;
}
form.oi-3a86ea-toggle > label[for="oi-3a86ea-2"] {
  width: 110px;
}
form.oi-3a86ea-toggle > input#oi-3a86ea-2 {
  width: 15px;
}
form.oi-3a86ea-toggle {
  width: 110px;
}
form.oi-3a86ea-toggle:has(input#oi-3a86ea-2) {
  width: 150px;
}
input.oi-3a86ea-input[type="checkbox"] {
  margin: 4px 0px 0px 0px;
}
div > form.oi-3a86ea > label {
  --label-width: 105px;
}
form.oi-3a86ea > div.oi-3a86ea-input > input[type="number"] {
  max-width: 60px;
}
div.column-page:has(svg.leftplot), div.column-page:has(svg.rightplot) {
  display: flex;
  justify-content: center;
}
div.observablehq > figure > h2 {
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: -8px;
}
input[type="radio"] {
  margin: 1px 0px 0px 0px;
}
p:has(.radiotitle) {
  margin-top: -6px;
  margin-bottom: -3px;
}
#radiobuttons {
  margin-bottom: -12px;
}
h4.anchored {
  margin: 8px 0px 8px 0px;
}
#mermaid-1 {
  margin-top: 15px;
  margin-bottom: -20px;
}
div.cell-output-display:has(svg#navtop-mermaid.flowchart.mermaid-js) {
  margin-top: -5px;
  margin-bottom: -5px;
}
div.cell-output-display:has(svg#zerobasedpent-mermaid.flowchart.mermaid-js) {
  margin-top: -15px;
}
div.cell-output-display:has(svg#onebasedpent-mermaid.flowchart.mermaid-js) {
  margin-top: -5px;
  margin-bottom: -5px;
}
div.cell-output-display:has(svg#conversionchart-mermaid.flowchart.mermaid-js) {
  margin-top: -15px;
  margin-bottom: -15px;
}
div.cell-output-display:has(svg#navbtm-mermaid.flowchart.mermaid-js) {
  margin-top: -15px;
  margin-bottom: 5px;
}
span.nodeLabel > p {
  text-align: center;
}
div.hand {
  display: flex;
  flex-wrap: wrap;
}
div.hand > svg {
  margin: 5px 5px 20px 5px;
}
div.overflowequation {
  margin-top: -20px;
  margin-bottom: -20px;
}
div#leapscrubvert {
  margin-top: -10px;
}
svg.topplot {
  margin-top: -9px;
  margin-bottom: -9px;
  overflow: clip;
}
svg.btmplot {
  margin-top: -9px;
  margin-bottom: -15px;
  overflow: clip;
}
svg.leftplot {
  margin-top: -9px;
  margin-bottom: -15px;
  overflow: clip;
}
svg.rightplot {
  margin-top: -9px;
  margin-bottom: -15px;
  overflow: clip;
}
form.oi-3a86ea-checkbox {
  max-width: 800px;
}
</style>
