export function twoSort(s: string[]): string {
  return s
    .sort()[0]
    .split('')
    .join('***');
}
