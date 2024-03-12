// ❓DESCRIPTION:
//     Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// ✅ SOLUTION

function sortArray(array) {
    let oddArray = array.filter(num => num % 2).sort((a, b) => a - b)
    return array.map(num => num % 2 ? oddArray.shift() : num)
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]))  // [ 1, 3, 2, 8, 5, 4, 11 ]