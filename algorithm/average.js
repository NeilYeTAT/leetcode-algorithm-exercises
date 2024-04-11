// 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。

// 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。


const average = function (salary) {
  salary.sort((a, b) => a - b)
  let sum = 0
  for (let i = 1; i < salary.length - 2; i++) {
    sum += salary[i]
  }
  return sum / (salary.length - 2)
}