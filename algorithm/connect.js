// 层序遍历, 从右往左添加

const connect = function (root) {
  let queue = []
  let result = []
  let size = 0
  if (root) {
    queue.push(root)
    size++
  }
  while (queue.length) {
    while (size) {
      let temp = queue.shift()
      result.push(temp.val)
      if (temp.left) {

      }
      if (temp.right) {

      }
      if (size === 0) {

      }
    }
  }

  return result
}