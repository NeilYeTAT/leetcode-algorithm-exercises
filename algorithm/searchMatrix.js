// const searchMatrix = function (matrix, target) {
//   let m = matrix.length,
//     n = matrix[0].length
//   for (let i = 0; i < m; i++) {
//     let left = 0,
//       right = n - 1
//     if (target >= matrix[i][left] && target <= matrix[i][right]) {
//       if (matrix[i + 1]) {
//         if (target >= matrix[i + 1][left] && target <= matrix[i + 1][right]) {
//           if (binarySearch(matrix[i]) === false) {
//             continue
//           } else {
//             return binarySearch(matrix[i])
//           }
//         } else {
//           return binarySearch(matrix[i])
//         }
//       } else {
//         return binarySearch(matrix[i])
//       }
//     } else if (target < matrix[i][left]) {
//       return false
//     }
//   }
//   return false

//   function binarySearch(arr) {
//     let left = 0,
//       right = n - 1
//     while (left <= right) {
//       let mid = Math.floor((right + left) / 2)
//       if (arr[mid] === target) {
//         return true
//       } else if (arr[mid] < target) {
//         left = mid + 1
//       } else if (arr[mid] > target) {
//         right = mid - 1
//       }
//     }
//     return false
//   }
// }

const searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length
  for (let i = 0; i < m; i++) {
    let l = 0,
      r = n - 1
    while (l < r) {
      let mid = (l + r + 1) >> 1
      if (matrix[i][mid] <= target) l = mid
      else r = mid - 1
    }
    if (matrix[i][r] == target) return true
  }
  return false
}

// console.log(searchMatrix(matrix, target))
