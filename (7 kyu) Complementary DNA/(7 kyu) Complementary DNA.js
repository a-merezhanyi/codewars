// #1
// function DNAStrand(dna) {
//   const dictionary = { A: 'T', T: 'A', C: 'G', G: 'C' };
//   return dna
//     .split('')
//     .map((c) => dictionary[c])
//     .join('');
// }
// #2
// const DNAStrand = (dna) => {
//   return dna
//     .replace(/A/g, 't')
//     .replace(/T/g, 'a')
//     .replace(/C/g, 'g')
//     .replace(/G/g, 'c')
//     .toUpperCase();
// };
// #3
const DNAStrand = (dna) =>
  dna.replace(/./g, (c) => ({ A: 'T', T: 'A', G: 'C', C: 'G' }[c]));
