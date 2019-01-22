//return the total number of smiling faces in the array
const countSmileys = (arr) =>
  // regExp#1 /^((:|;))\s*[-~]{0,1}\s*((\)|D))$/
  // regExp#2 /^[:;][-~]{0,1}[)D]$/
  arr.filter((el) => el.match(/^[:;][-~]?[)D]$/)).length;
