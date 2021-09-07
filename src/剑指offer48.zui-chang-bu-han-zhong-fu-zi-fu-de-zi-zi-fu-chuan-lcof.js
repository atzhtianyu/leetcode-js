/**
 * @param {string} s
 * @return {number}
 */
// 动态规划 + 哈希表
var lengthOfLongestSubstring = function (s) {
    const dic = new Map();
    let res = 0, temp = 0;
    for (let j = 0; j < s.length; j++) {
        let i = dic.has(s[j]) ? dic.get(s[j]) : -1;
        dic.set(s[j], j);
        temp = temp < j - i ? temp + 1 : j - i;
        res = Math.max(res, temp);
    }
    return res;
};

// 双指针 + 哈希表
var lengthOfLongestSubstring = function (s) {
    const dic = new Map();
    let res = 0, i = -1;
    for (let j = 0; j < s.length; j++) {
        if (dic.has(s[j])) {
            i = Math.max(i, dic.get(s[j]));
        }
        dic.set(s[j], j);
        res = Math.max(res, j - i);
    }
    return res;
}