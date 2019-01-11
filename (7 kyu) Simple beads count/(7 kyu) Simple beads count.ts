export function countRedBeads(n: number): number {
  return n < 2 ? 0 : (n - 1) * 2;
}
