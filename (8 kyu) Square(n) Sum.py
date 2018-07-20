""" Square(n) Sum (8 kyu)
https://www.codewars.com/kata/square-n-sum
Complete the squareSum/square_sum/SquareSum method so that it squares
each number passed into it and then sums the results together.
For example:
square_sum([1, 2, 2]) // should return 9
"""
def square_sum(numbers):
    # #1
    # sum = 0
    # for x in numbers:
    #     sum += x * x
    # return sum
    # #2
    return sum(x ** 2 for x in numbers)
