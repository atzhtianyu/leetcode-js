/**
 * @param {string} s
 * @return {string}
 */
// 正则
var replaceSpace = function (s) {
    return s.replace(/\s/g, "%20");
};

// 字符数组
var replaceSpace = function (s) {
    s = s.split("");
    let oldLen = s.length;
    let spaceCount = 0;
    for (let i = 0; i < oldLen; i++) {
        if (s[i] === " ") spaceCount++;
    }
    s.length += spaceCount * 2;
    for (let i = oldLen - 1, j = s.length - 1; i >= 0; i--, j--) {
        if (s[i] !== " ") s[j] = s[i];
        else {
            s[j - 2] = "%";
            s[j - 1] = "2";
            s[j] = "0";
            j -= 2;
        }
    }
    return s.join("");
};
