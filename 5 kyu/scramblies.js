// ❓ Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//   Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//   Performance needs to be considered.
//   Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// ✅ SOLUTION

function scramble(str1, str2) {
  const obj1 = str1.split('')
    .reduce((acc, cur) => {
      acc[cur] = acc[cur] ? ++acc[cur] : 1;
      return acc
    }, {})

  return str2.split('').every(letter => --obj1[letter] >= 0 )
}

console.log(scramble('katas', 'steak')) // false
console.log(scramble('scriptjavx', 'aa')) // false
console.log(scramble('rkqodlw', 'world')) // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // true
console.log(scramble('katas', 'steak')) // false