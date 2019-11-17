// #1
// function squareSum(numbers)
// { 
//   let totalSum = 0;
//   for (i=0; i < numbers.length; i++)
//   {
//     totalSum += Math.pow(numbers[i], 2);
//   }
//   return totalSum;
// }
// #2
// function squareSum(numbers){
//   let totalSum = 0;
//   numbers.forEach(function(x) {
//     totalSum +=  Math.pow(x, 2)
//   });
//   return totalSum;
// }
// #3
// function squareSum(numbers){
//     return numbers.reduce((a, x) => a + (x * x), 0)
// }
// #4
const squareSum = (numbers) => numbers.reduce((a, x) => a + x * x, 0);
