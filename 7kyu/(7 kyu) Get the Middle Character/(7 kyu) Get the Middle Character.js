// #1
// function getMiddle(s) {
//   const middle = s.length / 2;
//   if (s.length % 2) {
//     return s.charAt(Math.floor(middle));
//   } else {
//     return s.slice(middle - 1, middle + 1);
//   }
// }
// #2
// function getMiddle(s) {
//   const middle = s.length / 2;
//   return s.length % 2
//     ? s[Math.floor(middle)]
//     : s.slice(middle - 1, middle + 1);
// }
// #3
// function getMiddle(s) {
//   return (
//     [s[Math.round(s.length / 2) - 1], ''][s.length % 2] +
//     s[Math.floor(s.length / 2)]
//   );
// }
// #4
const getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1);
