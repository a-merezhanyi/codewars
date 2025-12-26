# 1 Simple solution
def make_upper_case(s):
    res = ""
    for char in s:
        charCode = ord(char)
        if charCode >= 97 and charCode <= 122:
            res += chr(charCode - 32)
        else:
            res += char
    return res

# 2 Optimized solution
import re

def make_upper_case(s):
    regex = r'[a-z]'
    return re.sub(regex, lambda x: chr(ord(x.group(0)) - 32), s)

# 3 Clever solution
def make_upper_case(s):
    return s.upper()

# 4 Coding golf
make_upper_case=lambda s:s.upper()

# 5 Coding golf alternative
make_upper_case=str.upper