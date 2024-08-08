// Description:
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.Any whitespace at the end of the line should also be stripped out.
//   Example:
// Given an input string of:
// apples, pears # and bananas
// grapes
// bananas!apples
// The output expected would be:
// apples, pears
// grapes
// bananas
// The code would be called like so:
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// ✅ SOLUTION

function solution(text, markers) {
  if (!markers.length) return text.split('\n').map(el => el.trimEnd()).join('\n')

  let textArr = text.split('')
  let newArr = []

  for (let i = 0; i < textArr.length; i++) {
    let index = markers.indexOf(textArr[i])
    if (index > -1) {
      let indexEnd = i + 1

      while (indexEnd < textArr.length && textArr[indexEnd] !== '\n') {
        indexEnd++
      }

      i = indexEnd - 1
    } else {
      newArr.push(textArr[i])
    }
  }


  return newArr.join('').split('\n').map(el => el.trimEnd()).join('\n')
}

// variant 2
function solution(text, markers) {
  return text
    .split('\n')
    .map(el => markers.reduce((acc, cur) => acc.split(cur)[0], el).trimEnd())
    .join('\n')
}


console.log(solution(" LItt-QgcD-dFY \nfHZtzWkiPDXLbfQbdAqZiIoO oDe\nFImzDJBbZ^l", ['']))