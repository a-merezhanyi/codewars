# 1 Simple solution
def plural(n):
    if n == 1 or n == -1:
        return False
    else:
        return True

# 2 Optimized solution
def plural(n):
    return n != 1 and n != -1

# 3 Clever solution
plural=lambda n:n!=1

# 4 Coding golf
plural = 1..__ne__