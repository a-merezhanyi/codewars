# #1
# def longest(s1, s2):
#     res = s1 + s2
#     res = list(res)
#     res = dict.fromkeys(res)
#     res = sorted(res)
#     res = ''.join(res)
#     return res
# #2
# def longest(s1, s2):
#     return ''.join(sorted(dict.fromkeys(s1 + s2)))

# #3


def longest(s1, s2):
    return ''.join(sorted((set(s1 + s2))))
