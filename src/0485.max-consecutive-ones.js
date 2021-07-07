/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let result = 0;
    let count = 0;
    nums.forEach((num) => {

        // if (num === 1) {
        //     count += 1;
        // } else {
        //     result = Math.max(result, count);
        //     count = 0;
        // }
        
        // 上边的代码可以简化为下边的代码，同时执行用时和内存消耗都相对较短
        count = num === 0 ? 0 : count + 1;
        result = Math.max(count, result);
    });
    return Math.max(result, count);
};
