// Description:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// ✅ SOLUTION
function nextBigger(n) {
  const nArr = n.toString().split('');

  let i = nArr.length - 2
  while (i >= 0 && nArr[i] >= nArr[i + 1]) {
    i--
  }

  if (i < 0) return -1

  let j = nArr.length - 1
  while (nArr[i] >= nArr[j]) {
    j--
  }

  [nArr[i], nArr[j]] = [nArr[j], nArr[i]]

  const left = nArr.slice(0, i + 1)
  const right = nArr.slice(i + 1).sort((a, b) => a - b)

  return +left.concat(right).join('')
}

console.log(nextBigger(70529888087631))