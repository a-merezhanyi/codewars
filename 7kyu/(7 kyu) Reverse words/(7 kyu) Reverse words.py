# #1
# def reverse_words(text):
#     words = text.split(" ")
#     result = []
#     for w in words:
#         result.append(w[::-1])
#     return " ".join(result)

# #2


def reverse_words(text):
    return " ".join(text[::-1].split(" ")[::-1])
