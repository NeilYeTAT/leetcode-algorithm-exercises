// 


const deleteNode = function (head) {
  let cur = head
  if (cur.val === val) {
    head.val = val
    return head.next
  }
  while (cur) {
    if (cur?.next?.val === val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }
  return head
}