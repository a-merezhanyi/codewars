// 1 Plain solution
function makeUpperCase(str) {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        const cc = str.charCodeAt(i);
        const c = String.fromCharCode(cc - 32);
        // Convert symbols for a..z only
        res += cc <= 122 && cc >= 97 ? c : str[i];
    }

    return res;
}
// 2 Straightforward solution
function makeUpperCase(str) {
    return str
        .replace(
            /[a-z]/g,
            s => String.fromCharCode(
                s.charCodeAt(0) - 32
            )
        )
}
// 3 Optimized solution
function makeUpperCase(str) {
    return str.toUpperCase();
}
// 4 Coding golf
makeUpperCase = s => s.toUpperCase()
