/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function(records) {
  return records.filter((i, v) => i != v)[0] - 1 || 1
};

// const records = [0, 1, 2, 3, 5]
const records = [0]
console.log(takeAttendance(records));