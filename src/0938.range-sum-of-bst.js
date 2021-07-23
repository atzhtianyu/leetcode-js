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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let ans = 0;
    const inOrder = (node) => {
        node.left && node.val > low && inOrder(node.left);
        if (node.val >= low && node.val <= high) {
            ans += node.val;
        }
        node.right && node.val < high && inOrder(node.right);
    }
    inOrder(root);
    return ans;
};
