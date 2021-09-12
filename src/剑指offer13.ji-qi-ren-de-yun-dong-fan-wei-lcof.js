/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let sum = (x) => x % 10 + Math.floor(x / 10);
    let flag = [];
    function dfs(i, j, m, n, k, flag) {
        if (i >= m || i < 0 || j >= n || j < 0 || (sum(i) + sum(j)) > k || flag[i * n + j] === true) {
            return;
        }
        flag[i * n + j] = true;
        dfs(i + 1, j, m, n, k, flag);
        dfs(i - 1, j, m, n, k, flag);
        dfs(i, j + 1, m, n, k, flag);
        dfs(i, j - 1, m, n, k, flag);
    }
    dfs(0, 0, m, n, k, flag);
    return flag.filter(item => item === true).length;
};
