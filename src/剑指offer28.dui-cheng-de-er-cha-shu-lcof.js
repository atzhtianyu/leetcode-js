/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return root === null ? true : recur(root.left, root.right);
};

var recur = function (l, r) {
    if (l === null && r === null) return true;
    if (l === null || r === null || l.val !== r.val) return false;
    return recur(l.left, r.right) && recur(l.right, r.left);
}