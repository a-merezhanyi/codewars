// #1
// function findShort(s) {
//   const arr = s.split(' ');
//   let smallest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < smallest.length) {
//       smallest = arr[i];
//     }
//   }
//   return smallest.length;
// }
// #2
// const findShort = (s) =>
//   s
//     .split(' ')
//     .sort((a, b) => b.length - a.length)
//     .pop().length;
// #3
const findShort = (s) => Math.min(...s.split` `.map((w) => w.length));
