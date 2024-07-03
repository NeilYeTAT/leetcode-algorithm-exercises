/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    !(classFunction instanceof Function)
  ) {
    return false
  } else {
    return Object(obj) instanceof classFunction
  }
}
console.log(checkIfInstanceOf(new Date(), Date))
console.log(checkIfInstanceOf(5, Number))
