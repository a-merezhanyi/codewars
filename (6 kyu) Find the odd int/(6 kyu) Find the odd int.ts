export const findOdd = (xs: number[]): number => {
  let digits = {};
  let num: number = 0;
  xs.forEach((n: number) => {
    if (!digits[n]) {
      num += digits[n] = n;
    } else {
      delete digits[n];
      num -= n;
    }
  });

  return num;
};
