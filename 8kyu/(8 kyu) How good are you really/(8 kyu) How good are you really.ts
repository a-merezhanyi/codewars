export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    return yourPoints > classPoints.reduce((a, c) => a + c, 0) / classPoints.length;
}
