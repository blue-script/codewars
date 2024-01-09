// ❓ DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// ✅ SOLUTION


function isPangram(str){
  const alphabet = Array.from({length:26}, (_, i)=> String.fromCharCode(65+i))
  str = str.toUpperCase()
  return alphabet.every(letter=> str.includes(letter))
}

console.log(isPangram('This is not a pangram.'));
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));