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
// 与102题类似，相比于直接使用102题的方法最后 reverse 来说，js可以使用 unshift 方法来向结果数组头部添加一层元素的数组
var levelOrderBottom = function (root) {
    const res = [];
    if (root === null) return res;
    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        res.unshift([]);
        for (let i = 1; i <= currentLevelSize; i++) {
            const node = q.shift();
            res[0].push(node.val);
            node.left !== null && queue.push(node.left);
            node.right !== null && queue.push(node.right);
        }
    }
    return res;
};
