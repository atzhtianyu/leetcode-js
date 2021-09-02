/**
 * @param {number[][]} grid
 * @return {number}
 */
// 当 i === 0 且 j === 0 时，为起始元素；
// 当 i === 0 且 j !== 0 时，为矩阵第一行元素，只可从左边到达；
// 当 i !== 0 且 j === 0 时，为矩阵第一行元素，只可从左边到达；
// 当 i !== 0 且 j !== 0 时，可从左边或上边到达；

var maxValue = function (grid) {
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0) grid[i][j] += grid[i][j - 1];
            else if (j === 0) grid[i][j] += grid[i - 1][j];
            else grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
};

// 优化一下
var maxValue = function (grid) {
    const m = grid.length, n = grid[0].length;
    for (let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1];
    }
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
}