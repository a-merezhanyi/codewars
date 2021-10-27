# #1
# def min_value(digits):
#     s = set(digits)
#     l = list(s)
#     l.sort()
#     r = []
#     for x in l:
#         r.append(str(x))
#     res = ''.join(r)
#     return int(res)
#2
def min_value(digits):
    l = sorted(list(set(digits)))
    return int(''.join(str(x) for x in l))
#3
def min_value(digits):
     return int("".join(map(str,sorted(set(digits)))))
