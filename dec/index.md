# Dec
Martin Laptev
2024+341

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

Dec time⏳measurement is comparable to the
[ISO🌐8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
international date📅and time⏳standard. In particular, the
ISO🌐<span class="yellow">yyyy</span>-<span class="mulberry">mm</span>-<span class="magenta">dd</span>T<span class="hardwood">hh</span>:<span class="maroon">mm</span>:<span class="sienna">ss</span>+<span class="hardwood">hh</span>:<span class="maroon">mm</span>
format is equivalent to the Dec
snap🫰<span class="yellow">year</span>+<span class="cyan">day.clock</span>-<span class="lime">z</span>
format. Both formats represent a [point in
time](https://en.m.wikipedia.org/wiki/Instant#:~:text=an%20infinitesimal%20interval%20in%20time)
and have multiple components that are organized by scale from the
largest to the smallest.

In between the <span class="yellow">year</span> and
<span class="lime">zone</span> of a Dec snap🫰is
<span class="cyan">day.clock</span>, a single number called a
<span class="cyan">day-of-year</span> (<span class="cyan under tool"
data-bs-toggle="tooltip" data-bs-title="day-of-year">doy</span>) which
serves the same purpose as the <span class="mulberry">month</span>,
<span class="magenta">day-of-month</span>
(<span class="magenta under tool" data-bs-toggle="tooltip"
data-bs-title="day-of-month">dom</span>),
<span class="hardwood">hour</span>, <span class="maroon">minute</span>,
and <span class="sienna">second</span> in between the year and time zone
in the ISO🌐format. The [integer
part](https://en.wikipedia.org/wiki/Decimal#:~:text=the%20integer%20written%20to%20the%20left%20of%20the%20decimal%20separator)
of the <span class="cyan under tool" data-bs-toggle="tooltip"
data-bs-title="day-of-year">doy</span>, <span class="cyan">day</span>,
identifies a specific day in the given year and its
[fractional](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part)
part is the time-of-day (<span class="cyan under tool"
data-bs-toggle="tooltip" data-bs-title="time-of-day">tod</span>):
<span class="cyan">.clock</span>.

The Dec snap🫰in the Zone <span class="lime">0</span> Dec time⏳zone,
<span class="yellow">${String(decYear).padStart(4,
“0”)}</span>+<span class="cyan">${String(decDate).padStart(3,
“0”)}</span>.<span class="cyan">${decTime.toFixed(5).slice(2)}</span>+<span class="lime">0</span>,
is equivalent to its ISO🌐8601
[counterpart](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations:~:text=A%20single%20point%20in%20time%20can%20be%20represented%20by%20concatenating%20a%20complete%20date%20expression%2C%20the%20letter%20%22T%22%20as%20a%20delimiter%2C%20and%20a%20valid%20time%20expression)
in the
[UTC+<span class="maroon">00</span>:<span class="sienna">00</span>](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=a%20time%20offset%20from%20UTC%20of%20%2B00%3A00)
time⏳zone: <span class="yellow">${String(isoYear).padStart(4,
“0”)}</span>-<span class="mulberry">${String(month).padStart(2,
“0”)}</span>-<span class="magenta">${String(decDotm).padStart(2,
“0”)}</span>T<span class="hardwood">${String(isoHour).padStart(2,
“0”)}</span>:<span class="maroon">${String(isoMinute).padStart(2,
“0”)}</span>:<span class="sienna">${String(isoSecond).padStart(2,
“0”)}</span>+<span class="hardwood">00</span>:<span class="maroon">00</span>.
In the current doy, <span class="cyan">${String(decDate).padStart(3,
“0”)}</span>.<span class="cyan">${decTime.toFixed(5).slice(2)}</span>,
the integer part, <span class="cyan">${String(decDate).padStart(3,
“0”)}</span>, corresponds to the
ISO🌐<span class="mulberry">month</span> and <span class="under tool"
data-bs-toggle="tooltip" data-bs-title="day-of-month">dom</span>,
<span class="mulberry">${String(month).padStart(2,
“0”)}</span>-<span class="magenta">${String(decDotm).padStart(2,
“0”)}</span>, and the fractional part,
.<span class="cyan">${decTime.toFixed(5).slice(2)}</span>, converts to
the ISO🌐<span class="hardwood">hour</span>,
<span class="maroon">minute</span>, and
<span class="sienna">second</span>:
T<span class="hardwood">${String(isoHour).padStart(2,
“0”)}</span>:<span class="maroon">${String(isoMinute).padStart(2,
“0”)}</span>:<span class="sienna">${String(isoSecond).padStart(2,
“0”)}</span>.

The <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="day-of-year">doy</span> in a middle of the Dec format
acts as the Dec analog of a month, day of month dom, hour, minute, and
second.

The integer part of the <span class="under tool"
data-bs-toggle="tooltip" data-bs-title="day-of-year">doy</span>, ,
identifies a day in the given year and the fractional part is the time
of day tod: . The Dec and ISO years are the same for the first 306 days
of the Dec year. When the <span class="under tool"
data-bs-toggle="tooltip" data-bs-title="day-of-year">doy</span> is
greater than or equal to <span class="under tool"
data-bs-toggle="tooltip" data-bs-title="January 1">306</span>, the Dec
year is one less than the ISO year.

The

snap🫰

, The Dec analog of UTC+00:00, Zone <span class="lime">0</span>, is on
the left side of the map🗺️below.

The Dec and ISO years are the same for the first 306 days of the Dec
year. When the <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="day-of-year">doy</span> is greater than or equal to
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="January 1">306</span>, the Dec year is one less than the
ISO year.

The <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="day-of-year">doy</span> does more than just identify a
specific moment in time.

big endian and thus start with the the largest unit, the year. , start
with a year, and end with a time zone.

The <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="day-of-year">doy</span>
<span class="cyan">day.clock</span> in a snap🫰

The current ISO🌐8601 [combined date📅and
time⏳](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations:~:text=A%20single%20point%20in%20time%20can%20be%20represented%20by%20concatenating%20a%20complete%20date%20expression%2C%20the%20letter%20%22T%22%20as%20a%20delimiter%2C%20and%20a%20valid%20time%20expression)in
the
[UTC+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=a%20time%20offset%20from%20UTC%20of%20%2B00%3A00)
time⏳zone is <span class="yellow">${String(isoYear).padStart(4,
“0”)}</span>-<span class="mulberry">${String(month).padStart(2,
“0”)}</span>-<span class="magenta">${String(decDotm).padStart(2,
“0”)}</span>T<span class="hardwood">${String(isoHour).padStart(2,
“0”)}</span>:<span class="maroon">${String(isoMinute).padStart(2,
“0”)}</span>:<span class="sienna">${String(isoSecond).padStart(2,
“0”)}</span>+<span class="hardwood">00</span>:<span class="maroon">00</span>.

the Dec<span class="yellow">${String(decYear).padStart(4,
“0”)}</span>+<span class="cyan">${String(decDate).padStart(3,
“0”)}</span>.<span class="cyan">${decTime.toFixed(5).slice(2)}</span>+<span class="lime">0</span>.
snap🫰

The Dec analog of UTC+00:00, Zone <span class="lime">0</span>, is on the
left side of the map🗺️below.

``` {ojs}
//| echo: false
//| label: zonemap
viewof coordinates = worldMapCoordinates([162, 0, projection], [width, height])
```

``` {ojs}
//| echo: false
//| label: toggles
// https://observablehq.com/@d3/solar-terminator
// https://observablehq.com/@mbostock/time-zones
viewof dectoggle = Inputs.toggle({label: "Dec", value: true})
viewof border = Inputs.toggle({label: "Edge", value: false})
viewof suntoggle = Inputs.toggle({label: "Sun", value: true})
viewof utctoggle = Inputs.toggle({label: "UTC", value: false})
```

``` {ojs}
//| echo: false
//| label: projselect
viewof select = Inputs.select(
  projections, {label: "Projection:", format: x => x.name, value: projections.find(t => t.name === "Equirectangular (plate carrée)")})
```

[solar☀️terminator](https://en.wikipedia.org/wiki/Terminator_(solar)#:~:text=a%20moving%20line%20that%20divides%20the%20daylit%20side%20and%20the%20dark%20night%20side%20of%20a%20planetary%20body)

Dec has ten
[time⏳zones](https://en.wikipedia.org/wiki/Time_zone#:~:text=an%20area%20which%20observes%20a%20uniform%20standard%20time)
which are each one <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a turn">deciturn</span> wide and are numbered
zero through nine, like the ten
[meridians](https://en.wikipedia.org/wiki/Meridian_%28geography%29#:~:text=words%2C%20it%20is-,a%20line%20of%20longitude,-.%20The%20position%20of)
that separate them. Zone <span class="lime">0</span> is in between
Meridians 0 and 1. [Meridian
0](https://en.wikipedia.org/wiki/18th_meridian_west#:~:text=a%20line%20of%20longitude%20that%20extends%20from%20the%20North%20Pole%20across%20the%20Arctic%20Ocean%2C%20Greenland%2C%20Iceland%2C%20the%20Atlantic%20Ocean%2C%20the%20Canary%20Islands%2C%20the%20Southern%20Ocean%2C%20and%20Antarctica%20to%20the%20South%20Pole),
which runs through Iceland and the Atlantic Ocean just West of Africa,
is the Dec [International Date
Line](https://en.wikipedia.org/wiki/International_Date_Line#:~:text=the%20line%20between%20the%20South%20and%20North%20Poles%20that%20is%20the%20boundary%20between%20one%20calendar%20day%20and%20the%20next)
and [prime
meridian](https://en.wikipedia.org/wiki/Prime_meridian#:~:text=an%20arbitrarily%2Dchosen%20meridian%20%28a%20line%20of%20longitude%29%20in%20a%20geographic%20coordinate%20system%20at%20which%20longitude%20is%20defined%20to%20be%200%C2%B0).
[Meridian
1](https://en.wikipedia.org/wiki/18th_meridian_east#:~:text=a%20line%20of%20longitude%20that%20extends%20from%20the%20North%20Pole%20across%20the%20Arctic%20Ocean%2C%20Europe%2C%20Africa%2C%20the%20Atlantic%20Ocean%2C%20the%20Southern%20Ocean%2C%20and%20Antarctica%20to%20the%20South%20Pole)
divides Europe and Africa into Western and Eastern halves.

The
[choropleth](https://en.wikipedia.org/wiki/Choropleth_map#:~:text=a%20type%20of%20statistical%20thematic%20map%20that%20uses%20pseudocolor%2C%20meaning%20color%20corresponding%20with%20an%20aggregate%20summary%20of%20a%20geographic%20characteristic%20within%20spatial%20enumeration%20units%2C%20such%20as%20population%20density%20or%20per%2Dcapita%20income)🎨map🗺️below
shows all ten Dec meridians and the full spectrum of UTC time⏳zones.
The UTC time⏳zones to the East of New Zealand have negative UTC offsets
and filled in with reddish colors. By design, all Dec time⏳zones have
positive offsets. Therefore, Zones 6 to 9 are roughly 1 day ahead of
their UTC analogs unless we subtract 10 to make their offsets negative.

The time in any Dec time⏳zone differs from the closest UTC time⏳differ
by -5 to 5 <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="hundredths of a turn">centiturns</span>. When comparing
the time in a Dec and UTC time⏳zones, there is no difference between
Zone 0 and UTC+00:00 or Zone 5 and UTC+12:00. <span class="under tool"
data-bs-toggle="tooltip"
data-bs-title="tenths of a turn">Deciturns</span> and hours do not line
up perfectly.

UTC+00:00 is in the middle of Zone 0, but makes detours to include
Iceland and other islands. Except for such detours, each UTC time zone
is 41.6̅ milliturns wide.

The ISO🌐8601 format is

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

The `snap` above assumes that the year and time zone are known. A date
without a year is like a time without a time zone, both depend on the
context. Most likely, we are talking about the current year and the
local time zone, but it may be unclear. Including a year allows us to
pinpoint a specific day, instead of a day that could happen any year.
Similarly, a time with a time zone occurs once every day, rather than
once in every time zone per day. The `Day` `306` of 1969, would be
written `1969+306` and said “Year 1969 Day 306” or simply “1969 306”,
while midnight in `Zone` `0` would be written `.000+0` and said “Dot 0
Zone 0”, “0 Zone 0”, or “0 0”. Combined together, this date and time
form the `stamp` `1969+306.000+0`.

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
to the end of the day. To extend the fractions analogy to negative
numbers, the negative number added to the whole gives us the numerator
of the positive fraction (*p**o**s* = *N* + *n**e**g*). Positive and
negative numbers arrive at the same answer from opposite directions.

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
`Decalendar`. Listing the units of each highlights the relationship
between the two:

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
decDek = Math.floor(decDate / 10)
decDod = decDate % 10
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
timezones = FileAttachment("../asset/timezones.json").json()
zones = topojson.feature(timezones, timezones.objects.timezones).features
mesh = topojson.mesh(timezones, timezones.objects.timezones)
color = d3.scaleSequential(d3.extent(zones, f => f.properties.zone), d3.interpolateRdBu)
// https://observablehq.com/@enjalot/draggable-world-map-coordinates-input
function worldMapCoordinates(config = {}, dimensions) {
  const {
    value = [], title, description, width = dimensions[0]
  } = Array.isArray(config) ? {value: config} : config;
  const height = dimensions[1];
  let [lon, lat] = value;
  lon = lon != null ? lon : null;
  lat = lat != null ? lat : null;
  const formEl = html`<form style="width: ${width}px;"></form>`;
  const context = DOM.context2d(width, height);
  const canvas = context.canvas;
  canvas.style.margin = `-6px 0 ${width > 400 ? -12 : -18}px`;
  const projection = config[2]
    .precision(0.1)
    .fitSize([width, height], { type: "Sphere" }).rotate([-156, 0]);
  const path = d3.geoPath(projection, context).pointRadius(2.5);
  formEl.append(canvas);
  function fillMesh(f) {
    context.beginPath();
    path(f);
    context.fillStyle = color(f.properties.zone);
    context.fill();
  }
  // function formatLongitude(x) { return `${(x + 18) / 36}`; }
  function draw() {
    context.beginPath(); path({type: "Sphere"});
    context.fillStyle = colors.ocean; context.fill();
    if (utctoggle) {
      zones.map(f => fillMesh(f))
    }
    context.beginPath();
    path(land);
    context.fillStyle = colors.land;
    context.fill();
    context.strokeStyle = `#888`;
    context.stroke();
    if (border) {
      context.beginPath();
      path(borders);
      context.lineWidth = 1.25;
      context.strokeStyle = `#888`;
      context.stroke();
    }
    if (utctoggle) {
      context.beginPath();
      path(mesh);
      context.lineWidth = 1.25;
      context.strokeStyle = `#aaa`;
      context.stroke();
    }
    if (dectoggle) {
      context.beginPath();
      path(graticule);
      context.lineWidth = 1.25;
      context.strokeStyle = `#000`;
      context.stroke();
      context.font = width < 760 ? "12px serif" : "21px serif";
      context.fillStyle = `#000`;
      d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, 27.5])));
      d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, -48])));
      // d3.range(-18, 336 + 1, 36).map(x => context.fillText(formatLongitude(x), ...projection([x, 90])));
      // d3.range(-18, 336 + 1, 36).map(x => context.fillText(formatLongitude(x), ...projection([x, -90])));
    }
    if (suntoggle) {
      context.beginPath();
      path(night);
      context.fillStyle = "rgba(0,0,255,0.15)";
      context.fill();
      context.beginPath();
      path.pointRadius(28);
      path({type: "Point", coordinates: sun});
      context.strokeStyle = "#0009";
      context.fillStyle = "#ff0b";
      context.lineWidth = 1;
      context.stroke();
      context.fill();
    }
  }
  draw();
  return formEl;
}
// https://observablehq.com/@fil/d3-projections
projections = [
  { name: "Airocean", value: d3.geoAirocean },
  { name: "Airy’s minimum error", value: d3.geoAiry },
  { name: "Aitoff", value: d3.geoAitoff },
  { name: "American polyconic", value: d3.geoPolyconic },
  { name: "Armadillo", value: d3.geoArmadillo, options: { clip: { type: "Sphere" } } },
  { name: "August", value: d3.geoAugust },
  { name: "azimuthal equal-area", value: d3.geoAzimuthalEqualArea },
  { name: "azimuthal equidistant", value: d3.geoAzimuthalEquidistant },
  { name: "Baker dinomic", value: d3.geoBaker },
  { name: "Berghaus’ star", value: d3.geoBerghaus, options: { clip: { type: "Sphere" } } },
  { name: "Bertin’s 1953", value: d3.geoBertin1953 },
  { name: "Boggs’ eumorphic", value: d3.geoBoggs },
  { name: "Boggs’ eumorphic (interrupted)", value: d3.geoInterruptedBoggs, options: { clip: { type: "Sphere" } } },
  { name: "Bonne", value: d3.geoBonne },
  { name: "Bottomley", value: d3.geoBottomley },
  { name: "Bromley", value: d3.geoBromley },
  { name: "Butterfly (gnomonic)", value: d3.geoPolyhedralButterfly },
  { name: "Butterfly (Collignon)", value: d3.geoPolyhedralCollignon },
  { name: "Butterfly (Waterman)", value: d3.geoPolyhedralWaterman },
  { name: "Cahill-Keyes", value: d3.geoCahillKeyes },
  { name: "Collignon", value: d3.geoCollignon },
  { name: "conic equal-area", value: d3.geoConicEqualArea },
  { name: "conic equidistant", value: d3.geoConicEquidistant },
  { name: "Craig retroazimuthal", value: d3.geoCraig },
  { name: "Craster parabolic", value: d3.geoCraster },
  { name: "Cox", value: d3.geoCox },
  { name: "cubic", value: d3.geoCubic },
  { name: "cylindrical equal-area", value: d3.geoCylindricalEqualArea },
  { name: "cylindrical stereographic", value: d3.geoCylindricalStereographic },
  { name: "dodecahedral", value: d3.geoDodecahedral },
  { name: "Eckert I", value: d3.geoEckert1 },
  { name: "Eckert II", value: d3.geoEckert2 },
  { name: "Eckert III", value: d3.geoEckert3 },
  { name: "Eckert IV", value: d3.geoEckert4 },
  { name: "Eckert V", value: d3.geoEckert5 },
  { name: "Eckert VI", value: d3.geoEckert6 },
  { name: "Eisenlohr conformal", value: d3.geoEisenlohr },
  { name: "Equal Earth", value: d3.geoEqualEarth },
  { name: "Equirectangular (plate carrée)", value: d3.geoEquirectangular },
  { name: "Fahey pseudocylindrical", value: d3.geoFahey },
  { name: "flat-polar parabolic", value: d3.geoMtFlatPolarParabolic },
  { name: "flat-polar quartic", value: d3.geoMtFlatPolarQuartic },
  { name: "flat-polar sinusoidal", value: d3.geoMtFlatPolarSinusoidal },
  { name: "Foucaut’s stereographic equivalent", value: d3.geoFoucaut },
  { name: "Foucaut’s sinusoidal", value: d3.geoFoucautSinusoidal },
  { name: "general perspective", value: d3.geoSatellite },
  { name: "Gingery", value: d3.geoGingery, options: { clip: { type: "Sphere" } } },
  { name: "Ginzburg V", value: d3.geoGinzburg5 },
  { name: "Ginzburg VI", value: d3.geoGinzburg6 },
  { name: "Ginzburg VIII", value: d3.geoGinzburg8 },
  { name: "Ginzburg IX", value: d3.geoGinzburg9 },
  { name: "Goode’s homolosine", value: d3.geoHomolosine},
  { name: "Goode’s homolosine (interrupted)", value: d3.geoInterruptedHomolosine, options: { clip: { type: "Sphere" } }  },
  { name: "gnomonic", value: d3.geoGnomonic },
  { name: "Gringorten square", value: d3.geoGringorten },
  { name: "Gringorten quincuncial", value: d3.geoGringortenQuincuncial },
  { name: "Guyou square", value: d3.geoGuyou },
  { name: "Hammer", value: d3.geoHammer },
  { name: "Hammer retroazimuthal", value: d3.geoHammerRetroazimuthal, options: { clip: { type: "Sphere" } } },
  { name: "HEALPix", value: d3.geoHealpix, options: { clip: { type: "Sphere" } } },
  { name: "Hill eucyclic", value: d3.geoHill },
  { name: "Hufnagel pseudocylindrical", value: d3.geoHufnagel },
  { name: "icosahedral", value: d3.geoIcosahedral },
  { name: "Imago", value: d3.geoImago },
  { name: "Kavrayskiy VII", value: d3.geoKavrayskiy7 },
  { name: "Lagrange conformal", value: d3.geoLagrange },
  { name: "Larrivée", value: d3.geoLarrivee },
  { name: "Laskowski tri-optimal", value: d3.geoLaskowski },
  { name: "Loximuthal", value: d3.geoLoximuthal },
  { name: "Mercator", value: d3.geoMercator },
  { name: "Miller cylindrical", value: d3.geoMiller },
  { name: "Mollweide", value: d3.geoMollweide },
  { name: "Mollweide (Goode’s interrupted)", value: d3.geoInterruptedMollweide, options: { clip: { type: "Sphere" } } },
  { name: "Mollweide (interrupted hemispheres)", value: d3.geoInterruptedMollweideHemispheres, options: { clip: { type: "Sphere" } } },
  { name: "Natural Earth", value: d3.geoNaturalEarth1 },
  { name: "Natural Earth II", value: d3.geoNaturalEarth2 },
  { name: "Nell–Hammer", value: d3.geoNellHammer },
  { name: "Nicolosi globular", value: d3.geoNicolosi },
  { name: "orthographic", value: d3.geoOrthographic },
  { name: "Patterson cylindrical", value: d3.geoPatterson },
  { name: "Peirce quincuncial", value: d3.geoPeirceQuincuncial },
  { name: "rectangular polyconic", value: d3.geoRectangularPolyconic },
  { name: "Robinson", value: d3.geoRobinson },
  { name: "sinusoidal", value: d3.geoSinusoidal },
  { name: "sinusoidal (interrupted)", value: d3.geoInterruptedSinusoidal, options: { clip: { type: "Sphere" } } },
  { name: "sinu-Mollweide", value: d3.geoSinuMollweide },
  { name: "sinu-Mollweide (interrupted)", value: d3.geoInterruptedSinuMollweide, options: { clip: { type: "Sphere" } } },
  { name: "stereographic", value: d3.geoStereographic },
  { name: "Lee’s tetrahedal", value: d3.geoTetrahedralLee },
  { name: "Times", value: d3.geoTimes },
  { name: "Tobler hyperelliptical", value: d3.geoHyperelliptical },
  { name: "transverse Mercator", value: d3.geoTransverseMercator },
  { name: "Van der Grinten", value: d3.geoVanDerGrinten },
  { name: "Van der Grinten II", value: d3.geoVanDerGrinten2 },
  { name: "Van der Grinten III", value: d3.geoVanDerGrinten3 },
  { name: "Van der Grinten IV", value: d3.geoVanDerGrinten4 },
  { name: "Wagner IV", value: d3.geoWagner4 },
  { name: "Wagner VI", value: d3.geoWagner6 },
  { name: "Wagner VII", value: d3.geoWagner7 },
  { name: "Werner", value: d3.geoBonne ? () => d3.geoBonne().parallel(90) : null },
  { name: "Wiechel", value: d3.geoWiechel },
  { name: "Winkel tripel", value: d3.geoWinkel3 }
]
colors = ({
  night: "#719fb6",
  day: "#ffe438",
  grid: "#4b6a79",
  ocean: "#adeeff",
  land: "#90ff78",
  sun: "#ffe438"
})
function long2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (((degrees %= 360) < 0 ? degrees + 360 : degrees) + 18) / (360 / 10**e) % 10**e;
}
function long2zone(degrees = -180) { return Math.floor(long2turn(degrees, 1)); }
projection = select ? select.value() : d3.geoEquirectangular()
sun = {
  const now = new Date;
  const day = new Date(+now).setUTCHours(0, 0, 0, 0);
  const t = solar.century(now);
  const longitude = (day - now) / 864e5 * 360 - 180;
  return [longitude - solar.equationOfTime(t) / 4, solar.declination(t)];
}
night = d3.geoCircle().radius(90).center(antipode(sun))()
antipode = ([longitude, latitude]) => [longitude + 180, -latitude]
height = {
  const [[x0, y0], [x1, y1]] = d3.geoPath(projection.fitWidth(width, sphere)).bounds(sphere);
  const dy = Math.ceil(y1 - y0), l = Math.min(Math.ceil(x1 - x0), dy);
  projection.scale(projection.scale() * (l - 1) / l).precision(0.2);
  return dy;
}
d3 = require("d3@6", "d3-array@3", "d3-geo@3", "d3-geo-projection@4", "d3-geo-polygon@1.8")
sphere = ({type: "Sphere"})
graticule = d3.geoGraticule().stepMinor([36,0]).stepMajor([36,0])()
graticule.coordinates = graticule.coordinates.map(
  i => i.map(j => j.map((k, index, arr) => i.length === 3 && index === 0 ? k - 18 : k))
)
land = topojson.feature(world, world.objects.land)
world = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json").then(response => response.json())
topojson = require("topojson-client@3")
solar = require("solar-calculator@0.3/dist/solar-calculator.min.js")
borders = topojson.mesh(countries, countries.objects.countries, (a, b) => a !== b)
countries = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(response => response.json())
```

<style>
div#zonemap {
   overflow-y: hidden;
   margin-top: -15px;
}
div#toggles {
   display: flex;
}
div#toggles form.oi-3a86ea-toggle > label {
   width: 28px;
}
div#toggles form.oi-3a86ea-toggle > label[for="oi-3a86ea-3"] {
  width: 37px;
}
div#toggles form.oi-3a86ea-toggle > label[for="oi-3a86ea-1"] {
  width: 37px;
  margin: 2px 0px 0px 0px;
}
div#toggles  form.oi-3a86ea-toggle {
   width: 110px;
}
div#toggles  input.oi-3a86ea-input[type="checkbox"] {
  margin: 3px 0px 0px 0px;
}
div#projselect form.oi-3a86ea > label {
   --label-width: 80px;
}
div#projselect form.oi-3a86ea {
   --input-width: 260px;
}
</style>
