

const singleNumber = function(nums) {
  const hashMap = new Map()
  for (let item of nums) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }
  for (let [k, v] of hashMap.entries()) {
    if (v === 1) {
      return k
    }
  }
}