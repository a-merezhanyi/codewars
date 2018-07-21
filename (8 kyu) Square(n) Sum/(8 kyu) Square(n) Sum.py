def square_sum(numbers):
    # #1
    # sum = 0
    # for x in numbers:
    #     sum += x * x
    # return sum
    # #2
    return sum(x ** 2 for x in numbers)
