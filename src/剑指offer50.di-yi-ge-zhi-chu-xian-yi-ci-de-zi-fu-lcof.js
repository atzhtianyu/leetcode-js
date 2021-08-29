/**
 * @param {string} s
 * @return {character}
 */
// 数组记录
var firstUniqChar = function (s) {
    let counter = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counter[s[i].charCodeAt() - "a".charCodeAt()] += 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (counter[s[i].charCodeAt() - "a".charCodeAt()] === 1) {
            return s[i];
        }
    }
    return " ";
};

var firstUniqChar = function (s) {
    const frequency = _.countBy(s);
    for (const ch of s) {
        if (frequency[ch] === 1) {
            return ch;
        }
    }
    return " ";
};
