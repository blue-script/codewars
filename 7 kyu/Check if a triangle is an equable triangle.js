// A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!

// ✅ SOLUTION
function equableTriangle(a, b, c) {
  const p = (a + b + c) * 0.5
  const s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
  return p * 2 === s
}

console.log(equableTriangle(5, 12, 13)) 