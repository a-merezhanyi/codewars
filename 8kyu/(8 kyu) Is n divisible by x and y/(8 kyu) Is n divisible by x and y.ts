export function isDivisible(n: number, x: number, y: number): boolean {
    return (n % x === 0 && n % y === 0) ? true : false;
}