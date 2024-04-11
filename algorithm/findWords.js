// 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词

const findWords = function (words) {
  const lineFirst = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
  const lineSecond = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
  const lineThird = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm'])
  let result = []
  for (let i = 0; i < words.length; i++) {
    let arr = words.map(ele => ele.toLowerCase())
    if (arr[i].length === 1) {
      result.push(words[i])
      continue
    }
    if (lineFirst.has(arr[i][0])) {
      key = 1
    } else if (lineSecond.has(arr[i][0])) {
      key = 2
    } else if (lineThird.has(arr[i][0])) {
      key = 3
    }
    let count = 1
    for (let j = 1; j < arr[i].length; j++) {
      if (key === 1) {
        if (!lineFirst.has(arr[i][j])) {
          break
        }
      } else if (key === 2) {
        if (!lineSecond.has(arr[i][j])) {
          break
        }
      } else if (key === 3) {
        if (!lineThird.has(arr[i][j])) {
          break
        }
      }
      count++
      // console.log(count)
      if (count === words[i].length) {
        result.push(words[i])
        count = 0
      }
    }
  }
  return result
}

const words = ['hll', 'da', 'dDDDsah', 'a', 'zcvurh', 'BB', 'B', 'b']
console.log(findWords(words))
// 看一眼题解 , 好像我写的还行??嘿嘿