// Description:
// Write a function called sumIntervals / sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths.Overlapping intervals should only be counted once.
//   Intervals
// Intervals are represented by a pair of integers in the form of an array.The first value of the interval will always be less than the second value.Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
// Overlapping Intervals
// List containing overlapping intervals:
// [
//   [1, 4],
//   [7, 10],
//   [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since[1, 4] and[3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
// Examples:
// sumIntervals([
//   [1, 2],
//   [6, 10],
//   [11, 15]
// ]) => 9
// sumIntervals([
//   [1, 4],
//   [7, 10],
//   [3, 5]
// ]) => 7
// sumIntervals([
//   [1, 5],
//   [10, 20],
//   [1, 6],
//   [16, 19],
//   [5, 11]
// ]) => 19
// sumIntervals([
//   [0, 20],
//   [-100000000, 10],
//   [30, 40]
// ]) => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals.All tested intervals are subsets of the range[-1000000000, 1000000000].

// ✅ SOLUTION
function hasSubarray(arr) {
  return arr.some(el => Array.isArray(el))
}

function sumIntervals(intervals) {
  if (!hasSubarray(intervals)) {
    return intervals[1] - intervals[0]
  }

  intervals.sort((a, b) => a[0] - b[0])
  const merged = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    let lastMerged = merged[merged.length - 1]

    if (cur[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(cur[1], lastMerged[1])
    } else {
      merged.push(cur)
    }
  }

  return merged.reduce((acc, cur) => acc + cur[1] - cur[0], 0)
}


let intervals = [1, 5]
console.log(sumIntervals(intervals)) // 4

intervals = [[1, 5], [6, 10]]
console.log(sumIntervals(intervals)) // 8

intervals = [[1, 4], [7, 10], [3, 5]]
console.log(sumIntervals(intervals)) // 7

intervals = [[0, 20], [-100000000, 10], [30, 40]]
console.log(sumIntervals(intervals)) // 100000030

intervals = [[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]
console.log(sumIntervals(intervals)) // 19

intervals = [[-17, -13], [3, 15], [-18, 1]]
console.log(sumIntervals(intervals)) // 31
