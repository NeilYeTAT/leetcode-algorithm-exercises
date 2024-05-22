// const numOfSubarrays = function (arr) {
//   const preSum = Array(arr.length + 1)
//   preSum[0] = 0
//   let ans = 0
//   for (let i = 0; i < arr.length; i++) {
//     preSum[i + 1] = preSum[i] + arr[i]
//   }
//   for (let i = 0; i < preSum.length - 1; i++) {
//     for (let j = i + 1; j < preSum.length; j++) {
//       if ((preSum[j] - preSum[i]) % 2 !== 0) {
//         ans += 1
//       }
//     }
//   }
//   return ans % (10 ** 9 + 7)
// }
const numOfSubarrays = function (arr) {
  const MOD = 10 ** 9 + 7;
  
  let evenCount = 1;  // 初始前缀和为0，是偶数
  let oddCount = 0;
  let prefixSum = 0;
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    if (prefixSum % 2 === 0) {
      result += oddCount;
      evenCount++;
    } else {
      result += evenCount;
      oddCount++;
    }
    
    result %= MOD;
  }
  
  return result;
};

const arr = [1, 3, 5]
// const arr = [2, 4, 6]
console.log(numOfSubarrays(arr))
