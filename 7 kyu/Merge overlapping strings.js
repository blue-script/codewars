// DESCRIPTION:
// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.
// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.
// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

// ✅ SOLUTION
function mergeStrings(first, second){
  return (first + ' ' + second).replace(/(.*) \1/, '$1');
}

console.log(mergeStrings("abc", "cde"));