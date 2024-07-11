/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
  const arr = s.split('')
  const part = s.split('')
  for (let i = 0; i < s.length; i++) {
    arr[i] = part[(i + k) % s.length]
  }
  return arr.join('')
};

const s = 'dart', k = 3

console.log(getEncryptedString(s, k))