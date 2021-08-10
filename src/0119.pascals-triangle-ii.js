/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 直接使用118题的思路，返回rowIndex的数组
var getRow = function (rowIndex) {
    const ans = [];
    for (let i = 0; i <= rowIndex; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }
        ans.push(row);
    }
    return ans[rowIndex];
};

// 两个数组
// 对第 i+1 行的计算仅用到了第 i 行的数据，因此可以使用滚动数组的思想优化空间复杂度
var getRow = function (rowIndex) {
    let pre = [], cur = [];
    for (let i = 0; i < rowIndex; i++) {
        cur = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            cur[j] = pre[j] + pre[j - 1];
        }
        pre = cur;
    }
    return cur;
}

// 一个数组
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

// 1  1+1+1+1+1=5 1+2+3+4=10 1+3+6=10 1+4=5 1
// 第六行结果: 1 5 10 10 5 1

var getRow = function (rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 0; i <= rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            row[j] += row[j - 1];
        }
    }
    return row;
}

// 线性递推 同一行的相邻组合数的关系
// row[m] = row[m - 1] * (n - m + 1) / m;
var getRow = function (rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 1; i <= rowIndex; i++) {
        row[i] = row[i - 1] * (rowIndex - i + 1) / i;
    }
    return row;
}