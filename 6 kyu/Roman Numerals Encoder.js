// DESCRIPTION:
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.
// In Roman numerals:
// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:
//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"
// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// ✅ SOLUTION
const map = new Map([
  [1, 'I'],
  [5, 'V'],
  [10, 'X'],
  [50, 'L'],
  [100, 'C'],
  [500, 'D'],
  [1000, 'M']
])

function solution(number) {
  let str = ''
  for (let i = 1; number > 0; number = Math.floor(number / 10), i *= 10) {
    const num = number % 10
    if (num < 4) {
      for (let j = 1; j <= num; j++) {
        str = map.get(1 * i) + str
      }
    } else if (num === 4) {
      str = map.get(5 * i) + str
      str = map.get(1 * i) + str
    } else if (num === 5) {
      str = map.get(num * i) + str
    } else if (num > 5 && num < 9) {
      for (let j = 6; j <= num; j++) {
        str = map.get(1 * i) + str
      }
      str = map.get(5 * i) + str
    } else if (num === 9) {
      str = map.get(10 * i) + str
      str = map.get(1 * i) + str
    }
  }

  return str
}


// function solution(number) {
//   var roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//   var str = '';
//   for (var i of Object.keys(roman)) {
//     var q = Math.floor(number / roman[i]);
//     number -= q * roman[i];
//     str += i.repeat(q);
//   }
//   return str;
// }

// console.log(solution(800))