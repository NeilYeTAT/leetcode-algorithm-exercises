// const bubble_sort = arr => {
//     if (Array.isArray(arr)) {
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length - i - 1; j++) {
//                 let maxNum = arr[j]
//                 if (arr[j] < arr[j + 1]) {
//                     let temp = arr[j]
//                     arr[j] = arr[j + 1]
//                     arr[j + 1] = temp
//                 }
//             }
//         }
//         // for (let index = 0; index < arr.length; index++) {
//         //     console.log(arr[index])
//         // }
//         console.log(arr)
//     } else {
//         console.log('fuck')
//     }
// }
const bubbleSort = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}
let array = [5, 1, 0, 9, 3, 11, -3, 1100]

console.log(bubbleSort(array))