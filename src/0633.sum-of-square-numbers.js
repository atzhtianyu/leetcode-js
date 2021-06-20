/**
 * @param {number} c
 * @return {boolean}
 */

/**
 * 方法一：使用 sqrt 函数
 * 在枚举 aa 的同时，使用 sqrt 函数找出 b。
 * 注意：本题 c 的取值范围在 [0, 2^31 −1]
 * 因此在计算的过程中可能会发生 int 型溢出的情况，需要使用 long 型避免溢出。
 */
var judgeSquareSum = function (c) {
    for (let a = 0; a * a <= c; a++) {
        const b = Math.sqrt(c - a * a);
        if (b === parseInt(b)) {
            return true;
        }
    }
    return false;
};

/**
 * 方法一：双指针
 * 
 * 可以看成是在元素为 0~target 的有序数组中查找两个数，使得这两个数的平方和为 target
 * 如果能找到，则返回 true，表示 target 是两个整数的平方和。
 * 
 * 本题和 167. Two Sum II - Input array is sorted 类似，只有一个明显区别：一个是和为 target，一个是平方和为 target。
 * 本题同样可以使用双指针得到两个数，使其平方和为 target。
 * 
 * 本题的关键是右指针的初始化，实现剪枝，从而降低时间复杂度。
 * 设右指针为 x，左指针固定为 0，为了使 02 + x2 的值尽可能接近 target，我们可以将 x 取为 sqrt(target)。
 * 
 * 因为最多只需要遍历一次 0~sqrt(target)，所以时间复杂度为 O(sqrt(target))。又因为只使用了两个额外的变量，因此空间复杂度为 O(1)。
 */
var judgeSquareSum = function (c) {
    let left = 0,
        right = Math.floor(Math.sqrt(c));
    while (left <= right) {
        let powSum = left * left + right * right;
        if (powSum === c) {
            return true;
        } else if (powSum < c) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};
