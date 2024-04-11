const myAtoi = function (str) {
  let result = 0, sign = 1
  let i = 0
  while (str[i] === ' ' && i < str.length) {
    i++
  }
  if (str[i] === '-') {
    sign = -1
    i++
  } else if (str[i] === '+') {
    i++
  }
  for (; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      break
    }
    result += str[i]
  }
  if (result * sign >= 2 ** 31 - 1) {
    return 2 ** 31 - 1
  }
  if (result * sign <= -(2 ** 31)) {
    return -(2 ** 31)
  }
  return result * sign
}
const str = '  43word'
console.log(myAtoi(str))
