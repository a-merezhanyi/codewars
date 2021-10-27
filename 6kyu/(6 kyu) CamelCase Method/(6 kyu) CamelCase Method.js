// #1
// String.prototype.camelCase = function() {
//   return this
//           .split(' ')
//           .map((s) => {
//             return s
//                     .charAt(0)
//                     .toUpperCase() + s.slice(1);
//           })
//           .join('');
// }
// #2
// String.prototype.camelCase = function() {
//   return this.split` `.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
//     .join``;
// };
// #3
String.prototype.camelCase = function() {
  return this.trim().replace(/(^|\s)\w/g, (match) =>
    match.trim().toUpperCase(),
  );
};
