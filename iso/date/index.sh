# -*- coding: utf-8 -*-
# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .sh
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.16.4
#   kernelspec:
#     display_name: Bash
#     language: bash
#     name: bash
#     path: /Users/martinlaptev/Library/Jupyter/kernels/bash
# ---

# %% [markdown]
# # Ordinal date
#
# \| [Martin Laptev]()  
# 2024+197
#
# My website serves as a demonstration of both the
# [Quarto](https://quarto.org) publishing system and the [Dec](../../dec)
# measurement system. I use several clever hacks to get Quarto to display
# all of the dates on my website in the Dec `year+day` format. If you are
# not interested in Dec dates, you may want to skip to the section on
# Quarto [filters](https://quarto.org/docs/extensions/filters.html),
# [render
# scripts](https://quarto.org/docs/projects/scripts.html#pre-and-post-render),
# and [include
# files](https://quarto.org/docs/output-formats/html-basics.html#includes).
#
# ### Dec dates
#
# The `year+day` format of Dec dates is derived from the year of the era
# equation:
# $\colorbox{yellow}{y}{=}\lfloor\colorbox{yellow}{y}\rfloor{+}\colorbox{cyan}{d}{\div}\colorbox{orange}{n}$.
# In this equation, $\colorbox{yellow}{y}$ is the decimal years since the
# Dec epoch (Year 0 <span class="blue" data-bs-toggle="tooltip"
# data-bs-title="March 1"><u>Day 0</u></span>),
# $\lfloor\colorbox{yellow}{y}\rfloor$ is $\colorbox{yellow}{y}$
# [floored](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=the%20greatest%20integer%20less%20than%20or%20equal%20to%20x)
# to obtain an
# [integer](https://en.wikipedia.org/wiki/Integer#:~:text=the%20number%20zero%20%280%29%2C%20a%20positive%20natural%20number%20%281%2C%202%2C%203%2C%20.%20.%20.%29%2C%20or%20the%20negation%20of%20a%20positive%20natural%20number%20%28%E2%88%921%2C%20%E2%88%922%2C%20%E2%88%923%2C%20.%20.%20.%29)
# year, $\colorbox{cyan}{d}$ is the
# [zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
# day of the year, and $\colorbox{orange}{n}$ is the total number of days
# in the year.
#
# Dec dates only include the first two terms from the equation above
# ($\colorbox{yellow}{y}$ and $\colorbox{cyan}{d}$), because
# $\colorbox{orange}{n}$ is not needed to identify a specific date in
# time, only has 2 possible values (365 or 366), remains constant for long
# periods of time (366, 1095, or 2920 days), and can be calculated using
# the Dec year length equation:
#
# $$\colorbox{orange}{n}=\begin{cases}
#   366&{\begin{align}\text{if } (\lfloor \colorbox{yellow}{y}\rfloor+1)\text{ \% }4=0\\
#   \land(\lfloor \colorbox{yellow}{y}\rfloor+1)\text{ \% }100\neq0\\
#   \lor(\lfloor \colorbox{yellow}{y}\rfloor+1)\text{ \% }400=0\end{align}}\\\\
#   365&{\text{otherwise.}}\end{cases}$$
#
# In the Dec year length equation, `%` is the
# [modulo](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
# operator, $\land$ is the logical
# [conjunction](https://en.wikipedia.org/wiki/Logical_conjunction)
# operator, and $\lor$ is the logical
# [disjunction](https://en.wikipedia.org/wiki/Logical_disjunction)
# operator, and $\lfloor\colorbox{yellow}{y}\rfloor{+}1$ is the subsequent
# year. The easiest way to explain this equation is in terms of the
# [Gregorian
# calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world):
# the length of a Dec year is 366 days if the subsequent year is a
# Gregorian calendar [leap
# year](https://en.wikipedia.org/wiki/Leap_year#:~:text=Every%20year%20that%20is%20exactly%20divisible%20by%20four%20is%20a%20leap%20year%2C%20except%20for%20years%20that%20are%20exactly%20divisible%20by%20100%2C%20but%20these%20centurial%20years%20are%20leap%20years%20if%20they%20are%20exactly%20divisible%20by%20400)
# and 365 days otherwise.
#
# Dec dates look almost identical to [ISO
# 8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
# [ordinal
# dates](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates:~:text=an%20ordinal%20format%20for%20the%20multiples%20of%20a%20day%20elapsed%20since%20the%20start%20of%20year).
# On the surface, it appears that the only difference is their
# [delimiter](https://en.wikipedia.org/wiki/Delimiter#:~:text=a%20sequence%20of%20one%20or%20more%20characters%20for%20specifying%20the%20boundary%20between%20separate%2C%20independent%20regions%20in%20plain%20text)
# (`+` versus `-`), but they also have different [starting
# values](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
# (0 versus 1),
# [epochs](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era)
# (Year 0 <span class="blue" data-bs-toggle="tooltip"
# data-bs-title="March 1"><u>Day 0</u></span> versus Year -1
# <span class="blue" data-bs-toggle="tooltip"
# data-bs-title="January 1"><u>Day 306</u></span>), and [year
# length](https://en.wikipedia.org/wiki/Intercalation_(timekeeping)#:~:text=the%20insertion%20of%20a%20leap%20day%2C%20week%2C%20or%20month)
# equations.
#
# 60-day shift
#
# Animation
#
# Conversion functions year to year, doty to month and dotm, and vice
# versa. Conclusion: it is easier to work with unix time.
#
# Can we also find the day of the week? First, use dote2dotw function.
# Conclusion: it is easier to work with deks instead of weeks.
#
# days of the dek
#
# Dec finger counting method svg
#
# The Dec epoch, . This 60-day shift enables the `day` in `year+day` to
# function independently of the `year` as the date of annual events such
# as anniversaries.
#
# Use the sliders below to select a special date like your birthday🎂! You
# can also press the Play▶️button to make the sliders cycle🔄back and
# forth through every day of the year and its corresponding month and day
# of the month.

# %%

# %% [markdown]
# The animation above goes through an entire year in 36.5 beats, a million
# times faster🏎️than the actual speed of time! A Dec beat is a
# centimilliday (1% of a milliday, $10^{-5}$ of a day, or 86.4% of a
# second), which can be thought of as a heart❤️beat or
# musical🎵[beat](https://en.wikipedia.org/wiki/Beat_(music)#:~:text=the%20beat%20is%20the%20basic%20unit%20of%20time)
# with a constant
# [rate](https://en.wikipedia.org/wiki/Heart_rate#:~:text=The%20American%20Heart%20Association%20states%20the%20normal%20resting%20adult%20human%20heart%20rate%20is%2060%2D100%20bpm.)
# or
# [tempo](https://en.wikipedia.org/wiki/Tempo#Basic_tempo_markings:~:text=Adagietto%20%E2%80%93%20slower%20than,56%E2%80%93108%C2%A0bpm)
# of 69.4̅ beats per minute. In addition to displaying time on
# clocks🕰️and⌚️watches, beats can be used to measure durations, such as
# the time since this webpage was loaded:
# <span id="ojs-element-id-1"></span>.
#
# For example, the current day of the year (doty) is Day
# <span id="ojs-element-id-2"></span>.
#
# simplest way to describe Dec dates my website are based on the
# [Gregorian
# calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world),
# but any calendar with fixed rules can be turned in a Dec calendar
# (Decalendar) by expressing its dates as zero-based moving its starting
# point ().
#
# with simple arithmetic, Decalendar is
# [perennial](https://en.wikipedia.org/wiki/Perennial_calendar#:~:text=applies%20to%20any%20year%2C%20keeping%20the%20same%20dates),
# meaning that its features remain the same every year. Any
#
# Unlike ISO 8601 ordinal dates, Dec dates are based on the Dec calendar
# (Decalendar), a [perennial
# calendar](https://en.wikipedia.org/wiki/Perennial_calendar#:~:text=applies%20to%20any%20year%2C%20keeping%20the%20same%20dates),
# meaning that they are the same in every year, and thus can omit the year
# without becoming ambiguous. In contrast, ISO 8601 ordinal dates is
# omitted, susceptible to [off-by-one
# errors](https://en.wikipedia.org/wiki/Off-by-one_error#:~:text=a%20logic%20error%20that%20involves%20a%20number%20that%20differs%20from%20its%20intended%20value%20by%20%2B1%20or%20%E2%88%921).
# For example, the current day of the year.
#
# This major Dec dates can be omit the year and still be unequivocally
# converted into a month and a day [start counting days from
# zero](https://en.wikipedia.org/wiki/Zero-based_numbering#:~:text=a%20way%20of%20numbering%20in%20which%20the%20initial%20element%20of%20a%20sequence%20is%20assigned%20the%20index%C2%A00)
# and do not need omit the year .
#
# The first of the Dec year, [Day 0](), corresponds to Day 59 or Day 60
# have a different starting point while ISO 8601 ordinal dates start
# counting [from one](). Unlike ISO 8601 ordinal dates, Dec dates can omit
# the year and still be useful. are zero-based and can the ordinal day
# component of Dec dates can be unequivocally converted into [Gregorian
# calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
# dates Dec addresses the two major flaws of the by moving the start of
# the year to March 1. When Leap Day is the last day of the year, the day
# numbers (indexes) used by Decalendar remain constant year to year.
# Starting the year on March 1 also brings Decalendar in better alignment
# with the [metereological
# seasons](https://en.wikipedia.org/wiki/Season#:~:text=meteorological%20seasons%20are%20reckoned%20by%20temperature%2C%20with%20summer%20being%20the%20hottest%20quarter%20of%20the%20year%20and%20winter%20the%20coldest%20quarter%20of%20the%20year).
#
# Dec dates overcome several major flaws with the Gregorian calendar. The
# `day` in `year+day` dates is referred to as the “day of the year” or
# doty.
#
# a single number that can identify specific days of the year (like months
# and days of the month) and coordinate schedules of work and rest days
# (like weeks and days of the week). Essentially, Dec greatly simplifies
# the [Gregorian
# calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
# by replacing months and weeks with units called deks.
#
# [Gregorian
# calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
# dates are not aligned with the days of the week. In contrast, the day of
# the dek (dotd) is simply the last digit of the `day` number in the .y
# format.
#
# The `day` in `year+day` dates is a single number that can identify
# specific days of the year (like months and days of the month) and
# coordinate schedules of work and rest days (like weeks and days of the
# week). Essentially, Dec greatly simplifies the [Gregorian
# calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
# by replacing months and weeks with units called deks.
#
# Unlike months and weeks, deks are 10 days long and thus work well with
# our decimal number system. The dek and day of the dek are provided by
# the first two digits and the last digit of the 3-digit `day` number in
# Dec dates, respectively. For example, the current dek is Dek
# <span id="ojs-element-id-7"></span> and the current day of the dek is
# Day <span id="ojs-element-id-3"></span>.
#
# The most prominent Dec date on my site is the one in the Dec
# [timestamp](https://en.wikipedia.org/wiki/Timestamp#:~:text=a%20sequence%20of%20characters%20or%20encoded%20information%20identifying%20when%20a%20certain%20event%20occurred)
# in [navigation
# bar](https://en.wikipedia.org/wiki/Navigation_bar#:~:text=a%20section%20of%20a%20graphical%20user%20interface%20intended%20to%20aid%20visitors%20in%20accessing%20information)
# (navbar) above: <span id="ojs-element-id-4"></span>. In this article, I
# will focus only on Dec dates (<span id="ojs-element-id-5"></span>), but
# I will discuss Dec times (<span id="ojs-element-id-6"></span>) in the
# [next article](../../dec/time) in the [Measurement section](../../dec).
#
# I generate all of the dates on my site from [UNIX
# time](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201st%C2%A0January%201970%2C%20the%20Unix%20epoch)
# using calculations that I adapted from the
# [`civil_from_days`](https://howardhinnant.github.io/date_algorithms.html#civil_from_days)
# function in [Howard Hinnant](https://howardhinnant.github.io)’s [`date`
# library](https://howardhinnant.github.io/date/date.html). Each tab in
# the [tabset
# panel](https://quarto.org/docs/interactive/layout.html#:~:text=Tabset%20Panel,-If%20you%20want%20to%20allow)
# below shows a different implementation of a function called `unix2date`
# which converts UNIX time into `year+day` dates.
#
# In this function, `socy` is an abbreviation for solar cycle and `dote`,
# `dotc`, and `yotc` are acronyms for “day of the era”, “day of the
# cycle”, and “day of the cycle”, respectively. A solar cycle in the
# Gregorian calendar is [400
# years](https://en.wikipedia.org/wiki/Solar_cycle_%28calendar%29#:~:text=400%2Dyear%20cycle%20of%20the%20Gregorian%20calendar).
# A [calendar
# era](https://en.wikipedia.org/wiki/Calendar_era#:~:text=the%20period%20of%20time%20elapsed%20since%20one%20epoch%20of%20a%20calendar)
# is the time that has passed since a starting point called a [calendar
# epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era).
# The Dec epoch is <span class="blue" data-bs-toggle="tooltip"
# data-bs-title="0000-03-01"><u>Year 0 Day 0</u></span>.
#
# # Bash

# %% tags=["sh", "func", "unix2date"]
unix2date() {
    local unix=${1:-$(date +%s)}
    local dote=$(echo "scale=0; $unix / 86400 + 719468" | bc)
    if [ $(echo "$dote >= 0" | bc) -eq 1 ]; then
        local socy=$(echo "scale=0; $dote / 146097" | bc)
    else
        local socy=$(echo "scale=0; ($dote - 146096) / 146097" | bc)
    fi
    local dotc=$(echo "scale=0; $dote - $socy * 146097" | bc)
    local yotc=$(echo "scale=0; ($dotc - $dotc / 1460 + $dotc / 36524 - $dotc / 146096) / 365" | bc)
    echo "$(echo "$yotc + $socy * 400" | bc) $(echo "$dotc - ($yotc * 365 + $yotc / 4 - $yotc / 100)" | bc)"
}
unix2date 1728000000
unix2date 1890000000

# %% [markdown]
# I use different programming languages to convert UNIX time in various
# places on my site. More specifically, I use a
# [Python](https://en.wikipedia.org/wiki/Python_%28programming_language%29#:~:text=a%20high%2Dlevel%2C%20general%2Dpurpose%20programming%20language)
# [post-render
# script](https://quarto.org/docs/projects/scripts.html#pre-and-post-render)
# ([date.py](../../asset/date.py)) for the dates on the [page that lists
# all of the articles on my site](../../list), a
# [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)#:~:text=a%20lightweight%2C%20high%2Dlevel%2C%20multi%2Dparadigm%20programming%20language%20designed%20mainly%20for%20embedded%20use%20in%20applications)
# [filter](https://quarto.org/docs/extensions/filters.html)
# ([date.lua](../../asset/date.lua)) for the PUBLISHED date at the top of
# each article, and an [include-after-body
# file](https://quarto.org/docs/output-formats/html-basics.html#includes)
# that sources a
# [JavaScript](https://en.wikipedia.org/wiki/JavaScript#:~:text=a%20programming%20language%20and%20core%20technology%20of%20the%20Web)
# file ([stamp.js](../../asset/stamp.js)) for the date in the above.
# [citation](http://localhost:4207/dec/date/#citation) information at the
# bottom of each article.

# %%

# %% [markdown]
# <script type='ojs-module-contents'>
# eyJjb250ZW50cyI6WyAgeyJtZXRob2ROYW1lIjoiaW50ZXJwcmV0IiwiaW5saW5lIjoidHJ1ZSIsInNvdXJjZSI6Imh0bC5odG1sYDxzcGFuPiR7c3R5bGVkVGlja1RpbWV9PC9zcGFuPmAiLCAiY2VsbE5hbWUiOiJvanMtZWxlbWVudC1pZC0xIn0sICB7Im1ldGhvZE5hbWUiOiJpbnRlcnByZXQiLCJpbmxpbmUiOiJ0cnVlIiwic291cmNlIjoiaHRsLmh0bWxgPHNwYW4+JHtkZWNvRGF0ZX08L3NwYW4+YCIsICJjZWxsTmFtZSI6Im9qcy1lbGVtZW50LWlkLTIifSwgIHsibWV0aG9kTmFtZSI6ImludGVycHJldCIsImlubGluZSI6InRydWUiLCJzb3VyY2UiOiJodGwuaHRtbGA8c3Bhbj4ke2RlY29bN119PC9zcGFuPmAiLCAiY2VsbE5hbWUiOiJvanMtZWxlbWVudC1pZC0zIn0sICB7Im1ldGhvZE5hbWUiOiJpbnRlcnByZXQiLCJpbmxpbmUiOiJ0cnVlIiwic291cmNlIjoiaHRsLmh0bWxgPHNwYW4+JHtzdHlsZWREZWNvWWVhcjB9KyR7c3R5bGVkRGVjb0RhdGUwfSR7c3R5bGVkRGVjb1RpbWUwfS0ke3N0eWxlZFRpbWVab25lMH08L3NwYW4+YCIsICJjZWxsTmFtZSI6Im9qcy1lbGVtZW50LWlkLTQifSwgIHsibWV0aG9kTmFtZSI6ImludGVycHJldCIsImlubGluZSI6InRydWUiLCJzb3VyY2UiOiJodGwuaHRtbGA8c3Bhbj4ke3N0eWxlZERlY29ZZWFyMX0rJHtzdHlsZWREZWNvRGF0ZTF9PC9zcGFuPmAiLCAiY2VsbE5hbWUiOiJvanMtZWxlbWVudC1pZC01In0sICB7Im1ldGhvZE5hbWUiOiJpbnRlcnByZXQiLCJpbmxpbmUiOiJ0cnVlIiwic291cmNlIjoiaHRsLmh0bWxgPHNwYW4+JHtzdHlsZWREZWNvVGltZTF9LSR7c3R5bGVkVGltZVpvbmUxfTwvc3Bhbj5gIiwgImNlbGxOYW1lIjoib2pzLWVsZW1lbnQtaWQtNiJ9LCAgeyJtZXRob2ROYW1lIjoiaW50ZXJwcmV0IiwiaW5saW5lIjoidHJ1ZSIsInNvdXJjZSI6Imh0bC5odG1sYDxzcGFuPiR7ZGVjby5zbGljZSg1LCA3KX08L3NwYW4+YCIsICJjZWxsTmFtZSI6Im9qcy1lbGVtZW50LWlkLTcifV19
# </script>