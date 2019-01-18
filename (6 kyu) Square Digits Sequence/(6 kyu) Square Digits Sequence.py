def square_digits_sequence(n):
    s = set()
    while n not in s:
        s.add(n)
        n = sum(int(d)**2 for d in str(n))
    return len(s)+1
