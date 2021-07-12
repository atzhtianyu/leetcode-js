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
var postorderTraversal = function (root) {
    const res = [];
    const postorder = (root) => {
        if (!root) {
            return;
        }
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
    postorder(root);
    return res;
};

// 迭代( unshift()方法：队列 )
var postorderTraversal = function (root) {
    const res = [];
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node) {
            stack.push(node.left, node.right);
            res.unshift(node.val);
        }
    }
    return res;
};

// 迭代 (stack)
var postorderTraversal = function (root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const stack = [];
    let prev = null;
    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.right === null || root.right === prev) {
            res.push(root.val);
            // 右子树出栈的时候，每次出栈root不断上移，下一次循环时还会判断是否有右子树；
            // 如果不加prev就会陷入死循环~
            // 加个prev做个判断，只有没有遍历过的右子树才能入栈
            prev = root;
            root = null;
        } else {
            // 如果右节点不为空，则将 root 结点 push 回去，然后处理右子树
            stack.push(root);
            root = root.right;
        }
    }
    return res;
};
