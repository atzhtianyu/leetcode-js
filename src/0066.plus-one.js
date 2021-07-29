/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        // 如果等于10
        digits[i] = digits[i] % 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};
