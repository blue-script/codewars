// ❓ DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// ✅ SOLUTION

function humanReadable(seconds) {
    let sec = seconds % 60 
    let min = Math.floor(seconds /60 % 60)
    let hours = Math.floor(seconds / 3600)

    return `${hours < 10 ? '0' + hours : hours}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}

console.log(humanReadable(359999))