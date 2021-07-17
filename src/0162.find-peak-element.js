/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法一：暴力
var findPeakElement = function (nums) {
    if (nums[0] > nums[1] || nums.length === 1) {
        return 0;
    }
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1;
    }
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
};

// 官方暴力：
var findPeakElement = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return nums.length - 1;
};

// 递归二分法：
var findPeakElement = function (nums) {
    return search(nums, 0, nums.length - 1);
};

let search = (nums, l, r) => {
    if (l === r) {
        return l;
    }
    let mid = ((l + r) / 2) | 0;
    if (nums[mid] > nums[mid + 1]) {
        // 因为这里的 mid 有可能是峰值
        return search(nums, l, mid);
    } else {
        return search(nums, mid + 1, r);
    }
};

// 迭代二分法：
var findPeakElement = function (nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return l;
};
