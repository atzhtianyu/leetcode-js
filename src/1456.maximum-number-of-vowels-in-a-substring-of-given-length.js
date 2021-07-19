/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 类似于第209题的做法
var maxVowels = function (s, k) {
    // let vowelMap = {
    //     'a': true,
    //     'e': true,
    //     'i': true,
    //     'o': true,
    //     'u': true,
    // };
    // map 的内存消耗比 set 大
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    let left = 0;
    let right = 0;
    let result = -1;
    while (left < s.length) {
        while (right - left < k) {
            if (vowels.has(s[right++])) {
                count++;
            }
        }
        if (count >= k) {
            return k;
        }
        result = Math.max(result, count);
        if (vowels.has(s[left++])) {
            count--;
        }
    }
    return result;
};

// 先处理前 k 个字符的做法
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0, l = 0, r = 0;
    while (r < k) {
        vowels.has(s[r++]) && count++;
    }
    let result = count;
    while (r < s.length) {
        vowels.has(s[r++]) && count++;
        vowels.has(s[l--]) && count--;
        result = Math.max(count, result);
    }
    return result;
}