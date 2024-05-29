// const setZeroes = function (matrix) {
//   const table = new Set()
//   for (let i = 0; i < matrix.length; i++) {
//     let key = 0
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] === 0) {
//         table.add(j)
//         key = 1
//       }
//       if (key) {
//         for (let k = 0; k < matrix[i].length; k++) {
//           matrix[i][k] = 0
//         }
//       }
//     }
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (table.has(j)) {
//         for (let k = 0; k < matrix.length; k++) {
//           matrix[k][j] = 0
//         }
//       }
//     }
//     break
//   }
//   return matrix
// }

const setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const rows = new Set()
  const cols = new Set()

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
}
