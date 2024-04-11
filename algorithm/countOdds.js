// 给你两个非负整数 low 和 high 。请你返回 low 和 high 之间（包括二者）奇数的数目。

const countOdds = function (low, high) {
  if (low % 2 === 0) {
    return Math.ceil((high - low) / 2)
  } else {
    return Math.floor((high - low) / 2 + 1)
  }
}

console.log(countOdds(800445804,979430543))