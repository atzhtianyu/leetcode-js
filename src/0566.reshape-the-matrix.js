/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 毫无技巧 :)
var matrixReshape = function (mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n !== r * c) {
        return mat;
    }
    const newMat = [];
    for (let i = 0; i < m; i++) {
        newMat.push(...mat[m]);
    }
    const ans = [];
    for (let i = 0; i < r; i++) {
        const item = [];
        for (let j = 0; j < c; j++) {
            item.push(newMat.shift());
        }
        ans.push(item);
    }
    return ans;
};

// 二维数组的一维表示
// 通过一个 x 将这两个矩阵联系起来
var matrixReshape = function (mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n !== r * c) {
        return mat;
    }
    const ans = new Array(r).fill(0).map((_) => new Array(c).fill(0));
    for (let x = 0; x < m * n; x++) {
        ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
    }
    return ans;
}
