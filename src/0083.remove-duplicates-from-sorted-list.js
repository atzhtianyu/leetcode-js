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

/**
 * 当我们遍历到链表的最后一个节点时，cur.next 为空节点，如果不加以判断，访问 cur.next 对应的元素会产生运行错误。
 * 因此我们只需要遍历到链表的最后一个节点，而不需要遍历完整个链表。
 * 时间复杂度：O(N)，对链表每个节点遍历了一次；
 * 空间复杂度：O(1)，只使用了常量的空间。
 */

var deleteDuplicates = function (head) {
    if (!head) {
        return head;
    }
    let cur = head;
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head.next;
};



/**
 * 当 head 不存在或者 head.next 不存在，直接返回 head；
 * 无论 head.val 和 head.next.val 是否相等，head.next 一定等于后续链表的去重，即 self.deleteDuplicates(head.next)
 * 当 head.val != head.next.val 时，head 节点要保留，所以 head.next = self.deleteDuplicates(head.next) 
 * 比较好理解，因为要把后面去重的链表拼接到当前 head 节点之后；
 * 当 head.val == head.next.val 时， head 节点要删除，所以 return head.next ，
 * 如果我们不把 head.next = self.deleteDuplicates(head.next)， 那么 return 的结果是原始 head.next ，所以仍然是没去重。
 * 时间复杂度：O(N)，每个节点访问了一次。
 * 空间复杂度：O(N)，递归调用的时候会用到了系统的栈。
 */

var deleteDuplicates = function (head) {
    if (head === null || head.next === null) return head;
    head.next = deleteDuplicates(head.next);
    return head.val === head.next.val ? head.next : head;
};