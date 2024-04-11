
const decorateRecord = function (root) {
  let count = 0
  let queue = []
  let result = []
  let size = 0
  if (root) {
    queue.push(root)
    size++
  }
  while (queue.length) {
    let arr = []
    while (size) {
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
    count++
    if (count % 2 === 0) {
      // reverse
      result.push(arr.reverse())
    } else {
      result.push(arr)
    }
    size = queue.length
  }
  return result
}