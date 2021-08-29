/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    let q = [root];
    let ans = [];
    while (q.length) {
        let temp = [];
        for (let i = q.length; i > 0; i--) {
            const node = q.shift();
            temp.push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        if (ans.length % 2 !== 0) {
            ans.push(temp.reverse());
        } else {
            ans.push(temp);
        }
    }
    return ans;
};
