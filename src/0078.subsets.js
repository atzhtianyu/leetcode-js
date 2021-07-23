/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 扩展法
// 主要思想：在 ans 的基础上，对每一个子集扩展下一个元素，直至遍历完整个数组
var subsets = function (nums) {
    const result = [];
    result[0] = [];
    nums.forEach(n => {
        let temp = [];
        result.forEach(res => {
            let t = [...res];
            t.push(n);
            temp.push(t);
        });
        temp.forEach(x => {
            result.push(x);
        })
    });
    return result;
};

// 回溯法
var subsets = function (nums) {
    function backTracking(list, nums, res, index) {
        // list.slice() 用于返回一个与 list 相同的数组
        res.push(list.slice());
        for (let i = index; i < nums.length; i++) {
            list.push(nums[i]);
            backTracking(list, nums, res, i + 1);
            list.pop();
        }
    }
    const res = [];
    backTracking([], nums, res, 0);
    return res;
};

// dfs
var subsets = function (nums) {
    const t = [];
    const ans = [];
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1);
        t.pop();
        dfs(cur + 1);
    }
    dfs(0);
    return ans;
}