// 1 Plain solution
export function get_age(age: string): number {
    const years = age[0];

    return parseInt(years);
}

// 2 Simple solution
export function get_age(age: string): number {
    const years = age.charCodeAt(0) - 48;

    return years;
}

// 3 Optimized solution
export function get_age(age: string): number {
    return +age[0];
}

// 4 Clever solution
export const get_age = (age: string) => +age[0];

// 5 Coding golf
export var get_age = parseInt;
