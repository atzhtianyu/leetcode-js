/**
 * @param {number[]} nums
 * @return {boolean}
 */
// set 解法，推荐
var containsDuplicate = function (nums) {
    const set = new Set();
    for (const item of nums) {
        if (set.has(item)) {
            return true;
        }
        set.add(item);
    }
    return false;
};


// map 解法，内存消耗更大
var containsDuplicate = function (nums) {
    const map = new Map();
    for (const item of nums) {
        if (map.has(item) && map.get(item) === 1) {
            return true;
        } 
        map.set(item, 1);
    }
    return false;
};