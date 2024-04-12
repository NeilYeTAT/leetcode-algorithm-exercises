// var once = function (fn) {

//   return function (...args) {

//     return fn
//   }
// };

var once = function (fn) {
  let key = 1
  return function (...args) {
    if (key) {
      key = 0
      return fn(calls)
    } else {
      return undefined
    }
  }
};
const fn = (a, b, c) => (a + b + c), calls = [[1, 2, 3], [2, 3, 6]]