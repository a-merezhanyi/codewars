// 1 Simple solution
export function plural(n: number): boolean {
    if (n === 1 || n === -1) {
        return false;
    } else {
        return true;
    }
}

// 2 Optimized solution
export function plural(n: number): boolean {
    return n !== 1 && n !== -1;
}

// 3 Coding golf
export const plural = (n: number) => n != 1;
