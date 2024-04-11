// 逆天的思想, 说真的, 这代码第一次没看明白
// 思想是真的牛逼
// 就是相同的数字下标指向的数组同一片区域

// 原来这就是哈希法🥹
const hasDuplicateValue = function(nums) {
  let map = []
  for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]] === 1) {
      return true
    } else {
      map[nums[i]] = 1
    }
  }
  return false
}

const nums = [1, 1, 3, 4, 5, 6]
console.log(hasDuplicateValue(nums))
// 当然, 凡事都有代价, 内存是金子做的就不建议使用, 没内存力😅