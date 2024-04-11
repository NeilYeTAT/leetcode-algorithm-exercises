// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

class ListNode {
  val
  next = null
  constructor(value) {
    this.val = value
    this.next = null
  }
}

const reverseList = function (head) {
  let pre = null
  let cur = head
  let temp
  while (cur) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp.next
  }
  return pre
}