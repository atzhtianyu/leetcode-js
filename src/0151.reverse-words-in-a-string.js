/**
 * @param {string} s
 * @return {string}
 */
// 正则大法
var reverseWords = function (s) {
    let arr = s.match(/[^\s]+/g);
    return arr.reverse().join(" ");
};

// split
var reverseWords = function (s) {
    return s.trim().split(/\s+/g).reverse().join(" ");
}