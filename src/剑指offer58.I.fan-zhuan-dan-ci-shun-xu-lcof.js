/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim();
    let j = s.length - 1,
        i = j;
    let res = "";
    while (i >= 0) {
        while (i >= 0 && s[i] !== " ") i--;
        res += s.slice(i + 1, j + 1) + " ";
        while (i >= 0 && s[i] === " ") i--;
        j = i;
    }
    return res.trim();
};
