/**
 * @param {number[]} nums
 * @return {number}
 */
// 虽然是简单题，还是做了好长时间。
// 对于含有正数的序列而言,最大子序列肯定是正数,所以头尾肯定都是正数.
// 我们可以从第一个正数开始算起,每往后加一个数便更新一次和的最大值;
// 当当前和成为负数时,则表明此前序列无法为后面提供最大子序列和,因此必须重新确定序列首项.
var maxSubArray = function (nums) {
    let res = nums[0];
    let sum = -Infinity;
    nums.forEach((n) => {
        sum = Math.max(sum + n, n);
        res = Math.max(res, sum);
    });
    return res;
};

// 分治法
class Status {
    constructor(l, r, m ,i) {
        this.lSum = l;
        this.rSum = r;
        this.mSum = m;
        this.iSum = i;
    }
}

const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
    if (l === r) {
        return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (r + l) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
}

var maxSubArray = function (nums) {
    return getInfo(nums, 0, nums.length - 1).mSum;
}