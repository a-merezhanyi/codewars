# 1 Plain solution
def reverse_seq(n):
    arr = []
    for i in range(n):
        arr.append(n - i)
    return arr

# 2 Optimized solution
def reverse_seq(n):
    return [x for x in range(n, 0, -1)]

# 3 Clever solution
def reverse_seq(n):
    return list(range(n, 0, -1))

# 4 Coding golf
reverse_seq = lambda n: list(range(n, 0, -1))
