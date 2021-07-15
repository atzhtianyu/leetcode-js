/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    // target 是在一个在左闭右闭的区间里，也就是[left, right]
    // while (left <= right) 要使用 <= ，因为left == right是在[left, right]区间里是有意义的，所以使用 <=
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

// 简易写法 from:「代码随想录」
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    // 区间 [l, r]
    while(l <= r) {
        let mid = (l + r) >> 1;
        if(nums[mid] === target) return mid;
        let isSmall = nums[mid] < target;
        l = isSmall ? mid + 1 : l;
        r = isSmall ? r : mid - 1;
    }
    return -1;
};
