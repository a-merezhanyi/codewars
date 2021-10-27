def count_sheep(n):
    return "".join("{} sheep...".format(i) for i in range(1, n+1))