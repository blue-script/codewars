// Description:
// The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three - quarter hour.At the beginning of each hour(1 - 12), it chimes out the hour.Given the current time and a number n, determine the time when the cuckoo bird has chimed n  times.
// Input Parameters:
// initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
//   n - an integer representing the target number of chimes, with 1 <= n <= 200.
// Return Value: The time when the cuckoo bird has chimed n  times - a string in the same format as initial_time.
// If the cuckoo bird chimes at initial_time, include those chimes in the count.If the nth chime is reached on the hour, report the time at the start of that hour(i.e.assume the cuckoo finishes chiming before the minute is up).
//   Example: "03:38", 19   should return "06:00".
//     Explanation: It chimes once at "03:45", 4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00", and once each at "05:15", "05:30", "05:45".At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".
//       Source: International Collegiate Programming Contest, North Central North American Regional, 2023.

// ✅ SOLUTION
function cuckooClock(inputTime, chimes) {
  let count = 0
  let [hours, minutes] = inputTime.split(":").map(t => +t)

  const getChimes = (h, m) => {
    if (m === 15 || m === 30 || m === 45) {
      return 1
    } else if (m === 0) {
      return h > 12 ? 1 : h
    }
    return 0
  }

  count = getChimes(hours, minutes)

  while (count < chimes) {
    minutes++

    if (minutes === 60) {
      minutes = 0
      hours++
      if (hours > 12) {
        hours = 1
      }
    }

    count += getChimes(hours, minutes)
  }

  return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
}

console.log(cuckooClock("03:38", 19)) // "06:00"
console.log(cuckooClock("07:22", 1)) // "07:30"
console.log(cuckooClock("01:30", 2)) // "01:45"