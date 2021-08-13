/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 剥壳，一层一层剥开
var spiralOrder = function (matrix) {
    const len = matrix.length;
    if (len === 0) return [];
    if (len === 1) return matrix[0];
    let res = [];
    while (matrix.length) {
        // 边界条件判断
        if (matrix.length >= 2) {
            // 先把好拿的上下两列取出来
            const head = matrix.shift();
            const last = matrix.pop();
            // 处理左右两边的
            const rightArr = [];
            const leftArr = [];
            for (let i = 0; i < matrix.length; i++) {
                const l = matrix[i].length;
                // 边界条件判断
                if (l > 1) {
                    rightArr.push(matrix[i].pop());
                    leftArr.unshift(matrix[i].shift());
                } else if (l === 1) {
                    rightArr.push(matrix[i].pop());
                }
            }
            // 下边的需要反转一下
            res = [].concat(res, head, rightArr, last.reverse(), leftArr);
        } else {
            const last = matrix.shift();
            last && (res = [].concat(res, last));
        }
    }
    return res;
};

// 按层模拟
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const rows = matrix.length, cols = matrix[0].length;
    const order = [];
    // 记录该层的坐标
    let left = 0, right = cols - 1, top = 0, bottom = rows - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            order.push(matrix[top][i]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            order.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i > left; i--) {
                order.push(matrix[bottom][i]);
            }
            for (let i = bottom; i > top; i--) {
                order.push(matrix[i][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return order;
}