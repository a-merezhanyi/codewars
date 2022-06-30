// 1 Plain solution
function fakeBin(x) {
  let res = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      res += "0";
    } else {
      res += "1";
    }
  }

  return res;
}

// 2 Optimized solution
function fakeBin(x) {
  let res = "";

  [...x].forEach((i) => (res += i < 5 ? "0" : "1"));

  return res;
}

// 3 Clever solution
const fakeBin = (x) => [...x].map((i) => (i < 5 ? "0" : "1")).join("");

// 4 Coding golf
const fakeBin = (x) => [...x].reduce((a, b) => a + ~~(+b / 5), "");