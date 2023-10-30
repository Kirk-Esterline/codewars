/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// My Solution

// initialize alphabet string
// text.toLowerCase split into chars
// initialize numbers array and map the array to find numbers
// map to indexOf(char) + 1 toString
// filter numbers to be only numbers > 0
// return numbers

function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
      let numbers = text.toLowerCase().split('').map(char => {
        if (!alphabet.includes(char)) {
          return (0).toString()
        } else {
          return (alphabet.indexOf(char) + 1).toString()
        }
      })
    
    return numbers.filter(item => item > 0).join(' ');
  }

// Things I learned
// To be careful about the value type.  Had issues because values were being returned as numbers not as strings which they should have been
// Check casing first.  Answers were throughing me for a loop until I realized they didn't make sense because the were 'false'