export function countSheep(num: number): string {
  let result = '';

  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...';
  }

  return result;
}
