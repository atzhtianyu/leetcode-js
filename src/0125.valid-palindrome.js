/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //toLocaleLowerCase() 返回本地语言对应的小写，match返回存放匹配结果的数组
    let a = s.toLocaleLowerCase().match(/[a-z0-9]+/g);
    if (!a) {
        return true;
    }
    // 转为字符串
    let str = a.join("");
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
