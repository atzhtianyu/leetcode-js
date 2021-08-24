/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    // 统计字符数量
    const map = new Map();
    const length = s.length;
    for (let i = 0; i < length; i++) {
        const c = s[i];
        const frequency = (map.get(c) || 0) + 1;
        map.set(c, frequency);
    }
    // 将字符按照数量进行排序
    const list = [...map.keys()];
    list.sort((a, b) => map.get(b) - map.get(a));
    // 需要将相应数量的字符push到结果数组中
    const sb = [];
    const size = list.length;
    for (let i = 0; i < size; i++) {
        const c = list[i];
        const frequency = map.get(c);
        for (let i = 0; i < frequency; i++) {
            sb.push(c);
        }
    }
    return sb.join('');
};
