export function between(a: number, b: number): number[] {
    const res = Array(b - a + 1).fill(0);
    return res.map((_, i) => a + i);
}
