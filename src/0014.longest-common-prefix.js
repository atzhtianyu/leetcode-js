/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = "";
    const n = strs.length;
    if (strs === null || n === 0) {
        return ans;
    }
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < n; i++) {
            if (strs[i][j] !== strs[0][j]) {
                return ans;
            }
        }
        ans += strs[0][j];
    }
    return ans;
};
