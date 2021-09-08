/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head.val === val) {
        head = head.next;
        return head;
    }
    let cur = head.next, pre = head;
    while (cur.val !== val) {
        pre = cur;
        cur = cur.next;
    }
    if (cur !== null) {
        pre.next = cur.next;
    } 
    return head;
};
