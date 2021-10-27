def even_or_odd(number):
    # #1
    # if number % 2 == 0:
    #     return "Even"
    # else:
    #     return "Odd"
    # #2
    # return "Odd" if number % 2 else "Even"
    # #3
    return ("Odd", "Even")[number % 2]
