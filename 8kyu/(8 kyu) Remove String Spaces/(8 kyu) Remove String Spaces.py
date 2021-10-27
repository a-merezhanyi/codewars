# #1
# def no_space(x):
#     return x.replace(' ' ,'')
# #2
import re

def no_space(x):
    return re.sub(r"\s+", "", x)