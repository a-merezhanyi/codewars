export function countSheeps(arrayOfSheep: boolean[]): number {
  return arrayOfSheep.filter((x) => x === true).length;
}
