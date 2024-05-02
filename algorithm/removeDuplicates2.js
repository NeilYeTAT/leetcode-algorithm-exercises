

const removeDuplicates = function (nums) {
  let count = 2
  let slow = count
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - count]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
}

// const nums = [1, 1, 1, 2, 2, 3]
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
// const nums = [1, 2, 2]
console.log(removeDuplicates(nums))