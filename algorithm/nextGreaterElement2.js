// 把数组复制一遍扩容, 只遍历2分之一 🥳
// 单调栈, 构造单调递减栈
const nextGreaterElement = function (nums) {
  const arr = [...nums, ...nums]
  let result = new Array(nums.length).fill(-1)
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack[stack.length - 1]] = arr[i]
      stack.pop()
    }
    stack.push(i)
  }
  result.length = nums.length
  return result
}

const nextGreaterElementFake = function (nums) {
  let result = new Array(nums.length).fill(-1)
  let stack = []
  for (let i = 0; i < nums.length * 2; i++) {
    let index = i % nums.length
    while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
      result[stack[stack.length - 1]] = nums[index]
      stack.pop()
    }
    stack.push(index)
  }
  return result
}
const nums = [1, 2, 1]
console.log(nextGreaterElementFake(nums))