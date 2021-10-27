# #1
# def reverseWords(str):
#     arr = str.split()
#     rev = arr[::-1]
#     return " ".join(rev)
# #2
# def reverseWords(str):
#     return " ".join(str.split()[::-1])
# #3


def reverseWords(s): return " ".join(s.split(" ")[::-1])
