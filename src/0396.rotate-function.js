/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法，超时
var maxRotateFunction = function (nums) {
    const { length } = nums;
    const getSum = (list) =>
        list.reduce((last, item, index) => (last += item * index), 0);

    let max = getSum(nums);

    for (let i = 1; i < length; i++) {
        const last = nums.pop();
        nums.unshift(last);
        max = Math.max(max, getSum(nums));
    }

    return max;
};

// 高中数列题，由 F(k-1) 递推 F(k)
// F(1) =              A[0] * 0 + A[1] * 1 + A[2] * 2 + ... A[n-2] * (n-2) + A[n-1] * (n-1)
// F(2) = A[n-1] * 0 + A[0] * 1 + A[1] * 2 + A[2] * 3 + ... A[n-2] * (n-1)
// F(2) - F(1) = -A[n-1] * (n-1) + A[0] + A[1] + ... A[n-2]
//             = -A[n-1] * n + sum
var maxRotateFunction = function (nums) {
    if (!nums.length) {
        return 0;
    }
    const len = nums.length;
    let max = 0, sum = 0;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        max += nums[i] * i;
    }
    let temp = max;
    for (let i = 1; i < len; i++) {
        let lastNum = nums[len - i];
        temp = temp - lastNum * len + sum;
        max = Math.max(max, temp);
    }
    return max;
}