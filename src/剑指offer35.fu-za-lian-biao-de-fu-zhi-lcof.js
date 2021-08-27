/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 递归深拷贝
var copyRandomList = function (head, cachedNode = new WeakMap()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, { val: head.val }),
            Object.assign(cachedNode.get(head), {
                next: copyRandomList(head.next, cachedNode),
                random: copyRandomList(head.random, cachedNode),
            });
    }
    return cachedNode.get(head);
};

// 迭代拷贝拆分
var copyRandomList = function (head) {
    if (head === null) {
        return null;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const newNode = new Node(node.val, node.next, null);
        node.next = newNode;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const newNode = node.next;
        newNode.random = node.random !== null ? node.random.next : null;
    }
    const newHead = head.next;
    for (let node = head; node !== null; node = node.next) {
        const newNode = node.next;
        node.next = node.next.next;
        newNode.next = node.next !== null ? node.next.next : null;
    }
    return newHead;
};
