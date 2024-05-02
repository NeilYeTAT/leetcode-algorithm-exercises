
const triangleNumber = function (nums) {
  if (nums.length < 3) {
    return 0
  }

  nums.sort((a, b) => a - b)
  let ans = 0
  let l = 0, r = nums.length - 1
  while(l + 1 < r) {

    

  }
  return ans
}

const nums = [2, 2, 3, 4]
console.log(triangleNumber(nums));