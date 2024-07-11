// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numberOfSubmatrices = function (grid) {
//   let res = 0
//   let m = grid.length,
//     n = grid[0].length
//   let xCount = 0,
//     yCount = 0
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === "X") {
//         xCount++
//       } else if (grid[i][j] === "Y") {
//         yCount++
//       }
//       if (xCount === yCount) {
//         res++
//       }
//     }
//   }
//   return res
// }

// const grid = [
//   ["X", "Y", "."],
//   ["Y", ".", "."],
// ]
// console.log(numberOfSubmatrices(grid))

function countSubmatrices(grid) {
  const m = grid.length
  const n = grid[0].length

  // 前缀和数组，用于计算任意子矩阵的 'X' 和 'Y' 数量
  const prefixX = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  const prefixY = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefixX[i][j] =
        prefixX[i - 1][j] +
        prefixX[i][j - 1] -
        prefixX[i - 1][j - 1] +
        (grid[i - 1][j - 1] === "X" ? 1 : 0)
      prefixY[i][j] =
        prefixY[i - 1][j] +
        prefixY[i][j - 1] -
        prefixY[i - 1][j - 1] +
        (grid[i - 1][j - 1] === "Y" ? 1 : 0)
    }
  }

  let result = 0

  // 枚举上边界
  for (let top = 0; top < m; top++) {
    // 枚举下边界
    for (let bottom = top; bottom < m; bottom++) {
      const diffMap = new Map()
      diffMap.set(0, 1) // 初始条件，平衡点为 0 的子矩阵数量为 1

      let currentDiff = 0

      // 枚举右边界
      for (let right = 0; right < n; right++) {
        const xCount = prefixX[bottom + 1][right + 1] - prefixX[top][right + 1]
        const yCount = prefixY[bottom + 1][right + 1] - prefixY[top][right + 1]

        currentDiff = xCount - yCount

        // 如果当前差值已经在哈希表中，说明存在满足条件的子矩阵
        if (diffMap.has(currentDiff)) {
          result += diffMap.get(currentDiff)
        }

        // 更新哈希表
        if (diffMap.has(currentDiff)) {
          diffMap.set(currentDiff, diffMap.get(currentDiff) + 1)
        } else {
          diffMap.set(currentDiff, 1)
        }
      }
    }
  }

  return result
}

// 示例测试
const grid = [
  ["X", "Y", "."],
  ["Y", ".", "."],
]
console.log(countSubmatrices(grid))
