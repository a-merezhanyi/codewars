def points(games):
    res = 0

    for i in range(0, len(games)):
        x = games[i][0]
        y = games[i][2]

        if x > y:
            res += 3
        elif x == y:
            res += 1

    return res;