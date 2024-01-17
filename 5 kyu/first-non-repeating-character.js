// ❓ DESCRIPTION:
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// ✅ SOLUTION

// function firstNonRepeatingLetter(s) {
//   const sl = s.toLowerCase()
//   if (s.length <= 1) return s
//   for (let i = 0; i <s.length; i++) {
//     if (sl.slice(0,i).concat(sl.slice(i+1)).indexOf(sl[i]) === -1) return s[i]
//   }
//   return ''
// }

function firstNonRepeatingLetter(s) {
  for (let n in s) {
    if (s.match(new RegExp(s[n],"gi")).length === 1) return s[n]
  }
  return ''
}

console.log(firstNonRepeatingLetter('tsrrees')); // T
console.log(firstNonRepeatingLetter('moonmen')); // e