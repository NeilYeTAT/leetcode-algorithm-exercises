
// const shipWithinDays = function (weights, days) {
//   let left = 1, right = weights.reduce((acc, cur) => acc + cur, 0)
//   let result = right
//   while (left <= right) {
//     let mid = Math.floor((right - left) / 2 + left)
//     if (isOk(mid)) {
//       result = mid
//       right = mid - 1
//     } else {
//       left = mid + 1
//     }
//   }
//   return result

//   function isOk(mid) {
//     let count = 0
//     let sum = 0
//     for (let item of weights) {
//       if (item > mid) {
//         return false
//       }
//       sum += item
//       if (sum > mid) {
//         count++
//         sum = item
//       }
//       if (sum === mid) {
//         count++
//         sum = 0
//       }
//     }

//     if (sum > 0) {
//       count++
//     }
//     if (count <= days) {
//       return true
//     } else {
//       return false
//     }
//   }
// }
// const weights = [1, 2, 3, 1, 1], days = 4
const shipWithinDays = function (weights, days) {
  let left = Math.max(...weights), right = weights.reduce((acc, cur) => acc + cur, 0)
  let result = right
  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left)
    if (isOk(mid)) {
      result = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return result

  function isOk(mid) {
    let count = 0
    let sum = 0
    for (let item of weights) {
      sum += item
      if (sum > mid) {
        count++
        sum = item
      }
      if (sum === mid) {
        count++
        sum = 0
      }
    }

    if (sum > 0) {
      count++
    }
    if (count <= days) {
      return true
    } else {
      return false
    }
  }
}
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 10
console.log(shipWithinDays(weights, days))