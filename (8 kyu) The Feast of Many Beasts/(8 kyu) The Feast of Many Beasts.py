# 1 Plain Solution
def feast(beast, dish):
    start = beast.startswith(dish[:1])
    end = beast.endswith(dish[-1:])

    return start and end

# 2 Optimized solution
def feast(beast, dish):
    return beast.startswith(dish[:1]) and beast.endswith(dish[-1:])
        
# 3 Clever solution
def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]
