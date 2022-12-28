export function points(games: string[]): number {
  return games.reduce((res, game) => {
    const [x, y] = game.split(":");

    if (+x > +y) {
      return (res += 3);
    } else if (x === y) {
      return (res += 1);
    }

    return res;
  }, 0);
}
