""" Sort and Star (8 kyu)
https://www.codewars.com/kata/sort-and-star
You will be given an vector of string(s). You must sort it alphabetically
(case-sensitive!!) and then return the first value.
The returned value must be a string, and have "***" between each of its
letters.
You should not remove or add elements from/to the array.
"""

# #1
# def two_sort(array):
#     return "***".join(list(sorted(array)[0]))
# #2


def two_sort(array):
    return '***'.join(min(array))
