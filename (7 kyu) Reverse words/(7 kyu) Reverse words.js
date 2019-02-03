// #1
// function reverseWords(str) {
//   const spaces = str.match(/\s+/g);
//   const space = spaces ? spaces[0] : '';
//   const words = str.split(/\s+/g);

//   return words.map((x) => x.split``.reverse().join``).join(space);
// }
// #2
// function reverseWords(str) {
//   return str.split` `.map((w) => w.split``.reverse().join``).join` `;
// }
// #3
const reverseWords = (str) =>
  str.split` `.map((w) => w.split``.reverse().join``).join` `;
