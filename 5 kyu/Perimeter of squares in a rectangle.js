// Description:
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares(they are numbered from 0 to n) and returns the total perimeter of all the squares.

//   perimeter(5)  should return 80
// perimeter(7)  should return 216

// ✅ SOLUTION
function fibSum(num) {
  let sum = 0
  let cur = 1, prev = 0

  for (let i = 1; i <= num; i++) {
    sum += cur
    let temp = prev
    prev = cur
    cur = temp + cur
  }

  return sum
}

function perimeter(n) {
  return 4 * fibSum(n + 1)
}

console.log(perimeter(5))