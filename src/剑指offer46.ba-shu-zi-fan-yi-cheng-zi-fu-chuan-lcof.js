/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    if (num <= 9) return 1;
    // 获取输入数字的余数，然后递归的计算翻译方法
    let temp = num % 100;
    // 如果小于等于 9 或者大于等于 2 6的时候，余数不能按照 2 位数字组合，
    // 比如 56 ，只能拆分为 5 和 6；反例 25，可以拆分为 2 和 5，也可以作为 25 一个整体进行翻译。
    if (temp <= 9 || temp >= 26) {
        return translateNum(Math.floor(num / 10));
    } else {
        // temp = [10, 25] 时，既可以当做一个字母，也可以当做两个字母
        return (
            translateNum(Math.floor(num / 10)) +
            translateNum(Math.floor(num / 100))
        );
    }
};
