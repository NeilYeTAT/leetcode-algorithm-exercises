
const setZeroes = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let col = []
  let row = []
  let key = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        col.push(j)
        if (key) {
          row.push(i)
          key = 0
        }
      }
    }
    key = 1
  }
  for (let i = 0; i < m; i++) {
    if (row.includes(i)) {
      matrix[i].fill(0)
    } else {
      for (let j = 0; j < n; j++) {
        if (col.includes(j)) {
          matrix[i][j] = 0
        }
      }
    }
  }
  return matrix
}
const arr = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]

// const arr = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]
console.log(setZeroes(arr))