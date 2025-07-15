// 1 Plain solution
export function stringToNumber(str: string): number {
  let i = 0;
  let res = 0;
  let isPositive = 1;

  if (str[0] === "-") {
    isPositive = -1;
    i++;
  }

  while (i < str.length) {
    res = res * 10 + (str.charCodeAt(i) - "0".charCodeAt(0));
    i++;
  }

  return res * isPositive;
}

// 2 Straightforward solution
export function stringToNumber(str: string): number {
  let res = 0;
  let isPositive = 1;

  if (str[0] === "-") {
    isPositive = -1;
    str = str.slice(1);
  }

  for (let i = 0; i < str.length; i++) {
    res = res * 10 + (str.charCodeAt(i) - "0".charCodeAt(0));
  }

  return res * isPositive;
}

// 3 Optimized solution
export function stringToNumber(str: string): number {
  return parseInt(str, 10);
}

// 4 Clever solution
export const stringToNumber=(s:string)=>+s

// 5 Coding golf
export const stringToNumber=Number