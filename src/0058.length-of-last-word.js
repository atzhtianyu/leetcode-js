/**
 * @param {string} s
 * @return {number}
 */
// 正则大法
var lengthOfLastWord = function (s) {
    let words = s.match(/[^\s]+/);
    return words[words.length - 1].length;
};

// split
var lengthOfLastWord = function (s) {
    return s.trim().split(" ").reverse()[0].length;
};

// 从后往前遍历
var lengthOfLastWord = function (s) {
    let end = s.length - 1;
    while (end >= 0 && s[end] === ' ') {
        end--;
    }
    if (end < 0) {
        return 0;
    }
    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }
    return end - start;
};