function sumDigPow(a, b) {
  let arr = []
  for (let i = a; i <= b; i++) {
    let numbers = i.toString().split('')
    let sum = 0
    for (let j = 0; j < numbers.length;) {
      sum += Math.pow(+numbers[j], ++j)
    }

    if (i === sum) {
      arr.push(i)
    }
  }

  return arr
}

console.log(sumDigPow(89, 89))