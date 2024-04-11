// binary search 
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

/**
 * 二分搜索法, 先找中间位置, 然后往右遍历, 如此往复
 * 第一个问题, 中间位置, 如何取值?
 *  5个数, 中间位置是(5+1)/2 = 3,下标为2
 *  4个数呢?中间位置是2,下标为1
 *  
 * 
 */

// 锁死向下取整
// 基本写完了, 主要是有一些小细节还没有处理好, 23-12-26, 忙死了 fuck
// 2, 3, 5, 6, 7,
// const binarySearch = (value, arr) => {
//     let middle = null
//     if (arr.length % 2 === 0) {
//         middle = arr.length / 2 - 1
//     } else {
//         middle = arr.length / 2 + 1
//     }
//     while (1) {
//         if (arr.length % 2 === 0) {
//             middle = arr.length / 2 - 1
//         } else {
//             middle = arr.length / 2 + 1
//         }
//         // find target
//         if (arr[middle] === value) {
//             return middle
//         } else if (arr[middle] > value) {
//             // left middle
//             middle = middle / 2
//             continue
//         } else if (arr[middle] < value) {
//             // right middle
//             middle = middle * 2
//             continue
//         } else {
//             console.log('none, exit...')
//             break
//         }
//     }
// }
// const arrT = [1, 19, 20, 22, 34, 100]
// let result = binarySearch(20, arrT)
// console.log(result)

// const binarySearch = (arr, target) => {
//     // 钉死中间位置为右边
//     let middleIndex = arr.length % 2 === 0 ? arr.length / 2 : (arr.length + 1) / 2

//     for (; middleIndex < arr.length + 1; middleIndex++) {
//         if (arr[middleIndex] === target) {
//             console.log(middleIndex)
//             return middleIndex
//         } else if (middleIndex === arr.length + 1) {

//         }
//     }
// }

// 1, 3, 5, 6, 7, 8
// const binarySearch = (target, arr) => {
//     let middle = null
//     if (arr.length % 2 === 0) {
//         // 偶数个数, 取左边
//         middle = arr.length / 2 - 1
//     } else {
//         // 奇数个数
//         middle = (arr.length - 1) / 2
//     }

//     while (middle >= 0) {
//         if (middle % 2 === 0) {
//             // 偶数个数, 取左边
//             middle = arr.length / 2 - 1
//         } else {
//             // 奇数个数
//             middle = (arr.length - 1) / 2
//         }


//         if (arr[middle] === target) {
//             console.log('index is ' + middle)
//             return middle
//         } else if (arr[middle] > target) {
//             // go to left 
//             middle = middle / 2 
//         } else if (arr[middle] < target) {
//             // go to right 
//             middle = middle * 2
//         } else {
//             console.log('none, exit')
//             break
//         }
//     }
// }

// let arrT = [1, 3, 5, 67, 99]
// binarySearch(5, arrT)

// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

let arr = [2, 4, 7, 11, 99, 344, 555, 666]
const binarySearch = (nums, target) => {
    let head = 0
    let tail = arr.length - 1
    let middleIndex = Math.ceil((head + tail) / 2)
    while (head <= tail) {
        // 进入循环, 比较目标
        // let middleIndex = Math.ceil((head + tail + 1) / 2)
        if (target > arr[middleIndex]) {
            head = middleIndex + 1
            middleIndex = Math.ceil((head + tail) / 2)
        } else if (target < arr[middleIndex]) {
            tail = middleIndex - 1
            middleIndex = Math.ceil((head + tail) / 2)
        // } else if (tail === head) {
            // return tail
        } else {
            return middleIndex
        }
    }
    return -1
}
let result = binarySearch(arr, 556)
console.log(result)