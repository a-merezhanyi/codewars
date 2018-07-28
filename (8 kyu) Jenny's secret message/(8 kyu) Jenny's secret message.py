# #1
# def greet(name):
#     if name == "Johnny":
#         return "Hello, my love!"
#     return "Hello, {name}!".format(name=name)
# #2
# def greet(name):
#     return "Hello, {name}!".format(name="my love" if name == "Johnny" else name)
# #3


def greet(n): return "Hello, {}!".format(n.replace("Johnny", "my love"))
