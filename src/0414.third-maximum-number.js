/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    if (nums.length <= 3) {
        return Math.max(...nums);
    }
    let max = -Infinity, mid = -Infinity, min = -Infinity;
    nums.forEach(n => {
        if (n > max) {
            min = mid;
            mid = max;
            max = n;
        } else if (n !== max && n > mid) {
            min = mid;
            mid = n;
        } else if (n !== max && n !== mid && n > min) {
            min = n;
        }
    });
    if (max === -Infinity || mid === -Infinity || min === -Infinity) {
        return Math.max(max, mid, min);
    }
    return min;
};
