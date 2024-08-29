// In this kata, your task is to create all permutations of a non - empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// ✅ SOLUTION
function permutations(string) {
  if (string.length === 0) return []
  if (string.length === 1) return [string]

  const res = []

  const curArray = permutations(string.slice(0, string.length - 1))
  const curLetter = string[string.length - 1]

  for (let act of curArray) {
    for (let i = 0; i <= act.length; i++) {
      const temp = act.slice(0, i) + curLetter + act.slice(i)
      res.push(temp)
    }
  }

  return Array.from(new Set(res))
}


console.log(permutations('abc'))