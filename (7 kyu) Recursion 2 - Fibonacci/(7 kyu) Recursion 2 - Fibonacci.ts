export function fibonacci(n: number): number {
  if (n < 3) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
