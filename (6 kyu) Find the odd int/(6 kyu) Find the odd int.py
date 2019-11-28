def find_it(seq):
  digits = {}
  num = 0

  for n in seq:
    if str(n) not in digits:
      digits[str(n)] = n
      num += n
    else:
      del digits[str(n)]
      num -= n

  return num
