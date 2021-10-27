// #1
// const century = (year) => Math.floor(year / 100) + (year % 100 ? 1 : 0);
// #2
// const century = (year) => Math.ceil(year / 100);
// #3
// Bitwise OR a | b
// Returns a 1 in each bit position for which
// the corresponding bits of either or both operands are 1s.
const century = (year) => ((year + 99) / 100) | 0;
