/**
 * @param {number[]} nums
 * @return {number}
 */
// 原地哈希
var firstMissingPositive = function (nums) {
    const n = nums.length;
    // 将数组中所有小于等于 0 的数修改为 N+1
    // 这样一来，数组中的所有数就都是正数了
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }
    // 遍历数组中的每一个数 x，如果 x ∈ [1,N]，那么我们给数组中的第 |x| - 1 个位置的数添加一个负号
    // 之所以取绝对值，是因为有可能已经被标记，如果它已经有负号，不需要重复添加
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
};

// 置换
var firstMissingPositive = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        // 使用 while 是因为需要再次判断置换过来的数字
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            let temp = nums[i];
            nums[i] = nums[nums[i] - 1];
            nums[nums[i] - 1] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
}