// Description:
// Implement a pseudo - encryption algorithm which given a string S and an integer N concatenates all the odd - indexed characters of S with all the even - indexed characters of S, this process should be repeated N times.
//   Examples:
// encrypt("012345", 1)  => "135024"
// encrypt("012345", 2)  => "135024" -> "304152"
// encrypt("012345", 3)  => "135024" -> "304152" -> "012345"
// encrypt("01234", 1)  => "13024"
// encrypt("01234", 2)  => "13024" -> "32104"
// encrypt("01234", 3)  => "13024" -> "32104" -> "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// ✅ SOLUTION
function encrypt(text, n) {
  if (!text || n <= 0) return text

  for (let i = 1; i <= n; i++) {
    let left = ''
    let right = ''
    for (let j = 0; j < text.length; j++) {
      if (j % 2) left += text[j]
      else right += text[j]
    }

    text = left.concat(right)
  }
  return text
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText

  for (let i = 1; i <= n; i++) {
    let left = encryptedText.slice(0, Math.floor(encryptedText.length / 2))
    let right = encryptedText.slice(Math.floor(encryptedText.length / 2))
    let i = 0
    encryptedText = ''
    while (i < right.length) {
      encryptedText += right[i]
      if (i < left.length) {
        encryptedText += left[i]
      }
      i++
    }
  }
  return encryptedText
}

console.log(decrypt("hsi  etTi sats!", 1));
