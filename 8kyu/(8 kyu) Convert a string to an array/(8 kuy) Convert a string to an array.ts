// 1 Plain Solution
export function stringToArray(s: string): string[] {
    const res: string[] = [];
    let word = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            res.push(word);
            word = '';
        } else {
            word += s[i];
        }
    }

    if (word) {
        res.push(word);
    }

    return res;
}

// 2 Optimized Solution
export function stringToArray(s: string): string[] {
    return s.split(' ').filter(word => word.length > 0);
}

// 3 Coding golf
export const stringToArray = (s: string) => s.split(' ');
