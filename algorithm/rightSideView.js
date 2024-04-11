// 同层哪右边, 到左后一层

const rightSideView = function (root) {
  let queue = []
  let result = []
  if (root) {
    queue.push(root)
  }
  let size = 1
  while (queue.length) {
    while (size) {
      let temp = queue.shift()
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
      if (size === 1) {
        result.push(temp.val)
      }
      size--
    }
    size = queue.length
  }
  return result
}