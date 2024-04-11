// 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

// 返回 合并后的字符串 。

const word1 = 'abcd'
const word2 = 'pq'
const mergeAlternately = function (word1, word2) {
  let result = []
  let j = 0
  for (let i = 0; i < word1.length; i++) {
    result.push(word1[i])
    while (j < word2.length) {
      result.push(word2[j])
      j++
      break
    }
  }
  while (j < word2.length) {
    result.push(word2[j])
    j++
  }
  return result.join('')
}
console.log(mergeAlternately(word1, word2))