/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 层序遍历
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    let q = [root];
    let ans = [];
    while (q.length) {
        const temp = q.shift();
        ans.push(temp.val);
        temp.left && q.push(temp.left);
        temp.right && q.push(temp.right);
    }
    return ans;
};
