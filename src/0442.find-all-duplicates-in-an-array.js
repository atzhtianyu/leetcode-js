/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 类似于448题的思路
var findDuplicates = function (nums) {
    const n = nums.length;
    for (const num of nums) {
        const x = (num - 1) % n;
        nums[x] += n;
    }
    const ans = [];
    for (const [i, num] of nums.entries()) {
        if (num > 2 * n) {
            ans.push(i + 1);
        }
    }
    return ans;
};

// 利用符号实现原地哈希
// 这个题属于技巧题 首先仔细看输入的给定的数组值 该值的区间为 1 ≤ a[i] ≤ n
// 遍历整个数组，元素所指向的位置置负。若已经为负，说明该位置出现了两次，记录这个位置。遍历完返回记录的数组即可。 
var findDuplicates = function (nums) {
    const ans = [];
    for (const num of nums) {
        const absNum = Math.abs(num);
        if (nums[absNum - 1] < 0) {
            ans.push(absNum);
        } else {
            nums[absNum - 1] *= -1;
        }
    }
    return ans;
}