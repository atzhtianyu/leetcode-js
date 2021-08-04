/**
 * @param {number[]} nums
 * @return {number}
 */

// 使用哈希表实现该功能，每一个数映射到一个长度为 33 的数组。
// 数组中的三个元素分别代表这个数出现的次数、这个数在原数组中第一次出现的位置和这个数在原数组中最后一次出现的位置。
var findShortestSubArray = function (nums) {
    let map = new Map();
    for (const [i, num] of nums.entries()) {
        if (num in map) {
            map[num][0]++;
            map[num][2] = i;
        } else {
            map[num] = [1, i, i];
        }
    }
    let maxNum = 0, minLen = 0;
    for (const [count, left, right] of Object.values(map)) {
        if (maxNum < count) {
            maxNum = count;
            minLen = right - left + 1;
        } else if (maxNum === count) {
            if (minLen > right - left + 1) {
                minLen = right - left + 1;
            }
        }
    }
    return minLen;
};

// 使用 map 方法
var findShortestSubArray = function (nums) {
    let map = {};
    let times = 0; //当前最大次数
    let minLen = 0; //最短长度
    nums.map((item, i) => {
        if (!map[item]) {
            map[item] = [1, i, i]; //次数，起点，终点
        } else {
            map[item][0]++;
            map[item][2] = i;
            if (map[item][0] > times) {
                times = map[item][0];
                minLen = map[item][2] - map[item][1];
            } else if (map[item][0] == times) {
                minLen = Math.min(minLen, map[item][2] - map[item][1]);
            }
        }
    });
    return minLen + 1;
}