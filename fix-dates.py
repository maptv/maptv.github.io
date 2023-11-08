import bs4

def unix2doty(ms=0):
    days = ms / 86400000 + 719468
    dote = days - (era := (days if days >= 0 else days - 146096) // 146097) * 146097
    year = int((dote - dote / 1460 + dote / 36524 - dote / 146096) // 365 + era * 400)
    return year, days - (year * 365 + year / 4 - year / 100 + year / 400).__floor__()

with open("docs/posts.html") as infile:
    txt = infile.read()
    soup = bs4.BeautifulSoup(txt, features="html.parser")
for div in soup.find_all("div", {"class": "listing-date"}):
    if "+" not in div.text:
        y, d = unix2doty(int(div.text))
        div.string.replace_with(f"{y:>04}+{d.__floor__():>03}")

with open("docs/blog.html", "w") as outfile:
    outfile.write(str(soup))
