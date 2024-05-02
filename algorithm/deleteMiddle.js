const deleteMiddle = function (head) {
  let dummy = new ListNode(0, head)
  let pre = dummy
  let slow = head,
    fast = head?.next
  if (!fast) {
    return head.next
  }
  while (fast) {
    fast = fast?.next?.next
    slow = slow?.next
    pre = pre.next
  }
  pre.next = slow.next
  return head
}
