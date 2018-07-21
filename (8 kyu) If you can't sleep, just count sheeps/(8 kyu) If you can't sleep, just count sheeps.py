""" If you can't sleep, just count sheeps (8 kyu)
https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheeps

Given a number, 3 for example, return a string with a murmur:
"1 sheep...2 sheep...3 sheep..."
"""
def count_sheep(n):
    return "".join("{} sheep...".format(i) for i in range(1, n+1))