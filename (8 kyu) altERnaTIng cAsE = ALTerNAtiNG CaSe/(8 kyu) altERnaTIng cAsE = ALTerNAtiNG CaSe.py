# # #1
# def to_alternating_case(string):
#     result = []
#     for x in string:
#         if x.islower():
#             result.append(x.upper())
#         else:
#             result.append(x.lower())
#     return ''.join(result)
# # #2
# def to_alternating_case(string):
#     return ''.join(list(map(lambda s:s.upper() if s.islower() else s.lower(),string)))
# # 3
# def to_alternating_case(string):
#     return ''.join([c.upper() if c.islower() else c.lower() for c in string])
# #4
# def to_alternating_case(string):
#     return string.swapcase()
# #5
to_alternating_case = str.swapcase
