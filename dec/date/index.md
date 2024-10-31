# Dec Date
Martin Laptev
2024+244

My website serves as a demonstration of both the
[Quarto](https://quarto.org) publishing system and the [Dec](../../dec)
measurement system. I use several clever hacks to get Quarto to display
all of the dates on my website in the Dec
<span class="yellow">year</span>+<span class="cyan">day</span> format.
Knowing the basics of Dec dates will help you to understand the Quarto
[filter](https://quarto.org/docs/extensions/filters.html), [render
script](https://quarto.org/docs/projects/scripts.html#pre-and-post-render),
and [include
file](https://quarto.org/docs/output-formats/html-basics.html#includes)
examples in my [Quarto article](../../software/quarto).

Among its many features, Quarto offers support for the
[Observable](https://observablehq.com/) data analysis and visualization
system. In the Observable
[calendar🗓️plots](https://observablehq.com/@observablehq/plot-calendar)
below, [Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
months are identified by
[color](https://observablehq.com/@d3/color-schemes) and each day of the
year has its own [cell](https://observablehq.com/plot/marks/cell).
Despite these similarities, the two plots illustrate how the Dec (top)
and Gregorian (bottom) calendars differ.

<div class="column-page-right">

``` {ojs}
//| echo: false
decPlot = Plot.plot({
  padding: 0,
  width: 1080,
  height: 240,
  className: "calplot",
  marginTop: -20,
  marginLeft: 31,
  marginBottom: 35,
  y: {tickSize: 0,
      label: "Day of the dek    ",
      domain: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      tickPadding: -12,
      labelOffset: 22,
  },
  x: {interval: 1, ticks: 18, label: "Dek", type: "band", tickSize: 0, tickPadding: 1, labelOffset: 34},
  //fx: {tickFormat: ""},
  style: { fontSize: "21px" },
  color: {
    range: d3.schemePastel1.concat(d3.schemePastel2.slice(4, 7)).concat(d3.schemeSet1[0]),
    domain: months.concat("selected"),
    className: "cal",
  },
  marks: [
    Plot.cell(dates, {
      x: (d, i) => Math.floor(i / 10),
      y: (d, i) => i % 10,
      //fx: d => d.getUTCFullYear(),
      fill: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "selected" : months[d.getUTCMonth()],
      stroke: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "darkorange" : "none",
      strokeWidth: 3,
      inset: 0.5,
    }),
    Plot.text(dates, {
      x: (d, i) => Math.floor(i / 10),
      y: (d, i) => i % 10,
      //fx: d => d.getUTCFullYear(),
      fill: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "white" : "black",
      //stroke: "white",
      text: (d, i) => String(i),//.padStart(3, "0").slice(1),
      monospace: true,
      fontSize: "13px"})
  ]
})
```

``` {ojs}
//| echo: false
calPlot = Plot.plot({
  padding: 0,
  width: 1000,
  height: 200,
  className: "calplot",
  marginTop: 0,
  marginBottom: 40,
  marginLeft: 42,
  y: {tickFormat: Plot.formatWeekday("en", "short"), tickSize: 0,
      domain: [-1, 0, 1, 2, 3, 4, 5, 6],
      ticks: [0, 1, 2, 3, 4, 5, 6],
      tickPadding: 2,
  },
  x: {interval: 1, ticks: 26, label: "Week", type: "band", tickSize: 0, tickPadding: 1, labelOffset: 34},
  //fx: {tickFormat: ""},
  style: { fontSize: "20px" },
  color: {
    range: d3.schemePastel1.concat(d3.schemePastel2.slice(4, 7)).concat(d3.schemeSet1[0]),
    domain: months.concat("selected"),
    className: "cal",
  },
  marks: [
    Plot.cell(datesCal, {
      x: d => d3.utcWeek.count(d3.utcYear(d), d),
      y: d => d.getUTCDay(),
      //fx: d => d.getUTCFullYear(),
      fill: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "selected" : months[d.getUTCMonth()],
      stroke: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "darkorange" : "none",
      strokeWidth: 3,
      inset: .5,
    }),
    Plot.text(datesCal, {
      x: d => d3.utcWeek.count(d3.utcYear(d), d),
      y: d => d.getUTCDay(),
      //fx: d => d.getUTCFullYear(),
      text: d => d.getUTCDate() === 7 ? months[d.getUTCMonth()].slice(0, 3) : "",
      y: -1,
      frameAnchor: "left",
      dy: 2,
      monospace: true,
      fontSize: "18px"}),
    Plot.text(datesCal, {
      x: d => d3.utcWeek.count(d3.utcYear(d), d),
      y: d => d.getUTCDay(),
      //fx: d => d.getUTCFullYear(),
      fill: d => Math.floor(unix2doty(d.getTime())) === dotyInput ? "white" : "black",
      //stroke: "white",
      text: d => d.getUTCDate(), //Math.floor(unix2doty(d.getTime())).toString().padStart(3, "0"),
      monospace: true,
      fontSize: "13px"})
  ]
})
```

</div>

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

<span class="radiotitle">First day of the Gregorian calendar year</span>

``` {ojs}
//| echo: false
viewof dotwInput = Inputs.radio([
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ], {value: "Sunday"})
```

The Dec calendar (Decalendar) starts on <span class="blue"
data-bs-toggle="tooltip" data-bs-title="March 1"><u>Day 0</u></span>
instead of <span class="blue" data-bs-toggle="tooltip"
data-bs-title="January 1"><u>Day 306</u></span> and uses groups of 10
days called deks in place of weeks and days of the dek (dotd) in lieu of
days of the week. When combined, a dek and dotd form a Dec day of the
year (doty), the <span class="cyan">day</span> in
<span class="yellow">year</span>+<span class="cyan">day</span>. The doty
selected by the [Observable](https://observablehq.com/)
[range🎚️inputs](https://observablehq.com/@observablehq/input-range)
above and highlighted in the plots is ${styledDotyInput}.

There are two “day of the year” range🎚️inputs because every doty can be
expressed as both a positive and a negative number. The typical range
for positive doty values is 0 to <span class="orange">n</span>-1, and
negative doty values typically range from -<span class="orange">n</span>
to -1, where <span class="orange">n</span> is the number of days in the
year. Doty values outside these
[bounds](https://en.wikipedia.org/wiki/Upper_and_lower_bounds#:~:text=an%20upper%20bound%20or%20majorant%5B1%5D%20of%20a%20subset%20S%20of%20some%20preordered%20set%20(K%2C%20%E2%89%A4)%20is%20an%20element%20of%20K%20that%20is%20greater%20than%20or%20equal%20to%20every%20element%20of%20S.%5B2%5D%5B3%5D%20Dually%2C%20a%20lower%20bound%20or%20minorant%20of%20S%20is%20defined%20to%20be%20an%20element%20of%20K%20that%20is%20less%20than%20or%20equal%20to%20every%20element%20of%20S)
simply belong to a previous or a subsequent year.

The Play▶️button above cycles🔄through every doty, month, and day of the
month in the plots so that each day gets its turn to be highlighted with
a red🟥background. The
[toggle✅input](https://observablehq.com/framework/inputs/toggle#:~:text=choose%20one%20of%20two%20values)
next to the button determines whether the plots show a leap
(<span class="orange">n</span>=366) or a common
(<span class="orange">n</span>=365) year. The
[radio🔘input](https://observablehq.com/framework/inputs/radio#:~:text=choose%20one%20of%20a%20given%20set%20of%20values)
beneath the toggle input sets the day of the week on <span class="blue"
data-bs-toggle="tooltip" data-bs-title="January 1"><u>Day
306</u></span>.

The Gregorian calendar [changes every
year](https://en.wikipedia.org/wiki/Annual_calendar#:~:text=a%20representation%20of%20the%20year%20that%20expires%20with%20the%20year%20represented)
to adapt to the days of the week. In contrast, Decalendar [remains the
same every
year](https://en.wikipedia.org/wiki/Perennial_calendar#:~:text=a%20calendar%20that%20applies%20to%20any%20year)
except leaps years. The addition of <span class="blue"
data-bs-toggle="tooltip" data-bs-title="February 29"><u>Day
365</u></span> to leap years shifts 306 Gregorian calendar dates forward
by one day, but does not affect the order of Dec dates, because
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="February 29"><u>Day 365</u></span> is the last day of Dec
leap years.

Even though Dec does not use weeks, Dec dates can be modified to include
[POSIX weekday
numbers](https://pubs.opengroup.org/onlinepubs/007904875/utilities/date.html#:~:text=weekday%20as%20a%20decimal%20number%20%5B0%2C6%5D%20(0%3Dsunday)).
To convert the current Dec date, ${styledDecoYear}+${styledDecoDoty1},
into the current Dec day of the week (dotw) date,
${styledDecoYear6}${dotw0sign}${styledDotw0doty}+${styledDotw}, we split
the current doty, ${styledDecoDoty2}, into the doty of the first day of
the current week, ${styledDotw0doty1}, and the current POSIX weekday
number: ${styledDotw1}.

Dec dotw dates can be further modified to include [POSIX week
numbers](https://pubs.opengroup.org/onlinepubs/007904875/utilities/date.html#:~:text=week%20of%20the%20year%20(sunday%20as%20the%20first%20day%20of%20the%20week)%20as%20a%20decimal%20number%20%5B00%2C53%5D.%20all%20days%20in%20a%20new%20year%20preceding%20the%20first%20sunday%20shall%20be%20considered%20to%20be%20in%20week%200.).
The current week number, ${styledWeek1}, is the result of adding the
middle number in the Dec dotw date, ${styledDotw0doty2}, to the Day 0
dotw number, ${styledDoty0dotw}, and then floor dividing by 7. The
current Dec week date,
${styledDecoYear2}+7×${styledWeek}+${styledDotw2}, shows how we can
obtain the sum of the current doty and the Day 0 dotw number:
7×${styledWeek2}+${styledDotw4}=${styledDecoDoty3}+${styledDoty0dotw1}.

The Dec dotw and week date examples above demonstrate how Dec uses
[unsimplified](https://en.wikipedia.org/wiki/Simplification#:~:text=the%20process%20of%20replacing%20a%20mathematical%20expression%20by%20an%20equivalent%20one%2C%20that%20is%20simpler)
math expressions to display various pieces of information about a date.
While Dec dotw dates provide all of the information needed to identify
specific dates and coordinate schedules based on deks or weeks, Dec week
dates may be useful for [week-based
accounting](https://en.wikipedia.org/wiki/Accounting_period#52%E2%80%9353-week_fiscal_year:~:text=used%20by%20companies%20that%20desire%20that%20their%20fiscal%20year%20always%20end%20on%20the%20same%20day%20of%20the%20week).

Following the Dec week date pattern, we can adapt Dec dates to use any
other fixed-length calendar unit, including the 20-day
[dudek](https://en.wiktionary.org/wiki/dudek#Esperanto:~:text=dudek-,twenty,-Polish%5Bedit),
30-day
[tridek](https://en.wiktionary.org/wiki/tridek#Esperanto:~:text=tridek-,thirty,-Categories%3A),
40-day
[kvardek](https://en.wiktionary.org/wiki/kvardek#Esperanto:~:text=kvardek-,forty,-Categories%3A),
or 73-day
[sepdektri](https://en.wiktionary.org/wiki/sepdek_tri#Esperanto:~:text=sepdek%20tri-,seventy%2Dthree,-Categories%3A).
No other calendar unit can be as convenient as the 10-day
[dek](https://en.wiktionary.org/wiki/dek#Esperanto:~:text=dek-,ten%20(10),-Derived%20terms%5B),
because our [decimal numeral
system](https://en.wikipedia.org/wiki/Decimal#:~:text=system%20for%20denoting%20integer%20and%20non%2Dinteger%20numbers)
allows us to naturally combine a dek and a day of the dek into a single
doty number.

Dec dates can also be modified to display Dec month numbers and [POSIX
day of the month (dotm)
numbers](https://pubs.opengroup.org/onlinepubs/007904875/utilities/date.html#:~:text=day%20of%20the%20month%20as%20a%20decimal%20number%20%5B01%2C31%5D).
The current Dec dotm date is
${styledDecoYear3}+${styledMonthNumber1}+${styledDotm1}. Dec dotm dates
represent each month with the last doty of the previous month because
POSIX dotm numbers are one-based. For
[zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
dotm numbers, we represent each month with its first doty:
${styledDecoYear4}+${styledMonthNumber0}+${styledDotm0}.

We can obtain Dec month numbers by counting index and ring fingers as 30
days and other fingers as 31 days. The image below shows the Dec month
numbers that work with one-based dotm numbers. For zero-based dotm
numbers, add 1 to each Dec month number. To spread 12 months across 10
fingers, the first and last fingers each represent 2 months.

<div class="column-page-right">

<figure>
<img src="../../asset/finger.svg" class="knitr"
alt="Dec finger mnemonic" />
<figcaption aria-hidden="true">Dec finger mnemonic</figcaption>
</figure>

</div>

We can combine the patterns above to create hybrid Dec dotm and dotw
dates:
${styledDecoYear5}+${hybridMonthNumber}+${styledDotm2}+${styledDotw5}.
Essentially, you can modify a Dec date to show whatever number(s) you
want. All it takes is a little bit of arithmetic! This incredible
versatility is possible thanks to the mathematical basis of Dec dates.
Every Dec date format is defined by an equation.

The Dec date equation is
⌊<span class="yellow">y</span>⌋+<span class="cyan">d</span>÷<span class="orange">n</span>=<span class="yellow">y</span>,
where ⌊<span class="yellow">y</span>⌋+<span class="cyan">d</span> is the
Dec date, ⌊<span class="yellow">y</span>⌋ is the year obtained by
[flooring](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=the%20greatest%20integer%20less%20than%20or%20equal%20to%20x)
<span class="yellow">y</span>, the
[decimal](https://en.wikipedia.org/wiki/Decimal#:~:text=denoting%20integer%20and-,non%2Dinteger%20numbers,-.%20It%20is%20the)
years that have passed since the Dec
[epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era)
(<span class="blue" data-bs-toggle="tooltip"
data-bs-title="1 BC"><u>Year 0</u></span> <span class="blue"
data-bs-toggle="tooltip" data-bs-title="March 1"><u>Day 0</u></span>
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="midnight"><u>Dot 0</u></span>),
<span class="cyan">d</span> is the
[zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
doty, and <span class="orange">n</span> is the number of days in
⌊<span class="yellow">y</span>⌋. We can transform the Dec date equation
into the Dec doty equation,
<span class="cyan">d</span>=<span class="yellow">y</span>%1×<span class="orange">n</span>,
where <span class="yellow">y</span>%1 is
<span class="yellow">y</span>-⌊<span class="yellow">y</span>⌋ or
<span class="yellow">y</span>
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1.

Dec dotw dates express <span class="cyan">d</span> as
<span class="cyan">d</span>-<span class="azul">w<sub>d</sub></span>+<span class="azul">w<sub>d</sub></span>,
where
<span class="cyan">d</span>-<span class="azul">w<sub>d</sub></span> is
the first doty of the current week and
<span class="azul">w<sub>d</sub></span> is the dotw number. Similarly,
<span class="cyan">d</span> in Dec dotm dates is expressed as
<span class="cyan">d</span>-<span class="magenta">m</span>+<span class="magenta">m</span>,
where <span class="cyan">d</span>-<span class="magenta">m</span> is the
Dec month number and <span class="magenta">m</span> is the dotm number.
In both cases, we evaluate the subtraction to get
<span class="cyan">d</span>-<span class="azul">w<sub>d</sub></span> or
<span class="cyan">d</span>-<span class="magenta">m</span>, but not the
addition, so we can see <span class="azul">w<sub>d</sub></span> or
<span class="magenta">m</span>.

Dec hybrid dotm and dotw dates follow this same pattern of evaluating
both subtractions but not additions to express
<span class="cyan">d</span> as
<span class="cyan">d</span>-<span class="magenta">m</span>-<span class="azul">w<sub>d</sub></span>+<span class="magenta">m</span>+<span class="azul">w<sub>d</sub></span>.
Dec week dates turn
<span class="cyan">d</span>-<span class="azul">w<sub>d</sub></span> into
7×<span class="wheat">W</span>-<span class="azul">w<sub>0</sub></span>,
where <span class="wheat">W</span> is the week number and
<span class="azul">w<sub>0</sub></span> is the dotw number on Day 0, but
then omit the subtraction.

To show the dotw, we can add and subtract he various forms of
<span class="cyan">d</span> include
<span class="cyan">d</span>-<span class="orange">n</span>+<span class="orange">n</span>,
<span class="cyan">d</span>-<span class="azul">w<sub>d</sub></span>+<span class="azul">w<sub>d</sub></span>,
7×<span class="wheat">W</span>+<span class="azul">w<sub>d</sub></span>-<span class="azul">w<sub>0</sub></span>,
<span class="cyan">d</span>-<span class="magenta">m</span>+<span class="magenta">m</span>,
<span class="cyan">d</span>-<span class="magenta">m</span>-<span class="azul">w<sub>d</sub></span>+<span class="magenta">m</span>+<span class="azul">w<sub>d</sub></span>,
and <span class="yellow">y</span>%1×<span class="orange">n</span>, where
<span class="azul">w<sub>d</sub></span> is the dotw, and
<span class="magenta">m</span> is the dotm. The current Dec date
equation variant values are: all have the same
<span class="yellow">y</span> and <span class="orange">n</span> and $$$$

The Dec date equation is
⌊<span class="yellow">y</span>⌋+<span class="cyan">d</span>÷<span class="orange">n</span>=<span class="yellow">y</span>,
where ⌊<span class="yellow">y</span>⌋+<span class="cyan">d</span> is the
Dec date, ⌊<span class="yellow">y</span>⌋ is the year obtained by
[flooring](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=the%20greatest%20integer%20less%20than%20or%20equal%20to%20x)
<span class="yellow">y</span>, the
[decimal](https://en.wikipedia.org/wiki/Decimal#:~:text=denoting%20integer%20and-,non%2Dinteger%20numbers,-.%20It%20is%20the)
years that have passed since the Dec
[epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era)
(<span class="blue" data-bs-toggle="tooltip"
data-bs-title="1 BC"><u>Year 0</u></span> <span class="blue"
data-bs-toggle="tooltip" data-bs-title="March 1"><u>Day 0</u></span>
<span class="blue" data-bs-toggle="tooltip"
data-bs-title="midnight"><u>Dot 0</u></span>),
<span class="cyan">d</span> is the
[zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
day of the year, and <span class="orange">n</span> is the number of days
in ⌊<span class="yellow">y</span>⌋. We can rewrite this equation as
⌊<span class="yellow">y</span>⌋+1+(<span class="cyan">d</span>-<span class="orange">n</span>)÷<span class="orange">n</span>=<span class="yellow">y</span>,
where ⌊<span class="yellow">y</span>⌋+1 is the subsequent year and
<span class="cyan">d</span>-<span class="orange">n</span> is the
negative doty.

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
$\lfloor\colorbox{yellow}{y}\rfloor{+}1{-}(\colorbox{cyan}{d}{-}\colorbox{orange}{n}){\div}\colorbox{orange}{n}{=}\colorbox{yellow}{y}$.
In essence, $\colorbox{cyan}{d}{-}\colorbox{orange}{n}$ is a [“T-minus”
countdown](https://en.wikipedia.org/wiki/Countdown#:~:text=backward%20counting%20to%20indicate%20the%20time%20remaining%20before%20an%20event)
of the days until the start of Year
$\lfloor\colorbox{yellow}{y}\rfloor{+}1$. The current `year-day` date,
${styledNextYear}-${styledDecoTminus}, tells us that Year ${nextYear}
will begin in ${Tminus} days.

The difference between $\colorbox{cyan}{d}$ and
$\colorbox{cyan}{d}{-}\colorbox{orange}{n}$ can also be explained in
terms of computer programming. If we think of years as
[arrays](https://en.wikipedia.org/wiki/Array_(data_structure)#Element_identifier_and_addressing_formulas:~:text=a%20data%20structure%20consisting%20of%20a%20collection%20of%20elements%20(values%20or%20variables)%2C%20of%20same%20memory%20size%2C%20each%20identified%20by%20at%20least%20one%20array%20index),
$\colorbox{cyan}{d}$ and $\colorbox{cyan}{d}{-}\colorbox{orange}{n}$ are
like array
[indexes](https://en.wikipedia.org/wiki/Array_(data_structure)#Element_identifier_and_addressing_formulas:~:text=individual%20objects%20are%20selected%20by%20an%20index)
that can be used to identify array elements or combine them via
[slicing](https://en.wikipedia.org/wiki/Array_slicing#:~:text=an%20operation%20that%20extracts%20a%20subset%20of%20elements%20from%20an%20array).
In this analogy, $\colorbox{cyan}{d}$ is a [positive
index](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
with a range of 0 to $\colorbox{orange}{n}{-}1$ and
$\colorbox{cyan}{d}{-}\colorbox{orange}{n}$ is a [negative
index](https://en.wikipedia.org/wiki/Array_slicing#:~:text=specify%20an%20offset%20from%20the%20end%20of%20the%20array)
that ranges from ${-}\colorbox{orange}{n}$ to −1.

The Dec dates only include a year and a doty the equation above
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

The Dec date equation has a negative doty version:
⌊<span class="yellow">y</span>⌋+1+(<span class="cyan">d</span>-<span class="orange">n</span>)÷<span class="orange">n</span>=<span class="yellow">y</span>,
where

If we

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
dz = unix2dote(unix)
ydz = dote2date(...dz)
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
function dote2dotw(d = 719468) {
  return d >= -3 ? (d + 3) % 7 : (d + 4) % 7 + 6
}
decoYear = deco.slice(0, 4)
nextYear = parseInt(decoYear) + 1
decoDoty = deco.slice(5, 8)
dotw = Math.floor(dote2dotw(dz[0]))
week = Math.floor((ydz[1] + doty0dotw) / 7)
dotm = doty2dotm(Math.floor(ydz[1]))
dotm0 = String(dotm - 1).padStart(2, "0")
dotm1 = dotm.toString().padStart(2, "0")
monthNumber = Math.floor(ydz[1] - dotm)
monthNumber0 = String(monthNumber + 1).padStart(3, "0")
monthNumber1 = monthNumber.toString().padStart(3, "0")
dotw0doty = Math.floor(ydz[1]) - dotw
doty0dote = date2dote(ydz[0], 0, ydz[2])
doty0dotw = dote2dotw(...doty0dote)
dotw0sign = dotw0doty < 0 ? "-" : "+"
nDaysInYear = 365 + year2leap(ydz[0] + 1)
Tminus = nDaysInYear - decoDoty
fracYear = (ydz[0] + (ydz[1] - ydz[2]) / nDaysInYear).toFixed(3)
styledDecoYear = setStyle(decoYear, d3.schemePaired[10])
styledDecoYear1 = setStyle(decoYear, d3.schemePaired[10])
styledDecoYear2 = setStyle(decoYear, d3.schemePaired[10])
styledDecoYear3 = setStyle(decoYear, d3.schemePaired[10])
styledDecoYear4 = setStyle(decoYear, d3.schemePaired[10])
styledDecoYear5 = setStyle(decoYear, d3.schemePaired[10])
styledDecoYear6 = setStyle(decoYear, d3.schemePaired[10])
styledNextYear = setStyle(nextYear, d3.schemePaired[10])
styledFracYear = setStyle(fracYear, d3.schemePaired[10])
styledDecoDoty = setStyle(decoDoty, d3.color("cyan").formatHex())
styledDecoDoty1 = setStyle(decoDoty, d3.color("cyan").formatHex())
styledDecoDoty2 = setStyle(decoDoty, d3.color("cyan").formatHex())
styledDecoDoty3 = setStyle(decoDoty, d3.color("cyan").formatHex())
styledDotyInput = setStyle(dotyInput, d3.color("cyan").formatHex())
styledDecoTminus = setStyle(Tminus, d3.color("pink").formatHex())
styledDecoDek = setStyle(decoDoty.slice(0, 2), d3.color("cyan").formatHex())
styledDecoDotd = setStyle(decoDoty[2], d3.color("cyan").formatHex())
styledNdays = setStyle(nDaysInYear, d3.schemePaired[6])
styledNdays1 = setStyle(nDaysInYear, d3.schemePaired[6])
styledDotw = setStyle(dotw, d3.color("blue").formatHex())
styledDotw1 = setStyle(dotw, d3.color("blue").formatHex())
styledDotw2 = setStyle(dotw, d3.color("blue").formatHex())
styledDotw3 = setStyle(dotw, d3.color("blue").formatHex())
styledDotw4 = setStyle(dotw, d3.color("blue").formatHex())
styledDotw5 = setStyle(dotw, d3.color("blue").formatHex())
styledDotw6 = setStyle(dotw, d3.color("blue").formatHex())
styledWeek = setStyle(week, d3.color("wheat").formatHex())
styledWeek1 = setStyle(week, d3.color("wheat").formatHex())
styledWeek2 = setStyle(week, d3.color("wheat").formatHex())
styledDoty0dotw = setStyle(doty0dotw, d3.color("blue").formatHex())
styledDoty0dotw1 = setStyle(doty0dotw, d3.color("blue").formatHex())
styledDotw0doty = setStyle(Math.abs(dotw0doty).toString().padStart(3, "0"), d3.color("cyan").formatHex())
styledDotw0doty1 = setStyle(dotw0doty.toString().padStart(3, "0"), d3.color("cyan").formatHex())
styledDotw0doty2 = setStyle(dotw0doty.toString().padStart(3, "0"), d3.color("cyan").formatHex())
styledDotw0doty3 = setStyle(Math.abs(dotw0doty).toString().padStart(3, "0"), d3.color("cyan").formatHex())
styledDotw0doty4 = setStyle(Math.abs(dotw0doty).toString().padStart(3, "0"), d3.color("cyan").formatHex())
styledDotm0 = setStyle(dotm0, d3.color("darkmagenta").formatHex())
styledDotm1 = setStyle(dotm1, d3.color("darkmagenta").formatHex())
styledDotm2 = setStyle(dotm1, d3.color("darkmagenta").formatHex())
styledMonthNumber0 = setStyle(monthNumber0, d3.color("cyan").formatHex())
styledMonthNumber1 = setStyle(monthNumber1, d3.color("cyan").formatHex())
hybridMonthNumber = setStyle(monthNumber - dotw, d3.color("cyan").formatHex())
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
set(viewof dotyInput, leapscrub[0])
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
datesCal = d3.utcDays(new Date(calYear, 0, 0), new Date(calYear, 12, 0));
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

function date2dote(year = 1969, doty = 306, zone = 0) {
    const socy = Math.floor((year >= 0 ? year : year - 399) / 400),
      yote = year - socy * 400;
    return [socy * 146097 + yote * 365 + Math.floor(yote / 4) - Math.floor(yote / 100) + doty, zone]
}
function doty2deco(yearDoty = [1969, 306], zone = 0) {
    const yd = dote2date(...date2dote(yearDoty[0], Math.floor(yearDoty[1]), zone));
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
    return (date2dote(year, doty, zone) - 719468) * 86400000;
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
leapInput = leapscrub[1]
function addN(d) { return d + 365 + leapInput }
function subN(d) { return d - 365 - leapInput }
dates = d3.utcDays(new Date(1999, 2, 0), new Date(2000, 1, 28 + leapInput));
```

<style>
h6.relative.anchored {
  margin-top: -25px;
  margin-bottom: -2px;
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
p:has(.radiotitle) {
  margin-top: -8px !important;
  margin-bottom: -8px;
  text-align: center;
}
</style>
