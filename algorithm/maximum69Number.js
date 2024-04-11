// 给你一个仅由数字 6 和 9 组成的正整数 num。
// 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。
// 请返回你可以得到的最大数字。
// 找到第一位是6的数, 然后改成9, 如果没有6就修改最后一位的9

const num = 696
console.log([...num + ''].join('') - 0)
const maximum69Number = function (num) {
  const arr = [...num + '']
  if (arr.indexOf('6') !== -1) {
    arr[arr.indexOf('6')] = '9'
  } else {
    return arr.join('') - 0
  }
  return arr.join('') - 0
}

console.log(maximum69Number(num))