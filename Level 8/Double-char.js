/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/


// My Solution

// initialze new array
// split str
// repeat each char and push into array
// return joined array

function doubleChar(str) {
    let newArray = []
    str.split('').forEach(char => {
      newArray.push(char.repeat(2))
    }) 
    return newArray.join('')
  }
  