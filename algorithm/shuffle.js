
const shuffle = function(nums, n) {
  const ans = Array(2n).fill(0)
  for (let i = 0, j = n, k = 0; j < 2 * n; i++, j++) {
    ans[k] = nums[i]
    ans[++k] = nums[j]
    k++
  }
  return ans
}

const nums = [2,5,1,3,4,7], n = 3
console.log(shuffle(nums, n));