# https://howardhinnant.github.io/date_algorithms.html#days_from_civil
import bs4

def unix2doty(ms):
    dote = ms / 86400000 + 719468
    cykl = (
        dote if dote >= 0
        else dote - 146096
    ) // 146097
    dotc = dote - cykl * 146097
    yotc = (dotc
        - dotc // 1460
        + dotc // 36524
        - dotc // 146096
    ) // 365
    return [
        int(yotc + cykl * 400),
        dotc - (yotc * 365
            + yotc // 4
            - yotc // 100
        )
    ]

with open("_site/list/index.html") as infile:
    txt = infile.read()
    soup = bs4.BeautifulSoup(txt, features="html.parser")
for div in soup.find_all("div", {"class": "card-file-modified"}):
    elem = div.find("p")
    if "+" not in elem.text:
        y, d = unix2doty(int(div.text))
        elem.string.replace_with(f"{y:>04}+{d.__floor__():>03}")
for div in soup.find_all("div", {"class": "listing-reading-time"}):
    if "min" in div.text:
        div.string.replace_with(f"{(int(div.text.split()[0]) / 1.44).__floor__()} milliday")
with open("_site/list/index.html", "w") as outfile:
    outfile.write(str(soup))
