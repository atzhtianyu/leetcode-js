/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 与283题类似，可以将所有的 val 移除到后边，然后返回 val 前边的长度
var removeElement = function (nums, val) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            [nums[slow], nums[i]] = [nums[i], nums[slow]];
            slow++;
        }
    }
    return slow;
};

// 直接删除 val
var removeElement = function (nums, val) {
    let index = nums.length - 1;
    while (index > -1) {
        if (nums[index] === val) {
            nums.splice(index, 1);
        }
        index -= 1;
    }
    return nums.length;
};