/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 单调栈
var nextGreaterElement = function (nums1, nums2) {
    // map用于保存 nums2 中的 x 与第一个比 x 大的元素的映射
    let map = new Map();
    // 单调栈及结果集
    let stack = [],
        res = [];
    nums2.forEach((item) => {
        // stack 中有元素且当前元素大于栈顶元素，pop 出栈顶元素，添加 map 元素
        while (stack.length && item > stack[stack.length - 1]) {
            map.set(stack.pop(), item);
        }
        // 否则 push 该元素到 stack 中
        stack.push(item);
    });
    // 遍历完 nums2 后，stack中剩余的元素就是右边没有比它打的元素，将 map 的 value 设置为-1
    stack.forEach((item) => {
        map.set(item, -1);
    });
    // 遍历 nums1 从 map 中获取 res
    nums1.forEach((item) => {
        res.push(map.get(item));
    });
    return res;
};
