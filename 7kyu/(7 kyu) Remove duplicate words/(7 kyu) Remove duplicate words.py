# #1 py 3.4.3
# from collections import OrderedDict
# def remove_duplicate_words(s):
#     str = s.split(' ')
#     return ' '.join(list(OrderedDict((x, True) for x in str).keys()))
#2 py 3.6.0
def remove_duplicate_words(s):
    return ' '.join(dict.fromkeys(s.split()))
