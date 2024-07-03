/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let maxRow = Number.MIN_SAFE_INTEGER,
    maxCol = Number.MIN_SAFE_INTEGER
  let minRow = Number.MAX_SAFE_INTEGER,
    minCol = Number.MAX_SAFE_INTEGER
  let n = grid[0].length

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row].indexOf(1) === -1) {
        break
      }
      minCol = Math.min(minCol, grid[row].indexOf(1))
      maxCol = Math.max(maxCol, grid[row].lastIndexOf(1))
      minRow = Math.min(minRow, row)
      maxRow = Math.max(maxRow, row)
    }
  }
  return (maxRow - minRow + 1) * (maxCol - minCol + 1)
}
