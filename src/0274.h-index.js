/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => a - b);
    let h = 0,
        i = citations.length - 1;
    // 找到了一篇被引用了至少 h+1 次的论文，所以将现有的 h 值加 1
    while (i > 0 && citations[i] > h) {
        h++;
        i--;
    }
    return h;
};

// 计数排序
var hIndex = function (citations) {
    // tot表示统计的引用的论文数量
    let n = citations.length, tot = 0;
    const counter = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (citations[i] >= n) {
            counter[n]++;
        } else {
            counter[citations[i]]++;
        }
    }
    for (let i = n; i >= 0; i--) {
        tot += counter[i];
        // 这里的 counter[i] 表示引用次数为 i 的论文的数量，i 表示引用次数
        // 从大到小遍历counter，当引用次数大于等于引用数量时，返回引用数量 i
        if (tot >= i) {
            return i;
        }
    }
    return 0;
}