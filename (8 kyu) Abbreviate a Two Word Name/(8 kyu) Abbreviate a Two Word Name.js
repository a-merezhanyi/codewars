// #1
// function abbrevName(name) {
//   const arr = name.split(' ');
//   const firstname = arr[0];
//   const surname = arr[1];
//   const result = firstname[0].toUpperCase() + '.' + surname[0].toUpperCase();
//   return result;
// }
// #2
// function abbrevName(name){
//   const arr = name.split(' ')
//   const [firstname, surname] = arr
//   const result = `${firstname[0].toUpperCase()}.${surname[0].toUpperCase()}`
//   return result
// }
// #3
// function abbrevName(name){
//   const arr = name.split(' ')
//   const result = arr.map(s => s[0].toUpperCase()).join('.')
//   return result
// }
// #4
// function abbrevName(name) {
//   return name.split` `.map((s) => s[0].toUpperCase()).join`.`;
// }
// #5
const abbrevName = (name) =>
  name
    .split(' ')
    .map((s) => s[0].toUpperCase())
    .join('.');
