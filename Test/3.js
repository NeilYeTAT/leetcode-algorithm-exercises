var sumDigitDifferences = function (nums) {
  let ans = 0
  const temp = nums[0] + ""
  const n = temp.length
  const hashMap = Array(n)
    .fill()
    .map(() => Array(10).fill(0))

  for (let item of nums) {
    let j = 0
    item += ""
    for (let i = item.length - 1; i >= 0; i--) {
      hashMap[j][item[i] - 0] += 1
      j++
    }
  }
  for (let i = 0; i < hashMap.length; i++) {
    const temp = hashMap[i].filter(n => n > 0)
    for (let  i = 0; i < temp.length - 1; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        ans += temp[i] * temp[j]
      }
    }
  }

  return ans
}

const nums = [13, 23, 12]
console.log(sumDigitDifferences(nums))
