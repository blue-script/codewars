// ❓ Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//   Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// ✅ SOLUTION
function solution(str){
  str+='_'
  let arr = []
  for (let i = 0; i < str.length-1; i+=2) {
    arr.push(str.slice(i, i+2))
  }
  return arr
}

console.log(solution('a')) //  ['ab', 'c_']
console.log(solution('abcdef')) //  ['ab', 'cd', 'ef']