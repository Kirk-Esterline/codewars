/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/


//My Solution

// Initialize two variables to count x's and o's
// String to uppercase and slit 
// for loop to check for x's and o's and count
// compare counted values
// return true or false

function XO(str) {
    let xCount = 0
    let oCount = 0
    let stringArray = str.toUpperCase()
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === 'X') {
        xCount++
      } else if (stringArray[i] ==='O') {
        oCount++
      }
    }
    return xCount === oCount ? true : false;
}