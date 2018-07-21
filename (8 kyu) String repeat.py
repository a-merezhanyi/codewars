""" String repeat (8 kyu)
https://www.codewars.com/kata/string-repeat
Write a function called repeatStr which repeats the given string string
exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
"""
def repeat_str(repeat, string):
    # #1
    # str = ""
    # for i in range(repeat):
    #     str += string
    # return str
    #2
    return repeat * string