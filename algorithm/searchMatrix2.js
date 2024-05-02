
const searchMatrix = function (matrix, target) {
  let colTop = 0, colBottom = matrix.length
  while (colTop <= colBottom) {
    let mid = Math.floor((colBottom - colTop) / 2 + colTop)
    if (matrix[mid][matrix.length - 1] > target) {
      colBottom = mid - 1
    } else {
      colTop = mid + 1
    }
  }
  // console.log(colTop);
  console.log(colBottom)
  for (let i = 0; i < matrix.length; i++) {
    let left = 0, right = matrix[i].length
    while (left <= right) {
      let mid = Math.floor((right - left) / 2 + left)
      if (matrix[i][mid] === target) {
        return true
      } else if (matrix[i][mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
}
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
const target = 5
console.log(searchMatrix(matrix, target))