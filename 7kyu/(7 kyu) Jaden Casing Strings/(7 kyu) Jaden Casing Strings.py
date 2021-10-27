def toJadenCase(string):
    # #1
    # return " ".join([c[0].upper() + c[1::] for c in string.split()])
    # 2
    return " ".join(c.capitalize() for c in string.split())
