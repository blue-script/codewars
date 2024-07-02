// ❓ DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicated items in the list.
// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// ✅ SOLUTION
function sumNoDuplicates(numList) {
  const map = new Map()
  let sum = 0
  numList.forEach(el => {
    if (!map.has(el)) {
      map.set(el, 1)
    } else {
      map.set(el, map.get(el) + 1)
    }
  })

  for (let [key, value] of map) {
    if (value === 1) {
      sum += key
    }
  }

  return sum;
}

console.log(sumNoDuplicates([1, 1, 2, 3]))
