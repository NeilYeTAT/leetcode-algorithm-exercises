// 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
// 子数组 定义为原数组中的一个连续子序列。
// 请你返回 arr 中 所有奇数长度子数组的和 。
// 至少为数组全部的和

// 数组的长度必须是奇数
// 三层循环, 一层控制循环次数, 一层控制循环起始位置, 一层遍历总和

const sumOddLengthSubarrays = function (arr) {
  let result = arr.reduce((acc, cur) => acc + cur)
  for (let i = 3; arr.length / i >= 1; i += 2) {

    for (let j = 0; j + i <= arr.length; j++) {

      for (let k = j; k < j + i; k++) {
        result += arr[k]
      }
    }
  }
  return result
}
console.log(sumOddLengthSubarrays([10, 11, 12]))
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))