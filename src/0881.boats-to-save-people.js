/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// 贪心（双指针）
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    // 小于等于是处理最后还剩一个的情况，无论如何都要加一
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            count += 1;
            left += 1;
            right -= 1;
        } else {
            count += 1;
            right -= 1;
        }
    }
    return count;
};
