# #1
# def max_number(n):
#     s = list(str(n))
#     s.sort()
#     res = s[::-1]
#     return int("".join(res))
# #2
# def max_number(n):
#     s = list(str(n))    
#     return int(''.join(sorted(s, reverse=True)))
#3
def max_number(n):
    return int(''.join(sorted(str(n), reverse=True)))
