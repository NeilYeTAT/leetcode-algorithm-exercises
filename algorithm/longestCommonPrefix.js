// 一眼哈希, 秒了😋

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""
// 马勒戈壁的, 理解错了, 算了, 还是排序吧...
// const strs = ["dog","racecar","car"]

// const longestCommonPrefix = function (strs) {
//   let hashMap = new Array(26).fill(0)
//   for (let i = 0; i < strs.length; i++) {
//     for (let j = 0; j < strs[i].length; j++) {
//       hashMap[strs[i][j].charCodeAt() - 'a'.charCodeAt()]++
//     }
//   }
//   // 不能排序, fuck
//   console.log(Math.max(...hashMap))
//   // 只有大于1才算有公共的
//   if (Math.max(...hashMap) > 1) {
//     let result = ''
//     for (let k = 0; k < hashMap.length; k++) {
//       if (hashMap[k] === Math.max(...hashMap)) {
//         result += String.fromCharCode(k + 'a'.charCodeAt())
//       }
//     }
//     return result
//   }
//   return ''
// }
// console.log(longestCommonPrefix(strs))
// longestCommonPrefix(strs)

// 三个for循环排序????

// -------------- 逆天大佬思路解法, 先排序, 然后对比第一个和最后一个就行了, 马勒戈壁的, 逆天
const longestCommonPrefix = function (strs) {
  strs.sort()
  let minLen = strs[0].length < strs[strs.length - 1].length ? strs[0].length : strs[strs.length - 1].length
  let result = ''
  for (let i = 0; i < minLen; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return result
    }
    result += strs[0][i]
  }
  return result
}


let strs = ['flower', 'flow', 'flight']

console.log(longestCommonPrefix(strs))