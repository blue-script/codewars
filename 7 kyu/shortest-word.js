// ❓ DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// ✅ SOLUTION

function findShort(s) {
	let arr = s.split(' ')
	return arr.reduce(
		(acc, cur) => (acc < cur.length ? acc : cur.length),
		arr[0].length
	)
}
