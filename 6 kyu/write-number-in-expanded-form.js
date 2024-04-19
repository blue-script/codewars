// ❓ DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// ✅ SOLUTION
function expandedForm(num) {
  let digits = num.toString().split('')
  const expandedFormNumber = digits.reduce((acc, cur, index) => {
    if (cur === '0') return acc
    const stringDigit = cur + "0".repeat(digits.length - ++index)
    acc.push(stringDigit)
    return acc
  }, []).join(" + ")

  return expandedFormNumber
}

console.log(expandedForm(70304)) // '70000 + 300 + 4'