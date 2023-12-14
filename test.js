function extractCurrencyValue(str) {
  numberStr = ''
  for (let n of str) {
    n.codePointAt(0) >= 48 && n.codePointAt(0) <= 57 ? numberStr += n : ''
  }
  return Number(numberStr)
}
log