"""
altERnaTIng cAsE <=> ALTerNAtiNG CaSe (8 kyu)
http://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case
Define String.prototype.toAlternatingCase (or a similar
function/method such as
to_alternating_case/toAlternatingCase/ToAlternatingCase in your
selected language; see the initial solution for details) such that
each lowercase letter becomes uppercase and each uppercase letter
becomes lowercase. For example:
"hello world".toAlternatingCase() === "HELLO WORLD"
"""


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
