/**
 * @param {number} n
 * @return {number[][]}
 */
// 与 54 题类似，按层模拟即可
var generateMatrix = function (n) {
    let num = 1;
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        for (let i = top + 1; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            for (let i = bottom - 1; i > top; i--) {
                matrix[i][left] = num++;
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return matrix;
};
