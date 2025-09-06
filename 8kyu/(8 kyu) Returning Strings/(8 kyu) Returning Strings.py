# 1 Plain solution
def greet(name):
    str1 = "Hello, "
    str2 = " how are you doing today?"
    return str1 + name + str2


# 2 Optimized solution
def greet(name):
    return "Hello, " + name + " how are you doing today?"

# 3 Clever solution
def greet(name):
    return f"Hello, {name} how are you doing today?"

# 4 Coding golf
greet=lambda n:f"Hello, {n} how are you doing today?"