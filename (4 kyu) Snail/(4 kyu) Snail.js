snail = function(array) {
  const [N, result] = [array[0].length, []];
  let [L, row, col, direction] = [N * N, 0, 0, 'RIGHT'];
  let [borderRight, borderLeft, borderTop, borderBottom] = [N - 1, 0, 0, N - 1];

  while (L--) {
    result.push(array[row][col]);
    switch (direction) {
      case 'RIGHT':
        col >= borderRight && ((direction = 'DOWN'), borderTop++);
        break;
      case 'LEFT':
        col <= borderLeft && ((direction = 'UP'), borderBottom--);
        break;
      case 'DOWN':
        row >= borderBottom && ((direction = 'LEFT'), borderRight--);
        break;
      case 'UP':
        row <= borderTop && ((direction = 'RIGHT'), borderLeft++);
        break;
      default:
        break;
    }
    switch (direction) {
      case 'RIGHT':
        col++;
        break;
      case 'LEFT':
        col--;
        break;
      case 'UP':
        row--;
        break;
      case 'DOWN':
        row++;
        break;
      default:
        break;
    }
  }

  return result;
};
