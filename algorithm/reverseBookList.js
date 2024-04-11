// 反转链表

const reverseBookList = function (head) {
  let stack = []
  let cur = head
  while (cur) {
    stack.push(cur.val)
    cur = cur.next
  }
  return stack.reverse()
}