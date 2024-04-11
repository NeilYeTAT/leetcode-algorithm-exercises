

const largestValues = function(root) {
  let queue = []
  let result = []
  let size = 0
  if (root) {
    queue.push(root)
    size++
  }
  while(queue.length) {
    let arr = []
    while(size) {
      let temp = queue.shift()
      arr.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
      size--
    }
    result.push(Math.max(...arr))
    size = queue.length
  }
  return result
}