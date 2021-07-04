/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let count = 0;
    let cur = head;
    // 遍历出链表的长度
    while (cur) {
        count++;
        cur = cur.next;
    }
    // 计算出分割的链表的最小长度
    const per = (count / k) | 0;
    const nums = new Array(k).fill(per);
    // 将剩余的长度分配到前排的链表中，确定出每个分割有多少节点
    if (per * k < count) {
        let rest = count - per * k;
        let index = 0;
        while (rest) {
            nums[index++]++;
            rest--;
        }
    }
    let result = [];
    let cur = head;
    let prev;
    // 老老实实按照前边的计数分割链表
    for (let i = 0; i < k; i++) {
        const target = nums[i];
        // 处理长度为零的链表
        if (target === 0) {
            result[i] = null;
        } else {
            let count = 0;
            while (cur && count < target) {
                count++;
                prev = cur;
                cur = cur.next;
            }
            prev.next = null;
            result[i] = head;
            head = cur;
        }
    }
    return result;
};
