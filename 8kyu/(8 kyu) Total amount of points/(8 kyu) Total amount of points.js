// 1 Plain Solution
function points(games) {
  let res = 0;

  for (let i = 0; i < games.length; i++) {
    const x = games[i][0];
    const y = games[i][2];

    if (x > y) {
      res += 3;
    } else if (x === y) {
      res += 1;
    }
  }

  return res;
}

// 2 Straightforward solution
function points(games) {
  return games
    .reduce((res, game) => {
      const [x, y] = game.split(':');

      if (+x > +y) {
        return res += 3;
      } else if (x === y) {
        return res += 1;
      }

      return res;
    }, 0);
}

// 3 Optimized solution
const points = games => games.reduce((res, game) => {
  return res += game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0;
}, 0);

// 4 Coding golf
const points = g => g.reduce((a, [x, , y]) => a + (x > y ? 3 : x == y), 0);
