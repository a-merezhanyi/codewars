""" Sort and Star (8 kyu)
https://www.codewars.com/kata/sort-and-star
You will be given an vector of string(s). You must sort it alphabetically
(case-sensitive!!) and then return the first value.
The returned value must be a string, and have "***" between each of its
letters.
You should not remove or add elements from/to the array.
"""


def two_sort(array):
    # #1
    #     return "***".join(list(sorted(array)[0]))
    # #2
    return '***'.join(min(array))
