// 1 Plain Solution
function well(x) {
    let goodIdeas = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            goodIdeas += 1;
        }
    }

    if (goodIdeas === 0) {
        return 'Fail!';
    } else if (goodIdeas > 0 && goodIdeas < 3) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}
// 2 Optimized solution
function well(x) {
    let goodIdeas = 0;

    x.forEach(y => y === 'good' && goodIdeas++);

    if (!goodIdeas) return 'Fail!';
    if (goodIdeas === 1 || goodIdeas === 2) return 'Publish!';
    return 'I smell a series!';
}
// 3 Clever solution
function well(x) {
    const goodIdeas = x.filter(y => y === 'good').length;
    return (goodIdeas <= 2) ?
        ['Fail!', 'Publish!', 'Publish!'][goodIdeas]
        : 'I smell a series!';
}
