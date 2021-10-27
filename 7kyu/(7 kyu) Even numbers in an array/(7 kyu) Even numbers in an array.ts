export function evenNumbers(array: number[], n: number): number[] {
  const result = [];

  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 == 0) result.push(array[i]);
  }

  return result.splice(result.length - n, n);
}
