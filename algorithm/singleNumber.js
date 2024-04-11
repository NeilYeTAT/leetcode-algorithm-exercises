// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

const singleNumber = function (nums) {

  const hashMap = new Map()
  console.log(hashMap)
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      hashMap.delete(nums[i])
      continue
    }
    hashMap.set(nums[i])
  }
  console.log(hashMap.entries)
  for (let [key, val] of hashMap.entries()) {
    return key
  }
}

const nums = [2, 2, 1, 1, 5]
console.log(singleNumber(nums))