// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
// 输入:a = "11", b = "1"
// 输出："100"

// 输入：a = "1010", b = "1011"
// 输出："10101"

const addBinary = function (a, b) {
  let numA = a.split('')
  let numB = b.split('')
  let [maxLen, minLen] = numA.length >= numB.length ? [numA, numB] : [numB, numA]
  let result = ''
  let key = 1
  for (let i = maxLen.length - 1; i > 0; i--) {
    if (key) {
      for (let j = minLen.length - 1; j > 0; j--) {
        if (minLen[j] + maxLen[i] === '11') {
          result = result + '0'
        } else if (minLen[j] + maxLen[i] === '10' || minLen[j] + maxLen[i] === '01') {

        } else if (minLen[j] + maxLen[i] === '00') {

        }
        break
      }
    }
  }
}

let a = '11'
let b = '10'
addBinary(a, b)