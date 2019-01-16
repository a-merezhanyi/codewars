// #1
// String.prototype.toJadenCase = function() {
//   const words = this.split(' ');

//   for (let i = 0, wordsLen = words.length; i < wordsLen; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(' ');
// };
// #2
// String.prototype.toJadenCase = function() {
// return this.split(' ')
//   .map(function(s) {
//     return s.charAt(0).toUpperCase() + s.slice(1);
//   })
//   .join(' ');
// };
// #3
String.prototype.toJadenCase = function() {
  // cannot be an "arrow function", because it has no context "this"
  return this.split` `.map((s) => s[0].toUpperCase() + s.slice(1)).join` `;
};
