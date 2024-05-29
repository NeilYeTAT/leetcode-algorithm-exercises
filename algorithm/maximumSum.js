const maximumSum = function (nums) {
  const hashMap = new Map()
  let ans = -1
  for (let item of nums) {
    let sum = 0
    let temp = item
    while (item > 0) {
      sum += item % 10
      item = Math.floor(item / 10)
    }
    if (hashMap.has(sum)) {
      ans = Math.max(ans, hashMap.get(sum) + temp)
    }
    hashMap.set(sum, (Math.max(hashMap.get(sum), temp)) || temp)
  }
  return ans
}

// const nums = [18, 43, 36, 13, 7]
const nums = [10, 12, 19, 14]
console.log(maximumSum(nums))
