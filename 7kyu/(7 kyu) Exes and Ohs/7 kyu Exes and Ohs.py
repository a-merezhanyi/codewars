# #1
# def xo(s):
#     equal = 0
#     for c in s:
#         if c.lower() == 'x': equal += 1
#         if c.lower() == 'o': equal -= 1
#     return equal == 0
#2
def xo(s):
    return s.lower().count('x') == s.lower().count('o')
