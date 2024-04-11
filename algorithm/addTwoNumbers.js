// 给定两个用链表表示的整数，每个节点包含一个数位。
// 这些数位是反向存放的，也就是个位排在链表首部。
// 编写函数对这两个整数求和，并用链表形式返回结果。

// 遇到进位加加就行了, 多定义一个变量存储进位值, 进位值更新
// 999 
// 999
class ListNode {
  val
  next = null
  constructor(val) {
    this.val = val
    this.next = null
  }
}

console.log(parseInt(9 / 10))
const addTwoNumbers = function (l1, l2) {
  let result = new ListNode('head')
  let cur = result
  let carry = 0

  while (l1 || l2) {
    if (key) {
      l1 = l1 === null ? null : l1.next
      l2 = l2 === null ? null : l2.next
      key = 0
    }
    let sum = ((l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val)) + carry
    let val = sum % 10
    carry = parseInt(sum / 10)
    cur.next = new ListNode(val)
    cur = cur.next
    l1 = l1 === null ? null : l1.next
    l2 = l2 === null ? null : l2.next
  }
  if (carry === 1) {
    cur.next = new ListNode(1)
    return result.next
  }
  return result.next
}
