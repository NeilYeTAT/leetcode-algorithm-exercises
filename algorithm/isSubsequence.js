// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// const s = "leeeeetcode"
// const t = "leeeeeetcode"
// const isSubsequence = function (s, t) {
//   const hashMap = new Array(26).fill(0)
//   for (let i = 0; i < s.length; i++) {
//     hashMap[s[i].charCodeAt() - 'a'.charCodeAt()] = i + 1 + hashMap[s[i].charCodeAt() - 'a'.charCodeAt()]
//   }
//   let count = 0
//   console.log(hashMap)
//   for (let j = 0; j < t.length; j++) {
//     if (hashMap[t[j].charCodeAt() - 'a'.charCodeAt()] - count + 1 > 0) {
//       continue
//     }
//     if (hashMap[t[j].charCodeAt() - 'a'.charCodeAt()] > 0) {
//       count++
//       hashMap[t[j].charCodeAt() - 'a'.charCodeAt()] = hashMap[t[j].charCodeAt() - 'a'.charCodeAt()] - count
//     }
//   }
//   console.log(hashMap)
//   return hashMap.every(ele => ele === 0)
// }
// console.log(isSubsequence(s, t))
// ---------------------------------------------------这题确实不能用哈希表
const s = "ace"
const t = "abcde"
const isSubsequence = function (s, t) {
  let slow = 0
  let fast = 0
  let count = 0
  while (slow <= s.length && fast < t.length) {
    if (s[slow] === t[fast]) {
      slow++
      fast++
      count++
    } else {
      fast++
    }
  }
  return count === s.length
}
console.log(isSubsequence(s, t))