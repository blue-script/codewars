// Description:
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// ✅ SOLUTION
String.prototype.camelCase=function(){
  const words = this.split(' ')
  const firstLetterToUpperCase = words.map(word => word.slice(0,1).toUpperCase() + word.slice(1))
  const cameCaseString = firstLetterToUpperCase.join('')
  
  return cameCaseString
}

console.log('hi'.slice(3))