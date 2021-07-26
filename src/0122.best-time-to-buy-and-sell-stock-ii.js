/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力解法
var maxProfit = function (prices) {
    let buyPrice = -1,
        profit = 0;
    if (prices[0] <= prices[1]) buyPrice = prices[0];
    for (let i = 1; i < prices.length - 1; i++) {
        if (prices[i] <= prices[i - 1] && prices[i] <= prices[i + 1]) {
            buyPrice = prices[i];
        } else if (
            prices[i] >= prices[i - 1] &&
            prices[i] >= prices[i + 1] &&
            buyPrice !== -1
        ) {
            profit += prices[i] - buyPrice;
            buyPrice = -1;
        }
    }
    const n = prices.length;
    if (prices[n - 2] < prices[n - 1] && buyPrice !== -1) {
        profit += prices[i] - buyPrice;
    }
    return profit;
};

// 贪心优化
// 有利润就直接卖，因为交易次数不受限，如果可以把所有的上坡全部收集到，一定是利益最大化的
var maxProfit = function (prices) {
    let profit = 0;
    let n = prices.length;
    for (let i = 0; i < n - 1; i++) {
        profit += Math.max(0, prices[i + 1] - prices[i]);
    }
    return profit;
}