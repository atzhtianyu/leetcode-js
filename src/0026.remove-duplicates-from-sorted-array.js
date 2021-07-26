/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[left] !== nums[right]) {
            left += 1;
            nums[left] = nums[right];
        }
    }
    return left + 1;
};
