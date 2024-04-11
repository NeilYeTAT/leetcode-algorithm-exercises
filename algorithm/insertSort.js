// const insertSort = arr => {
//     if (Array.isArray(arr)) {
//         for (let i = 1; i < arr.length; i++) {
//             let currentIndex = i
//             let tempValue = arr[i]
//             // right value than left value
//             while (arr[currentIndex] < arr[currentIndex - 1] && currentIndex !== 0) {
//                 arr[currentIndex] = arr[currentIndex - 1]
//                 arr[currentIndex - 1] = tempValue
//                 tempValue = arr[currentIndex - 1]
//                 currentIndex--
//                 continue
//             }
//         }

//         console.log(arr)
//     } else {
//         console.log('not array, quit!')
//     }
// }

//  TAT


// const insertSort = arr => {
//     if (Array.isArray(arr)) {
//         // first loop, i means start Index
//         for (let i = 1; i < arr.length; i++) {
//             // second loop, j means start index, j is first start index
//             let tempIndex = i
//             while(arr[i] > arr[i-1] || tempIndex !== 0){
//                 let tempValue = arr[i]
//                 if(arr[i] > arr[i-1]){
//                     arr[i] = arr[i-1]
//                     arr[i-1] = tempValue
//                     tempValue = arr[i-1]
//                     tempIndex = i-1
//                     continue
//                 }
//             }
//             // for (let j = i + 1; j < arr.length; j++) {
//             //     // save arr[j], current value
//             //     let tempValue = arr[j]
//             //     // save j, current index
//             //     let tempIndex = j
//             //     // judge! 
//             //     if (arr[j] < arr[j - 1] || j === 0) {

//             //     }
//             // }
//         }
//     } else {
//         console.log('not array')
//     }
// }
// console.log('---')
// // insertSort([4,2,1,3,5])
// /**
//  * example
//  * 4, 2, 1, 3, 5
//  * 首先拿到arr[i], 即arr[1]的值2, 然后
//  */
const arr = [5, 3, 8, 6, 4]
const insertSort = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            } else {
                break
            }
        }
    }
    return nums
}
console.log(insertSort(arr))