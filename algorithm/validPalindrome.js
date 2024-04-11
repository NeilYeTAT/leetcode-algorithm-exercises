// 给你一个字符串 s，最多 可以从中删除一个字符。
// 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

// const s = "cbbcc"
// const validPalindrome = function (s) {
//   let arr = s.split('')
//   let left = 0
//   let right = s.length - 1
//   let count = 0
//   let radixLeft = null
//   let radixRight = null
//   let keyLeft = 1
//   let keyRight = 1
//   let key = 2
//   if (arr[left] !== arr[right]) {
//     if (arr[left] === arr[right - 1]) {
//       right--
//       count++
//     } else if (arr[left + 1] === arr[right]) {
//       left++
//       count++
//     } else {
//       return false
//     }
//   }
//   while (left < right) {
//     if (arr[left] === arr[right]) {
//       left++
//       right--
//       continue
//     } else if ((arr[left] !== arr[right] && arr[left + 1] === arr[right]) && keyLeft === 1) {
//       radixLeft = left
//       radixRight = right
//       left++
//       count++
//       keyLeft = 0
//       keyRight = 2
//       continue
//     } else if ((arr[left] !== arr[right] && arr[left] === arr[right - 1]) && keyRight === 1) {
//       radixLeft = left
//       radixRight = right
//       left++
//       count++
//       keyRight = 0
//       keyLeft = 2
//       continue
//     } else {
//       if (keyLeft === 0 && keyRight === 2 && count <= 1 && key !== 0) {
//         keyRight = 1
//         right = radixRight - 1
//         left = radixLeft
//         count--
//         key--
//         continue
//       } else if (keyLeft === 2 && keyRight === 0 && count <= 1 && key !== 0) {
//         keyLeft === 1
//         right = radixRight
//         left = radixLeft + 1
//         count--
//         key--
//         continue
//       }
//       return false
//     }
//   }
//   if (count > 1) {
//     return false
//   }
//   return true
// }
// console.log(validPalindrome(s))
function isPali(str, left, right) {
  while (left < right) {
    if (str[left] === str[right]) {
      left++
      right--
      continue
    }
    return false
  }
  return true
}
const validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
      continue
    } else if (s[left] !== s[right]) {
      return isPali(s, left, right - 1) || isPali(s, left + 1, right)
    } else {
      return false
    }
  }
  return true
}
const s = "aeacdeaeaaaaaaeaedcae"
console.log(validPalindrome(s))