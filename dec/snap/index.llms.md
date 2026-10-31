# Dec snap

Code

Introducing the Dec snaps, which combine a Dec date and time into a representation of an instant.

Author

[Martin Laptev](https://maptv.github.io)

Published

1776874460

Modified

2026+052

``` mermaid
%%{init: {'theme': 'default', 'themeVariables': { 'fontSize': '32px'}}}%%
flowchart LR
   A[Dec]-->B[date]-->C[time]-->D[snap]-->E[span]
   click A "/dec"
   click B "/dec/date"
   click C "/dec/time"
   click D "/dec/snap"
   click E "/dec/span"
```

This article builds on the previous two [Dec](../../dec) articles on [dates](../../dec/date)📅and [times](../../dec/time)⏳. A date year+day and a time .clock-z can be combined into a snap🫰year+day.clock-z. Like the yyyy-mm-ddThh:mm:ss+hh:mm [format](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations:~:text=A%20single%20point%20in%20time%20can%20be%20represented%20by%20concatenating%20a%20complete%20date%20expression%2C%20the%20letter%20%22T%22%20as%20a%20delimiter%2C%20and%20a%20valid%20time%20expression) of the [ISO🌐8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data) international date📅and time⏳standard, Dec snaps🫰represent a [point in time](https://en.m.wikipedia.org/wiki/Instant#:~:text=an%20infinitesimal%20interval%20in%20time) and organize their components from the largest to the smallest.

In between the year and zone of a Dec snap🫰is day.clock, a single number called a day-of-year (doy) which serves the same purpose as the month, day-of-month (dom), hour, minute, and second in between the year and time zone in the ISO🌐format. The [integer part](https://en.wikipedia.org/wiki/Decimal#:~:text=the%20integer%20written%20to%20the%20left%20of%20the%20decimal%20separator) of the doy, day, identifies a specific day in the given year and its [fractional](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part) part is the time-of-day (tod): .clock.

The Dec snap🫰in the Zone 0 Dec time⏳zone, +.+0, is equivalent to its ISO🌐8601 [counterpart](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations:~:text=A%20single%20point%20in%20time%20can%20be%20represented%20by%20concatenating%20a%20complete%20date%20expression%2C%20the%20letter%20%22T%22%20as%20a%20delimiter%2C%20and%20a%20valid%20time%20expression) in the [UTC+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=a%20time%20offset%20from%20UTC%20of%20%2B00%3A00) time⏳zone: --T::+00:00. In the current doy, ., the integer part, , corresponds to the ISO🌐month and dom, -, and the fractional part, ., converts to the ISO🌐hour, minute, and second: T::.

``` mermaid
%%{init: {'theme': 'default', 'themeVariables': { 'fontSize': '32px'}}}%%
flowchart LR
   A[Dec]-->B[date]-->C[time]-->D[snap]-->E[span]
   click A "/dec"
   click B "/dec/date"
   click C "/dec/time"
   click D "/dec/snap"
   click E "/dec/span"
```

Back to top

## Reuse

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## Citation

BibTeX citation:

``` quarto-appendix-bibtex
@online{laptev2026,
  author = {Laptev, Martin},
  title = {Dec Snap},
  date = {2026-04-22},
  url = {https://maptv.github.io/dec/snap},
  langid = {en}
}
```

For attribution, please cite this work as:

Laptev, Martin. 2026. “Dec Snap.” April 22. <https://maptv.github.io/dec/snap>.
