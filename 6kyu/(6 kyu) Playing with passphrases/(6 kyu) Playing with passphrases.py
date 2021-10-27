import re

def play_pass(s, n):
    res = []
    string = list(s)
    numeric = re.compile("\d")
    alpha = re.compile("\w")
    
    for i, a in enumerate(string):
        if numeric.match(a):
            res.append(str(9 - int(a)));
        elif alpha.match(a):
            code = ord(a) + n;
            if (code > 90):
                code -= 26
            s = chr(code)
            r = s.lower() if (i % 2) else s.upper()
            res.append(r)
        else:
            res.append(a);

    return "".join(res[::-1])
