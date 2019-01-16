export const minValue = (values: number[]): number => {
  const arr = [...values].sort();
  const dedupe = arr.filter(
    (x: number, i: number, a: number[]): boolean => i === a.indexOf(x),
  );
  return +dedupe.join('');
};
