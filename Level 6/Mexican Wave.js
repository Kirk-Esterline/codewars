/*
Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

*/


// My Solution

//split() string into an array
// iterate though with for loop and capitalize one char at a time
// join and return each iteration

function wave(str){
    let result = []
    for(let i = 0; i < str.length; i++) {
      let strArr = str.split('')
      let char = strArr[i]
      if (char != ' ') {
        strArr.splice(i, 1, char.toUpperCase())
        result.push(strArr.join(''))
        }
    }
    return result
  }