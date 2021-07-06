/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let result = 0;
    let count = 0;
    nums.forEach(num => {
        if (num === 1) {
            count += 1;
        } else {
            if (count > result) {
                result = count;
                count = 0;
            }
        }
    });
    return result;
};
