def dig_pow(n, p):
    string = str(n)
    res = 0
    for s in string:
        res += int(s) ** p
        p += 1
    return res / n if res % n == 0 else -1
