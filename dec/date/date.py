# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.5'
#       jupytext_version: 1.16.4
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

def unix2doty(unix):
    dote = unix / 86400 + 719468
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
    )]
unix2doty(1728000000)

unix2doty(1890000000)