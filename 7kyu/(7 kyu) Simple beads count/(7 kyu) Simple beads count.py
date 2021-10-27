# #1
# def count_red_beads(n):
#    return 0 if n < 2 else (n - 1) * 2


def count_red_beads(n):  # 2
    return max(0, 2 * (n-1))
