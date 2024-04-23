
// 给你一个字符串 word。如果 word 中同时存在某个字母的小写形式和大写形式，则称这个字母为 特殊字母 。
// 返回 word 中 特殊字母 的数量。

// 统计大小写字母数量
var numberOfSpecialChars = function (word) {
  const hashMap = new Array(26).fill(0)
  for (let item of word) {
    if (hashMap[item.charCodeAt() - 'a'.charCodeAt()] === -1 || hashMap[item.charCodeAt() - 'A'.charCodeAt()] === -1) {
      continue
    }
    if (item.charCodeAt() >= 97) {
      if (hashMap[item.charCodeAt() - 'a'.charCodeAt()] !== 1) {
        hashMap[item.charCodeAt() - 'a'.charCodeAt()]++
      }
    } else {
      if (hashMap[item.charCodeAt() - 'A'.charCodeAt()] !== -2) {
        hashMap[item.charCodeAt() - 'A'.charCodeAt()] -= 2
      }
    }
  }
  return hashMap.filter((ele) => ele === -1).length
};
console.log(numberOfSpecialChars('asbAsSB'));
console.log(numberOfSpecialChars('aabBA'));
console.log(numberOfSpecialChars('abBBBBBB'));