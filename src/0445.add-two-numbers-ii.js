/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const stack1 = [];
    const stack2 = [];
    const stack = [];

    let cur1 = l1;
    let cur2 = l2;
    let carried = 0;

    // 入栈
    while (cur1) {
        stack1.push(cur1.val);
        cur1 = cur1.next;
    }

    while (cur2) {
        stack2.push(cur2.val);
        cur2 = cur2.next;
    }

    let a = null;
    let b = null;
    // pop并计算然后入栈
    while (stack1.length > 0 || stack2.length > 0) {
        a = Number(stack1.pop()) || 0;
        b = Number(stack2.pop()) || 0;

        stack.push((a + b + carried) % 10);

        if (a + b + carried >= 10) {
            carried = 1;
        } else {
            carried = 0;
        }
    }

    if (carried === 1) {
        stack.push(1);
    }

    // 生成链表返回
    const dummy = new ListNode();
    let current = dummy;

    while (stack.length > 0) {
        current.next = {
            val: stack.pop(),
            next: null
        }
        current = current.next;
    }

    return dummy.next;
};
