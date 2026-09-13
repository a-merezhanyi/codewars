// 1 Simple solution
export function isUpperCase(str: string) : boolean {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

// 2 Optimized solutoion
export function isUpperCase(str: string) : boolean {
  return [...str].filter(s => s === s.toUpperCase()).length === str.length;
}

// 3 Clever solution
export function isUpperCase(str: string) : boolean {
  return str === str.toUpperCase();
}

// 4 Coding golf
export const isUpperCase = (s: string) => s === s.toUpperCase()
