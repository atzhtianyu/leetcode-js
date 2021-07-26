/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 两个巧妙的解法
// 大佬的题解，妙蛙
var canJump = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            return false;
        }
        k = Math.max(k, i + nums[i]);
    }
    return true;
};

// 另一个大佬的倒推
var canJump = function (nums) {
    let count = 0, len = nums.length - 2;
    while (len >= 0) {
        count = nums[len--] > count ? 0 : ++count;
    }
    return count === 0;
}

// 官方要考的贪心
var canJump = function (nums) {
    
}