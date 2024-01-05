// ❓ Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ✅ SOLUTION

function pigIt(str) {
	return str
		.split(' ')
		.reduce((acc, cur) => {
			let transformCur =
				cur.length > 1
					? cur.slice(1) + cur[0] + 'ay'
					: /[.,:;?!-]/.test(cur)
            ? cur + ' '
            : cur[0] + 'ay'
			return acc + ' ' + transformCur
		}, '')
		.trim()
}

// only regexp
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

console.log(pigIt('Hello world !'))
