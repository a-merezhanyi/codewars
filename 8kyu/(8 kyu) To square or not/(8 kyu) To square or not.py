import math

def square_or_square_root(arr):
    res = []

    for x in arr:
        squared_number = math.sqrt(x)
        if squared_number == math.trunc(squared_number):
            res.append(squared_number)
        else:
            res.append(math.pow(x, 2))

    return res
