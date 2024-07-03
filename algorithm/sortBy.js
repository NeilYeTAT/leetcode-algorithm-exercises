/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  const res = []
  const map = new Map()
  for (let item of arr) {
    map.set(fn(item), item)
  }
  const ly = [...map.keys()].sort((a, b) => a - b)
  for (let item of ly) {
    res.push(map.get(item))
  }
  return res
};