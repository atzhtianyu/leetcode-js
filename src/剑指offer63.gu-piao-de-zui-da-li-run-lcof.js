/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_VALUE, res = 0;
    for (let i = 0; i < prices.length; i++) {
        res = Math.max(prices[i] - min, res);
        min = Math.min(prices[i], min);
    }
    return res;
};
