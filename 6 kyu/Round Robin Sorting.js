// Santa believes in fairness and wants to give each giftee a present in turn rather than handing all of an individual's presents to them, then all to the next person, and so on.
// Santa would much rather give one to Sarah, one to Mo, one to Kai, one to Charlie, and cycle through until he's out of presents. But if Sarah is only given 10 presents and after the 10th cycle Santa has no more for her, Santa will continue the loop of gift-giving but excluding Sarah.
// Write a function which accepts a string[] and returns a string[], re-ordering the random input passed into Santa's defined order.
// The output array length will be the same as the input length. The sorted list should be alphabetical by name.
// Examples:
// input:        "Sarah", "Charlie", "Mo"          
// santa sorted: "Charlie", "Mo", "Sarah"
// input:        "Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"
// santa sorted: "Charlie", "Mo", "Sarah", "Charlie", "Mo", "Sarah", "Charlie"

// ✅ SOLUTION
function santaSort(unsortedNames) {
  const unique = new Set(unsortedNames)
  const sortedUnique = new Set([...unique].sort())
  const obj = {}
  const res = []

  unsortedNames.forEach(el => {
    if (!obj[el]) obj[el] = 0
    if (obj[el] < 10) obj[el]++
  })

  while (Object.keys(obj).length > 0) {
    sortedUnique.forEach(el => {
      if (obj[el] > 0) {
        res.push(el)
        obj[el]--
      }
      if (obj[el] === 0) delete obj[el]
    })
  }

  return res;
}

console.log(santaSort(['Mo', 'Mo', 'Mo', 'Mo', 'Mo', 'Mo', 'Kai', 'Kai', 'Kai', 'Lalo', 'Lalo', 'Lalo', 'Lalo', 'Ben', 'Ben', 'Ben', 'Ben', 'Ben', 'Ben', 'Julie', 'Julie']));