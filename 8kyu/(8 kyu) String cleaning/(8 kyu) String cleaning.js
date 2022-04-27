// 1 Plain solution
function stringClean(s) {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
            res += s[i];
        }
    }

    return res;
}

// 2 Optimized solution
function stringClean(s) {
    return [...s]
        .filter(
            c => c.charCodeAt(0) < 48
                || c.charCodeAt(0) > 57
        )
        .join('');
}

// 3 Clever solution
const stringClean = s => s.replace(/\d/g, "");
