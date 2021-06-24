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
    // 判断要交换的两个节点是否存在
    while (head !== null && head.next !== null) {
        // 两个指针无法完成，那就再加一个指针
        const next = head.next;
        head.next = next.next;
        prev.next = next;
        next.next = head;

        prev = prev.next;
        head = head.next;
    }
    return dummyHead.next;
};
