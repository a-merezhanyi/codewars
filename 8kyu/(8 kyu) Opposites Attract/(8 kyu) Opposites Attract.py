# 1 Simple solution
def lovefunc(flower1, flower2):
    positiveCase1 = flower1 % 2 == 0 and flower2 % 2 != 0
    positiveCase2 = flower1 % 2 != 0 and flower2 % 2 == 0
    res = False

    if positiveCase1 or positiveCase2:
        res = True

    return res


# 2 Optimized solution
def lovefunc(flower1, flower2):
    positiveCase1 = flower1 % 2 == 0 and flower2 % 2 != 0
    positiveCase2 = flower1 % 2 != 0 and flower2 % 2 == 0

    return positiveCase1 or positiveCase2


# 3 Clever solution
def lovefunc(flower1, flower2):
    return flower1 % 2 != flower2 % 2

# 4 Coding golf
lovefunc=lambda f1,f2:f1%2!=f2%2
