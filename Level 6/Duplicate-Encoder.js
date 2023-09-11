/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/


// My Solution

// initilize new string 
// split word into array
// reduce into an object checking char count
// for each in word, compare char count and add to string as neccesary
// return string

function duplicateEncode(word){
    let string = ''
    let array = word.toLowerCase().split('')
    let counts = array.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0
      }
      obj[item]++
      return obj
    }, {})
    array.forEach(char => {
      counts[char] > 1 ? string += ')' : string += '('
    })
  return string
}
