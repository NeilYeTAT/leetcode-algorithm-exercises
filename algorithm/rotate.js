
// const rotate = function (matrix) {
//   const arr = matrix.flat(1)
//   const result = []
//   let startIndex = 0
//   for (let i = 0; i < matrix.length; i++) {
//     let temp = []
//     let count = matrix.length - 1
//     let Iterators = startIndex
//     while (count >= 0) {
//       temp[count] = arr[Iterators]
//       Iterators += matrix.length
//       count--
//     }
//     startIndex++
//     result.push(temp)
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       matrix[i][j] = result[i][j];
//     }
//   }
// }

const rotate = function (matrix) {
  const arr = matrix.flat(1)
  const result = []
  let startIndex = 0
  for (let i = 0; i < matrix.length; i++) {
    let temp = []
    let count = matrix.length - 1
    let Iterators = startIndex
    while (count >= 0) {
      temp[count] = arr[Iterators]
      Iterators += matrix.length
      count--
    }
    startIndex++
    result.push(temp)
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = result[i][j];
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
rotate(matrix)
// console.log(rotate(matrix))
// const matrix = [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]
