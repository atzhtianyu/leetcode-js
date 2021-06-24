/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    let prev = dummyHead;
    while (head !== null && head.next !== null) {
        const next = head.next;
        head.next = next.next;
        prev.next = next;
        next.next = head;

        prev = prev.next;
        head = head.next;
    }
    return dummyHead.next;
};
