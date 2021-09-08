/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 双指针
var getKthFromEnd = function (head, k) {
    let pre = head, cur = head;
    for (let i = 0; i < k; i++) {
        cur = cur.next;
    }
    while (cur.next !== null) {
        cur = cur.next;
        pre = pre.next;
    }
    return pre;
};
