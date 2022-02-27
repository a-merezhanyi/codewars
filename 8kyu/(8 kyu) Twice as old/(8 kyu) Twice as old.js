// 1 Plain solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
    const twiceOld = sonYearsOld * 2;
    const res = dadYearsOld - twiceOld;
    if (res > 0) {
        return res;
    } else {
        return -res;
    }
}

// 2 Optimized solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// 3 Coding golf
const twiceAsOld = (d, s) => Math.abs(d - s * 2);
