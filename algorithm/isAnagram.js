// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
// 事件长达92ms, 🐌跑的都比你的程序快快😅
// -------------------------------------------------------数组排序法
// const isAnagram = function (s, t) {
//   let S = [...s]
//   let T = [...t]
//   S.sort()
//   T.sort()
//   console.log(S)
//   console.log(T)
//   if (S.length !== T.length) {
//     return false
//   }
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === T[i]) {
//       continue
//     }
//     return false
//   }
//   return true
// }
// -----------------------------------------------------哈希表, 小子
// 56ms捏😋

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  let hash = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    hash[s[i].charCodeAt() - 97]++
  }
  for (let j = 0; j < t.length; j++) {
    if (hash[t[j].charCodeAt()] <= 0) {
      return false
    }
    hash[t[j].charCodeAt() - 97]--
  }
  return hash.every(e => e === 0)
}
const s = 'anagram'
const t = 'naagram'
// const arr = [2, 3, 4]
console.log(isAnagram(s, t))
