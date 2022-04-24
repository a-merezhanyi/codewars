export const digitize = (n: number): number[] => {
    const res: number[] = [];
    const str = [...String(n)];
    str.forEach(x => res.unshift(+x));
    return res;
};
