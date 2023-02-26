def positive_sum(arr):
    res = 0

    for i in range(len(arr)):
        if arr[i] > 0:
            res += arr[i]

    return res
