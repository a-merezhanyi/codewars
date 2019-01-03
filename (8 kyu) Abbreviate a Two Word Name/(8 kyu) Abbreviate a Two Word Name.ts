export function abbrevName(name: string): string {
  return name
    .split(' ')
    .map((s) => s[0].toUpperCase())
    .join('.');
}
