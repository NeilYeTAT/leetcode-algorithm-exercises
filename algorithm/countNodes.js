
const countNodes = function (root) {
  let count = 0
  function order(root) {
    count++
    if (!root) {
      count--
      return count
    }
    order(root.right)
    order(root.left)
    return count
  }
  return order(root)
}

// const countNodes = function (root) {
//   let queue = []
//   let result = 0
//   let size = 0
//   if (root) {
//     queue.push(root)
//   }
//   while (queue.length) {
//     size = queue.length
//     result += size
//     while (size) {
//       let node = queue.shift()
//       node.left && queue.push(node.left)
//       node.right && queue.push(node.right)
//       size--
//     }
//   }
//   return result
// }