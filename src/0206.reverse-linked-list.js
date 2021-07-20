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
// 迭代
var reverseList = function (head) {
    let reverseHead = new ListNode();
    let curNode = head;
    let nextNode = null;
    // 头插法
    while (curNode) {
        nextNode = curNode.next;
        curNode.next = reverseHead.next;
        reverseHead.next = curNode;
        curNode = nextNode;
    }
    return reverseHead.next;
};

// 递归
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let p = new ListNode();
    p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}