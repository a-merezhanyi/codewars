export function camelCase(str: string): string {
  return str
    .split(' ')
    .map((s: string): string => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}
