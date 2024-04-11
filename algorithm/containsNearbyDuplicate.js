// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

// 说实话, 第一次看到的时候没思路, 现在直接秒了, 我们js实在是太吊了
// 麻了隔壁的, 题目理解错了, 重新开始写
// console.log(nums.indexOf(3))

// const containsNearbyDuplicate = function (nums, k) {
//   console.log(nums.indexOf(k))
//   console.log(nums.lastIndexOf(k))
//   if (nums.indexOf(k) === nums.lastIndexOf(k) || nums.indexOf(k) === -1) {
//     console.log('fuck')
//     return false
//     // return Math.abs(nums.indexOf(k) - nums.lastIndexOf(k)) <= k ? true : false
//   }
//   // 妈的, 不能直接反回, 草, 循环一遍还得
//   if (nums.indexOf(k) !== nums.lastIndexOf(k) && Math.abs(nums.indexOf(k) - nums.lastIndexOf(k)) <= k) {
//     return true
//   }
//   if (nums.indexOf(k) !== nums.lastIndexOf(k)) {
//     let start = nums.indexOf(k)
//     for (start; start < nums.lastIndexOf(k);) {
//       if (Math.abs(start - nums.lastIndexOf(k)) <= k) {
//         return true
//       } else {
//         start = nums.indexOf(k, start)
//       }
//     }
//     return false
//   }
//   return false
// }
// const nums = [1, 3, 4, 1, 1, 2, 3]
// // containsNearbyDuplicate(nums, 1)
// console.log(containsNearbyDuplicate(nums))
// -------------------------------------------------------写错了...虽然她送了我玫瑰花,但昨晚我真的没睡她

// const containsNearbyDuplicate = function (nums, k) {
//   let arr = [...new Set(nums)]
//   if (nums.length === arr.length) {
//     return false
//   }
//   // 害得是for循环, 唉
//   for (let i = 0; i < nums.length; i++) {
//     // 先找到重复元素再说
//     if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
//       continue
//     }
//     // 碰到的就是不重复的元素, 还要一遍for循环
//     // 突然想到, 重复元素要是待在中间直接完蛋
//     let start = nums.indexOf(nums[i], i)
//     console.log(start)
//     // 还不能使用for循环, 原来是参数弄错了, 🤡消愁
//     while (start < nums.lastIndexOf(nums[i])) {
//       let next = nums.indexOf(nums[i], start + 1)
//       if (next === -1) {
//         return false
//         // next = nums.lastIndexOf(nums[i])
//       }
//       if (Math.abs(start - next) <= k) {
//         return true
//       }
//       start = next
//     }
//   }
//   return false
// }
// const nums = [1, 2, 9, 5, 6, 5, 3, 4]
// const nums = [1, 2, 3, 1, 2, 3]
// 思想还是错了, 不应该使用lastIndexOf这个函数的, 因为会掠过中间值, 所以应该使用indexOf然后配合索引向后搜索

// console.log(containsNearbyDuplicate(nums, 2))
// 虽然你一次提交就通过了, 但是我还是想说, 你这个实在是不太优雅, 而且疯狂调用库函数, 不够巧妙, 而且逻辑混乱

// 滑动窗口的思想, 使用集和set保存

// const nums = [1, 2, 9, 5, 6, 5, 3, 4]
const nums = [1, 2, 3, 4, 1, 2, 3, 4]
const containsNearbyDuplicate = function (nums, k) {
  let hashMap = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.size <= k) {
      if (hashMap.has(nums[i])) {
        return true
      }
      hashMap.add(nums[i])
    }
    if (hashMap.size > k) {
      hashMap.delete(nums[i - k])
    }
  }
  return false
}

containsNearbyDuplicate(nums, 3)
console.log(containsNearbyDuplicate(nums, 2))