// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

class listNode {
  val
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// 使用栈结构保存值然后遍历两次, 时间复杂度为O(n)
// const isPalindrome = function (head) {
//   const stack = []
//   let cur = head
//   while (cur) {
//     stack.push(cur.val)
//     cur = cur.next
//   }
//   cur = head
//   let i = stack.length - 1
//   while (cur) {
//     if (cur.val !== stack[i]) {
//       return false
//     }
//     i--
//     cur = cur.next
//   }
//   return true
// }

const isPalindrome = function (head) {
  const stack = []
  let cur = head
  while (cur) {
    stack.push(cur.val)
    cur = cur.next
  }
  let left = 0, right = stack.length - 1
  while (left <= right) {
    if (stack[left] !== stack[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
