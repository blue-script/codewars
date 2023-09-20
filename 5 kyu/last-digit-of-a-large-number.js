// ❓ DESCRIPTION:
// Define a function that takes in two non-negative integers 9^7 =4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6.Also, please take 0^0 ot be 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9    
// lastDigit("10","10000000000")  // returns 0
// Remarks
// JavaScript, C++, R, PureScript, COBOL
// Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

// ✅ SOLUTION

var lastDigit = function (str1, str2) {
    // 0 always 0
    // 1 always 1
    // 2 --- 2, 4, 8, 6
    // 3 --- 3, 9, 7, 1
    // 4 --- 4, 6
    // 5 --- 5
    // 6 --- 6 
    // 7 --- 7, 9, 3, 1
    // 8 --- 8, 4, 2, 6
    // 9 --- 9, 1
    if (parseInt(str2) === 0) return 1
    let base = +str1.slice(-1)
    if (base === 0) return 0
    let exp = +str2.slice(-2) % 4
    if (exp === 0) exp = 4
    return Math.pow(base, exp) % 10
}

console.log(lastDigit("4", "2"))