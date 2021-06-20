/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 * 使用双指针，一个指针指向值较小的元素，一个指针指向值较大的元素。指向较小元素的指针从头向尾遍历，指向较大元素的指针从尾向头遍历。
 *  如果两个指针指向元素的和 sum == target，那么得到要求的结果；
 *  如果 sum > target，移动较大的元素，使 sum 变小一些；
 *  如果 sum < target，移动较小的元素，使 sum 变大一些。
 */
var twoSum = function (numbers, target) {
    if (numbers == null) return null;
    let head = 0,
        tail = numbers.length - 1;
    while (head < tail) {
        let sum = numbers[head] + numbers[tail];
        if (sum == target) {
            return [head + 1, tail + 1];
        } else if (sum < target) {
            head++;
        } else {
            tail--;
        }
    }
    return null;
};
