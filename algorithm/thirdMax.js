// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
// 直接上库函数, 妈的

// -------------Set 集合, 小子🥹, 我超

let nums = [2, 2, 3, 1]
const thirdMax = function (nums) {
  if (nums.length < 3) {
    return Math.max(...nums)
  }
  let arr = []
  for (let i = 3; i > 0; i--) {
    if (i > nums.length) {
      return arr[0]
    }
    let max = Math.max(...nums)
    arr.push(max)
    nums.splice(nums.indexOf(max), 1)
    while (max === Math.max(...nums)) {
      nums.splice(nums.indexOf(max), 1)
    }
  }
  return arr[2]
}
console.log(thirdMax(nums))
// thirdMax(nums)
