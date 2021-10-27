const sumStrings = (a, b) => {
  // try a simple case
  let sum = String(+a + +b);
  if (!sum.includes`e+`) {
    return sum;
  }

  // perform BigInteger
  sum = '';
  let $ = 0;
  [a, b] = [a.split``, b.split``];
  while (a.length || b.length || $) {
    $ += ~~a.pop() + ~~b.pop();
    sum = ($ % 10) + sum;
    $ = $ > 9;
  }
  return sum.replace(/^0+/, '');
};
