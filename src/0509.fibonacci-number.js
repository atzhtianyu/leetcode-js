/**
 * @param {number} n
 * @return {number}
 */
// 暴力递归
var fib = function (n) {
    if (n < 2) {
        return n;
    }
    let f = fib(n - 1) + fib(n - 2);
    return f;
};

// 备忘录递归
var fib = function (n) {
    let fibMap = {};
    return myFib(n, fibMap);
};

var myFib = function (n, fibMap) {
    if (n < 2) {
        return n;
    }
    if (fibMap[n]) {
        return fibMap[n];
    }
    const res = myFib(n - 1, fibMap) + myFib(n - 2, fibMap);
    fibMap[n] = res;
    return res;
};

// 动态规划
var fib = function (n) {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}