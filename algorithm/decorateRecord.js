// 二叉树的层序遍历

const decorateRecord = function (root) {
  let result = []
  let queue = []
  if (root) {
    queue.push(root)
  }
  while (queue.length) {
    let temp = queue.shift()
    result.push(temp.val)
    if (temp.left) {
      queue.push(temp.left)
    }
    if (temp.right) {
      queue.push(temp.right)
    }
  }
  return result
}