/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let arr = s.split('');
    let left = 0, right = arr.length - 1;
    const hash = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    };
    while (left < right) {
        // 从左向右找到第一个元音
        while (left < right && !hash[arr[left]]) {
            left++;
        }
        // 从右到左找到第一个元音
        while (left < right && !hash[arr[right]]) {
            right--;
        }
        // 交换，使用到了ES6中的解构赋值交换
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};
