/**
 * @param {number[]} nums
 * @return {number}
 */
// 抵消(Moore Voting)
var majorityElement = function (nums) {
    let m;
    let count = 0;
    for (const n of nums) {
        if (n === m) {
            count++;
        } else if (count === 0) {
            m = n;
        } else {
            count--;
        }
    }
    return m;
};

// 暴力计数
var majorityElement = function (nums) {
    const map = {};
    const n = nums.length - 1;
    for (const n of nums) {
        map[n] = map[n] !== undefined ? map[n] + 1 : 1;
        if (map[n] > n) {
            return n;
        }
    }
};
