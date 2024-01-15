// ❓ DESCRIPTION:
// Given a certain array of positive and negative numbers, give the longest increasing or decreasing combination of at least 3 elements of the array.

// If our array is a = [a[0], a[1], ....a[n-1]]:

// i) For the increasing case: there is a combination: a[i] < a[j] < a[k]..< a[p], such that 0 ≤ i < j < k < ...< p ≤ n - 1

// For the decreasing case the combination would be: a[i] > a[j] > a[k]..> a[p], such that 0 ≤ i < j < k < ...< p ≤ n - 1

// For that task create a function longest_comb() (Javascript: longestComb() ) that will receive an array, and a command, one of the two kinds of strings: '< <' or '<<' (increasing), '> >' or '>>' (decreasing).

// Let's see some examples:

// longest_comb([-1, 3, -34, 18, -55, 60, 118, -64], '< <') == [-1, 3, 18, 60, 118]

// longest_comb([-1, 3, -34, 18, -55, 60, 118, -64], '> >') == [[-1, -34, -55, -64], [3, -34, -55, -64]] # outputs a 2D array of two combinations # of same length in the order that they appear in the given array from # left to right
// We may have some cases without any possible combination:

// longest_comb([-26, 26, -36, 17, 12, 12, -10, -21], "< <") == []
// On the other hand we may have cases with many solutions:

// longest_comb([-22, 40, -45, -43, -1, 7, 43, -56], "> >") == [[-22, -45, -56], [-22, -43, -56], [40, -45, -56], [40, -43, -56], [40, -1, -56], [40, 7, -56]]

// ✅ SOLUTION

// function longestComb(arr, command) {
// 	command = command.replace(' ', '')
// 	let newArr = []
// 	switch (command) {
// 		case '<<':
// 			for (let i = 0; i < arr.length; i++) {
// 				newArr[i] = [arr[i]]
// 				for (let j = 0; j < newArr.length; j++) {
// 					newArr[j][newArr[j].length - 1] < arr[i] && newArr[j].push(arr[i])
// 				}
// 				newArr[newArr.length - 1] < arr[i] && newArr.push(arr[i])
// 			}
// 			break
// 		case '>>':
// 			for (let i = 0; i < arr.length; i++) {
// 				newArr[i] = [arr[i]]
// 				for (let j = 0; j < newArr.length; j++) {
// 					newArr[j][newArr[j].length - 1] > arr[i] && newArr[j].push(arr[i])
// 				}
// 				newArr[newArr.length - 1] > arr[i] && newArr.push(arr[i])
// 			}
// 			break
// 	}

// 	let maxLength = newArr.reduce(
// 		(max, cur) => (max < cur.length ? cur.length : max),
// 		0
// 	)
// 	newArr = newArr.filter(a => a.length >= 3 && a.length === maxLength)
// 	return newArr.length === 1 ? newArr[0] : newArr
// }

// console.log(longestComb([-1, 3, -34, 18, -55, 60, 118, -64], '< <'))
// //[-1, 3, 18, 60, 118]
// console.log(longestComb([-1, 3, -34, 18, -55, 60, 118, -64], '> >'))
// //[[-1, -34, -55, -64], [3, -34, -55, -64]]
// console.log(longestComb( [-26, 26, -36, 17, 12, 12, -10, -21], '< <'))
// // []
// console.log(longestComb([-22, 40, -45, -43, -1, 7, 43, -56], '> >'))
// [[-22, -45, -56], [-22, -43, -56], [40, -45, -56], [40, -43, -56], [40, -1, -56], [40, 7, -56]])

function longest_comb(arr, command) {
  const n = arr.length;
  const sequences = [];
  let currentSeq = [];

  for (let i = 0; i < n; i++) {
    if (command === "< <" && (i === 0 || arr[i] <= arr[i - 1])) {
      if (currentSeq.length >= 3) {
        sequences.push(currentSeq);
      }
      currentSeq = [];
    } else if (command === "> >" && (i === 0 || arr[i] >= arr[i - 1])) {
      if (currentSeq.length >= 3) {
        sequences.push(currentSeq);
      }
      currentSeq = [];
    }

    currentSeq.push(arr[i]);
  }

  if (currentSeq.length >= 3) {
    sequences.push(currentSeq);
  }

  return sequences;
}

console.log(longest_comb([-1, 3, -34, 18, -55, 60, 118, -64], '< <'))

    // arr = [-1, 3, -34, 18, -55, 60, 118, -64];
    // comm = '< <';
    // return = [-1, 3, 18, 60, 118]
    
    // arr = [-1, 3, -34, 18, -55, 60, 118, -64];
    // comm = '> >';
    // return = [[-1, -34, -55, -64], [3, -34, -55, -64]]);
    
    // arr = [-26, 26, -36, 17, 12, 12, -10, -21];
    // comm = '< <';
    // return = []
    
    // arr = [-22, 40, -45, -43, -1, 7, 43, -56];
    // comm = '> >';
    // return = [[-22, -45, -56], 
    // [-22, -43, -56], [40, -45, -56], [40, -43, -56], [40, -1, -56],
    // [40, 7, -56]]
