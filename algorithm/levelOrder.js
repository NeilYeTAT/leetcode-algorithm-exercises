// const levelOrder = function (root) {
//   let queue = []
//   let result = []
//   let size = 0
//   if (root) {
//     queue.push(root)
//     size++
//   }
//   while (queue.length) {
//     let arr = []
//     while (size) {
//       let temp = queue.shift()
//       arr.push(temp.val)
//       if (temp.children) {
//         for (let chi of temp.children) {
//           queue.push(chi)
//         }
//       }
//       size--
//     }
//     result.push(arr)
//     size = queue.length
//   }
//   return result
// }

const levelOrder = function (root) {
  const res = []
  const queue = []
  if (root) {
    queue.push(root)
  }
  while (queue.length) {
    let len = queue.length
    let arr = []
    while (len) {
      let temp = queue.shift()
      arr.push(temp.val)
      if (temp.left) queue.push(temp.left)
      if (temp.right) queue.push(temp.right)
      len--
    }
    res.push(arr)
  }
  return res
}
