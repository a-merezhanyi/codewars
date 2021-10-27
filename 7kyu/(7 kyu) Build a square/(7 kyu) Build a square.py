# #1
# def generateShape(int):
#     str = []
#     for i in range(int):
#         str.append('+' * int)
#     return "\n".join(str)
# #2
# def generateShape(n):
#     return "\n".join("+" * n for i in range(n))


def generateShape(int):  # 3
    return (("+" * int + "\n") * int)[:-1]
