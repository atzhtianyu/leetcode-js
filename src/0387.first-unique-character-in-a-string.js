/**
 * @param {string} s
 * @return {number}
 */
// 使用哈希表存储频数
var firstUniqChar = function (s) {
    const n = s.length;
    const map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let i = 0; i < n; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};

var firstUniqChar = function (s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return i;
        }
    }
    return -1;
}

// 使用哈希表存储索引
var firstUniqChar = function (s) {
    const position = new Map();
    const n = s.length;
    for (let [i, ch] of Array.from(s).entries()) {
        if (position.has(ch)) {
            position.set(ch, -1);
        } else {
            position.set(ch, i);
        }
    }
    for (let pos of position.values()) {
        if (pos !== -1 && pos < n) {
            return pos;
        }
    }
    return -1;
}

