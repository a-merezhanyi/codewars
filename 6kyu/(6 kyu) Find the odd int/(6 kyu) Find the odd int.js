// #1 Using an object
function findOdd(A) {
  let digits = {};
  let num = 0;

  // while an odd digit is one and only one,
  // create a sum of all elements and
  // reduce all even
  A.forEach(n => {
    if (!digits[n]) {
      num += digits[n] = n;
    } else {
      delete digits[n];
      num -= n;
    }
  });

  return num;
}

// #2 Using find and filter functions
function findOdd(A) {
  return A.find((x, i, a) => a.filter(y => y === x).length % 2 === 1);
}
// #3 Using reduce and XOR
const findOdd = A => A.reduce((a, b) => a ^ b);
