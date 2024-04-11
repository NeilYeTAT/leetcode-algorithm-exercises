// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分

const maxSubArray = function (nums) {
  let result = []
  let cacheValue = -Infinity
  let maxValue = 0
  for (let i = 0; i < nums.length; i++) {
    maxValue = maxValue + nums[i]
    if (maxValue > cacheValue) {
      // 最大值大于上次的, 继续遍历
      cacheValue = maxValue
    } else {
      // 最大值还没上次的大, 保存上次的值, 继续遍历
      result.push(cacheValue)
      cacheValue = maxValue
    }
  }
  result.push(cacheValue)
  console.log(result)
}
const nums =  [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))