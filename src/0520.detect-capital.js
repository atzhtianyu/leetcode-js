/**
 * @param {string} word
 * @return {boolean}
 */
// 正则表达式
// 推荐教程：https://deerchao.cn/tutorials/regex/regex.htm#introduction
var detectCapitalUse = function (word) {
    let reg1 = /^[A-Z]*$/;
    let reg2 = /^[A-Z][a-z]*$/;
    let reg3 = /^[a-z]*$/;
    return reg1.test(word) || reg2.test(word) || reg3.test(word);
};

var detectCapitalUse = function (word) {
    const re = /(^[A-Z]*$)|(^[A-Z][a-z]*$)|(^[a-z]+$)/;
    return re.test(word);
}
