/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 三次反转
var reverseLeftWords = function (s, n) {
    const arr = Array.from(s);
    reverseWords(arr, 0, arr.length - 1);
    reverseWords(arr, arr.length - n + 1, arr.length - 1);
    reverseWords(arr, 0, arr.length - n + 1);
    return arr.join("");
};

var reverseWords = function (arr, left, right) {
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
};

// 剪切拼接
var reverseLeftWords = function (s, n) {
    let s1 = s.slice(0, n);
    let s2 = s.slice(n, s.length);
    return s2 + s1;
};
