# 1 Plain solution
def solution(string, markers):
    str = string.split("\n")
    res = [];
    for s in str:
        sub = s
        for m in markers:
            i = s.find(m)
            if i != -1:
                sub = sub[:i]
        res.append(sub.rstrip())
    return "\n".join(res)
    
# 2 Optimized solution
def solution(string, markers):
    res = [];
    for s in string.split("\n"):
        for m in markers:
            s = s if s.find(m) == -1 else s[:s.find(m)].rstrip()
        res.append(s)
    return "\n".join(res)

# 3 Clever solution
def solution(string, markers):
    str = string.split('\n')
    for m in markers:
        str = [s.split(m)[0].rstrip() for s in str]
    return '\n'.join(str)

# 4 Coding golf
from re import sub

def solution(string, markers):
    return sub("(.*?) ?([\%s].*)" % "\\".join(markers), "\g<1>", string) if markers else string
