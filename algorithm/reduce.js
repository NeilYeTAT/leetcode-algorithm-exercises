const reduce = function (nums, fn, init) {
  let sum = init
  for (let item of nums) {
    sum = fn(sum, item)
  }
  return sum
}