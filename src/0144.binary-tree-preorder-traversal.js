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
var preorderTraversal = function (root) {
    let res = [];
    preorder(root, res);
    return res;
};

var preorder = function(root, res) {
    if (root === null) {
        return;
    }
    res.push(root.val);
    preorder(root.left, res);
    preorder(root.right, res);
}

// 迭代
var preorderTraversal = function (root) {
    const res = [];
    const stack = [];
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