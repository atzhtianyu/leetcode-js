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
 * @return {number[]}
 */
// 递归
var inorderTraversal = function (root) {
    let res = [];
    inorder(root, res);
    return res;
};

var inorder = function (root, res) {
    if (!root) {
        return;
    }
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
}

// 迭代
var inorderTraversal = function (root) {
    let res = [];
    let stack = [];
    if (root) {
        stack.push(root);
    }
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return res;
};