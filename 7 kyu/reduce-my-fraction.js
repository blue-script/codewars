// ❓ DESCRIPTION:
// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

// Note: This is an introductory Kata for a series... coming soon!

// ✅ SOLUTION

function reduce(fraction) {
    for (let i = fraction[0] > fraction[1] ? fraction[1] : fraction[0]; i > 0; i-- ) {
      let a = fraction[0] % i === 0
      let b = fraction[1] % i === 0
      if (a && b) {
        return [fraction[0] / i, fraction[1] / i]
      }
    }
  }

console.log(reduce([45, 120]))