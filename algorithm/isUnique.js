
const isUnique = function (astr) {
  return astr.length === new Set(astr).size
}