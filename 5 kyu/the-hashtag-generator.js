// ❓ The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// ✅ SOLUTION

function generateHashtag(str) {
	let newStr = str
		.split(' ')
		.filter(s => s !== '')
		.reduce((acc, cur) => {
			return acc + cur[0].toUpperCase().concat(cur.slice(1).toLowerCase())
		}, '#')

	return newStr.length > 140 || newStr.length < 2 ? false : newStr
}

console.log(generateHashtag('    Hello     World   '))
