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
var reverseList = function (head) {
    let reverseHead = new ListNode();
    let curNode = head;
    let nextNode = null;
    while (curNode) {
        nextNode = curNode.next;
        curNode.next = reverseHead.next;
        reverseHead.next = curNode;
        curNode = nextNode;
    }
    return reverseHead.next;
};
