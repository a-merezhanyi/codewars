def abbrevName(name):
    # #1
    # return ".".join(list(map(lambda c: c[0].upper(), name.split(" "))))
    #2
    return ".".join(w[0] for w in name.split()).upper()