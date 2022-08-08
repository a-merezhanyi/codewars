def twice_as_old(dad_years_old, son_years_old):
    twice_old = son_years_old * 2
    res = dad_years_old - twice_old
    if res > 0:
        return res
    else:
        return -res
