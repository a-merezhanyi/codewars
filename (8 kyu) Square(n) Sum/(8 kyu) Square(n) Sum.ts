export function squareSum(numbers: number[]): number {
  return numbers.reduce((a, x) => a + x * x, 0);
}
