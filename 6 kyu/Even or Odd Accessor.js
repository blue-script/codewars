// ❓ DESCRIPTION:
// Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

// For example:
// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'

// ✅ SOLUTION
function fn(n) {
  return n % 2 ? 'Odd' : 'Even'
}

const evenOrOdd = new Proxy(fn, {
  get(target, prop) {
    return target(Number(prop))
  }
})


// console.log(evenOrOdd[4])
console.log(evenOrOdd[4])