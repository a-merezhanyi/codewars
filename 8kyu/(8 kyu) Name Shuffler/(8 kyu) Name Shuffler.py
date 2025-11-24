# 1 Plain solution
def name_shuffler(str_):
    spaceIndex = str_.index(" ")
    firstName = str_[0:spaceIndex]
    lastName = str_[spaceIndex + 1:]

    return lastName + " " + firstName

# 2 Optimized solution
def name_shuffler(str_):
    name = str_.split(" ")
    return name[1] + " " + name[0]

# 3 Clever solution
def name_shuffler(str_):
    return " ".join(reversed(str_.split(" ")))

# 4 Coding golf
name_shuffler=lambda n:" ".join(n.split()[::-1])