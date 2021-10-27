def iq_test(numbers):
    sequence = numbers.split()
    evens = []
    odds = []
    for i in range(len(sequence)):
        odds.append(i + 1) if int(sequence[i]) & 1 else evens.append(i + 1)
    return evens[0] if len(evens) == 1 else odds[0]
  
