// 1 Plain solution
function squareSum(numbers) { 
  let totalSum = 0;
  
  for (i=0; i < numbers.length; i++) {
    totalSum += Math.pow(numbers[i], 2);
  }
  
  return totalSum;
}

// 2 Optimized solution
function squareSum(numbers){
  let totalSum = 0;
  
  numbers.forEach(x =>
    totalSum +=  Math.pow(x, 2)
  );
  
  return totalSum;
}

// 3 Clever solution
function squareSum(numbers){
    return numbers
      .reduce(
        (acc, x) => acc + (x * x)
        , 0)
}

// 4 Coding golf
squareSum = n => n
  .reduce(
    (a, x) => a + x * x
    , 0
  );
