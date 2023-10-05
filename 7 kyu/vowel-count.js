// ❓ DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// ✅ SOLUTION

function getCount(str) {
    let strArr = str.match(/a|e|i|o|u/g)
    return strArr === null ? 0 : strArr.length
  }

  console.log(getCount("mya pyx"))