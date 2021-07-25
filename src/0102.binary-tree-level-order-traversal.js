/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 第一次思路清晰的写出来，然后提交成功，还有部分可以优化，比如temp数组。
var levelOrder = function (root) {
    if (root === null) return [];
    let queue = [];
    let res = [];
    queue.push(root);
    while (queue.length !== 0) {
        let temp = [],
            ans = [];
        temp = [...queue];
        temp.forEach((node) => {
            ans.push(node.val);
            queue.shift();
            node.left !== null && queue.push(node.left);
            node.right !== null && queue.push(node.right);
        });
        res.push(ans);
    }
    return res;
};

// 官方题解，记录 currentLevelSize，在获取当前层时，先 push 一个空数组
var levelOrder = function (root) {
    const ret = [];
    if (root === null) return ret;
    const queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        const currentLevelSize = queue.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = queue.shift();
            ret[ret.length - 1].push(node.val);
            node.left !== null && queue.push(node.left);
            node.right !== null && queue.push(node.right);
        }
    }
    return res;
};