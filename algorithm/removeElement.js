let nums = [3, 5, 67, 1, 4]
var removeElement = function (nums, val) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++){
        if(nums[fast] !== val) {
            nums[slow] = nums[fast] 
            slow++
        }
    }
    return slow
}
removeElement(nums, 67)