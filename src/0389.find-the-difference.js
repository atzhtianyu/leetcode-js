/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 计数方式，将 s 中的所有字母计数，此时的数组相当于一个哈希表，然后遍历 t 中的字母，
// 每遍历一个，在数组中对应的数值减一，如果有一个字母对应的数值小于0，说明这个字母就是被加入进来的
var findTheDifference = function (s, t) {
    const cnt = new Array(26).fill(0);
    for (const ch of s) {
        cnt[ch.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const ch of t) {
        cnt[ch.charCodeAt() - 'a'.charCodeAt()]--;
        if (cnt[ch.charCodeAt() - "a".charCodeAt()] < 0) {
            return ch;
        }
    }
    return ' ';
};

// ASCII 码求和
// 将字符串 ss 中每个字符的 ASCII 码的值求和，得到 A_s，对字符串 tt 同样的方法得到 A_tA 
// 两者的差值 A_t - A_s 即代表了被添加的字符。
var findTheDifference = function (s, t) {
    let as = 0, at = 0;
    for (const ch of s) {
        as += ch.charCodeAt();
    }
    for (const ch of t) {
        at += ch.charCodeAt();
    }
    return String.fromCharCode(at - as);
};

// 位运算，异或解法
// 异或的性质： a ^ a = 0，0 ^ a = a
var findTheDifference = function (s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};
