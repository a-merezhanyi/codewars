# #1
# def freq_seq(s, sep):
#     freq = {}
#     newStr = []
#     for i in s:
#         if freq.get(i) == None:
#             freq[i] = 1
#         else:
#             freq[i] += 1
#     for i in s:
#         newStr.append(str(freq[i]))
#     return sep.join(newStr)
# #2
# def freq_seq(s, sep):
#     s = list(s)
#     counts = {char:str(s.count(char)) for char in set(s)}
#     for i,char in enumerate(s):
#         s[i] = counts[char]
#     return sep.join(s)
#3
def freq_seq(s, sep):
    return sep.join([str(s.count(i)) for i in s])