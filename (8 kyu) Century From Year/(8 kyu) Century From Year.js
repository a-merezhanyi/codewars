// #1
// const century = (year) => Math.floor(year / 100) + (year % 100 ? 1 : 0);
// #2
// const century = (year) => Math.ceil(year / 100);
// #3
const century = (year) => ((year + 99) / 100) | 0;
