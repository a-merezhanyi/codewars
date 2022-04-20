// 1 Plain solution
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;

    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }

    const average = sum / (classPoints.length + 1);
    const res = yourPoints > average ? true : false;

    return res;
}

// 2 Optimized solution
function betterThanAverage(classPoints, yourPoints, sum = 0) {
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }

    return yourPoints > sum / (classPoints.length + 1) ? true : false;;
}

// 3 Clever solution
function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce((a, c) => a += c, 0);
    return yourPoints > sum / (classPoints.length + 1) ? true : false;;
}

// 4 Coding golf
const betterThanAverage = (classPoints, yourPoints) =>
    yourPoints > classPoints.reduce((a, c) => a + c, 0) / classPoints.length;
