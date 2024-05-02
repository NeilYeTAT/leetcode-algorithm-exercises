// let eor1 = nums.reduce((acc, cur) => acc ^ cur, 0)
const singleNumber = function (nums) {
  let eor1 = 0
  for (let item of nums) {
    eor1 ^= item
  }
  let rightOne = eor1 & -eor1
  let eor2 = 0
  for (let item of nums) {
    if ((item & rightOne) === 0) {
      eor2 ^= item
    }
  }
  return [eor2, eor2 ^ eor1]
}
