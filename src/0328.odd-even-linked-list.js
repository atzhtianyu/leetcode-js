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
var oddEvenList = function (head) {
    if (!head) {
        return head;
    }
    const oddHead = head;
    const evenHead = head.next;
    let oddNode = oddHead;
    let evenNode = evenHead;
    // 交叉分离，先奇后偶
    while (oddNode.next && evenNode.next) {
        oddNode.next = oddNode.next.next;
        oddNode = oddNode.next;
        evenNode.next = evenNode.next.next;
        evenNode = evenNode.next;
    }
    oddNode.next = evenHead;
    return oddHead;
};
