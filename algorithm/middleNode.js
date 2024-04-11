// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

class ListNode {
  val
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// 两个循环, 效率不高, 可以使用快慢指针法, 慢指针一次走一步, 快指针一次走两步
// 快指针走到头, 慢指针刚好走到中间, 一次循环就结束
// const middleNode = function (head) {
//   let cur = head
//   const arr = []
//   let i = 0
//   while (cur) {
//     arr.push(i)
//     i++
//     cur = cur.next
//   }
//   let result = parseInt(i / 2)
//   let j = 0
//   cur = head
//   let resu = cur
//   while (j <= result) {
//     resu = cur
//     j++
//     cur = cur.next
//   }
//   return resu
// }

const middleNode = function (head) {
  let fast = head?.next?.next
  let slow = head
  while (fast) {
    fast = fast?.next?.next
    slow = slow.next
  }
  return slow
}