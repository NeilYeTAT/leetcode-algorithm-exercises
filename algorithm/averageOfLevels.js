

const averageOfLevels = function (root) {
  let queue = []
  let result = []
  let size = 0
  if (root) {
    queue.push(root)
    result.push(root.val)
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
    if (arr.length === 0) {
      continue
    }
    size = queue.length
    result.push(arr.reduce((acc, cur) => acc + cur) / arr.length)
  }
  return result
}