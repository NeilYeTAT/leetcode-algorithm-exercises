// 层序遍历, 从右往左添加

const connect = function (root) {
  let queue = []
  let size = 0
  if (root) {
    queue.push(root)
    size++
  }
  while (queue.length) {
    while (size) {
      let temp = queue.shift()
      if (size !== 1) {
        temp.next = queue[0]
      }
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
      size--
    }
    size = queue.length
  }
  return root
}