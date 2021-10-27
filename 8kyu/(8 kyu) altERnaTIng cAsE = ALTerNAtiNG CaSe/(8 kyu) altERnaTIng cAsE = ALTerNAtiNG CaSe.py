# 1 Plain solution
def to_alternating_case(string):
    result = []
    for c in string:
        if c.islower():
            result.append(c.upper())
        else:
            result.append(c.lower())
    return ''.join(result)

# 2 Straightforward solution
def to_alternating_case(string):
    return ''.join(list(map(lambda c:c.upper() if c.islower() else c.lower(), string)))
"""
def to_alternating_case(string):
    return ''.join(
        list(
            map(
                lambda c:c.upper()
                if c.islower()
                else c.lower(),
                string
            )
        )
    )
"""

# 3 Optimized solution
def to_alternating_case(string):
    return ''.join([c.upper() if c.islower() else c.lower() for c in string])
"""
def to_alternating_case(string):
    return ''.join(
        [c.upper()
         if c.islower()
         else c.lower()
         for c in string
        ]
    )
"""

# 4 Clever solution
def to_alternating_case(string):
    return string.swapcase()

# 5 Coding golf
to_alternating_case = str.swapcase
