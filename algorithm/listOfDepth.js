function ListNode(val) {
  this.val = val
  this.next = null
}

const listOfDepth = function (tree) {
  if (!tree) {
    return []
  }
  let queue = [tree]
  let result = []
  while (queue.length) {
    let size = queue.length
    let head = new ListNode(-1)
    let cur = head
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      cur.next = new ListNode(node.val)
      cur = cur.next
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(head.next)
  }
  return result
}
