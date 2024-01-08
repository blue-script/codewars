// ❓ DESCRIPTION:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// ✅ first SOLUTION
// function zero(f) {return !f? '0' : calStr('0'+f)}
// function one(f) {return !f? '1' : calStr('1'+f)}
// function two(f) {return !f? '2' : calStr('2'+f)}
// function three(f) {return !f? '3' : calStr('3'+f)}
// function four(f) {return !f? '4' : calStr('4'+f)}
// function five(f) {return !f? '5' : calStr('5'+f)}
// function six(f) {return !f? '6' : calStr('6'+f)}
// function seven(f) {return !f? '7' : calStr('7'+f)}
// function eight(f) {return !f? '8' : calStr('8'+f)}
// function nine(f) {return !f?  '9': calStr('9'+f) }

// function plus(n) {return '+' + n }
// function minus(n) {return '-' + n }
// function times(n) {return '*' + n }
// function dividedBy(n) {return '/' + n }

// function calStr(str) {
//   return str.includes('/') 
//   ? str = Math.floor((new Function('return ' + str))())
//   : (new Function('return ' + str))()
// }

// ✅ second SOLUTION

function zero(fn) {return fn? fn(0) : 0}
function one(fn) {return fn? fn(1) : 1}
function two(fn) {return fn? fn(2) : 2}
function three(fn) {return fn? fn(3) : 3}
function four(fn) {return fn? fn(4) : 4}
function five(fn) {return fn? fn(5) : 5}
function six(fn) {return fn? fn(6) : 6}
function seven(fn) {return fn? fn(7) : 7}
function eight(fn) {return fn? fn(8) : 8}
function nine(fn) {return fn? fn(9) : 9}

function plus(n) {return (m) => m+n}
function minus(n) {return (m)=> m-n}
function times(n) {return (m)=> m*n}
function dividedBy(n) {return (m)=> Math.floor(m/n)}

console.log(nine(plus(eight())))
console.log(eight(plus(nine())))
console.log(eight(dividedBy(nine())))