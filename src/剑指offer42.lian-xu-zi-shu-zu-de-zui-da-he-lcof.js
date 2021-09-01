/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0];
    let sum = -Infinity;
    for (const n of nums) {
        sum = Math.max(sum + n, n);
        res = Math.max(res, sum);
    }
    return res;
};
