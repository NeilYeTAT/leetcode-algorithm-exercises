const isPowerOfTwo = function (n) {
  // if (n <= 0) return false
  // let rightOne = n & (-n)
  // if (rightOne === n) {
  //     return true
  // } else {
  //     return false
  // }
  return n >= 0 && n === (n & -n)
}

const n = 11111111111000
console.log(n.toString().split('').reverse().join(''));
