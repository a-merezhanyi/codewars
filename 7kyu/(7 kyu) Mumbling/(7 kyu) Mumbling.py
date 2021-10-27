def accum(s):
    # #1
    #return "-".join([c.upper() + c.lower() * i for i, c in enumerate(s)])

    #2
    return '-'.join((c * i).title() for i, c in enumerate(s, 1))