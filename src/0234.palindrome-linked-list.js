/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 基本做法,遍历一遍,扔数组里,然后双指针判断是否是回文
// 时间复杂度O(n) 空间复杂度O(n)
var isPalindrome = function (head) {
    value = [];
    while (head) {
        value.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = value.length - 1;
    while (left < right) {
        if (value[left] != value[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};


// 这个解法利用的是快慢指针
// 按照下面的写法 偶数个节点 slow 最终指向中间两个节点的后一个 奇数个节点 slow 指向中间的节点
// 所以 prev.next 置为 null 正好分割两个链表
// 然后后半段链表翻转 最后逐个比对即可
// 时间复杂度O(n) 空间复杂度O(1)

var isPalindrome = function (head) {
    if (head == null || head.next == null) {
        return true;
    }
    let slow = head;
    let fast = head;
    let prev;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    let dummyHead = new ListNode();
    while (slow) {
        const tmp = slow.next;
        slow.next = dummyHead.next;
        dummyHead.next = slow;
        slow = tmp;
    }
    let head2 = dummyHead.next;
    while (head && head2) {
        if (head.val !== head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    return true;
}