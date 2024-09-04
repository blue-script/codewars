// Description:
// This kata concerns a string composed of 'chunks'.
// A chunk is either:
// A single alphabetic character
// or:
// Two chunks enclosed in square brackets[and]
// A 'chunky string' is a string consisting of exactly one chunk.Here are some examples of chunky strings:
// 'x'
// '[xy]'
// '[x[yy]]'
// '[[xy]y]'
// '[[ab][ab]]'
// '[c[o[d[e[w[a[rs]]]]]]]'
// For this task you will be given a valid chunky string from which all the closing brackets have been removed.You must restore the brackets and return the original valid chunky string.
// For example:
// Input               Restored String
// 'x'                 'x'
// '[xy'               '[xy]'
// '[x[yy'             '[x[yy]]'
// '[[xyy'             '[[xy]y]'
// '[[ab[ab'           '[[ab][ab]]'
// '[c[o[d[e[w[a[rs'   '[c[o[d[e[w[a[rs]]]]]]]'
// In the tests all input strings will be valid chunky strings(with closing brackets removed).

// ✅ SOLUTION

function restoreBrackets(s) {
  let openingSquareBrackets = 0
  let res = ""
  let count = 0

  for (let i = 0; i < s.length; i++) {
    res += s[i]
    count++

    if (s[i] === "[") {
      openingSquareBrackets++
      count = 0
    } else if (count === 2) {
      res += "]"
      openingSquareBrackets--
      count = 0
    }

    if (count === 0 && s[i + 1] === "[" && s[i + 2] === "[" && res[res.length - 1] === "]" && openingSquareBrackets > 0) {
      res += "]"
      openingSquareBrackets--
      count = 0
    }

    if (count === 1 && res[res.length - 2] === "]" && openingSquareBrackets > 0) {
      res += "]"
      openingSquareBrackets--
      count = 0
    }
  }

  if (openingSquareBrackets > 0) {
    res += "]".repeat(openingSquareBrackets)
  }

  return res
}

console.log(restoreBrackets("[[[WG[[cldV"))  // [[[WG][[cl]d]]V]
