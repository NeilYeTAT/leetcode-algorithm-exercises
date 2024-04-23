// 

const detectCycle = function (head) {
  let slow = head, fast = head
  if (slow?.next === undefined) {
    return null
  }
  do {
    if (fast === undefined) {
      return null
    }
    slow = slow?.next
    fast = fast?.next?.next
  } while (slow !== fast)
  fast = head
  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
  }
  return fast
}
