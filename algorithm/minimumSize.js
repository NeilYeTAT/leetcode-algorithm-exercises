
var minimumSize = function(nums, maxOperations) {
  let left = 1;
  let right = Math.max(...nums);
  let ans = 0;

  while (left <= right) {
    let y = Math.floor((left + right) / 2);
    let ops = 0;

    for (let x of nums) {
      ops += Math.floor((x - 1) / y);
    }

    if (ops <= maxOperations) {
      ans = y;
      right = y - 1;
    } else {
      left = y + 1;
    }
  }

  return ans;
};


let nums = [2, 4, 8, 2], maxOperations = 4
console.log(minimumSize(nums, maxOperations))
