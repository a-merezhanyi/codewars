function digPow(n, p, t = 0, k = 1) {
  n.toString()
    .split('')
    .forEach((el, i) => {
      t += Math.pow(parseInt(el), p + i);
    });

  while (k <= 0xffff) {
    if (n * k++ == t) {
      return k - 1;
    }
  }

  return -1;
}
