// 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。

// 哈希表, 哈希表存索引值, 索引值相加排序


const findRestaurant = function (list1, list2) {
  const [minList, longList] = list1.length <= list2.length ? [list1, list2] : [list2, list1]
  const hashMap = {}
  const ans = {}
  for (let i = 0; i < minList.length; i++) {
    hashMap[minList[i]] = i
  }
  for (let j = 0; j < longList.length; j++) {
    if (longList[j] in hashMap) {
      ans[longList[j]] = j + hashMap[longList[j]]
      continue
    }
  }
  if (Object.keys(ans).length === 0) {
    return []
  }
  let minVal = minList.length + longList.length
  let minKey = null
  let result = []
  for (let k in ans) {
    if (ans[k] < minVal) {
      result.shift()
      minVal = ans[k]
      minKey = k
      result.push(minKey)
      continue
    } else if (ans[k] === minVal) {
      result.push(k)
    }
  }
  return result
}
const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
const list2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"]
console.log(findRestaurant(list1, list2))