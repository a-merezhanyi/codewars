// 1 Plain solution
export function doubleInteger(i: number): number {
  return 2 * i;
}

// 2 Optimized solution
export const doubleInteger = (i: number): number => 2 * i;

// 3 Coding golf
export const doubleInteger = (i: any) => i << 1;
