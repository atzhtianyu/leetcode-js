/**
 * @param {string} s
 * @return {string}
 */
// 正则大法
var reverseWords = function (s) {
    arr = s.match(/[^\s]+/g);
    for (let i = 0; i < arr.length; i++) {
        const temp = Array.from(arr[i]);
        temp.reverse();
        arr[i] = temp.join("");
    }
    return arr.join("");
};

// split
var reverseWords = function (s) {
    // 整个反转
    let arr = s.split("").reverse().join("");
    // 每个单词反转
    return arr.split(" ").reverse().join(" ");
};

// 一行
var reverseWords = function (s) {
    return s.split(' ').map(val => val.split('').reverse().join('')).join('');
};
