def longest(s1, s2):
    res = s1 + s2
    res = list(res)
    res = dict.fromkeys(res)
    res = sorted(res)
    res = ''.join(res)
    return res