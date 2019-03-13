def dig_pow(n, p):  # #1
    string = str(n)
    res = 0
    for s in string:
        res += int(s) ** p
        p += 1
    return res / n if res % n == 0 else -1


def dig_pow(n, p):  # #2
    res = 0
    for i, s in enumerate(str(n)):
        res += int(s) ** (p + i)
    return res / n if res % n == 0 else -1


def dig_pow(n, p):  # #3
    res = sum(int(s) ** (p + i) for i, s in enumerate(str(n)))
    return res // n if res % n == 0 else -1
