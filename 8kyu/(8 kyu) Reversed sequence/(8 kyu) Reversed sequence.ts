export const reverseSeq = (n: number): number[] => {
  return [...Array(n)].map((x, i) => n - i);
};
