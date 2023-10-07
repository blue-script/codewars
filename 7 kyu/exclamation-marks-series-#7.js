// ❓ Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// ✅

function remove(string) {
    if (string.length < 1) return ""
    let arr = string.split(" ")
    let newArr = []
    arr.forEach((str) => {
        if (!str.match(/!/g) || str.match(/!/g).length !== 1) newArr.push(str)
    })
    return newArr.join(" ");
}

console.log(remove("Hi Hi! Hi!"))
