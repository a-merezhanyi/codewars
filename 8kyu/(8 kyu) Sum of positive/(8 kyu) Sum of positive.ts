export function positiveSum(arr: number[]): number {
  let res = 0;
  arr.forEach((x) => (res += x > 0 ? x : 0));
  return res;
}
