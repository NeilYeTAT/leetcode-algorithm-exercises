
const reverse = function (x) {
  let arr = [...x.toString()]
  let key = 0
  arr.reverse()
  if (x < 0) {
    arr.pop()
    key = 1
  }
  let result = arr.join('') - 0
  arr.pop()
  if (result >= Math.pow(2, 31)) {
    return 0
  }
  if (key) {
    return -result
  } else {
    return result
  }
}
console.log(reverse(-129911));