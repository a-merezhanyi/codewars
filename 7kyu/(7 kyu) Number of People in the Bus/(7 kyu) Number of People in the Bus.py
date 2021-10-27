# #1
# from functools import reduce
# def number(stops):
#     nums = [a[0] - a[1] for a in stops]
#     return reduce(lambda a, b: a + b, nums)
#2
def number(bus_stops):
    return sum([a[0] - a[1] for a in bus_stops])
