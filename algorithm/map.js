
const map = function (arr, fn) {
  // const result = []
  // arr.forEach((element, i) => {
  //   result.push(fn(element))
  // });
  // return result
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i))
  }
  return result
}
