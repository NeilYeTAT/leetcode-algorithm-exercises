
const compareVersion = function (version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  let maxLen = arr1.length >= arr2.length ? arr1.length : arr2.length
  for (let i = 0; i < maxLen; i++) {
    const v1 = parseInt(arr1[i]) || 0;
    const v2 = parseInt(arr2[i]) || 0;

    if (v1 > v2) {
      return 1
    } else if (v1 < v2) {
      return -1
    }
  }
  return 0
}

const version1 = "1.01", version2 = "1.001"
console.log(compareVersion(version1, version2))