// 1 Plain solution
export function removeChar(str: string): string {
    let result = '';

    for (let i = 1; i < str.length - 1; i++) {
        result += str[i];
    }

    return result;
}

// 2 Optimized solution
export function removeChar(str: string): string {
    return str
        .split('')
        .slice(1, -1)
        .join('');
}

// 3 Clever solution
export function removeChar(str: string): string {
    return str.slice(1, -1);
}

// 4 Coding golf
export const removeChar=(s:string):string=>s.slice(1,-1);
