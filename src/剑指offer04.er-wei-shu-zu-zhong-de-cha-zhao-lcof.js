/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    const rows = matrix.length,
        cols = matrix[0].length;
    let row = 0,
        col = cols - 1;
    while (row < rows && col >= 0) {
        const num = matrix[row][col];
        if (num === target) {
            return true;
        } else if (num > target) {
            col -= 1;
        } else {
            row++;
        }
    }
    return false;
};
