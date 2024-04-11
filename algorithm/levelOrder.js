

const levelOrder = function (root) {
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
      if (temp.children) {
        for (let chi of temp.children) {
          queue.push(chi)
        }
      }
      size--
    }
    result.push(arr)
    size = queue.length
  }
  return result
}