export function toAlternatingCase(s: string): string {
  return s
    .split('')
    .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join('');
}
