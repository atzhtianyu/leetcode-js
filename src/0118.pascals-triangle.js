/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 一个一个push进去
var generate = function (numRows) {
    let ans = [];
    ans.push([1]);
    for (let i = 1; i < numRows; i++) {
        ans.push([1]);
        for (let j = 1; j < i; j++) {
            ans[i].push(ans[i - 1][j] + ans[i - 1][j - 1]);
        }
        ans[i].push(1);
    }
    return ans;
};

// 先填满 1 再计算中间的数字
var generate = function (numRows) {
    const ans = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }
        ans.push(row);
    }
    return ans;
};
