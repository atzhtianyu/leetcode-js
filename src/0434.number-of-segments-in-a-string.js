/**
 * @param {string} s
 * @return {number}
 */
// 正则大法
// [^x] 匹配除了x以外的任意字符;
var countSegments = function (s) {
    s = s.match(/[^\s]+/g) || [];
    return s.length;
};

// \S+ 匹配不包含空白符的字符串
var countSegments = function (s) {
    s = s.match(/\S+/g) || [];
    return s.length;
}
