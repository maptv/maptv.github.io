# Date
Martin Laptev
2024+236

- [Dote analogs](#dote-analogs)
  - [UNIX time](#unix-time)
  - [Rata Die](#rata-die)
  - [Julian date](#julian-date)
- [Dec](#dec)
  - [Dote](#dote)
  - [Date](#date)
- [ISO 8601](#iso-8601)
  - [Ordinal](#ordinal)
  - [Week](#week)

My website serves as a demonstration of both the
[Quarto](https://quarto.org) publishing system and the [Dec](../../dec)
measurement system. I use several clever hacks to get Quarto to display
all of the dates on my website in the Dec `year+day` format. Knowing the
basics of Dec dates will help you to understand the Quarto
[filter](https://quarto.org/docs/extensions/filters.html), [render
script](https://quarto.org/docs/projects/scripts.html#pre-and-post-render),
and [include
file](https://quarto.org/docs/output-formats/html-basics.html#includes)
examples in my [Quarto article](../../software/quarto).

The `year+day` format is based on the Dec date equation:
$\lfloor\colorbox{yellow}{y}\rfloor{+}\colorbox{cyan}{d}{\div}\colorbox{orange}{n}{=}\colorbox{yellow}{y}$,
where $\lfloor\colorbox{yellow}{y}\rfloor{+}\colorbox{cyan}{d}$ is the
Dec date, $\lfloor\colorbox{yellow}{y}\rfloor$ is the year obtained by
[flooring](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=the%20greatest%20integer%20less%20than%20or%20equal%20to%20x)
$\colorbox{yellow}{y}$, the
[decimal](https://en.wikipedia.org/wiki/Decimal#:~:text=denoting%20integer%20and-,non%2Dinteger%20numbers,-.%20It%20is%20the)
years that have passed since the Dec
[epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era)
(<span class="blue" data-bs-toggle="tooltip"
data-bs-title="1 BC"><u>Year 0</u></span> <span class="blue"
data-bs-toggle="tooltip" data-bs-title="March 1"><u>Day 0</u></span>
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="midnight"><u>Dot 0</u></span>), $\colorbox{cyan}{d}$ is
the
[zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
day of the year, and $\colorbox{orange}{n}$ is the number of days in
$\lfloor\colorbox{yellow}{y}\rfloor$. The Dec date equation for today is
${styledDecoYear}+${styledDecoDoty}÷${styledNdays}=${styledFracYear}.

Dec dates only include the first two terms from the [left-hand
side](https://en.wikipedia.org/wiki/Sides_of_an_equation#:~:text=the%20expression%20on%20the%20left%20of%20the%20%22%3D%22%20is%20the%20left%20side%20of%20the%20equation)
of the Dec date equation: $\lfloor\colorbox{yellow}{y}\rfloor$ and
$\colorbox{cyan}{d}$. The right-hand side of the equation,
$\colorbox{yellow}{y}$, can also be used as a date. We need
$\colorbox{orange}{n}$ to calculate $\colorbox{yellow}{y}$ via the Dec
date equation above and to obtain $\colorbox{cyan}{d}$ using the Dec day
of the year equation:
$\colorbox{cyan}{d}{=}\colorbox{yellow}{y}\vcenter{\text{\\}}1{\times}\colorbox{orange}{n}$.
In simple terms, $\colorbox{cyan}{d}$ is the [decimal
part](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part)
of $\colorbox{yellow}{y}$ multiplied by $\colorbox{orange}{n}$.

To find $\colorbox{orange}{n}$, we plug
$\lfloor\colorbox{yellow}{y}\rfloor$ into the Dec year length equation
below, where $\vcenter{\text\\}$ is the
[modulo](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
operator, ∧ is the logical
[conjunction](https://en.wikipedia.org/wiki/Logical_conjunction)
operator (and), and ∨ is the logical
[disjunction](https://en.wikipedia.org/wiki/Logical_disjunction)
operator (or). According to this equation, $\colorbox{orange}{n}$ is 366
if the subsequent year <span class="nowrap">(Year
$\lfloor\colorbox{yellow}{y}\rfloor{+}1$)</span> is a [Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
[leap
year](https://en.wikipedia.org/wiki/Leap_year#:~:text=Every%20year%20that%20is%20exactly%20divisible%20by%20four%20is%20a%20leap%20year%2C%20except%20for%20years%20that%20are%20exactly%20divisible%20by%20100%2C%20but%20these%20centurial%20years%20are%20leap%20years%20if%20they%20are%20exactly%20divisible%20by%20400)
and 365 if Year $\lfloor\colorbox{yellow}{y}\rfloor{+}1$ is a Gregorian
calendar [common
year](https://en.wikipedia.org/wiki/Common_year#:~:text=a%20calendar%20year%20with%20365%20days).

$$\colorbox{orange}{n}=\begin{cases}
  366&{\begin{align}\text{if } (\lfloor \colorbox{yellow}{y}\rfloor+1)\vcenter{\text{ \\ }}4=0\\
  \land(\lfloor \colorbox{yellow}{y}\rfloor+1)\vcenter{\text{ \\ }}100\neq0\\
  \lor(\lfloor \colorbox{yellow}{y}\rfloor+1)\vcenter{\text{ \\ }}400=0\end{align}}\\\\
  365&{\text{otherwise.}}\end{cases}$$

In addition to calculating $\colorbox{yellow}{y}$,
$\colorbox{orange}{n}$ is needed to convert between `year+day` and
`year-day` Dec dates. The `year-day` version of the Dec date equation is
$\lfloor\colorbox{yellow}{y}\rfloor{+}1{-}(\colorbox{orange}{n}{-}\colorbox{cyan}{d}){\div}\colorbox{orange}{n}{=}\colorbox{yellow}{y}$.
In essence, $\colorbox{orange}{n}{-}\colorbox{cyan}{d}$ is a [“T-minus”
countdown](https://en.wikipedia.org/wiki/Countdown#:~:text=backward%20counting%20to%20indicate%20the%20time%20remaining%20before%20an%20event)
of the days until the start of Year
$\lfloor\colorbox{yellow}{y}\rfloor{+}1$. The current `year-day` date,
${styledNextYear}-${styledDecoTminus}, tells us that Year ${nextYear}
will begin in ${Tminus} days.

The difference between $\colorbox{cyan}{d}$ and
$\colorbox{orange}{n}{-}\colorbox{cyan}{d}$ can also be explained in
terms of computer programming. If we think of years as
[arrays](https://en.wikipedia.org/wiki/Array_(data_structure)#Element_identifier_and_addressing_formulas:~:text=a%20data%20structure%20consisting%20of%20a%20collection%20of%20elements%20(values%20or%20variables)%2C%20of%20same%20memory%20size%2C%20each%20identified%20by%20at%20least%20one%20array%20index),
$\colorbox{cyan}{d}$ and $\colorbox{orange}{n}{-}\colorbox{cyan}{d}$ are
like array
[indexes](https://en.wikipedia.org/wiki/Array_(data_structure)#Element_identifier_and_addressing_formulas:~:text=individual%20objects%20are%20selected%20by%20an%20index)
that can be used to identify array elements or combine them via
[slicing](https://en.wikipedia.org/wiki/Array_slicing#:~:text=an%20operation%20that%20extracts%20a%20subset%20of%20elements%20from%20an%20array).
In this analogy, $\colorbox{cyan}{d}$ is a [positive
index](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
with a range of 0 to $\colorbox{orange}{n}{-}1$ and
$\colorbox{orange}{n}{-}\colorbox{cyan}{d}$ is a [negative
index](https://en.wikipedia.org/wiki/Array_slicing#:~:text=specify%20an%20offset%20from%20the%20end%20of%20the%20array)
that ranges from ${-}\colorbox{orange}{n}$ to −1.

To extend the array index analogy, imagine that we can use a single
number to look up all of the required information for any day in the
current year.

The Play▶️button below cycles🔄the [range
inputs](https://observablehq.com/documentation/inputs/overview#range)
beneath it through every day of the year (doty), month, and day of the
month. The calendar plot beneath the range inputs highlights the doty in
the top range input with a red box, distinguishes months with color, and
shows the days of the week and ISO week numbers of the current year on
its x- and y-axes, respectively.

``` {ojs}
//| echo: false
viewof dotyInput = Inputs.range([0, 364 + leapInput], {value: 306, step: 1, label: "Day of the year"});
viewof monthInput = transformInput(
  Inputs.range([1, 12], {step: 1, label: "Month"}),
  {bind: viewof dotyInput, transform: doty2month, invert: month2doty}
);
viewof dotyInput1 = transformInput(
  Inputs.range([-365 - leapInput, -1], {step: 1, label: "Day of the year"}),
  {bind: viewof dotyInput, transform: subN, invert: addN}
);
viewof dotmInput = transformInput(
  Inputs.range([1, 31], {step: 1, label: "Day of the month"}),
  {bind: viewof dotyInput, transform: doty2dotm, invert: (x => Math.floor(( 153 * (
    viewof monthInput.value > 2
    ? viewof monthInput.value - 3
    : viewof monthInput.value + 9) + 2
  ) / 5 + x - 1
))});
viewof leapscrub = Inputs.form([
  Scrubber(numbers, {autoplay: false, alternate: true, delay: 86.4, loopDelay: 864, format: y => "", inputStyle: "display:none;"}),
  Inputs.toggle({label: "Leap year", value: false}),
])
```

#### First day of the week of the year

``` {ojs}
//| echo: false
viewof dotwInput = Inputs.radio([
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ], {value: "Sunday"})
```

``` {ojs}
//| echo: false
calPlot0 = Plot.plot({
  padding: 0,
  width: 1000,
  height: 300,
  className: "calplot",
  marginBottom: 36,
  marginLeft: 48,
  y: {tickFormat: Plot.formatWeekday("en", "short"), tickSize: 0,
      domain: [-1, 0, 1, 2, 3, 4, 5, 6],
      ticks: [0, 1, 2, 3, 4, 5, 6],
      tickPadding: 2,
  },
  x: {interval: 1, label: "Week", type: "band", tickSize: 0, tickPadding: 2, labelOffset: 36},
  //fx: {tickFormat: ""},
  style: { fontSize: "22px" },
  color: {
    range: d3.schemePastel1.concat(d3.schemePastel2),
    domain: months,
    className: "cal",
  },
  marks: [
    Plot.cell(datesCal0, {
      x: d => d3.utcWeek.count(d3.utcYear(d), d),
      y: d => d.getUTCDay(),
      //fx: d => d.getUTCFullYear(),
      fill: d => months[d.getUTCMonth()],
      stroke: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "red" : "none",
      strokeWidth: 3,
      inset: 0.5,
    }),
    Plot.text(datesCal0, {
    x: d => d3.utcWeek.count(d3.utcYear(d), d),
    y: d => d.getUTCDay(),
    //fx: d => d.getUTCFullYear(),
    text: d => d.getUTCDate() === 8 ? months[d.getUTCMonth()] : "",
      y: -1,
      frameAnchor: "left",
    monospace: true,
    fontSize: "22px"}),
    Plot.text(datesCal0, {
    x: d => d3.utcWeek.count(d3.utcYear(d), d),
    y: d => d.getUTCDay(),
    //fx: d => d.getUTCFullYear(),
    fill: "black",
    //stroke: "white",
    text: d => d.getUTCDate(), //Math.floor(unix2doty(d.getTime())).toString().padStart(3, "0"),
    monospace: true,
    fontSize: "22px"})
  ]
})
```

``` {ojs}
//| echo: false
calPlot1 = Plot.plot({
  padding: 0,
  width: 1000,
  height: 300,
  className: "calplot",
  marginBottom: 36,
  marginLeft: 48,
  y: {tickFormat: Plot.formatWeekday("en", "short"), tickSize: 0,
      domain: [-1, 0, 1, 2, 3, 4, 5, 6],
      ticks: [0, 1, 2, 3, 4, 5, 6],
      tickPadding: 2,
  },
  x: {interval: 1, label: "Week", type: "band", tickSize: 0, tickPadding: 2, labelOffset: 36},
  //fx: {tickFormat: ""},
  style: { fontSize: "22px" },
  color: {
    range: d3.schemePastel1.concat(d3.schemePastel2),
    domain: months,
    className: "cal",
  },
  marks: [
    Plot.cell(datesCal1, {
      x: d => d3.utcWeek.count(d3.utcYear(d), d),
      y: d => d.getUTCDay(),
      //fx: d => d.getUTCFullYear(),
      fill: d => months[d.getUTCMonth()],
      stroke: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "red" : "none",
      strokeWidth: 3,
      inset: 0.5,
    }),
    Plot.text(datesCal1, {
    x: d => d3.utcWeek.count(d3.utcYear(d), d),
    y: d => d.getUTCDay(),
    //fx: d => d.getUTCFullYear(),
    text: d => d.getUTCDate() === 8 ? months[d.getUTCMonth()] : "",
      y: -1,
      frameAnchor: "left",
    monospace: true,
    fontSize: "22px"}),
    Plot.text(datesCal1, {
    x: d => d3.utcWeek.count(d3.utcYear(d), d),
    y: d => d.getUTCDay(),
    //fx: d => d.getUTCFullYear(),
    fill: "black",
    //stroke: "white",
    text: d => d.getUTCDate(), //Math.floor(unix2doty(d.getTime())).toString().padStart(3, "0"),
    monospace: true,
    fontSize: "22px"})
  ]
})
```

Dec dates and slices are similar to, but immeasurably more useful than,
[ISO
8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
[ordinal
dates](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates:~:text=an%20ordinal%20format%20for%20the%20multiples%20of%20a%20day%20elapsed%20since%20the%20start%20of%20year)
and [time
intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals:~:text=the%20intervening%20time%20between%20two%20time%20points).

Both Dec and ISO ordinal dates consist of a year and a day of the year
separated by a
[delimiter](https://en.wikipedia.org/wiki/Delimiter#:~:text=a%20sequence%20of%20one%20or%20more%20characters%20for%20specifying%20the%20boundary%20between%20separate%2C%20independent%20regions%20in%20plain%20text).
ISO dates use Dec dates differ from ISO ordinal dates in their first day
of the year value ([0 versus
1](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)),
epoch (<span class="blue" data-bs-toggle="tooltip"
data-bs-title="March 1st, 1 BCE"><u>`0000+000`</u></span> versus
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="January 1st, 1 BCE"><u>`00-1+306`</u></span>), and method
for determining the length of a year (applying the Gregorian calendar
leap year rule to the subsequent year versus the given year).

The Dec epoch and year length determination method allow Dec days of the
year to function as the equivalent of months and days of the month.
Notably, Dec days of the year can represent annual events, such as
[birthdays](https://en.wikipedia.org/wiki/Birthday#:~:text=the%20anniversary%20of%20the%20birth%20of%20a%20person).
In contrast, ISO 8601 does not allow the year to be omitted and thus
clumsily expresses annual events as intervals that include the full
start date.

Even though some its features are incompatible with ISO 8601, Dec
supports [round-trip
conversion](https://en.wikipedia.org/wiki/Round-trip_format_conversion#:~:text=converting%20from%20any%20data%20representation%20and%20back%20again)
to all three [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
date formats. The [Mermaid](https://mermaid.js.org)
[flowchart](https://mermaid.js.org/syntax/flowchart.html#flowcharts-basic-syntax)
below shows how the Dec date `2029+226` can be converted into many
different formats. You can jump to the section dedicated to a given
format by clicking on its corresponding rectangle in the flowchart.

<div>

<figure class=''>

<div>

<img src="index_files/figure-commonmark/mermaid-figure-1.png"
style="width:6.92in;height:3.98in" />

</div>

</figure>

</div>

It is easy to convert a dote into a day of the week (dotw),
[UNIX](https://en.wikipedia.org/wiki/Unix#:~:text=a%20family%20of%20multitasking%2C%20multi%2Duser%20computer%20operating%20systems)
[timestamp](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201%C2%A0January%201970),
[Julian
date](https://en.wikipedia.org/wiki/Julian_day#:~:text=the%20Julian%20day%20number%20plus%20the%20fraction%20of%20a%20day%20since%20the%20preceding%20noon%20in%20Universal%20Time),
or [Rata
Die](https://en.wikipedia.org/wiki/Rata_Die#:~:text=a%20system%20for%20assigning%20numbers%20to%20calendar%20days)
[fractional
day](https://en.wikipedia.org/wiki/Rata_Die#Fractional_days:~:text=a%20continuously%2Dincreasing%20fractional%20number).

Each of the [Dec](#dec) and [ISO 8601](#iso-8601) subsections showcases
a function that converts one of three possible inputs, typically dote,
Dec date, or ISO month date, into its eponymous format using
[algorithms](https://howardhinnant.github.io/date_algorithms.html)
developed by [Howard Hinnant](https://howardhinnant.github.io). Dote
analogs, like UNIX time and Julian dates, do not have their own function
because they can be created from dotes via simple arithmetic.

# Dote analogs

## UNIX time

UNIX time is the number of seconds since the [UNIX
epoch](https://en.wikipedia.org/wiki/Epoch_(computing)#:~:text=Thursday%201%20January%201970%2000%3A00%3A00%20UT%2C%20a%20point%20in%20time%20known%20as%20the%20Unix%20epoch).
Dec uses days instead of seconds and has a different
[epoch](https://en.wikipedia.org/wiki/Epoch_(computing)#:~:text=a%20fixed%20date%20and%20time%20used%20as%20a%20reference).
To work with UNIX timestamps, Dec converts them into days of the era
(dotes) by first turning seconds into days and then shifting the epoch
to <span class="blue" data-bs-toggle="tooltip"
data-bs-title="March 1, 1 BCE"><u>`0000+000`</u></span>. The reverse
conversion first shifts the epoch to <span class="blue"
data-bs-toggle="tooltip"
data-bs-title="January 1, 1970 CE"><u>`1969+306`</u></span> and then
turns days into seconds.

dote = UNIX ÷ 86400 + 719468

UNIX = (dote − 719468) × 86400

## Rata Die

Rata Die (RD) fractional days are almost identical to dotes. The only
difference is that the RD epoch, <span class="blue"
data-bs-toggle="tooltip"
data-bs-title="December 31, 1 BCE"><u>`0000+305`</u></span>, is 305 days
after the Dec epoch, <span class="blue" data-bs-toggle="tooltip"
data-bs-title="March 1, 1 BCE"><u>`0000+000`</u></span>. Therefore,
conversion between dotes and RD fractional days is as simple as adding
or subtracting 305. For more information on RD fractional days, take a
look at the book entitled “[Calendrical
Calculations](https://en.wikipedia.org/wiki/Calendrical_Calculations#:~:text=a%20book%20on%20calendar%20systems%20and%20algorithms%20for%20computers%20to%20convert%20between%20them)”.

RD = dote − 305

dote = RD + 305

## Julian date

A Julian date is a continuous count of days since <span class="blue"
data-bs-toggle="tooltip"
data-bs-title="noon on November 24, 4714 BCE"><u>`-4713+298.5`</u></span>.
Julian dates are commonly used in astronomy. To convert a dote to a
Julian date, we add 1721119.5 days to the dote to shift the epoch to
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="4714 BCE"><u>Year -4713</u></span> <span class="blue"
data-bs-toggle="tooltip" data-bs-title="noon on November 24"><u>Day
298</u></span> <span class="blue" data-bs-toggle="tooltip"
data-bs-title="noon"><u>Dot 5</u></span>. To convert a dote to a Julian
date, we subtract 1721119.5 days from the Julian date to shift the epoch
to <span class="blue" data-bs-toggle="tooltip"
data-bs-title="1 BC"><u>Year 0</u></span> <span class="blue"
data-bs-toggle="tooltip" data-bs-title="March 1"><u>Day 0</u></span>
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="midnight"><u>Dot 0</u></span>.

JD = dote + 1721119.5

dote = JD − 1721119.5

# Dec

## Dote

Dec days of the era (dotes) are useful for [calendrical
calculations](https://en.wikipedia.org/wiki/Calendrical_calculation#:~:text=calculation%20concerning%20calendar%20dates)
such as obtaining the number of days in between two dates. To create a
dote from a UNIX timestamp, Dec date, or ISO month date, we can use the
`dote` function shown below. Unlike the `dote` function, the `isow2dote`
and `isoo2dote` functions can create dotes from ISO week and ordinal
dates, respectively.

## Date

As shown in the code above and the equations below, the `date` function
uses a dote to determine the
[cycle](https://en.wikipedia.org/wiki/Solar_cycle_(calendar)#:~:text=the%20Gregorian%20cycle%20of%20400%20years%20has%20exactly%20146%2C097%20days%2C%20i.e.%20exactly%2020%2C871%20weeks%2C%20one%20can%20say%20that%20the%20Gregorian%20so%2Dcalled%20solar%20cycle%20lasts%20400%20years)
of the era (cote). The cote is used to calculated the day of the cycle
(dotc), year of the cycle (yotc), year, and day of the year (doty). Head
to the [month](#month) and [ordinal](#ordinal) sections to see how the
year and doty can be used to obtain ISO month and ordinal dates.

$$\text{cote} = \Biggl \lfloor \frac{\begin{cases}\text{dote}&{\text{if } \text{dote} \geq 0;}\\\text{dote}-146096&{\text{otherwise.}}\end{cases}}{146097} \Biggr \rfloor$$

dotc = dote − cote ⋅ 146097

$$\text{yotc} = \biggl \lfloor \frac{\text{dotc} - \lfloor \text{dotc}{\div}{1460} \rfloor + \lfloor \text{dotc}{\div}{36524} \rfloor - \lfloor \text{dotc}{\div}{146096} \rfloor}{365} \biggr \rfloor$$

year = yotc + cote \* 400

doty = dotc − (365 ⋅ yotc + ⌊yotc ÷ 4⌋ − ⌊yotc ÷ 100⌋ + ⌊yotc ÷ 400⌋)

# ISO 8601

## Ordinal

On the surface, the only difference between Dec and ISO ordinal dates
appears to be their
[delimiters](https://en.wikipedia.org/wiki/Delimiter#:~:text=a%20sequence%20of%20one%20or%20more%20characters%20for%20specifying%20the%20boundary%20between%20separate%2C%20independent%20regions%20in%20plain%20text)
(`+` versus `-`), but they also have different first day of the year
values (\[0 versus
1\](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:h

## Week

In addition to calculating $\colorbox{orange}{n}$, Dec uses the
Gregorian calendar leap year rule to convert Dec dates to and from
[ordinal
dates](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates:~:text=an%20ordinal%20format%20for%20the%20multiples%20of%20a%20day%20elapsed%20since%20the%20start%20of%20year),
as shown in the code below.

Dec dates can also be easily converted to and from ISO 8601 month dates.

<style>
h6.relative.anchored {
  margin-top: -25px;
  margin-bottom: -2px;
  text-align: center;
}
<!-- .calplot { -->
<!--   margin-top: -15px; -->
<!--   margin-bottom: -15px; -->
<!-- } -->
#decalendar > g.cluster-label {
  transform: translate(305px, 50px) !important;
}
span.cal-swatch {
  font-size: 14px !important;
}
form.oi-3a86ea-checkbox {
  max-width: 700px;
}
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
form.oi-3a86ea-toggle {
  max-width: 50% !important;
  --label-width: 90px;
}
form.oi-3a86ea {
  --input-width: 200px;
  padding-right: 9px;
}
form.oi-3a86ea-toggle > label {
  width: 78px;
}
div > form > label {
  --label-width: 130px;
}
</style>

Week and dotw values vary from year to year in a pattern called the
solar cycle. Dec has no need for weeks, but uses solar cycles to convert
Dec dates into days of the era (dotes). A day of the era (dote) is a
continuous count of days since the Dec epoch which can be used for
[calendrical
calculations](https://en.wikipedia.org/wiki/Calendrical_calculation#:~:text=calculation%20concerning%20calendar%20dates)
or converted into a dotw or an ISO 8601 [week
date](https://en.wikipedia.org/wiki/ISO_week_date#:~:text=a%20leap%20week%20calendar%20system)
as shown below.

If we ever need to convert between a doty and a Gregorian calendar month
and day of the month without any conversion tools, we can use the Dec
finger mnemonic, which is similar to the [knuckle
mnemonic](https://en.wikipedia.org/wiki/Knuckle_mnemonic#:~:text=a%20mnemonic%20device%20for%20remembering%20the%20number%20of%20days%20in%20the%20months%20of%20the%20Julian%20and%20Gregorian%20calendars).
The numbers above the fingers in the image below indicate the doty of
the last day of each Gregorian calendar month. The thumb, middle finger,
and pinky represent months with 31 days, whereas the index and ring
fingers stand for 30-day months.

<figure>
<img src="../../asset/finger.svg" class="knitr"
alt="Dec finger mnemonic" />
<figcaption aria-hidden="true">Dec finger mnemonic</figcaption>
</figure>

The [southward
equinox](https://en.wikipedia.org/wiki/September_equinox#:~:text=the%20moment%20when%20the%20Sun%20appears%20to%20cross%20the%20celestial%20equator%2C%20heading%20southward)
falls on Day 205 in Year 2024, 2025, 2028, and 2029. We can determine
that Day 205 is September 22 by subtracting the Dec date of the last day
of August (Day 183), the month preceding September, from the southward
equinox doty: 205 − 183 = 22. To convert in the other direction, we
would sum the doty and the day of the month: 183 + 22 = 205.

The finger mnemonic highlights a major difference between Dec and the
Gregorian calendar: the Dec year starts on <span class="blue"
data-bs-toggle="tooltip" data-bs-title="March 1"><u>Day 0</u></span>
just like the [Roman
calendar](https://en.wikipedia.org/wiki/Roman_calendar#:~:text=the%20calendar%20used%20by%20the%20Roman%20Kingdom%20and%20Roman%20Republic),
the predecessor of the Gregorian and Julian calendars. For this reason,
the Latin [numeral
prefixes](https://en.wikipedia.org/wiki/Numeral_prefix#:~:text=prefixes%20derived%20from%20numerals)
in the names of the months of
[Septem](https://en.wikipedia.org/wiki/Numeral_prefix#:~:text=7-,septem,-%2D%2C%20septi%2D%5B)ber,
[Octo](https://en.wikipedia.org/wiki/Numeral_prefix#:~:text=8-,octo,-%2D%5Bu)ber,
[Novem](https://en.wikipedia.org/wiki/Numeral_prefix#:~:text=9-,novem,-%2D%5Bx)ber,
and
[Decem](https://en.wikipedia.org/wiki/Numeral_prefix#:~:text=10-,decem,-%2D%2C%20dec%2D%5B)ber
match their one-based indexes (7, 8, 9, and 10) in Dec and the Roman
calendar, but not in the Julian or Gregorian calendars.

The knuckle and finger mnemonics attempt to make sense of the irregular
pattern of month lengths in the Gregorian calendar. Rather than replace
variable-length months with [fixed-length
months](https://en.wikipedia.org/wiki/Calendar_reform#13-month_calendars),
Dec forgoes the use of months entirely and instead uses groups of ten
days called deks.

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

I use different programming languages to convert UNIX time in various
places on my site. More specifically, I use a
[Python](https://en.wikipedia.org/wiki/Python_%28programming_language%29#:~:text=a%20high%2Dlevel%2C%20general%2Dpurpose%20programming%20language)
[post-render
script](https://quarto.org/docs/projects/scripts.html#pre-and-post-render)
([date.py](../../asset/date.py)) for the dates on the [page that lists
all of the articles on my site](../../list), a
[Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)#:~:text=a%20lightweight%2C%20high%2Dlevel%2C%20multi%2Dparadigm%20programming%20language%20designed%20mainly%20for%20embedded%20use%20in%20applications)
[filter](https://quarto.org/docs/extensions/filters.html)
([date.lua](../../asset/date.lua)) for the PUBLISHED date at the top of
each article, and an [include-after-body
file](https://quarto.org/docs/output-formats/html-basics.html#includes)
that sources a
[JavaScript](https://en.wikipedia.org/wiki/JavaScript#:~:text=a%20programming%20language%20and%20core%20technology%20of%20the%20Web)
file ([stamp.js](../../asset/stamp.js)) for the date in the above.
[citation](http://localhost:4207/dec/date/#citation) information at the
bottom of each article.

``` {ojs}
//| echo: false
//| output: false
unix = {
  while(true) {
    yield Date.now();
  }
}
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
function doty2deco0(year = 1969, doty = 306, zone = 0) {
  return `${year.toString().padStart(4, "0")}+${Math.floor(doty).toString().padStart(3, "0")}${String(doty % 1 * 10).slice(0, 6)}-${zone}`
}
ydz = dote2doty(...unix2dote(unix))
deco = doty2deco0(...ydz)
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
function year2leap(year = 1970) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
decoYear = deco.slice(0, 4)
nextYear = parseInt(decoYear) + 1
decoDoty = deco.slice(5, 8)
nDaysInYear = 365 + year2leap(ydz[0] + 1)
Tminus = nDaysInYear - decoDoty
fracYear = (ydz[0] + (ydz[1] - ydz[2]) / nDaysInYear).toFixed(3)
styledDecoYear = setStyle(decoYear, d3.schemePaired[10])
styledNextYear = setStyle(nextYear, d3.schemePaired[10])
styledFracYear = setStyle(fracYear, d3.schemePaired[10])
styledDecoDoty = setStyle(decoDoty, d3.color("cyan").formatHex())
styledDecoDoty1 = setStyle(decoDoty, d3.color("cyan").formatHex())
styledDecoTminus = setStyle(Tminus, d3.color("pink").formatHex())
styledDecoDek = setStyle(decoDoty.slice(0, 2), d3.color("cyan").formatHex())
styledDecoDotd = setStyle(decoDoty[2], d3.color("cyan").formatHex())
styledNdays = setStyle(nDaysInYear, d3.schemePaired[6])
styledNdays1 = setStyle(nDaysInYear, d3.schemePaired[6])
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
set(viewof dotyInput, leapscrub[1])
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
    form.b.textContent = "Stop";
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
calYear = !leapInput && dotwInput == "Monday" ? 6 : !leapInput && dotwInput == "Tuesday" ? 7 : !leapInput && dotwInput == "Wednesday" ? 2 : !leapInput && dotwInput == "Thursday" ? 3 : !leapInput && dotwInput == "Friday" ? 9 : !leapInput && dotwInput == "Saturday" ? 10 : !leapInput && dotwInput == "Sunday" ? 11 : leapInput && dotwInput == "Monday" ? 12 : leapInput && dotwInput == "Tuesday" ? 24 : leapInput && dotwInput == "Wednesday" ? 8 : leapInput && dotwInput == "Thursday" ? 20 : leapInput && dotwInput == "Friday" ? 4 : leapInput && dotwInput == "Saturday" ? 16 : leapInput && dotwInput == "Sunday" ? 28 : 0;
startCal0 = new Date(calYear, 0, 0);
startCal1 = new Date(calYear, 6, 0);
startCal2 = new Date(calYear, 12, 0);
datesCal0 = d3.utcDays(startCal0, startCal1);
datesCal1 = d3.utcDays(startCal1, startCal2);
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function unix2doty(unix) {
  const dote = (
    unix ?? Date.now()
  ) / 86400000 + 719468,
    socy = Math.floor((
      dote >= 0 ? dote
      : dote - 146096
    ) / 146097),
  dotc = dote - socy * 146097,
  yotc = Math.floor((dotc
    - Math.floor(dotc / 1460)
    + Math.floor(dotc / 36524)
    - Math.floor(dotc / 146096)
  ) / 365);
  return dotc - (yotc * 365
      + Math.floor(yotc / 4)
      - Math.floor(yotc / 100)
  )}

function doty2dote(year = 1969, doty = 0, zone = 0) {
    const cycle = Math.floor((year >= 0 ? year : year - 399) / 400),
    yote = year - cycle * 400;
    return cycle * 146097 + yote * 365 + Math.floor(yote / 4) - Math.floor(yote / 100) + doty - zone
}
function doty2deco(yearDoty = [1969, 306], zone = 0) {
    const yd = dote2doty(doty2dote(yearDoty[0], Math.floor(yearDoty[1])));
    return `${yd[0].toString().padStart(4, "0")}+${yd[1].toString().padStart(3, "0")}${
        yearDoty[1].toString().includes(".") ? "." + (
            (yearDoty[1] > 0) ? (yearDoty[1] - zone).toString().split(".").pop()
            : [...(yearDoty[1] - zone).toString().split(".").pop()].map(
                (e, i, a) => (i + 1 === a.length) ? 10 - e : 9 - e
            ).join("")
        ) : ""
    }`
}
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
function doty2unix(year = 1969, doty = 306, zone = 0) {
    return (doty2dote(year, doty, zone) - 719468) * 86400000;
}
function doty2isoc(yd) {
    return new Date(doty2unix(...yd))
}
function doty2greg(doty = 306) {
    const m = Math.floor((5 * doty + 2) / 153);
    return [
      Math.floor(m < 10 ? m + 3 : m - 9),
      Math.floor(doty - (153 * m + 2) / 5 + 2)
    ];
}
function greg2doty(month = 1, day = 1) {
    return Math.floor(
        (153 * (month > 2 ? month - 3 : month + 9) + 2) / 5 + day - 1
)}
function greg2year(year = 1970, month = 1) { return year - (month < 3) }
function isoc2doty(isoc) {
  return [greg2year(isoc.getFullYear(), isoc.getUTCMonth() + 1), greg2doty(isoc.getUTCMonth() + 1, isoc.getUTCDate())];
}
leapInput = leapscrub[0]
function addN(d) { return d + 365 + leapInput }
function subN(d) { return d - 365 - leapInput }
```