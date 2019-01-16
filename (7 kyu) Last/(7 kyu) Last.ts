export function last<T>(list: Array<T>): T {
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
