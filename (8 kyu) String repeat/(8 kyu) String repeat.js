// 1 Plain Solution
function repeatStr (n, s) {
  let str = '';
  
  for (let i = 0; i < n; i++) {
    str = str + s;
  }
  
  return str;
}

// 2 Optimized solution
function repeatStr (n, s) {
  return (
    new Array(n).fill(s)
  ).join('');
}

// 3 Clever solution
function repeatStr (n, s) {
    return s.repeat(n)
}

// 4 Coding golf
repeatStr = (n, s) => s.repeat(n);
