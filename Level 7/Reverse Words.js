/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


*/


// My Solution

// Need two loops
// split(' ') and ('')
// for of and unshift
// join and return

function reverseWords(str) {
    let strArray = str.split(' ')
    let newStringArray = []
    for (let word of strArray) {
      let wordArray = []
      for (let char of word) {
        wordArray.unshift(char)
      }
      newStringArray.push(wordArray.join(''))
    }
      return newStringArray.join(' ')
    }