// 1 Plain Solution
export const booleanToString = (b: boolean): string => {
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
};

// 2 Optimized Solution
export const booleanToString = (b: boolean): string => {
  return b ? "true" : "false";
};

// 3 Clever solution
export const booleanToString = (b: boolean): string => String(b);

// 4 Coding golf
export const booleanToString=(b:boolean)=>`${b}`;

// 5 Shortest solution
export const booleanToString=String;