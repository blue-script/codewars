// ❓DESCRIPTION:
//     Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

// ✅ SOLUTION

function incrementString(str) {
    let endNum = parseInt(str[str.length - 1])
    if (isNaN(endNum)) return str.concat('1')
    return endNum > 8 ? incrementString(str.slice(0,-1)).concat('0') : str.slice(0,-1).concat(endNum+1)
}

// console.log(incrementString('foobar000'))
// console.log(incrementString('foobar1000'))
// console.log(incrementString('foo'))
// console.log(incrementString('009'))
// console.log(incrementString('fo99obar99'))
// console.log(incrementString('fo99obar1199'))