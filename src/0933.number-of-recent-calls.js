var RecentCounter = function () {
    // 初始化队列
    this.sequence = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    // 将请求 t push到队列中
    this.sequence.push(t);
    // 将不满足时间范围的请求 shift 出去
    while (this.sequence[0] < t - 3000) {
        this.sequence.shift();
    }
    // 返回队列长度
    return this.sequence.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
