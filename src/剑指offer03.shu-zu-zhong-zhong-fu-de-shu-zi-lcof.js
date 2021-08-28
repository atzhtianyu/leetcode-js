/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表
var findRepeatNumber = function (nums) {
    let set = new Set();
    let i = 0;
    while (i < nums.length) {
        const num = nums[i];
        if (set.has(num)) {
            return num;
        } else {
            set.add(num);
        }
        i++;
    }
    return -1;
};

// 原地替换
var findRepeatNumber = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i) {
            i++;
            continue;
        }
        if (nums[nums[i]] === nums[i]) {
            return nums[i];
        }
        const temp = nums[i];
        nums[i] = nums[temp];
        nums[temp] = temp;
    }
    return -1;
};
