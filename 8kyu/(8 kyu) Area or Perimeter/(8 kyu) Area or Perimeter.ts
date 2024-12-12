// 1 Plain Solution
export const areaOrPerimeter = (l: number, w: number): number => {
  const isSquare = l === w;

  if (isSquare) {
    return l * w;
  } else {
    return l * 2 + w * 2;
  }
};
// 2 Optimized solution
export const areaOrPerimeter = (l: number, w: number): number => {
    return l === w
        ? l * w
        : l * 2 + w * 2;
};
// 3 Coding golf
export const areaOrPerimeter = (l: number, w: number): number =>
    l === w
        ? l * w
        : 2 * (l + w);
