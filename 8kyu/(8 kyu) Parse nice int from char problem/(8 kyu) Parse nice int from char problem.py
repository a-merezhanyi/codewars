# 1 Simple solution
def get_age(age):
    years = age[0]
    number = int(years)

    return number

# 2 Optimized solution
def get_age(age):
    years = age[0]

    return int(years)

# 3 Clever solution
def get_age(age):
    return int(age[0])

# 4 Coding golf
get_age=lambda n:int(n[0])
