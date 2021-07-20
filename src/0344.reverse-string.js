/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 库函数
var reverseString = function (s) {
    return s.reverse();
};

// 双指针
var reverseString = function(s) {
    let l = 0, r = s.length - 1;
    while (l++ < r--) {
        [s[l], s[r]] = [s[r], s[l]];
    }
    return s;
};