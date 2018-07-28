// #1
// function greet(name) {
//   if (name === 'Johnny') return 'Hello, my love!';
//   return 'Hello, ' + name + '!';
// }
// #2
// function greet(name) {
//   return name === 'Johnny' ? 'Hello, my love!' : 'Hello, ' + name + '!';
// }
// #3
const greet = (name) => `Hello, ${name === 'Johnny' ? 'my love' : name}!`;
