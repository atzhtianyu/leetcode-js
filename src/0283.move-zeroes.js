/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 饲养员的方法：
// 需要将零全部挪到后边，而且非零的数字的顺序不能改变
// 设置一个非零的数字的 index 用于记录非零数字的下标到了哪儿
// 依次向后遍历，如果遇到非零的数字，直接将其写入 nums[index] 下，反观题目要求，并不会产生覆盖丢失的问题
// 在遍历完数组之后，index后边的数值需要置零
var moveZeroes = function (nums) {
    let cur = 0;
    let index = 0;
    while (cur < nums.length) {
        if (nums[cur] !== 0) {
            nums[index++] = nums[cur];
        }
        cur++;
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// 另一种方法：
// 定义一个指针用于记录零的位置的前一位
// 然后依次遍历数组，将非零的数字与 slow++ 下标的值交换
// 遍历完即可完成

var moveZeroes = function (nums) {
    let slow = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            slow++;
            [nums[slow], nums[i]] = [nums[i], nums[slow]];
        }
    }
};

