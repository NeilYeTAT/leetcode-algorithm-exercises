// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

const addDigits = function (num) {
  let strFake = [...num.toString()]
  let str = strFake.map(Number)
  if (str.length === 1) {
    return num
  }
  while (str.length !== 1) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum = str.reduce((acc, cur) => acc + cur, 0)
    }
    str = [...sum.toString()].map(Number)
    continue
  }
  return str[0]
}

const num = 142
console.log(addDigits(num))