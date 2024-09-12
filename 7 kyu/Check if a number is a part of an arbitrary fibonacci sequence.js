// You will be given a function, isFibo, which will take three arguments: a, b and f.

// a is the first term of a Fibonacci sequence, b is the second term of this sequence(it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

// Good luck, muh fellow coding warrior.

// ✅ SOLUTION

function isFibo(a, b, f) {
  if (a === f || b === f) return true

  while (a < f) {
    [a, b] = [b, a + b]
  }

  return a === f
}

console.log(isFibo(0, 1, 2))