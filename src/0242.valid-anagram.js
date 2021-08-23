/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 数组记录 charCodeAt
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    for (const ch of s) {
        cnt[ch.charCodeAt() - "a".charCodeAt()]++;
    }
    for (const ch of t) {
        cnt[ch.charCodeAt() - "a".charCodeAt()]--;
        if (cnt[ch.charCodeAt() - "a".charCodeAt()] < 0) {
            return false;
        }
    }
    return true;
};

// 排序
var isAnagram = function (s, t) {
    return (
        s.length == t.length &&
        [...s].sort().join(" ") === [...t].sort().join(" ")
    );
};

// HashMap
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const table = new Map();
    for (ch of s) {
        if (table.has(ch)) {
            table.set(ch, table.get(ch) + 1);
        } else {
            table.add(ch, 1);
        }
    }
    for (const ch of t) {
        if (table.has(ch)) {
            table.set(ch, table.get(ch) - 1);
        } else {
            return false;
        }
        if (table.get(ch) < 0) {
            return false;
        }
    }
    return true;
};
