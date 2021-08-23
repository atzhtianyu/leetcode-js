/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 无非就是通过某种方式对字符串进行分类
// 排序：使用排序好的字符串做 key 值
var groupAnagrams = function (strs) {
    const cnt = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = cnt.get(key) ? cnt.get(key) : new Array();
        list.push(str);
        cnt.set(key, list);
    }
    return Array.from(cnt.values());
};

// 计数：使用字符串中的字符计数做 key 值
var groupAnagrams = function (strs) {
    const map = new Map();
    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (const ch of str) {
            count[ch.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(str) : map[count] = [str];
    }
    return Object.values(map);
}
