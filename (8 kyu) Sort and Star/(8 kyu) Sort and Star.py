# 1 Plain solution
def two_sort(array):
    res = ""
    a = sorted(array)
    
    for c in a[0]:
        res += c + "***"
        
    return res[:-3]

# 2 Straightforward solution
def two_sort(array):
    x = [
        c for c in sorted(array)[0]
    ]
    
    return "***".join(x)

# 3 Optimized solution
def two_sort(array):
    return "***".join(
        list(sorted(array)[0])
    )

# 4 Clever solution
def two_sort(array):
    return "***".join(min(array))

# 5 Coding golf
two_sort = lambda a: "***".join(min(a))
