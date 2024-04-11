// /** 逆天题目, 玩LOL玩的😅😅
//  * 当提莫攻击艾希，艾希的中毒状态正好持续 duration 秒。
// 正式地讲，提莫在 t 发起攻击意味着艾希在时间区间 [t, t + duration - 1]（含 t 和 t + duration - 1）处于中毒状态。如果提莫在中毒影响结束 前 再次攻击，中毒状态计时器将会 重置 ，在新的攻击之后，中毒影响将会在 duration 秒后结束。
// 给你一个 非递减 的整数数组 timeSeries ，其中 timeSeries[i] 表示提莫在 timeSeries[i] 秒时对艾希发起攻击，以及一个表示中毒持续时间的整数 duration 。
// 返回艾希处于中毒状态的 总 秒数。
//  */

// // return 返回中毒状态的总秒数
// // const timeSeriesTest = [1, 4]
// // // const timeSeriesTest = [1, 2]
// // const duration = 2
// // const findPoisonedDuration = function (timeSeries, duration) {
// //   // 第一次中毒时间无所谓, 根本不用关注
// //   // 攻击次数就是数组的长度
// //   let allSecond = 0
// //   for(let i = 1; i < timeSeries.length; i++) {
// //     if(duration <= timeSeries[i] - timeSeries[0]) {
// //       allSecond+=duration
// //     } else {
// //       // 持续事件卡在了中间

// //     }
// //   }

// //   // }
// //   // let arr = new Array(timeSeries[timeSeries.length - 1] + duration)
// //   // for(let i = 0; i < arr.length; i++) {
// //   // }
// //   // if(timeSeries[0] + duration >= timeSeries[1]){
// //   // } else {
// //   //   return allSecond = duration * 2
// //   // }

// // }
// // console.log(findPoisonedDuration(timeSeriesTest, duration))

// // time = [1, 2] duration = 2
// const findPoisonedDuration = function (timeSeries, duration) {
//   let sumSecond = 0
//   for (let i = 0; i < timeSeries.length; i++) {
//     if(timeSeries[i] + duration < timeSeries[i + 1] || i + 1 === timeSeries.length ) {
//       sumSecond += duration
//     } else {
//       // 重合部分
//       sumSecond = sumSecond + (timeSeries[i + 1] - timeSeries[i])
//       // if()
//     }
//     return sumSecond
//   }
// //   let sumSecond = 0
// //   for (let i = 0; i < timeSeries.length; i++) {
// //     if (timeSeries[i] + duration > timeSeries[i + 1] && timeSeries[i + 1]) {
// //       // 重合
// //       sumSecond = duration - (timeSeries[i + 1] - timeSeries[i]) + sumSecond
// //     } else {
// //       sumSecond = duration + sumSecond
// //     }
// //   }
// //   return sumSecond
// }
// // 1, 2, 3, 
// // console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))
// console.log(findPoisonedDuration([1, 2, 3, 4, 5], 5))

const findPoisonedDuration = function(timeSeries, duration) {
  let right = timeSeries[1]
  let sumSecond = 0
  for(let i = 0; i < timeSeries.length - 1; i++) {
    if(timeSeries[i] + duration < right) {
      sumSecond += duration
      right = timeSeries[i + 2]
      continue
    }
    // 大于右边界
    sumSecond = sumSecond + timeSeries[i + 1] - timeSeries[i]
    right = timeSeries[i + 2]
  }
  return sumSecond + duration
}
console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))