/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左右乘积列表
var productExceptSelf = function (nums) {
    const n = nums.length;
    let L = new Array(n).fill(1);
    let R = new Array(n).fill(1);
    let res = new Array(n).fill(0);
    for (let i = 0; i < n - 1; i++) {
        L[i + 1] = L[i] * nums[i];
    }
    for (let i = n - 1; i > 0; i--) {
        R[i - 1] = R[i] * nums[i];
    }
    for (let i = 0; i < n; i++) {
        res[i] = L[i] * R[i];
    }
    return res;
};

// 空间复杂度 O(1) 的方法
// 将 L 或 R 数组用输出数组来计算
// 先把输出数组当作 L 数组来计算，然后再动态构造 R 数组得到结果。
var productExceptSelf = function (nums) {
    const n = nums.length;
    let ans = new Array(n).fill(1);
    for (let i = 1; i < array.length; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    let r = 1;
    for (let i = n - 1; i > 0; i--) {
        ans[i] *= r;
        r *= nums[i];
    }
    return ans;
}