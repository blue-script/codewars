// ❓ DESCRIPTION
// Given an integer n, find two integers a and b such that:

// A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.  
// You will return the digitSum(a) + digitsum(b).

// For example:
// solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
// n will not exceed 10e10.

// More examples in test cases.

// ✅ SOLUTION

function digitSum(num) {
  return num.toString().split('').reduce((acc,cur)=>acc + +cur, 0)
}

function solve(n){
  let a = +('9'.repeat(n.toString().length-1))
  let b = n - a

  return digitSum(a) + digitSum(b)
}

console.log(solve(18))   //,18);
console.log(solve(29))   //,11);
console.log(solve(45))   //,18);
console.log(solve(1140))   //,33);
console.log(solve(7019))   //,35);