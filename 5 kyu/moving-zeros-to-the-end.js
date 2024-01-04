// ❓ DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// ✅ SOLUTION

function moveZeros(arr) {
  let newArr = []
  for (let i = arr.length-1; i >= 0; i--) {
    arr[i] === 0 
    ? newArr.push(0)
    : newArr.unshift(arr[i])
  }
  return newArr
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))