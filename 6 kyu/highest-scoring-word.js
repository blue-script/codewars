// ❓ Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// ✅ SOLUTION
function high(x) {
  const words = x.split(" ")
  const scoreAndWord = [0, ""]
  words.forEach((word) => {
    const score = word
      .split("")
      .reduce((acc, letter) => acc + letter.charCodeAt(0) - 96, 0)
    if (scoreAndWord[0] < score) {
      scoreAndWord[0] = score
      scoreAndWord[1] = word
    }
  })
  return scoreAndWord[1]
}

console.log(high("man i need a taxi up to ubud")) // taxi