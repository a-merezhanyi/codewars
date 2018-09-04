def high_and_low(numbers):
    arr = list(map(int, numbers.split()))
    return str(max(arr)) + ' ' + str(min(arr))
