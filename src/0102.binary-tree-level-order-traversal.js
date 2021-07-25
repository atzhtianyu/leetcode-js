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
var levelOrder = function (root) {
    if (root === null) return [];
    let queue = [];
    let res = [];
    queue.push(root);
    while (queue.length > 0) {
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
