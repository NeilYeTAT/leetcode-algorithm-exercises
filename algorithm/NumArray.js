const NumArray = function (nums) {
  this.preSum = Array(nums.length + 1)
  this.preSum[0] = 0
  for (let i = 0; i < nums.length; i++) {
    this.preSum[i + 1] = this.preSum[i] + nums[i]
  }
}

NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right + 1] - this.preSum[left]
}
