// #1
// function removeDuplicateWords(s) {
//   let cleanArr = [];
//   s.split(' ').forEach((current) => {
//     if (!cleanArr.includes(current)) {
//       cleanArr.push(current);
//     }
//   });
//   return cleanArr.join(' ');
// }
// #2
// function removeDuplicateWords(s) {
//   return s
//     .split(' ')
//     .filter((el, index, arr) => arr.indexOf(el) == index)
//     .join(' ');
// }
// #3
const removeDuplicateWords = (s) => [...new Set(s.split` `)].join` `;
