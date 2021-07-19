/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0;
    let left = 0;
    let right = 0;
    let result = Infinity;
    while (left < nums.length) {
        while (right < nums.length && target > sum) {
            sum += nums[right++];
        }
        if (sum >= target) {
            result = Math.min(result, right - left);
        } else {
            break;
        }
        sum -= nums[left++];
    }
    return result === Infinity ? 0 : result;
};
