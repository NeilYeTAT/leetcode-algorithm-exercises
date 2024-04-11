// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// for (let i = 0; i < s.length; i++) {
//   console.log(s[i])
// }
// 没什么好说的, 肥肠简单的一题...split方法到底算不算作弊呢......

let s = '  sakldjf jklasdjf aksdj  i kk   '
const lengthOfLastWord = function (s) {
  let beforeLen = 0
  // if(s.length === 1) {
  //   return 1
  // }
  for (let i = s.length - 1; i >= 0; i--) {
    if(s.charCodeAt(i) === 32 && beforeLen === 0) {
      continue
    }
    if(beforeLen > 0 && s.charCodeAt(i) === 32) {
      return beforeLen
    }
    beforeLen++
  }
  return beforeLen
}
console.log(lengthOfLastWord(s))