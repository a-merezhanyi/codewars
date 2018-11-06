def century(year):
    return year // 100 + (0 if year % 100 == 0 else 1)
