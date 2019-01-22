const ipsBetween = (start, end) => {
  const calc = (n, m = 1) => (end.split`.`[n] - start.split`.`[n]) * m;

  return calc(0, 256 * 256 * 256) + calc(1, 256 * 256) + calc(2, 256) + calc(3);
};
