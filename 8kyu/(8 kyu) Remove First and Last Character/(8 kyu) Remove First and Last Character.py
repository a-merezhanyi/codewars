# 1 Simple solution
def remove_char(s):
    result = ""
    for i in range(1, len(s) - 1):
        result += s[i]
    return result

# 2 Optimized solution
def remove_char(s):
    if len(s) <= 2:
        return ""
    return s[1:-1]

# 3 Clever solution
def remove_char(s):
    return s[1:-1] if len(s) > 2 else ""

# 4 Coding golf
remove_char=lambda s:s[1:-1]