# #1
# def last(*args):
#     last = args[-1]
#     try:
#         return last[-1]
#     except TypeError:
#         return last
#2
def last(*args): 
    try:
        return args[-1][-1]
    except:
        return args[-1]
