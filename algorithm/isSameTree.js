
const isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  let queue = []
  queue.push(p)
  queue.push(q)
  while (queue.length) {
    let leftNode = queue.shift()
    let rightNode = queue.shift()
    if (leftNode === null && rightNode === null) {
      continue
    }
    if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
      return false
    }
    queue.push(leftNode.left)
    queue.push(rightNode.left)
    queue.push(leftNode.right)
    queue.push(rightNode.right)
  }
  return true
}
