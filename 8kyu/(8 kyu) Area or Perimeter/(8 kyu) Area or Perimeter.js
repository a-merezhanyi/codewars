// 1 Plain Solution
const areaOrPerimeter = function (l, w) {
    const isSquare = l === w;

    if (isSquare) {
        return l * w;
    } else {
        return l * 2 + w * 2;
    }
};
// 2 Optimized solution
const areaOrPerimeter = function (l, w) {
    return l === w
        ? l * w
        : l * 2 + w * 2;
};
// 3 Coding golf
const areaOrPerimeter = (l, w) =>
    l === w
        ? l * w
        : 2 * (l + w);
