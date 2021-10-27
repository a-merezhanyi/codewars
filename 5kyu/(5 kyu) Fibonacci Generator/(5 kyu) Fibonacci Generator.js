function* fibonacci(current = 0, next = 1) {
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

function genfib() {
  const sequence = fibonacci();

  return function fib() {
    return sequence.next().value;
  };
}
