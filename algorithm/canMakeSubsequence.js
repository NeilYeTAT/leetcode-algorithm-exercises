

const canMakeSubsequence = function(str1, str2) {
  let indexA = 0, indexB = 0
  let diff = 0

  while (indexA < str1.length && indexB < str2.length) {
    if (str1[indexA] === str2[indexB]) {
      indexA++
      indexB++
      diff++
    } else if ((str1[indexA].charCodeAt() + 1 === str2[indexB].charCodeAt()) || (str1[indexA] === 'z' && str2[indexB] === 'a')) {
      indexA++
      indexB++
      diff++
    } else {
      indexA++
    }
  }
  return diff === str2.length
}

// const str1 = "abc", str2 = "ad"
const str1 = "ab", str2 = "d"
console.log(canMakeSubsequence(str1, str2));