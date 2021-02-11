// 1 Plain solution
const reverseSeq = n => {
  let res = [];

  for (let i = n; i > 0; i--) {
    res.push(i);
  }
  
  return res;
};

// 2 Clever solution
const reverseSeq = (n) =>
  Array(n)
    .fill()
    .map((x, i) => n - i);

// 3 Coding golf
const reverseSeq = length =>
  Array.from(
    {length},
    () => length--
  )
