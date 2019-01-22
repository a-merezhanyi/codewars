const iqTest = (numbers) => {
  let evenOdd = [[0, 0], [0, 0]];

  numbers.split(' ').some(function(num, i) {
    let n = num % 2;
    evenOdd[n][0]++; // store quantity
    evenOdd[n][1] = i; // store its index
    if (evenOdd[n][0] > 1 && evenOdd[+!n][0] == 1) {
      return true; // stop iterating when found
    }
  });
  return ++evenOdd[evenOdd[0][0] == 1 ? 0 : 1][1];
};
