

const minDepth = function (root) {
  let depth = 0
  let size = 0
  let queue = []
  if (root) {
    queue.push(root)
    size++
    depth++
  } else {
    return depth
  }

  while (queue.length) {
    while (size) {
      let temp = queue.shift()
      size--
      if (temp.left) {
        queue.push(temp.left)
      }

      if (temp.right) {
        queue.push(temp.right)
      }

      if (!temp.left && !temp.right) {
        return depth
      }
    }
    depth++
    size = queue.length
  }
  return depth
}