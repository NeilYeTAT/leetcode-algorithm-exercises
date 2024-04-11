// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

// 你应当 保留 两个分区中每个节点的初始相对位置

class ListNode {
  val
  constructor(val) {
    this.val = val
    this.next = null
  }
}
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// 四个变量
// x 不一定存在
const partition = function (head, x) {
  let bigHead = null, bigTail = null
  let smallHead = null, smallTail = null
  while (head) {
    let curNext = head.next
    if (head.val < x) {
      if (smallHead === null) {
        smallHead = head
        smallTail = head
        smallHead.next = null
        head = curNext
        continue
      }
      smallTail.next = head
      smallTail = smallTail.next
      smallTail.next = null
    } else {
      if (bigHead === null) {
        bigHead = head
        bigTail = head
        bigHead.next = null
        head = curNext
        continue
      }
      bigTail.next = head
      bigTail = bigTail.next
      bigTail.next = null
    }
    head = curNext
  }
  if (!smallTail) {
    return bigHead
  }
  smallTail?.next = bigHead
  return smallHead
}