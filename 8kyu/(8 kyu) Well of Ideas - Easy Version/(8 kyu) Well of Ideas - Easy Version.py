# 1 Plain solution
def well(x):
    goodIdeas = 0

    for i in range(0, len(x)):
        if x[i] == "good":
            goodIdeas += 1

    if goodIdeas == 0:
        return "Fail!"
    elif goodIdeas > 0 and goodIdeas < 3:
        return "Publish!"
    else:
        return "I smell a series!"

# 2 Optimized solution
def well(x):
    if x.count("good") == 0:
        return "Fail!"
    elif x.count("good") <= 2:
        return "Publish!"
    else:
        return "I smell a series!"

# 3 Clever solution
def well(x):
    c = x.count('good')
    return 'I smell a series!' if c > 2 else 'Publish!' if c else 'Fail!'

# 4 Coding golf
well = lambda x: ('Fail!','Publish!','I smell a series!')[('good' in x) + (x.count('good')>2)]