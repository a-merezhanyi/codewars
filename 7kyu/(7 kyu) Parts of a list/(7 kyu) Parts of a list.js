// 1 Plain solution
function partlist(arr) {
  const res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    res.push([arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")]);
  }

  return res;
}

// 2 Optimized solution
function partlist(arr) {
  arr = arr.map((_, i) => [
    arr.slice(0, i + 1).join(" "),
    arr.slice(i + 1).join(" "),
  ]);
  arr.pop();
  return arr;
}

// 3 Clever solution
var partlist = (arr) =>
  arr.map((v, i) => [a.slice(0, i).join(" "), a.slice(i).join(" ")]).slice(1);
