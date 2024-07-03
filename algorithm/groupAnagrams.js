/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let item of strs) {
    let s = [...item].sort().join('')
    if (map.has(s)) {
      map.get(s).push(item)
    } else {
      map.set(s, [item])
    }
  }
  return [...map.values()]
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
