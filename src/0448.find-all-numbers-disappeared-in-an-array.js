/**
 * @param {number[]} nums
 * @return {number[]}
 */
// map 记录每一个数字是否出现，然后判断未出现的数字
var findDisappearedNumbers = function (nums) {
    let map = {}, ans = [];
    nums.map((item, i) => {
        if (!map[item]) {
            map[item] = 1; 
        }
    });
    for (let i = 0; i < nums.length; i++) {
        if (!map[i]) {
            ans.push(i);
        }
    }
    return ans;
};

// 原地修改数组
var findDisappearedNumbers = function (nums) {
    const n = nums.length;
    // 遍历 nums，每遇到一个数 x，就让 nums[x−1] 增加 n
    for (const num of nums) {
        // 当我们遍历到某个位置时，其中的数可能已经被增加过，因此需要对 n 取模来还原出它本来的值。
        const x = (num - 1) % n;
        nums[x] += n;
    }
    const ans = [];
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            ans.push(i + 1);
        }
    }
    return ans;
}