/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 1; i < n; i++) {
        const temp = b;
        b = (a + b) % 1000000007;
        a = temp;
    }
    return b;
};
