// #1
// function feast(beast, dish) {
//   let result;
//   const start = beast[0] === dish[0];
//   const end = beast[beast.length - 1] === dish[dish.length - 1];
//   result = start && end;
//   return result;
// }
// #2
// function feast(beast, dish) {
//   let result;
//   const start = beast[0] === dish[0];
//   const end = beast.slice(-1) === dish.slice(-1);
//   result = start && end;
//   return result;
// }
// #3
const feast = (beast, dish) =>
  beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
