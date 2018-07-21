def reverse_seq(n):
    # #1
    #     arr = []
    #     for i in range(n):
    #         arr.append(n - i)
    #     return arr
    # #2
    return [x for x in range(n, 0, -1)]
