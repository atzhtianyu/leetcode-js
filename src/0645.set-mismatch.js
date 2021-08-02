/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 集合 set
var findErrorNums = function (nums) {
    let ans = [];
    let temp = 0;
    let set = new Set();
    for (const n of nums) {
        if (set.has(nums[i])) {
            ans.push(nums[i]);
            break;
        }
        set.add(nums[i]);
    }
    // 纯数学解题:
    // sum(nums) - sum(set(nums)) = 重复的数字
    // (1 + len(nums)) * len(nums); // 2 - sum(set(nums)) = 丢失的数字
    for (let i = 0; i < nums.length; i++) {
        temp += i + 1;
        temp -= nums[i];
    }
    ans.push(ans[0] + temp);
    return ans;
};

// 排序
var findErrorNums = function (nums) {
    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            ans.push(nums[i]);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        temp += i + 1;
        temp -= nums[i];
    }
    ans.push(ans[0] + temp);
    return ans;
}

// 位运算
var findErrorNums = function (nums) {
    const n = nums.length;
    let xor = 0;
    for (const num of nums) {
        xor ^= num;
    }
    for (let i = 1; i <= n; i++) {
        xor ^= i;
    }
    // lowbit 为 x 和 y 的二进制表示中的最低不同位，可以用 lowbit 区分 x 和 y。
    // 将上述 2n 个数字分成两组，第一组的每个数字 a 都满足 a & lowbit = 0，
    // 第二组的每个数字 b 都满足 b & lowbit != 0。

    const lowbit = xor & -xor;
    let num1 = 0,
        num2 = 0;
    // num1 为第一组的全部数字的异或结果，num2 为第二组的全部数字的异或结果。
    for (const num of nums) {
        if ((num & lowbit) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    for (let i = 1; i <= n; i++) {
        if ((i & lowbit) === 0) {
            num1 ^= i;
        } else {
            num2 ^= i;
        }
    }
    // 如果数组中存在元素等于 num1 则返回[num1, num2]，反之则返回[num2, num1]
    for (const num of nums) {
        if (num === num1) {
            return [num1, num2];
        }
    }
    return [num2, num1];
}