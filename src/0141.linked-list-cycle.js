/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 第一种快慢指针
// while 的判断条件是 slow !== fast
// 如果 slow 和 fast 没有相遇，且 fast 可以看到 null，则没有环
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

// 第一种快慢指针
// while 的判断条件是 fast !== null && fast.next !== null
// 如果 fast 没有看到 null ，且 slow 和 fast 相遇，则有环
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
