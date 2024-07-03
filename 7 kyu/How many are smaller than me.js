// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
// For example:
// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// ✅ SOLUTION

function smaller(nums) {
  let arr = Array(nums.length).fill(0)
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        arr[i] += 1
      }
    }
  }
  return arr
}

smaller([5, 4, 3, 2, 1])