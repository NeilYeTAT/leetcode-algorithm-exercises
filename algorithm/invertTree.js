

const invertTree = function (root) {
  let queue = []
  let size = 0
  if (root) {
    queue.push(root)
    size++
  }
  while (queue.length) {
    while (size) {
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right),
        [node.left, node.right] = [node.right, node.left]
      size--
    }
    size = queue.length
  }
  return root
}