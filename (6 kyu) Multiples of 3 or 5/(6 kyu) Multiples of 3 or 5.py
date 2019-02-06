def solution(number):
    # #1
    # result = 0
    # for i in range(1, number):
    #     result += i if 0 == i % 3 or 0 == i % 5 else 0
    # return result
    # #2
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)
