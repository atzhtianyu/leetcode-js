// 一维前缀和，类似于 303 题
// 虽然利用了前缀和，但是每次检索的时间复杂度是 O(m)，仍然没有降到 O(1)
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    const m = matrix.length;
    if (m > 0) {
        const n = matrix[0].length;
        this.sums = new Array(m).fill(0).map(() => new Array(n + 1).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j];
            }
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        sum += this.sums[i][col2 + 1] - this.sums[i][col1];
    }
    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// 二维前缀和 非常数学的解法，每次检索的时间复杂度为 O(1)
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    const m = matrix.length;
    if (m > 0) {
        const n = matrix[0].length;
        this.sums = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.sums[i + 1][j + 1] = this.sums[i][j + 1] + this.sums[i + 1][j] - this.sums[i][j] + matrix[i][j];
            }
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.sums[row2 + 1][col2 + 1] - this.sums[row1][col2 + 1] - this.sums[row2 + 1][col1] + this.sums[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */