// DESCRIPTION:
// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.
// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.
// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.
// If there are less or more than two occurrences of the number to search for, return 0.

// ✅ SOLUTION
var lengthOfSequence = function (arr, n) {
  if (arr.length <= 1) return 0
  let first = arr.indexOf(n)
  let last = arr.lastIndexOf(n)

  return arr.slice(first + 1, last).includes(n) ? 0 : last - first + 1
};

console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)) // 5s