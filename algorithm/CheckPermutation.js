
const CheckPermutation = function (s1, s2) {
  const hashMap = new Map()
  if (s1.length !== s2.length) {
    return false
  }
  for (let item of s1) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }
  for (let item of s2) {
    if (hashMap.get(item) === undefined) {
      return false
    } else {
      hashMap.get(item) === 1 ? (hashMap.delete(item)) : (hashMap.set(item, hashMap.get(item) - 1))
    }
  }
  return hashMap.size === 0
}