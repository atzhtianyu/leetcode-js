/**
 * @param {number[]} nums
 * @return {number}
 */
// 数学题，不推荐
var missingNumber = function (nums) {
    let res = 0, n = nums.length + 1;
    for (let i = 0; i < n; i++) {
        res += i;
    }
    for (let i = 0; i < n - 1; i++) {
        res -= i;
    }
    return res;
};

// 应用条件：长度为 n - 1 的递增排序数组
var missingNumber = function (nums) {
    if (nums[0] === 1) return 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return -1;
}