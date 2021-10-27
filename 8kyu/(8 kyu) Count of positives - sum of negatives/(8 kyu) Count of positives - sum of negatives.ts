export function countPositivesSumNegatives(input: any) {
  return input && input.length
    ? [
        input.filter((p: number) => p > 0).length,
        input
          .filter((n: number) => n < 0)
          .reduce((a: number, b: number) => a + b, 0),
      ]
    : [];
}
