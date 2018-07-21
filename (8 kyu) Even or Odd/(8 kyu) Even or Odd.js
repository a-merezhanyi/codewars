// #1
//  const even_or_odd = (number) => (number % 2 ? 'Odd' : 'Even');
// #2
const even_or_odd = (n) => ['Even', 'Odd'][n & 1];
