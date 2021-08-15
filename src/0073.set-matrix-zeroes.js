/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 优化的过程就是最大限度地使用数组本身的元素
// 原地修改，定义一个数组记录 0 的位置，然后依次修改所在行和列的所有元素
var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    let zeroSet = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroSet.push([i, j]);
            }
        }
    }
    for (const [i, j] of zeroSet) {
        for (let x = 0; x < n; x++) {
            matrix[i][x] = 0;
        }
        for (let x = 0; x < m; x++) {
            matrix[x][j] = 0;
        }
    }
};

// 使用标记数组
var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = col[j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}

// 使用两个标记变量，利用第一行和第一列记录0
var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    // 由于需要利用第一行和第一列记录，所以需要先看一下第一行第一列是否有 0 存在
    let flagCol0 = false, flagRow0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
    }
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            flagRow0 = true;
        }
    }
    // 遍历数组 记录
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    // 置零
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // 第一行第一列
    if (flagCol0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    if (flagRow0) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }
}

// 使用一个标记变量，利用第一列记录0
var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
}