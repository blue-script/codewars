// Task
// Write a function three_powers() to accept a number, to check can it represent as sum of 3 powers of 2.(n == 2**i + 2**j + 2**k, i, j, k >= 0)
// For example:
// three_powers(2)  # False
// three_powers(3)  # True, 3 = 2**0 + 2**0 + 2**0
// three_powers(5)  # True, 5 = 2**0 + 2**1 + 2**1
// three_powers(15)  # False
// Input
// - `n` must be an integer.
// - `1` <= `n` <= `2 ** 100 - 1`

// ✅ SOLUTION

function threePowers(n) {
  if (n <= 2n) return false
  
  let count = 0;

  while (n > 0) {
    if (n & 1n) count++;
    n >>= 1n;
  }

  return count > 0 && count <= 3;
}

console.log(threePowers(2))