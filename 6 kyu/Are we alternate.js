// Create a function isAlt() that accepts a string as an argument and validates whether the vowels(a, e, i, o, u) and consonants are in alternate order.
//   isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

// ✅ SOLUTION

function isAlt(word) {
  const gl = ['a', 'e', 'i', 'o', 'u', 'y']

  if (!gl.includes(word[0])) {
    word = word.substring(1)
  }

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0 && !gl.includes(word[i])) {
      return false
    }

    if (i % 2 !== 0 && gl.includes(word[i])) {
      return false
    }
  }

  return true
}