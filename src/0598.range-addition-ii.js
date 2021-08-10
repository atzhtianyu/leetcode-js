/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
// 单纯看题目来说，想到的暴力法，进行每次操作，然后建立一个map记录数字
// 但是将操作写在纸上，就会发现，所有操作的交集就是最大的数字
// 由于题目已经固定好了两个边，我们只需要比较出最小的横坐标和纵坐标就可以得出结果
var maxCount = function (m, n, ops) {
    for (const op of ops) {
        m = Math.min(op[0], m);
        n = Math.min(op[1], n);
    }
    return m * n;
};

// reduce方法
var maxCount = function (m, n, ops) {
    let [x, y] = ops.reduce(
        (pre, cur) => {
            return [Math.min(pre[0], cur[0]), Math.min(pre[1], cur[1])];
        },
        [m, n]
    );
    return x * y;
};
