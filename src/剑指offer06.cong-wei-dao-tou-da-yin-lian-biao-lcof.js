/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// unshift
var reversePrint = function (head) {
    const res = [];
    let cur = head;
    while (cur.next !== null) {
        res.unshift(cur.val);
        cur = cur.next;
    }
    return res;
};

// reverse
var reversePrint = function (head) {
    const res = [];
    let cur = head;
    while (cur !== null) {
        res.push(cur.val);
        cur = cur.next;
    }
    return res.reverse();
};

// 栈 
var reversePrint = function (head) {
    const res = [];
    let cur = head;
    while (cur !== null) {
        res.push(cur.val);
        cur = cur.next;
    }
    const print = [];
    while (res.length) {
        print.push(res.pop());
    }
    return print;
};