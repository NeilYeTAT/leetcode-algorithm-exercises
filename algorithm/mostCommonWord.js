// !?',;.
// 给你一个字符串 paragraph 和一个表示禁用词的字符串数组 banned ，返回出现频率最高的非禁用词。题目数据 保证 至少存在一个非禁用词，且答案 唯一 。

// paragraph 中的单词 不区分大小写 ，答案应以 小写 形式返回。
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// 输出："ball"

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// const paragraph = "a, a, a, a, b,b,b,c, c"
// const paragraph = "a."
const banned = ['hit']
const mostCommonWord = function (paragraph, banned) {
  let clearStr = paragraph.replace(/[!?',;.]/g, ' ').toLowerCase().split(' ').filter(item => item !== '')
  if (clearStr.length === 1) {
    return clearStr[0]
  }
  const hashMap = new Map()
  const bannedMap = new Map()
  for (let k = 0; k < banned.length; k++) {
    bannedMap.set(banned[k])
  }
  for (let i = 0; i < clearStr.length; i++) {
    if (hashMap.has(clearStr[i])) {
      hashMap.set(clearStr[i], hashMap.get(clearStr[i]) + 1)
    } else if (bannedMap.has(clearStr[i])) {
      continue
    } else {
      hashMap.set(clearStr[i], 1)
    }
  }
  return findMaxValueAndKey(hashMap)
}
function findMaxValueAndKey(map) {
  let maxKey = null;
  let maxValue = -Infinity;
  for (let [key, value] of map) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey
}
console.log(mostCommonWord(paragraph, banned))