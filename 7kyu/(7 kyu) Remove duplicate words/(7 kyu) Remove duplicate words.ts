export function removeDuplicateWords(s: string): string {
  return s
    .split(' ')
    .filter((el, index, arr) => arr.indexOf(el) == index)
    .join(' ');
}
