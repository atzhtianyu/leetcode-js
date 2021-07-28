/**
 * @param {number[]} nums
 * @return {number}
 */
// 异或
// 任何数和 00 做异或运算，结果仍然是原来的数，即 a ⊕ 0 = a
// 任何数和其自身做异或运算，结果是 0，即 a ⊕ a = 0。
// 异或运算满足交换律和结合律，即 a ⊕ b ⊕ a = b ⊕ a ⊕ a = b ⊕ ( a ⊕ a ) = b ⊕ 0 = b
var singleNumber = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    return ans;
};
