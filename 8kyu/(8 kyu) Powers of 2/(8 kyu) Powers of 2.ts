// 1 Simple solution
export function powersOfTwo(n: number): number[] {
  const res = [];

  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }

  return res;
}

// 2 Optimized solution
export function powersOfTwo(n: number): number[] {
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}

// 3 Coding golf
export const powersOfTwo = (n: number): number[] =>
  [...Array(n + 1)].map((_, i) => 2 ** i);