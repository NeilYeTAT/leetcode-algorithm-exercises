// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 

class ListNode {
  val
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// 1 -> 1 -> 1 -> 2 -> 2 -> null
const deleteDuplicates = function (head) {
  let cur = head

  while (cur) {
    if (cur.val === cur?.next?.val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return head
}