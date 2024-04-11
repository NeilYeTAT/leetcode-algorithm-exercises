// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
let nums = [1, 4, 5, 9, 11, 22, 44]
// find -> 22
var searchInsert = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let middle = Math.ceil((left + right) / 2)

    while (left <= right) {
        if (target > nums[middle]) {
            left = middle + 1
            middle = Math.ceil((left + right) / 2)
        } else if (target < nums[middle]) {
            right = middle - 1
            middle = Math.ceil((left + right) / 2)
        } else{
            return middle
        }
    }
    return left
}
console.log(searchInsert(nums, 10))