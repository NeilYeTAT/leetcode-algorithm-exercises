
const twoSum = function (numbers, target) {
  let left = 0, right = numbers.length - 1
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    console.log(sum)
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
}

const numbers = [2, 7, 11, 15], target = 9
console.log(twoSum(numbers, target));