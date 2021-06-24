/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 这里 new 一个 newHead，防止只有一个元素时，right.next 报错的bug
    const newHead = new ListNode();
    newHead.next = head;
    let left = newHead;
    let right = newHead;

    // 让 left 和 right 相隔 n 个节点
    let counter = 0;
    while (counter < n) {
        counter++;
        right = right.next;
    }
    // 两个指针同时向后移动，当 right 是最后一个节点时，left 是要删除的节点的前一个节点
    while (right.next) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return newHead.next;
};
