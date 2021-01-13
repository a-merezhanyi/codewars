# 1 Plain solution
def square_sum(numbers):
    sum = 0
    
    for x in numbers:
        sum += x * x
        
    return sum

# 2 Optimized solution
def square_sum(numbers):
    res = []
    for x in numbers:
        res.append(x**2)
    return(sum(res))

# 3 Clever solution
def square_sum(numbers):
    return sum(x ** 2 for x in numbers)

# 4 Coding golf
square_sum = lambda n: sum(x**2 for x in n)
