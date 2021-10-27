# #1
# def find_short(s):
#     lengths = []
#     for word in s.split(" "):
#         lengths.append(len(word))
#     return min(lengths)
# #2
def find_short(s):
    return min(len(x) for x in s.split())