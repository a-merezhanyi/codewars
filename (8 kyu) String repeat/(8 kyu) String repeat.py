# 1 Plain Solution
def repeat_str(repeat, string):
    str = ""
    
    for i in range(repeat):
        str = str + string
        
    return str

# 2 Optimized solution
def repeat_str(repeat, string):
    return "{}".format(string) * int(repeat)

# 3 Clever solution
def repeat_str(repeat, string):
    return repeat * string

# 4 Coding golf
repeat_str = lambda n, str: str * n
