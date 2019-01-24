// #1 Using for loop
// function iqTest(numbers) {
//   numbers = numbers.split(' ');
//   const evens = [];
//   const odds = [];
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] & 1 ? odds.push(i + 1) : evens.push(i + 1);
//   }
//   return evens.length === 1 ? evens[0] : odds[0];
// }
// #2 Using "some"
// const iqTest = (numbers) => {
//   const evenOdd = [[0, 0], [0, 0]];
//   numbers.split(' ').some((num, i) => {
//     const n = num % 2;
//     evenOdd[n][0]++; // store quantity
//     evenOdd[n][1] = i; // store its index
//     if (evenOdd[n][0] > 1 && evenOdd[+!n][0] == 1) {
//       return true; // stop iterating when found
//     }
//   });
//   return ++evenOdd[evenOdd[0][0] == 1 ? 0 : 1][1];
// };
// #3 Using "filter"
// const iqTest = (numbers) => {
//   numbers = numbers.split(' ').map((el) => +el);
//   const odd = numbers.filter((el) => el % 2 === 1);
//   const even = numbers.filter((el) => el % 2 === 0);
//   return odd.length < even.length
//     ? numbers.indexOf(odd[0]) + 1
//     : numbers.indexOf(even[0]) + 1;
// };
// #4 Using "reduce"
const iqTest = (numbers) => {
  numbers = numbers.split` `.map((x) => +x % 2);
  return (
    (numbers.reduce((x, y) => x + y) === 1
      ? numbers.indexOf(1)
      : numbers.indexOf(0)) + 1
  );
};
