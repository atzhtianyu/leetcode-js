/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let cur = head;
    let prev = dummyHead;
    while (cur) {
        // 如果是要删的元素,把前一个节点的 next 指针指向下一个元素
        // 此时,前一个节点依然是前一个节点
        if (cur.val === val) {
            prev.next = cur.next;
            cur = prev.next;
        } else {
            // 不是要删的,前一个节点的指针和当前节点的指针都向后移动
            prev = cur;
            cur = cur.next;
        }
    }
    return dummyHead.next;
};
