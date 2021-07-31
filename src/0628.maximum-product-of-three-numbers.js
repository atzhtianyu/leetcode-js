/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 3] * nums[n - 2] * nums[n - 1]);
};

// 遍历
var maximumProduct = function (nums) {
    let min1 = 1001, min2 = 1001;
    let max1 = -1001, max2 = -1001, max3 = -1001;
    nums.forEach(n => {
        if (n > max1) {
            max3 = max2;
            max2 = max1;
            max1 = n;
        } else if (n > max2) {
            max3 = max2;
            max2 = n;
        } else if (n > max3) {
            max3 = n;
        }
        if (n < min1) {
            min2 = min1;
            min1 = n;
        } else if (n < min2) {
            min2 = n;
        }
    });
    return Math.max(max1 * max2 * max3, mix1 * min1 * min2);
}
