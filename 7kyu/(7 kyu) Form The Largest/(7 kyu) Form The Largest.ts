export function maxNumber(n: number): number {
  const str = String(n);
  const arr = str.split('').map(Number);
  arr.sort((a: number, b: number): number => b - a);
  const res = arr.join('');
  return parseInt(res);
}
