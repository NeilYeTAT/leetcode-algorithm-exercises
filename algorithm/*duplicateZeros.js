// 给你一个长度固定的整数数组 arr ，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

// 注意：请不要在超过该数组长度的位置写入元素。请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。 

const duplicateZero = function (arr) {
  let len = arr.length
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + 1] = 0
    }
  }
  arr.length = len
  console.log(arr)
}

const arr = [1, 0, 2, 3, 0, 4, 5, 0]
// const arr = [1, 2, 2, 3, 4]
duplicateZero(arr)