/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    n = nums.length;
    if (n < 3) return true;
    let count = 0,
        seat = 0;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
            if (count > 1) {
                return false;
            }
            seat = i;
        }
    }
    // 逆序数对为1意味着俩边都是单调数列，逆序数对为1时候，只有一种情况不能调整：当逆序数对在数组中间时
    // 那当逆序对这俩个数字都超出他们俩个前后数字的范围，意味着整个单调不减数组中这俩个数都不合适
    if (seat > 0 && seat < n - 2) {
        if (nums[seat + 2] < nums[seat] && nums[seat - 1] > nums[seat + 1]) {
            return false;
        }
    }
    return true;
};
