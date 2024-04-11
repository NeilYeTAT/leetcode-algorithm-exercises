
const filter = function (arr, fn) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i])
    }
  }
  return result
}

const arr = [111, 2, 3]
function test(n, i) {
  return n > 10
}
console.log(filter(arr, test))