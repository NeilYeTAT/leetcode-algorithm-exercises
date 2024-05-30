const mergeNodes = function (head) {
  if (head === null) {
    return null
  }
  let cur = head, pre = null
  while (cur) {
    if (cur.val === 0) {
      if (pre) {
        pre.next = cur.next ? cur : null
      }
      pre = cur
    } else{
      pre.val += cur.val
    }
    cur = cur.next
  }
  return head
}
