/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// 通过题目可以观察到每一条线上的横纵坐标之和是相等的且依次为0，1，2，3...
// 然后可以得出，奇数为向左下方，偶数为向右上方，这样题目就可以解决了
// xMax, yMax是为了在遍历到后半段时控制范围，正确输出。
var findDiagonalOrder = function (mat) {
    if (arr.length === 0) return [];
    const m = mat.length, n = mat[0].length;
    const res = [];
    for (let i = 0; i < m + n; i++) {
        let isUp = i % 2 === 0;
        let xMax = isUp ? n : m;
        let yMax = isUp ? m : n;
        for (let x = 0; x <= i; x++) {
            let y = i - x;
            if (x >= xMax || y >= yMax) {
                continue;
            }
            res.push(isUp ? mat[y][x]: mat[x][y]);
        }        
    }
    return res;
};
