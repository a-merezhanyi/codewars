export function reverseWords(str: string): string {
  return str
    .split(' ')
    .map(
      (w: string): string =>
        w
          .split('')
          .reverse()
          .join(''),
    )
    .join(' ');
}
