// ❓ DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// ❓ SOLUTION
function towerBuilder(nFloors) {
  let tree = [];

  for (let i = 0; i < nFloors; i++) {
    const countSpace = nFloors - i - 1;
    const countStar = i * 2 + 1;
    let str =
      " ".repeat(countSpace) + "*".repeat(countStar) + " ".repeat(countSpace);
    tree.push(str);
  }

  return tree;
}

console.log(towerBuilder(3));
