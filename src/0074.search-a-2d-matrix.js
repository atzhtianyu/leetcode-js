/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 两次二分：
// 时间复杂度：O(logm+logn) = O(logmn)，其中 m 和 n 分别是矩阵的行数和列数。
// 空间复杂度：O(1)
var searchMatrix = function (matrix, target) {
    let low = -1,
        high = matrix.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low + 1) / 2) + low;
        if (matrix[mid][0] <= target) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    // low === -1 时，说明 matrix 中最小的数比 target 还大，这时返回false;
    if (low === -1) {
        return false;
    }
    let left = 0, right = matrix[low].length - 1;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        if (matrix[low][mid] == target) {
            return true;
        } else if (matrix[low][mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

// 一次二分
var searchMatrix = function (matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let low = 0, high = m * n - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const x = matrix[Math.floor(mid / n)][mid % n];
        if (x < target) {
            low = mid + 1;
        } else if (x > target) {
            high = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};
