// 给你一个整数数组 arr 和两个整数 k 和 threshold 。
// 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。

const numOfSubarrays = function (arr, k, threshold) {
  let left = 0, right = 0, count = 0, sum = 0
  while (right < k) {
    sum += arr[right]
    right++
  }
  while (right < arr.length) {
    (sum / k) >= threshold && count++
    sum -= arr[left]
    left++
    sum += arr[right]
    right++
  }
  (sum / k) >= threshold && count++
  return count
}

const arr = [2, 2, 2, 2, 5, 5, 5, 8]
console.log(numOfSubarrays(arr, 3, 4))
// const arr = [1, 1, 1, 1, 1]
// const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3]
// const arr = [2852, 5203, 9375, 3209, 932, 9529, 4416, 3525, 2435, 3131, 3232, 2047, 2871, 3550, 5923, 4553, 2086, 5990, 4580, 2948, 8522, 4850, 3597, 744, 6963, 8126, 2153, 258, 1955, 3169, 3165, 4334, 791, 5342, 4348, 5404, 8531, 1045, 7767, 9842]
// console.log(arr.length)