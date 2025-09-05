// 1 Plain solution
export function greet(name: string): string {
  const str1 = "Hello, ";
  const str2 = " how are you doing today?";

  return str1 + name + str2;
}

// 2 Optimized solution
export function greet(name: string): string {
  return "Hello, " + name + " how are you doing today?";
}

// 3 Clever solution
export function greet(name: string): string {
  return `Hello, ${name} how are you doing today?`;
}

// 4 Coding golf
export const greet=(_:string)=>`Hello, ${_} how are you doing today?`
