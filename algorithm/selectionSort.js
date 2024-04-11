// selection sort

// const selectionSort = (arr) => {
//     if (Array.isArray(arr)) {
//         // first loop 
//         for (let i = 0; i < arr.length - 1; i++) {
//             let minIndex = i
//             for (let j = i + 1; j < arr.length; j++) {
//                 if (arr[minIndex] > arr[j]) {
//                     minIndex = j
//                 }
//             }
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//         console.log(arr)
//     } else {
//         console.log('not array')
//     }
// }

const selectionSort = function (nums) {
    for (let slow = 0; slow < nums.length - 1; slow++) {
        let minIndex = slow
        for (let fast = slow + 1; fast < nums.length; fast++) {
            minIndex = (nums[fast] < nums[minIndex]) ? fast : minIndex
            // if (nums[fast] < nums[minIndex]) {
            //     minIndex = fast
            // }
        }
        [nums[slow], nums[minIndex]] = [nums[minIndex], nums[slow]]
    }
    return nums
}
console.log(selectionSort([4, 2, 1, 5, 7, 991, 34]))