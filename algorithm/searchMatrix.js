
const searchMatrix = function (matrix, target) {
  let m = matrix.length, n = matrix[0].length
  for (let i = 0; i < m; i++) {
    let left = 0, right = n - 1
    if (target >= matrix[i][left] && target <= matrix[i][right]) {
      return binarySearch(matrix[i])
    } else if (target < matrix[i][left]) {
      return false
    }
  }
  return false

  function binarySearch(arr) {
    let left = 0, right = n - 1
    while (left <= right) {
      let mid = Math.floor(((right + left) / 2))
      if (arr[mid] === target) {
        return true
      } else if (arr[mid] < target) {
        left = mid + 1
      } else if (arr[mid] > target) {
        right = mid - 1
      }
    }
    return false
  }
}
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
console.log(searchMatrix(matrix, target));