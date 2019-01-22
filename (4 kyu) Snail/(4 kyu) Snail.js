/**
 * Snail Sort (4 kyu) https://www.codewars.com/kata/snail/javascript
 * Given an n x n array, return the array elements arranged from outermost
 * elements to the middle element, traveling clockwise.
 * array = [[1,2,3],
 *          [4,5,6],
 *          [7,8,9]]
 * snail(array) #=> [1,2,3,6,9,8,7,4,5]
 * For better understanding, please follow the numbers of the next array
 * consecutively:
 * array = [[1,2,3],
 *          [8,9,4],
 *          [7,6,5]]
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]
 */
snail = function(array) {
    const [N, result] = [array[0].length, []];
    let [L, row, col, direction] = [N * N, 0, 0, 'RIGHT'];
    let [borderRight, borderLeft, borderTop, borderBottom] = [N - 1, 0, 0, N - 1];

    while (L--) {   
        result.push(array[row][col]);
        switch(direction) {
            case 'RIGHT': col >= borderRight && (direction = 'DOWN', borderTop++); break;
            case 'LEFT': col <= borderLeft && (direction = 'UP', borderBottom--); break;
            case 'DOWN': row >= borderBottom && (direction = 'LEFT', borderRight--); break;
            case 'UP': row <= borderTop && (direction = 'RIGHT', borderLeft++); break;
            default: break; 
        }
        switch(direction) {
            case 'RIGHT': col++; break;
            case 'LEFT': col-- ; break;
            case 'UP': row--; break;
            case 'DOWN': row++; break;
            default: break;
        }
    }

    return result;
}
