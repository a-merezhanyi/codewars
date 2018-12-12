// #1
// function evenNumbers(array, number) {
//   const result = [];

//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] % 2 == 0) result.push(array[i]);
//   }

//   return result.splice(result.length - number, number);
// }
// #2
// function evenNumbers(array, number) {
//   const result = [];
//   array.map((x) => {
//     if (x % 2 === 0) {
//       result.push(x);
//     }
//   });
//   return result.slice(-number);
// }
// #3
// function evenNumbers(array, number) {
//   return array.filter((x) => !(x % 2)).splice(-number);
// }
// #4
const evenNumbers = (array, number) =>
  array.filter((x) => !(x % 2)).splice(-number);
