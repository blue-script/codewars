// ❓ DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// REGULAR EXPRESSIONSALGORITHMSSTRINGS

// ✅ SOLUTION
function toCamelCase(str) {
    let arr = str.replaceAll('_', '-')
    arr = arr.split('-')
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i])
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr.join('')
}

console.log(toCamelCase("the-stealth-warrior"))
