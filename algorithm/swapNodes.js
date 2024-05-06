const swapNodes = function (head, k) {
  let cur = head, first = head, last = head
  let count = 1
  while(cur.next) {
    if (count < k) {
      first = first.next
    } else {
      last = last.next
    }
    count++
    cur = cur.next
  }
  [first.val, last.val] = [last.val, first.val]
  return head
}
