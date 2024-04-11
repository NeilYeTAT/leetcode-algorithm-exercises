// 回到0的次数

const returnToBoundaryCount = function (nums) {
  let count = 0
  let sum = 0
  for (let item of nums) {
    sum += item
    if (sum === 0) {
      count++
    }
  }
  return count
}