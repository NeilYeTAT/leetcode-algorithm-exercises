// 将A数组保存到哈希表中, 遍历第二个数组
// 如果数组存在, 就写入数据, 并且删除表中元素, 继续遍历
// 哈希表最后剩下的元素全部排列到第二个数组中

const relativeSortArray = function (arr1, arr2) {
  let hashMap = new Map()
  let result = []

  for (let item of arr1) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }

  for (let item of arr2) {
    let count = hashMap.get(item)
    for (let i = 0; i < count; i++) {
      result.push(item)
    }
    hashMap.delete(item)
  }

  let temp = []
  for (let key of hashMap.keys()) {
    let count = hashMap.get(key)
    for (let i = 0; i < count; i++) {
      temp.push(key)
    }
  }

  temp.sort((a, b) => a - b)
  result.push(...temp)
  return result
}

const arr1 = [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31]
const arr2 = [2, 42, 38, 0, 43, 21]
console.log(relativeSortArray(arr1, arr2))
console.log([2, 42, 38, 0, 43, 21, 5, 7, 12, 12, 13, 23, 24, 24, 27, 29, 30, 31, 33, 48].length)

var relativeSortArrayFake = function(arr1, arr2) {
  let hashMap = new Map()
  for (let i = 0; i < arr1.length; i++) {
    if (hashMap.has(arr1[i])) {
      hashMap.set(arr1[i], hashMap.get(arr1[i]) + 1)
    } else {
      hashMap.set(arr1[i], 1)
    }
  }
  let result = []
  let i = 0
  for (let item of arr2) {
    if (hashMap.has(item)) {
      if (hashMap.get(item) > 1) {
        let count = hashMap.get(item)
        while (count) {
          result[i] = item
          i++
          count--
        }
        hashMap.delete(item)
      } else {
        result[i] = item
        i++
        hashMap.delete(item)
      }
    }
  }
  let temp = []
  for (let [key, value] of hashMap.entries()) {
    if (hashMap.get(key) > 1) {
      let count = hashMap.get(key)
      while (count) {
        temp.push(key)
        count--
      }
    } else {
      temp.push(key)
    }
  }
  temp.sort((a, b) => a - b)
  result.splice(i, 0, ...temp)
  return result
};