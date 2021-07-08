/**
 * @param {string} s
 * @return {boolean}
 */

// 未使用map：
var isValid = function (s) {
    if (s.length === 0) return true;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "(") {
            stack.push(")");
        } else if (c === "[") {
            stack.push("]");
        } else if (c === "{") {
            stack.push("}");
        } else if (!stack.length || c !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};

// 力扣官方题解(map)：
var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);
    const stack = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || stack[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return !stack.length;
};
