# 1 Simple solution
def powers_of_two(n):
    res = []
    for i in range(n + 1):
        res.append(2 ** i)
    return res

# 2 Optimized solution
def powers_of_two(n):
    return [2 ** i for i in range(n + 1)]

# 3 Clever solution
def powers_of_two(n):
    return [1 << i for i in range(n + 1)]

# 4 Coding golf
powers_of_two=lambda n:[1<<i for i in range(n+1)]
