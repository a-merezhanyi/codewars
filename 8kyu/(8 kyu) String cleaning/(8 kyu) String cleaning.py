# 1 Plain solution
def string_clean(s):
    res = ''

    for char in s:
        if not char.isdigit():
            res += char

    return res

# 2 Optimized solution
def string_clean(s):
    return ''.join(filter(lambda x: not x.isdigit(), s))

# 3 Clever solution
import re
def string_clean(s):
    return re.sub(r'\d', '', s)