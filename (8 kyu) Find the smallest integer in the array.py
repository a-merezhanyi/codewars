""" (8 kyu) Find the smallest integer in the array
https://www.codewars.com/kata/find-the-smallest-integer-in-the-array
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will
not be empty.
"""


# #1
# def find_smallest_int(arr):
#     arr.sort()
#     return arr[0]
# #2
# def find_smallest_int(arr):
#     return min(arr)
# #3
findSmallestInt=min
