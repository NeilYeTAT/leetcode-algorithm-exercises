// 找至多包含两种元素的最长子串，返回其长度
const totalFruit = function (fruits) {
  const hashMap = new Map()
  let left = 0, right = 0
  let result = 0
  while (right < fruits.length) {
    hashMap.set(fruits[right], (hashMap.get(fruits[right]) || 0) + 1)
    while (hashMap.size > 2) {
      hashMap.set(fruits[left], hashMap.get(fruits[left]) - 1)
      if (hashMap.get(fruits[left]) === 0) {
        hashMap.delete(fruits[left])
      }
      left++
    }
    result = Math.max(result, right - left + 1)
    right++
  }
  return result
}

const totalFruitFAKE = function (fruits) {
  const hashMap = new Map()
  let left = 0, right = 0
  let result = 0
  while (right < fruits.length) {
    hashMap.set(fruits[right], right)
    if (hashMap.size > 2) {
      let temp = [...hashMap.keys()]
      if (hashMap.get(temp[0]) > hashMap.get(temp[1])) {
        left = hashMap.get(temp[1]) + 1
        hashMap.delete(temp[1])
      } else {
        left = hashMap.get(temp[0]) + 1
        hashMap.delete(temp[0])
      }
    }
    result = Math.max(result, right - left + 1)
    right++
  }
  return result
}
console.log(totalFruitFAKE([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))
console.log(totalFruitFAKE([1, 2, 3, 2, 2]))
