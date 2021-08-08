/**
 * @param {number[]} nums
 * @return {number}
 */
// 数学法：将除了一个元素之外的全部元素+1，等价于将该元素-1
// 我们只需要将所有的数都减到最小的数即可
var minMoves = function (nums) {
    let moves = 0, min = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        moves += nums[i];
        min = Math.min(min, nums[i]);
    }
    return moves - min * nums.length;
};

// 改进
var minMoves = function (nums) {
    let moves = 0, min = -Infinity;
    min = Math.min(...nums);
    for (let i = 0; i < nums.length; i++) {
        moves += nums[i] - min;
    }
    return moves;
}