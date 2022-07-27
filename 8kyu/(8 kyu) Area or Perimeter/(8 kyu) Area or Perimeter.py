def area_or_perimeter(l , w):
    isSquare = l == w;

    if isSquare:
        return l * w;
    else:
        return l * 2 + w * 2;
