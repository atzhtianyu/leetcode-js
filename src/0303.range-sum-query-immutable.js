// 题目没说明白，这里的 sumRange 需要调用 n 多次，所以需要在构建的时候做处理
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    const n = nums.length;
    this.sums = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i];
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.sums[right + 1] - this.sums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
