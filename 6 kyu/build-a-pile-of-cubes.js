// ✅ SOLUTION

function findNb(m) {
    let n = 0
    while (m > 0) {
      n++
      const cubes = Math.pow(n, 3) 
      m -= cubes
    }
    return Math.sign(m) === -1 ? -1 : n
}