/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 双指针
// 错的人一定会错过,对的人终究会重逢.
var getIntersectionNode = function (headA, headB) {
    let cur1 = headA, cur2 = headB;
    while (cur1 !== cur2) {
        cur1 = cur1 !== null ? cur1.next : headA;
        cur2 = cur2 !== null ? cur2.next : headB;
    }
    return cur1;
};
