// 1 Plain solution
function plural(n) {
    if (n === 1 || n === -1) {
        return false;
    } else {
        return true;
    }
}

// 2 Optimized solution
plural = n => (n !== 1 && n !== -1)

// 3 Clever solution
const plural = n => n !== 1;
