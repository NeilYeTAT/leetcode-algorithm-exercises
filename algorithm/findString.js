//稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
//  输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
//  输出：-1
//  说明: 不存在返回-1。 
// -------------------------------------------------------------非常值得反复回看的一题
const findString = function (words, s) {
  let left = 0
  let right = words.length - 1
  while (left <= right) {
    let middle = parseInt((left + right) / 2)
    let cacheMid = middle
    while (words[middle] === '' && middle <= right) {
      middle++
    }
    if (middle > right) {
      right = cacheMid - 1
      continue
    }
    if (words[middle] > s) {
      right = cacheMid - 1
      middle = parseInt((left + right) / 2)
      continue
    } else if (words[middle] < s) {
      left = cacheMid + 1
      middle = parseInt((left + right) / 2)
      continue
    } else {
      return middle
    }
  }
  return -1
}

const words = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]
const s = 'ta'
console.log(findString(words, s))