""" Reversed sequence (8 kyu)
https://www.codewars.com/kata/reversed-sequence

Get the number n (n>0) to return the reversed sequence from n to 1.
Example : n=5 >> [5,4,3,2,1]
"""


def reverse_seq(n):
    # #1
    #     arr = []
    #     for i in range(n):
    #         arr.append(n - i)
    #     return arr
    # #2
    return [x for x in range(n, 0, -1)]
