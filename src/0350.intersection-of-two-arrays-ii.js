/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// map 计数
var intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    let map = new Map();
    for (const x of nums1) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    }
    let res = [];
    for (const x of nums2) {
        if (map.has(x) && map.get(x) > 0) {
            res.push(x);
            map.set(x, map.get(x) - 1);
        }
    }
    return res;
};

// 排序 双指针
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let l = 0, r = 0, ans = [];
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] === nums2[r]) {
            ans.push(nums1[l]);
            l++;
            r++;
        } else {
            nums1[l] < nums2[r] ? l++ : r++;
        }
    }
    return ans;
}