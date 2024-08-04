function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText

  for (let i = 1; i <= n; i++) {
    let left = encryptedText.slice(0, Math.floor(encryptedText.length / 2))
    let right = encryptedText.slice(0, Math.ceil(encryptedText.length / 2))
    let i = 0
    encryptedText = ''
    while (i < right.length) {
      encryptedText += right[i]
      if (i < left.length) {
        encryptedText += left[i]
      }
    }
  }
  return encryptedText
}