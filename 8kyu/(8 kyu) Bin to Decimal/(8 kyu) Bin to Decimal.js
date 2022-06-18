// 1 Plain solution
function binToDec(bin) {
  let res = 0;

  for (let i = 0; i < bin.length; i++) {
    res += bin[bin.length - i - 1] * 2 ** i;
  }

  return res;
}

// 2 Optimized solution
function binToDec(bin) {
  let res = 0;

  for (let i = 0, j = bin.length - 1; j >= 0; i++, j--) {
    res += bin[j] * 2 ** i;
  }

  return res;
}

// 3 Clever solution
const binToDec = (bin) =>
  [...bin].reverse().reduce((a, c, i) => (a += +c * 2 ** i), 0);

// 4 Coding golf
binToDec = (n) => parseInt(n, 2);
