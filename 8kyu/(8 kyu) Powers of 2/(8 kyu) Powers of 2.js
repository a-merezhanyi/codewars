// 1 Plain solution
function powersOfTwo(n) {
  const res = [];

  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }

  return res;
}

// 2 Optimized solution
function powersOfTwo(n) {
  return Array(n + 1)
    .fill(0)
    .map((_, i) => 2 ** i);
}

// 3 Clever solution
const powersOfTwo = (n) => [...Array(++n)].map((_, i) => 2 ** i);
