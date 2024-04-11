// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

class ListNode {
  val
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const addTwoNumbers = function (l1, l2) {
  let add = 0
  let cur = new ListNode(0, null)
  let result = cur
  while (l1 || l2) {
    l1 = l1 || new ListNode(0, null)
    l2 = l2 || new ListNode(0, null)
    if (l1.val + l2.val + add >= 10) {
      cur.val = l1.val + l2.val + add - 10
      add = 1
    } else {
      cur.val = l1.val + l2.val + add
      add = 0
    }
    l1 = l1.next
    l2 = l2.next
    if (!l1 && !l2) {
      break
    }
    cur.next = new ListNode(0, null)
    cur = cur.next
  }
  if (add === 1) {
    cur.val = 1
  } else {
    cur = null
  }
  return result
};