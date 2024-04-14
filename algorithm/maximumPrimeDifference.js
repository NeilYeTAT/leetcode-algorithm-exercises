
// var maximumPrimeDifference = function (nums) {
//   function isPrimer(number) {
//     let key = 0
//     for (let i = 1; i < parseInt(number / 2); i++) {
//       key = 0
//       if (number % i === 0) {
//         key = 1
//         break
//       }
//     }
//     if (key) {
//       return 0
//     } else {
//       return 1
//     }
//   }
//   let arr = []
//   for (let i = 0; i < nums.length; i++) {
//     if (isPrimer(nums[i])) {
//       arr.push(i)
//     }
//   }
//   console.log(arr)
//   if (arr.length === 0 || arr.length === 1) {
//     return 0
//   } else {
//     return arr[arr.length - 1] - arr[0]
//   }
// };
var maximumPrimeDifference = function (nums) {
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      arr.push(i);
    }
  }

  if (arr.length === 0 || arr.length === 1) {
    return 0;
  } else {
    return arr[arr.length - 1] - arr[0];
  }
};

// console.log(maximumPrimeDifference([4, 2, 9, 5, 3]))
console.log(maximumPrimeDifference([3, 17]))