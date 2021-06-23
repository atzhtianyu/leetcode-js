/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */

function isSubsequence(str, sub) {
    let index = -1;
    for (let i = 0; i < sub.length; i++) {
        index = str.indexOf(sub[i], index + 1);
        if (index === -1) {
            return false;
        }
    }
    return true;
}

var findLongestWord = function (s, dictionary) {
    // 排序 长度从大到小排列 同长度按照字典序从小到大排列
    dictionary.sort((a, b) => {
        const la = a.length;
        const lb = b.length;
        if (la !== lb) {
            return lb - la;
        }
        return a < b ? -1 : 1;
    });
    // 这样遇到的第一个满足 subsequence 的就是答案
    for (let i = 0; i < dictionary.length; i++) {
        if (isSubsequence(s, dictionary[i])) {
            return dictionary[i];
        }
    }
    return '';
};
