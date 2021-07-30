/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// 自己做的（对比来看还是嫩了）
var findPoisonedDuration = function (timeSeries, duration) {
    let ans = 0;
    const n = timeSeries.length;
    ans += duration;
    let cur = n - 1;
    for (let i = n; i > 0; i--) {
        if (timeSeries[i] - timeSeries[i - 1] > duration) {
            ans += duration;
        } else {
            ans += timeSeries[cur] - timeSeries[i - 1];
        }
        cur = i - 1;
    }
    return ans;
};

// 官方题解
var findPoisonedDuration = function (timeSeries, duration) {
    let n = timeSeries.length;
    let total = 0;
    for (let i = 0; i < n - 1; ++i) {
        total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    return total;
}
