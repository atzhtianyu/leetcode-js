/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// map
var search = function (nums, target) {
    const map = new Map();
    let i = 0;
    while (i < nums.length) {
        map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1);
        i++;
    }
    return map.get(target) ? map.get(target) : 0;
};

// 二分查找，然后分别向前后搜索target
var search = function (nums, target) {
    if (nums.length === 0 || nums[0] > target || nums[nums.length - 1] < target)
        return 0;
    let l = 0,
        r = nums.length;
    let index = -1,
        res = 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            index = m;
            break;
        }
        if (nums[m] > target) r = m - 1;
        if (nums[m] < target) l = m + 1;
    }
    if (index === -1) {
        return 0;
    }
    (l = index - 1), (r = index + 1);
    while (l >= 0 && nums[l] === target) {
        res++;
        l--;
    }
    while (r < nums.length && nums[r] === target) {
        res++;
        r++;
    }
    return res;
};

// 二分搜索边界
var search = function (nums, target) {
    return helper(nums, target) - helper(nums, target - 1);
};

var helper = function (nums, tar) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] <= tar) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return l;
}