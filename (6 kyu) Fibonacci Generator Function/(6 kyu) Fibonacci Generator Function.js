function* fibonacci(fn1 = 1, fn2 = 0, current = 0) {
  while (true) {
    [current, fn2, fn1] = [fn2, fn1, fn1 + fn2];

    yield current;
  }
}
