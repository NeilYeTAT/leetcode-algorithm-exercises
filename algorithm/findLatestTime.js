// 12 小时制度
var findLatestTime = function (s) {
  if (s.includes('?')) {
    let result = [...s]
    if (result[4] === '?' && result[3] === '?') {
      result[3] = '5'
      result[4] = '9'
    } else if (result[4] === '?') {
      result[4] = '9'
    } else if (result[3] === '?') {
      result[3] = '5'
    }
    let key = 0
    if (result[3] - 0 >= 0 || result[4] - 0 >= 0) {
      key = 1
    }
    // -----------
    if (result[0] === '?' && result[1] === '?') {
      if (key) {
        result[0] = '1'
        result[1] = '1'
      } else {
        result[0] = '1'
        result[1] = '2'
      }
    } else if (result[0] === '?') {
      if (result[1] - 0 > 2) {
        result[0] = '0'
      } else if (result[1] === '2' && key) {
        result[0] = '0'
      } else {
        result[0] = '1'
      }
    } else if (result[1] === '?') {
      if (result[0] - 0 === 0) {
        result[1] = '9'
      } else if (result[0] - 0 > 0) {
        if (key) {
          result[1] = '1'
        } else {
          result[1] = '2'
        }
      }
    }
    return result.join('')
  } else {
    return s
  }
};
//                                    00:00 --- 11:59
console.log(findLatestTime('??:00'))
console.log(findLatestTime('1?:?0'))
console.log(findLatestTime('00:5?'))
console.log(findLatestTime('01:??'))
console.log(findLatestTime('00:?0'))
console.log(findLatestTime('1?:?4'))