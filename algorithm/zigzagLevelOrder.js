const zigzagLevelOrder = function (root) {
  const res = []
  const queue = []
  let key = false
  if (root) {
    queue.push(root)
  }
  while (queue.length) {
    let size = queue.length
    let arr = []
    while (size) {
      let temp = queue.shift()
      arr.push(temp.val)
      if (temp.left) queue.push(temp.left)
      if (temp.right) queue.push(temp.right)
      size--
    }
    if (key) {
      arr.reverse()
    }
    key = !key
    res.push(arr)
  }
  return res
}
