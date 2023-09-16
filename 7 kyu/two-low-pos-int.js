
// Sum of two lowest positive integers
// ❓ DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ✅ SOLUTION

function sumTwoSmallestNumbers(numbers) {
    let min1, min2;
    min1 = Math.min(...numbers)
    numbers.splice(numbers.indexOf(min1), 1)
    min2 = Math.min(...numbers)
    return min1 + min2
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))