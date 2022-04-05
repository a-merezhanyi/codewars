export function well(x: string[]): string {
    const goodIdeas = x.filter(y => y === 'good').length;
    return (goodIdeas <= 2) ?
        ['Fail!', 'Publish!', 'Publish!'][goodIdeas]
        : 'I smell a series!';
}
