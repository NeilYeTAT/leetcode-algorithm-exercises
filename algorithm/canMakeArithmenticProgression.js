// 给你一个数字数组 arr 。
// 如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
// 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。

// const canMakeArithmeticProgression = function (arr) {
  // arr.sort((a, b) => a - b)
  // let difference = arr[1] - arr[0]
  // for (let i = 2; i < arr.length; i++) {
  //   if (arr[i] - arr[i - 1] !== difference) {
  //     return false
  //   }
  // }
  // return true
// }
const canMakeArithmeticProgression = function (arr) {
  if (new Set(arr).size === 1) {
    return true
  } else if (new Set(arr).size < arr.length) {
    return false
  } else {
    let minVal = Number.MAX_SAFE_INTEGER
    let maxVal = Number.MIN_SAFE_INTEGER
    let hashMap = new Map()
    arr.forEach(ele => {
      minVal = minVal < ele ? minVal : ele
      maxVal = maxVal > ele ? maxVal : ele
      hashMap.set(ele, 1)
    });
    let diff = (maxVal - minVal) / (arr.length - 1)
    for (minVal; minVal <= maxVal; minVal+=diff) {
      if(hashMap.has(minVal, 1)) {
        hashMap.delete(minVal, 1)
      }
    }
    if(hashMap.size !== 0) {
      return false
    }
    return true
  }
}
const arr = [1, 3, 5, 7, 9]
console.log(canMakeArithmeticProgression(arr))