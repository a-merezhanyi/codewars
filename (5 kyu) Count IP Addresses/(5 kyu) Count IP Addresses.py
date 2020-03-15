def ips_between(start, end):
    calc = lambda n, m: (int(end.split(".")[n]) - int(start.split(".")[n])) * m
    return calc(0, 256 * 256 * 256) + calc(1, 256 * 256) + calc(2, 256) + calc(3, 1)
