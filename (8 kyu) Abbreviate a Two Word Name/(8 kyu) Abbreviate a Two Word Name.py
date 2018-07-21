""" Abbreviate a Two Word Name (8 kyu)
https://www.codewars.com/kata/abbreviate-a-two-word-name

Write a function to convert a name into initials. This kata strictly
takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
"""
def abbrevName(name):
    # #1
    # return ".".join(list(map(lambda c: c[0].upper(), name.split(" "))))
    #2
    return ".".join(w[0] for w in name.split()).upper()