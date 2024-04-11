// 
const findRepeateDocument = function (documents) {
  const hashMap = new Set()
  for (let item of documents) {
    if (hashMap.has(item)) {
      return item
    }
    hashMap.add(item)
  }
}