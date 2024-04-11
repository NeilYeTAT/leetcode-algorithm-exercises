// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 
// 可能无线循环, 无法直接循环判断
// 哈希表...

const n = 13
const isHappy = function (n) {
  const hashMap = new Set()
  let num = n + ''
  // console.log(num)
  // let flag = 1
  let sum = 0
  // let count = 0
  while (1) {
    sum = 0
    for (let i = 0; i < num.length; i++) {
      sum = sum + num[i] ** 2
    }
    if (hashMap.has(sum)) {
      return false
    }
    if (sum == 1) {
      return true
    }
    hashMap.add(sum)
    num = sum + ''
    // if (count === 3) {
    //   flag = 0
    // }
    // count++
  }
}
console.log(isHappy(n))