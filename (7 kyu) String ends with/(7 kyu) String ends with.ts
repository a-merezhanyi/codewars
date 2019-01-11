export function solution(str: string, ending: string): boolean {
  return str.substr(-ending.length) === ending;
}
