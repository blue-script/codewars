// ❓ Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// ✅ SOLUTION

// function getSum(a, b) {
//   if (a === b) return a
//   else {
//     let sum = 0
//     if (a > b) [a, b] = [b, a]
//     while (a <= b) {
//       sum += a
//       a++
//     }
//     return sum
//   }
// }

function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

console.log(GetSum(-4, 3));