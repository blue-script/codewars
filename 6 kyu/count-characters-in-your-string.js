// ❓ DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// ✅ SOLUTION

// function count(str) {
//   const obj = {}
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i]
//     if (!obj.hasOwnProperty(letter))  obj[letter] = 1
//     else obj[letter] += 1
//   }
//   return obj
// }

function count(str) {
  return str.split('').reduce((acc,cur) => {
    acc[cur] = acc.hasOwnProperty(cur) ? acc[cur] + 1 : 1
    return acc
  }, {})
}


console.log(count('')) // {}
console.log(count('aba')) // {'a': 2, 'b': 1}