function countPositivesSumNegatives(input) {
  // #1
  //   if (!input || !input.length) {
  //     return [];
  //   }
  //   const res = [0, 0];
  //   input.forEach((x) => (x > 0 ? res[0]++ : (res[1] += x)));
  //   return res;
  // #2
  //   return input && input.length
  //     ? [
  //         input.filter((p) => p > 0).length,
  //         input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
  //       ]
  //     : [];
  // #3
  return input && input.length
    ? input.reduce(
        (p, x) => {
          x > 0 ? p[0]++ : (p[1] += x);
          return p;
        },
        [0, 0],
      )
    : [];
}
