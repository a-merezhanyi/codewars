// #1
// function revrot(str, sz) {
//   if (sz <= 0 || str == '' || sz > str.length) {
//     return '';
//   }
//   const arr = [];
//   const s = str.split('');
//   while (s.length >= sz) {
//     arr.push(s.splice(0, sz));
//   }
//   const res = arr.map((x) => {
//     const sum = x.reduce((a, c) => a + Math.pow(c, 3), 0);
//     if (sum % 2) {
//       x.push(x[0]);
//       x.shift();
//       return x.join('');
//     } else {
//       return x.reverse().join('');
//     }
//   });
//   return res.join('');
// }
// #2
function revrot(str, sz) {
  const isEven = (v) =>
    v.split('').reduce((cubeSum, d) => (cubeSum += d ** 3), 0) % 2 === 0;
  const reverse = (v) =>
    v
      .split('')
      .reverse()
      .join('');
  const rotate = (v) => v.slice(1) + v.slice(0, 1);

  return (str.match(new RegExp(`.{${sz}}`, 'g')) || [])
    .map((v) => (isEven(v) ? reverse(v) : rotate(v)))
    .join('');
}
