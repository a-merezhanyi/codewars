export function squareDigitsSequence(a: number): number {
  const nums = [];
  while (-1 === nums.indexOf(a)) {
    nums.push(a);
    a = String(a)
      .split('')
      .reduce((s, n) => s + Math.pow(+n, 2), 0);
  }
  return nums.length + 1;
}
