/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }

    let res = "";

    for (let i = 0; i < s.length; i++) {
        // 回文子串长度为奇数（如 aba，中心是 b）
        palindromic(i, i);

        // 回文子串长度为偶数（如 abba，中心是 b，b）
        palindromic(i, i + 1);
    }

    function palindromic(m, n) {
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--;
            n++;
        }

        // 注意此处 m, n 的值循环完后  是恰好不满足循环条件的时刻
        // 此时 m 到 n 的距离为 n-m+1，但是 mn 两个边界不能取 所以应该取 m+1 到 n-1 的区间  长度是 n-m-1
        if (n - m - 1 > res.length) {
            // slice 也要取 [m+1, n-1] 这个区间
            // str.slice(start [, end]) 返回字符串从 start 到（但不包括）end 的部分。
            res = s.slice(m + 1, n);
        }
    }

    return res;
};
