/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 库函数
var reverseString = function (s) {
    s = s.reverse();
};

// 双指针
var reverseString = function(s) {
    let l = 0, r = s.length - 1;
    while (l++ < r--) {
        [s[l], s[r]] = [s[r], s[l]];
    }
};

// 练习递归(不推荐)
var reverseString = function (s) {
    reversion(s, 0, s.length - 1);
}

var reversion = function (s, left, right) {
    if (left >= right) {
        return;
    }
    reversion(s, left + 1, right - 1);
    [s[left], s[right]] = [s[right], s[left]];
}