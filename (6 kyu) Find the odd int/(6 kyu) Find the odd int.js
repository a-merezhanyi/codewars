// #1
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

// #2
const findOdd = A => A.reduce((a, b) => a ^ b);
