// const maxDepth = function (root) {
//   let queue = []
//   let size = 0
//   let depth = 0
//   if (root) {
//     queue.push(root)
//     size++
//     depth++
//   }
//   while (queue.length) {
//     while (size) {
//       let temp = queue.shift()
//       size--
//       if (temp?.left) {
//         queue.push(temp.left)
//       }
//       if (temp?.right) {
//         queue.push(temp.right)
//       }
//     }
//     depth++
//     size = queue.length
//   }
//   return depth
// }

const maxDepth = function (root) {
  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right))
}
