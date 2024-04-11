// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

// 匹配, 滑动窗口, 早知道还是双指针


// leetcode  -> 6 / 8
// start = 6, 
// def -> length = 3
// const haystack = 'sabbutsad'
// const needle = 'sad'

// const strStr = function (haystack, needle) {

//   if (haystack[haystack.indexOf(needle[0])]) {
//     let start = haystack.indexOf(needle[0])
//     // 如果开始位置的长度加上needle的长度已经超过了haystact的长度, 就直接推出
//     let radix = 1
//     while (start + needle.length < haystack.length) {
//       if (radix === needle.length - 1) {
//         return start
//       }
//       if (haystack[start + radix] === needle[radix]) {
//         radix++
//         continue
//       } else {
//         start = haystack.indexOf(needle[0], start + 1)
//         if (start === -1) {
//           return false
//         }
//         radix = 1
//         continue
//       }
//     }
//   } else {
//     // 第一个匹配项都没找到, 直接return
//     return -1
//   }
// }
// console.log(strStr(haystack, needle))
const strStr = function (haystack, needle) {
  let slow = 0
  let radix = 0
  let flag = 1
  if (needle.length === 1) {
    return haystack.indexOf(needle[0])
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[radix]) {
      if (radix === needle.length - 1) {
        return slow
      }
      radix++
      if (flag) {
        slow = i
        flag = 0
      }
      continue
    }
    flag = 1
    radix = 0
    // -------------------------------------------------------------
    i = slow++
  }
  return -1
}
const haystack = "mississippi"
const needle = "issip"
console.log(strStr(haystack, needle))