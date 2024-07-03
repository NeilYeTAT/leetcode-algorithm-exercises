const matrixSum = function (nums) {
  let ans = 0
  let row = nums.length
  let col = nums[0].length
  for (let item of nums) {
    item.sort((a, b) => a - b)
  }

  for (let i = 0; i < col; i++) {
    let temp = []
    for (let j = 0; j < row; j++) {
      temp.push(nums[j][i])
    }
    ans += Math.max(...temp)
  }

  return ans
}

const nums = [
  [7, 2, 1],
  [6, 4, 2],
  [6, 5, 3],
  [3, 2, 1],
]
console.log(matrixSum(nums))
