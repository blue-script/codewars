// ❓ This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// ✅ SOLUTION

function simpleMultiplication(number) {
    return number * (number % 2 ? 9 : 8)
}