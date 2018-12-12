def even_numbers(arr, n):
    return list(filter(lambda x: x % 2 == 0, arr))[-n::]
