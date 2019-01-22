const cache = [0, 1];

const fibonacci = (n) =>
  cache[n] !== undefined
    ? cache[n]
    : (cache[n] = fibonacci(n - 1) + fibonacci(n - 2));
