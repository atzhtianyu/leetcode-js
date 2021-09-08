/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 头尾指针
var exchange = function (nums) {
    let odd = 0, even = nums.length - 1;
    while (odd < even) {
        while (nums[odd] % 2 !== 0 && odd <= nums.length - 1) {
            odd++;
        }
        while (nums[even] % 2 === 0 && even >= 0) {
            even--;
        }
        if (odd < even) {
            const temp = nums[odd];
            nums[odd] = nums[even];
            nums[even] = temp;
        }
    }
    return nums;
};
