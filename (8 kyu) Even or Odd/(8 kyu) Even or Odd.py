""" Even or Odd (8 kyu)
https://www.codewars.com/kata/even-or-odd
Create a function that takes an integer as an argument and returns
"Even" for even numbers or "Odd" for odd numbers.
"""


def even_or_odd(number):
    # #1
    # if number % 2 == 0:
    #     return "Even"
    # else:
    #     return "Odd"
    # #2
    # return "Odd" if number % 2 else "Even"
    # #3
    return ("Odd", "Even")[number % 2]
