/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hashMap = new Map()
  for (let item of arr) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }
  return hashMap.size === new Set([...hashMap.values()]).size
}

const arr = [1, 2, 2, 1, 1, 3]
console.log(uniqueOccurrences(arr));