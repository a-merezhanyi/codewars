# #1
# def count_positives_sum_negatives(arr):
#     if len(arr) == 0:
#         return []
#     res = [0, 0]
#     for x in arr:
#         if x > 0:
#             res[0] += 1
#         else:
#             res[1] += x
#     return res
# #2
def count_positives_sum_negatives(arr):
    pos = sum(1 for x in arr if x > 0)
    neg = sum(x for x in arr if x < 0)
    return [pos, neg] if len(arr) else []
