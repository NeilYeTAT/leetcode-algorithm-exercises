// 碰到空格就是跳过

// 空格数 + 1 = 单词数
// const s = "Hello, my name is John "
const s = " Hello, my name is John"
// const s =', , , , a, b'
// const s = ''
// const s = '        foo  hello'
// const s = '                           '
const countSegments = function (s) {
  s += ' '
  let count = 0
  let key = 0
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i].charCodeAt() === 32 && s[i + 1].charCodeAt() !== 32) {
      count++
      continue
    }
    if (s[i].charCodeAt() !== 32) {
      key = 1
    }
  }
  if (count === 0 && key === 0) {
    return 0
  }
  if (key = 1 && count === 0) {
    return 1
  }
  if (s[0].charCodeAt() === 32) {
    return count
  }
  return count + 1
}
// countSegments(s)
console.log(countSegments(s))
// ---------------飞舞, 看看人家大佬简洁的代码--------------------
/**
class Solution {
public:
    int countSegments(string s) {
        int t=0,flag=1;
        for(int i=0;i<s.size();i++){
            if(s[i]!=' '&&flag){//上锁
                flag=0;
                t++;
            }
            if(s[i]==' '){//解锁
                flag=1;
            }
        }
        return t;
    }
};
 */