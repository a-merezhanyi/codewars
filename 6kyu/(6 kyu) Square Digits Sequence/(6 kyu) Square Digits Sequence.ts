export function squareDigitsSequence(a: number): number {
  const nums: number[] = [];
  while (-1 === nums.indexOf(a)) {
    nums.push(a);
    a = String(a)
      .split('')
      .reduce((s: number, n: string) => s + Math.pow(Number(n), 2), 0);
  }
  return nums.length + 1;
}
