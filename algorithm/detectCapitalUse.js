// 这题解法太多了....排序, 哈希, 双指针遍历

const word = 'agA'
const detectCapitalUse = function (word) {
  let arr = word.split('')
  // if 是大写字母开头
  if (arr[0].charCodeAt() >= 65 && arr[0].charCodeAt() <= 90) {
    arr.sort()
    if (arr[0].charCodeAt() <= 90 && arr[arr.length - 1].charCodeAt() <= 90) {
      return true
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].charCodeAt() <= 90) {
        return false
      }
    }
    return true
  }
  arr.sort()
  if (arr[0].charCodeAt() <= 122 && arr[arr.length - 1].charCodeAt() <= 122 && arr[0].charCodeAt() >= 97) {
    return true
  }
  return false
}
console.log(detectCapitalUse(word))
// 很无语, 居然只判断单词的....早知道不写这么复杂了...